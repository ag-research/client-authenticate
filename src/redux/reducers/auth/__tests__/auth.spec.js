import auth from "../";
import { logIn, logOut } from "../../../actions/auth";

describe('auth reducer', () => {
    it('should handle initial state', () => {
        expect( auth(undefined, '') )
            .toEqual({
                authenticated: false
            })
    })

    it('should handle LOG_IN action', () => {
        expect( auth({ authenticated: false }, logIn) )
            .toEqual({
                authenticated: true
            })
    })

    it('should handle LOG_OUT action', () => {
        expect( auth({ authenticated: true }, logOut) )
            .toEqual({
                authenticated: false
            })
    })
})
