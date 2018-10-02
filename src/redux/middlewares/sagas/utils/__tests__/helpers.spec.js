import { loadTokens, readSignUpFormData, readLoginFormData } from "../helpers";

describe('my saga helper', () => {
    it('should load tokens from a response', () => {
        const res = {jwt: 'access_token', refresh_token: 'refresh_token'}
        expect(loadTokens(res)).toEqual({
            accessToken: res.jwt, 
            refreshToken: res.refresh_token
        })
    })
    
    it('should load login data', () => {
        const data = {
            email: {value: ""},
            password: {password: ""}
        }
        expect(readLoginFormData(data)).toEqual({
            email: data.email.value,
            password: data.password.value
        })
    })
    
    it('should load sign up data', () => {
        const data = {
            name: {value: ""},
            email: {value: ""},
            password: {password: ""}
        }
        expect(readSignUpFormData(data)).toEqual({
            name: data.name.value,
            email: data.email.value,
            password: data.password.value
        })
    })
})