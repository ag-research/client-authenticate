import { call, put } from 'redux-saga/effects'
import Axios from "axios";
import { loginUser } from "../login";
import { apiloginurl } from "../../../../../helpers/url";
import { setAuthenticated } from '../../../../actions/auth';
import { setAllTokens } from '../../../../actions/auth/tokens';
import { loadTokens } from '../../utils/helpers';

describe('login saga', () => {
    const action = { callback: () => jest.fn()};
    const gen = loginUser(action);
    const res = { data: { status: "success", response: {jwt: 'access_token', refresh_token: 'refresh_token'}}}

    it('must call axios to get login user', () => {
        expect(gen.next().value).toEqual(call(Axios.get, apiloginurl))
    })
    
    it('must put SET_ALL_TOKENS action', () => {
        expect(gen.next(res).value).toEqual( put(setAllTokens(loadTokens(res.data.response))) )
    })
    
    it('must put SET_AUTHENTICATED action', () => {
        expect(gen.next().value).toEqual(put(setAuthenticated(true)))
    })

    it('must call callback payload', () => {
        expect(gen.next().value).toEqual(call(action.callback))
    })
})