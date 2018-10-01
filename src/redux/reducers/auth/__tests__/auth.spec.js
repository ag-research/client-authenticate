import auth, { initState } from "../";
import { setAuthenticating, setAuthenticated } from "../../../actions/auth";

describe('auth reducer', () => {
    let oldAuthState = {};
    let newAuthState = {}

    afterEach(() => {
        oldAuthState = newAuthState
    })

    it('should handle initial state', () => {
        newAuthState = auth(undefined, '');
        expect( newAuthState ).toEqual(initState)
    })

    it('should handle AUTH_ED action', () => {
        newAuthState = auth(oldAuthState, setAuthenticated(true))
        expect( newAuthState ).toEqual({
            ...oldAuthState,
            authenticated: true
        })
    })
    
    it('should handle AUTH_IN action', () => {
        newAuthState = auth(oldAuthState, setAuthenticating(true))
        expect( newAuthState ).toEqual({
            ...oldAuthState,
            authenticating: true
        })
    })
})
