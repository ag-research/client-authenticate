import { signupSetName, signupSetEmail, signupSetPassword, signupSetConfirmPassword, signupSubmit, signupSetSubmitResponse } from "../signup";
import { ac } from "../../constants";

describe('signup action creator', () => {
    it('should create SIGNUP_SET_NAME action', () => {
        const name = 'name'
        expect(signupSetName(name)).toEqual({type: ac.SU_S_N, value: name})
    })
    
    it('should create SIGNUP_SET_EMAIL action', () => {
        const email = 'email'
        expect(signupSetEmail(email)).toEqual({type: ac.SU_S_E, value: email})
    })
    
    it('should create SIGNUP_SET_PASSWORD action', () => {
        const password = 'password'
        expect(signupSetPassword(password)).toEqual({type: ac.SU_S_P, value: password})
    })
    
    it('should create SIGNUP_SET_CONFIRM_PASSWORD action', () => {
        const cpassword = 'cpassword'
        expect(signupSetConfirmPassword(cpassword)).toEqual({type: ac.SU_S_CP, value: cpassword})
    })
    
    it('should create SIGNUP_SUBMIT action', () => {
        const callback = jest.fn();
        expect(signupSubmit(callback)).toEqual({ type: ac.SU_SUB, callback: callback })
    })
    
    it('should create SIGNUP_SET_SUBMIT_RESPONSE action', () => {
        const submit = 'response'
        expect(signupSetSubmitResponse(submit)).toEqual({ type: ac.SU_SUB_RES, value: submit })
    })
})