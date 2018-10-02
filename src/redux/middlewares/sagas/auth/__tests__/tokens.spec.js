import { doRefreshToken } from "../tokens";
import { select, call, put } from "redux-saga/effects";
import { getTokens } from "../../utils/selectors";
import { readRefreshToken, mountAccessToken } from "../../utils/helpers";
import { apirefreshtokenurl } from "../../../../../helpers/url";
import Axios from "axios";
import { setAccessToken } from "../../../../actions/auth/tokens";

describe('tokens saga', () => {
    const gen = doRefreshToken();
    const res = { status: 200, data: {jwt: 'access_token', refresh_token: 'refresh_token'} };

    it('should select tokens from state', () => {
        expect(gen.next().value).toEqual(select(getTokens))
    })
    
    it('must call axios to refresh token', () => {
        const mockTokens = {
            refreshToken: { value: "refresh_token" }
        }
        expect(gen.next(mockTokens).value).toEqual(
            call(Axios.post, apirefreshtokenurl, readRefreshToken(mockTokens))
        )
    })

    it('must put SET_ACCESS_TOKEN action', () => {
        const con = gen.next(res).value;
        const time = con.PUT.action.value.timestamp;
        expect(con).toEqual(
            put(setAccessToken(mountAccessToken(res.data, time)))
        )
    })
})