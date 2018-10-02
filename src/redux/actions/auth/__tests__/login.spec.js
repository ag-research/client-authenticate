import { loginSetEmail, loginSetPassword, loginSubmit } from "../login";
import { ac } from "../../constants";

describe('login action creator', () => {
    it('should create LOGIN_SET_EMAIL action', () => {
        const email = 'email'
        expect(loginSetEmail(email)).toEqual({ type: ac.LI_S_E, value: email})
    })
    
    it('should create LOGIN_SET_PASSWORD action', () => {
        const password = 'password'
        expect(loginSetPassword(password)).toEqual({ type: ac.LI_S_P, value: password })
    })

    it('should create LOGIN_SUBMIT action', () => {
        const callback = jest.fn();
        expect(loginSubmit(callback)).toEqual({ type: ac.LI_SUB, callback: callback })
    })
})