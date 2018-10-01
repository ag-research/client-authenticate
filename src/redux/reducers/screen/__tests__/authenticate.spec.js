import authenticatescreen, { setAuthenticateScreenDimension } from "../authenticate";
import { resizeAuthScreen } from "../../../actions/screen";

describe('auth screen dimension reducers', () => {
    it('should return correct authscreen dimensions for initial state', () => {
        expect(authenticatescreen(undefined, '')).toEqual(setAuthenticateScreenDimension())
    })

    it('should return correct authscreen dimensions on RESIZE_AUTH_SCREEN', () => {
        const state = setAuthenticateScreenDimension()
        expect(authenticatescreen(state, resizeAuthScreen)).toEqual(setAuthenticateScreenDimension())
    })
})