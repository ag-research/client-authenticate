import login, { loginFormState } from "../login";
import { loginSetEmail, loginSetPassword } from "../../../actions/auth/login";

describe('login reducer', () => {
    let oldLoginFormState = {};
    let newLoginFormState = {};

    afterEach(() => {
        oldLoginFormState = newLoginFormState;
    })

    it('should handle initial state', () => {
        newLoginFormState = login(undefined, '')
        expect(newLoginFormState).toEqual(loginFormState)
    })

    it('should handle change in email', () => {
        const email = 'email'
        newLoginFormState = login(oldLoginFormState, loginSetEmail(email));
        expect(newLoginFormState).toEqual({
            ...oldLoginFormState,
            email: email
        })
    })
    
    it('should handle change in password', () => {
        const password = 'password'
        newLoginFormState = login(oldLoginFormState, loginSetPassword(password));
        expect(newLoginFormState).toEqual({
            ...oldLoginFormState,
            password: password
        })
    })
    
})