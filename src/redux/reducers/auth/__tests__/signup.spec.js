import signup, { signupFormState } from "../signup";
import { signupSetName, signupSetEmail, signupSetPassword, signupSetConfirmPassword, signupSetSubmitResponse, signupFormReset } from "../../../actions/auth/signup";

describe('signup reducer', () => {
    let oldSignUpFormState = {};
    let newSignupFormState = {};

    afterEach(() => {
        oldSignUpFormState = newSignupFormState;
    })

    it('should handle initial state', () => {
        newSignupFormState = signup(undefined, '')
        expect(newSignupFormState).toEqual(signupFormState)
    })

    it('should handle change in name', () => {
        const name = 'name'
        newSignupFormState = signup(oldSignUpFormState, signupSetName(name));
        expect(newSignupFormState).toEqual({
            ...oldSignUpFormState,
            name: name
        })
    })
    
    it('should handle change in email', () => {
        const email = 'email'
        newSignupFormState = signup(oldSignUpFormState, signupSetEmail(email));
        expect(newSignupFormState).toEqual({
            ...oldSignUpFormState,
            email: email
        })
    })
    
    it('should handle change in password', () => {
        const password = 'password'
        newSignupFormState = signup(oldSignUpFormState, signupSetPassword(password));
        expect(newSignupFormState).toEqual({
            ...oldSignUpFormState,
            password: password
        })
    })
    
    it('should handle change in cpassword', () => {
        const cpassword = 'cpassword'
        newSignupFormState = signup(oldSignUpFormState, signupSetConfirmPassword(cpassword));
        expect(newSignupFormState).toEqual({
            ...oldSignUpFormState,
            cpassword: cpassword
        })
    })
    
    it('should handle submit action response', () => {
        const submitRes = 'response'
        newSignupFormState = signup(oldSignUpFormState, signupSetSubmitResponse(submitRes));
        expect(newSignupFormState).toEqual({
            ...oldSignUpFormState,
            submit: submitRes
        })
    })

    it('should handle sign up form reset action', () => {
        newSignupFormState = signup(oldSignUpFormState, signupFormReset);
        expect(newSignupFormState).toEqual(signupFormState)
    })    
})