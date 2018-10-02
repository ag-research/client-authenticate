import { mountTokens, readSignUpFormData, readLoginFormData, readRefreshToken, mountAccessToken, mountProfile } from "../helpers";
import { TOKEN_EXPIRES_IN_MIN, TOKEN_NEVER_EXPIRES } from "../../../../../helpers/opconstants";

describe('my saga helper', () => {
    it('should mount tokens from a response', () => {
        const res = {jwt: 'access_token', refresh_token: 'refresh_token'}
        const time = new Date().getTime();        
        expect(mountTokens(res, time)).toEqual({
            accessToken: { value: res.jwt, expires: TOKEN_EXPIRES_IN_MIN, timestamp: time },
            refreshToken: { value: res.refresh_token, expires: TOKEN_NEVER_EXPIRES, timestamp: time }
        })
    })
    
    it('should mount access_token from a response', () => {
        const res = {jwt: 'access_token', refresh_token: 'refresh_token'}
        const time = new Date().getTime();        
        expect(mountAccessToken(res, time)).toEqual({ 
            value: res.jwt, expires: TOKEN_EXPIRES_IN_MIN, timestamp: time
        })
    })
    
    it('should mount profile from a response', () => {
        const data = {name: 'name', email: 'email', avatar_url: 'profile_img'}
        expect(mountProfile(data)).toEqual({ 
            name: data.name, email: data.email, profileimg: data.avatar_url
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
    
    it('should read refreshToken from tokens state', () => {
        const tokens = {
            accessToken: "",
            refreshToken: { value: "refresh_token" },
        }
        expect(readRefreshToken(tokens)).toEqual({
            refresh_token: tokens.refreshToken.value
        })
    })
})