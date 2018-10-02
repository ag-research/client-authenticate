import { tokens, initState } from "../tokens";
import { setAccessToken, setAllTokens, setRefreshToken } from "../../../actions/auth/tokens";
import { TOKEN_EXPIRES_IN_MIN, TOKEN_NEVER_EXPIRES } from "../../../../helpers/opconstants";

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
        const accessToken = {value: 'access_token', expires: TOKEN_EXPIRES_IN_MIN}
        newTokens = tokens(oldTokens, setAccessToken(accessToken))
        expect(newTokens).toEqual({
            ...oldTokens,
            accessToken: accessToken
        })
    })
    
    it('should handle SET_REFRESH_TOKEN action', () => {
        const refreshToken = {value: 'refresh_roken', expires: TOKEN_NEVER_EXPIRES}
        newTokens = tokens(oldTokens, setRefreshToken(refreshToken))
        expect(newTokens).toEqual({
            ...oldTokens,
            refreshToken: refreshToken
        })
    })

    it('should handle SET_ALL_TOKENS action', () => {
        const toks = {
            accessToken: {value: 'access_token', expires: TOKEN_EXPIRES_IN_MIN}, 
            refreshToken: {value: 'refresh_roken', expires: TOKEN_NEVER_EXPIRES}
        }
        newTokens = tokens(oldTokens, setAllTokens(toks));
        expect(newTokens).toEqual({
            accessToken: toks.accessToken,
            refreshToken: toks.refreshToken
        })
    })
})