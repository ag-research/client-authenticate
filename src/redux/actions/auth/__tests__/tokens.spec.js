import { setAccessToken, setRefreshToken, setAllTokens } from "../tokens";
import { ac } from "../../constants";

describe('tokens action creator', () => {
    it('should create SET_ALL_TOKENS action', () => {
        const tokens = {accessToken: 'access_token', refreshToken: 'refresh_token'};
        expect(setAllTokens(tokens)).toEqual({type: ac.S_ALL_TOK, value: tokens})
    })

    it('should create SET_ACCESS_TOKEN action', () => {
        const accessToken = 'access_token';
        expect(setAccessToken(accessToken)).toEqual({type: ac.S_A_TOK, value: accessToken})
    })
    
    it('should create SET_REFRESH_TOKEN action', () => {
        const refreshToken = 'refresh_token';
        expect(setRefreshToken(refreshToken)).toEqual({type: ac.S_R_TOK, value: refreshToken})
    })
})