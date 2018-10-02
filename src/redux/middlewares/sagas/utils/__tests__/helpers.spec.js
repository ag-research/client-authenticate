import { loadTokens } from "../helpers";

describe('my saga helper', () => {
    it('should load tokens from a response', () => {
        const res = {jwt: 'access_token', refresh_token: 'refresh_token'}
        expect(loadTokens(res)).toEqual({
            accessToken: res.jwt, 
            refreshToken: res.refresh_token
        })
    })
})