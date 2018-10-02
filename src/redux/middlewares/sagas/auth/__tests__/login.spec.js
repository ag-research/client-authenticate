import { call, put, select } from 'redux-saga/effects'
import Axios from "axios";
import { loginUser } from "../login";
import { apiloginurl } from "../../../../../helpers/url";
import { setAuthenticated } from '../../../../actions/auth';
import { setAllTokens } from '../../../../actions/auth/tokens';
import { loadTokens, readLoginFormData } from '../../utils/helpers';
import { getLoginFormData } from '../../utils/selectors';
import { ac } from '../../../../actions/constants';
import { submitResponseState } from '../../../../../helpers/opconstants';

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
        expect(gen.next(mockLoginData).value).toEqual(call(Axios.post, apiloginurl, readLoginFormData(mockLoginData)))
    })
    
    it('must put SET_ALL_TOKENS action', () => {
        expect(gen.next(res).value).toEqual( put(setAllTokens(loadTokens(res.data))) )
    })
    
    it('must put LOGIN_SET_SUBMIT_RESPONSE action', () => {
        expect(gen.next().value).toEqual( put({ type: ac.LI_SUB_RES, value: { ...submitResponseState } }) )
    })
    
    it('must put SET_AUTHENTICATED action', () => {
        expect(gen.next().value).toEqual(put(setAuthenticated(true)))
    })

    it('must call callback payload', () => {
        expect(gen.next().value).toEqual(call(action.callback))
    })
})