import { loginSetEmail, loginSetPassword, loginSubmit, loginSetSubmitResponse, loginFormReset } from "../login";
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
    
    it('should create LOGIN_SET_SUBMIT_RESPONSE action', () => {
        const submit = 'response'
        expect(loginSetSubmitResponse(submit)).toEqual({ type: ac.LI_SUB_RES, value: submit })
    })
    
    it('should create LOGIN_FORM_RESET action', () => {
        expect(loginFormReset).toEqual({ type: ac.LI_F_RES })
    })
})