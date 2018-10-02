import { call, put, select } from 'redux-saga/effects'
import Axios from "axios";
import { loginUser } from "../login";
import { apiloginurl } from "../../../../../helpers/url";
import { setAuthenticated } from '../../../../actions/auth';
import { setAllTokens } from '../../../../actions/auth/tokens';
import { mountTokens, readLoginFormData } from '../../utils/helpers';
import { getLoginFormData } from '../../utils/selectors';
import { submitResponseState } from '../../../../../helpers/opconstants';
import { loginSetSubmitResponse } from '../../../../actions/auth/login';

describe('login saga', () => {
    const action = { callback: () => jest.fn()};
    const gen = loginUser(action);
    const res = { status: 200, data: { jwt: 'access_token', refresh_token: 'refresh_token'} };

    it('must select login form data from state', () => {
        expect(gen.next().value).toEqual(select(getLoginFormData))
    })

    it('must call axios to get login user', () => {
        const mockLoginData = {
            name: { value: "" }, email: { value: "" }, password: { value: "" }
        }
        expect(gen.next(mockLoginData).value).toEqual(
            call(Axios.post, apiloginurl, readLoginFormData(mockLoginData))
        )
    })
    
    it('must put SET_ALL_TOKENS action', () => {
        const con = gen.next(res).value;
        const time = con.PUT.action.value.accessToken.timestamp;
        expect(con).toEqual( put(setAllTokens(mountTokens(res.data, time))) )
    })
    
    it('must put LOGIN_SET_SUBMIT_RESPONSE action', () => {
        expect(gen.next().value).toEqual( put(loginSetSubmitResponse({ ...submitResponseState })) )
    })
    
    it('must put SET_AUTHENTICATED action', () => {
        expect(gen.next().value).toEqual(put(setAuthenticated(true)))
    })

    it('must call callback payload', () => {
        expect(gen.next().value).toEqual(call(action.callback))
    })
})