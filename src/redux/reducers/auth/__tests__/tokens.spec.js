import { tokens, initState } from "../tokens";
import { setAccessToken, setAllTokens, setRefreshToken } from "../../../actions/auth/tokens";

describe('tokens reducer', () => {
    let oldTokens = {};
    let newTokens = {};

    afterEach(() => {
        oldTokens = newTokens
    })
    
    it('should handle initial state', () => {
        newTokens = tokens(undefined, '')
        expect(newTokens).toEqual(initState)
    })

    it('should handle SET_ACCESS_TOKEN action', () => {
        const accessToken = 'access_token'
        newTokens = tokens(oldTokens, setAccessToken(accessToken))
        expect(newTokens).toEqual({
            ...oldTokens,
            accessToken: accessToken
        })
    })
    
    it('should handle SET_REFRESH_TOKEN action', () => {
        const refreshToken = 'refresh_roken'
        newTokens = tokens(oldTokens, setRefreshToken(refreshToken))
        expect(newTokens).toEqual({
            ...oldTokens,
            refreshToken: refreshToken
        })
    })

    it('should handle SET_ALL_TOKENS action', () => {
        const toks = {accessToken: 'access_token', refreshToken: 'refresh_token'};
        newTokens = tokens(oldTokens, setAllTokens(toks));
        expect(newTokens).toEqual({
            accessToken: toks.accessToken,
            refreshToken: toks.refreshToken
        })
    })
})