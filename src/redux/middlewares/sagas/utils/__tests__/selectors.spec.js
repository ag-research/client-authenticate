import { tokens } from "../../../../reducers/auth/tokens";
import { getTokens, getSignUpFormData, getLoginFormData } from "../selectors";
import signup from "../../../../reducers/auth/signup";

describe('state selectors', () => {
    it('should return tokens state', () => {
        const state = { tokens: tokens(undefined, '') }
        expect(getTokens(state)).toEqual(state.tokens)
    })
    
    it('should return signup form data state', () => {
        const state = { signupFormData: signup(undefined, '') }
        expect(getSignUpFormData(state)).toEqual(state.signupFormData)
    })
    
    it('should return login form data state', () => {
        const state = { loginFormData: signup(undefined, '') }
        expect(getLoginFormData(state)).toEqual(state.loginFormData)
    })
})