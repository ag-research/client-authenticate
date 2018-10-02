import { call, put, select } from 'redux-saga/effects'
import Axios from "axios";
import { apisignupurl } from "../../../../../helpers/url";
import { signupUser } from "../signup";
import { setAuthenticated } from '../../../../actions/auth';
import { setAllTokens } from '../../../../actions/auth/tokens';
import { mountTokens, readSignUpFormData } from '../../utils/helpers';
import { getSignUpFormData } from '../../utils/selectors';
import { submitResponseState } from '../../../../../helpers/opconstants';
import { signupSetSubmitResponse } from '../../../../actions/auth/signup';

describe('signup saga', () => {
    const action = { callback: () => jest.fn()};
    const gen = signupUser(action);
    const res = { status: 200, data: {jwt: 'access_token', refresh_token: 'refresh_token'} };

    it('must select sign up form data from state', () => {
        expect(gen.next().value).toEqual(select(getSignUpFormData))
    })

    it('must call axios to get sign up user', () => {
        const mockSignUpData = {
            name: { value: "" }, email: { value: "" }, password: { value: "" }
        }
        expect(gen.next(mockSignUpData).value).toEqual(
            call(Axios.post, apisignupurl, readSignUpFormData(mockSignUpData))
        )
    })
    
    it('must put SET_ALL_TOKENS action', () => {
        const con = gen.next(res).value;
        const time = con.PUT.action.value.accessToken.timestamp;
        expect(con).toEqual( put(setAllTokens(mountTokens(res.data, time))) )
    })
    
    it('must put SIGNUP_SET_SUBMIT_RESPONSE action', () => {
        expect(gen.next().value).toEqual( put(signupSetSubmitResponse({ ...submitResponseState })) )
    })

    it('must put SET_AUTHENTICATED action', () => {
        expect(gen.next().value).toEqual(put(setAuthenticated(true)))
    })

    it('must call callback payload', () => {
        expect(gen.next().value).toEqual(call(action.callback))
    })
})