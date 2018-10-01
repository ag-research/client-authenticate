import { ac } from "../../constants";
import { setAuthenticating, setAuthenticated } from "../";

describe('auth action creator', () => {
    it('should create SET_AUTHENTICATED action', () => {
        const authed = false;
        expect(setAuthenticated(authed)).toEqual({
            type: ac.AUTH_ED,
            value: authed
        })
    })
    
    it('should create SET_AUTHENTICATING action', () => {
        const authin = false;
        expect(setAuthenticating(authin)).toEqual({
            type: ac.AUTH_IN,
            value: authin
        })
    })
})