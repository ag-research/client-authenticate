import { isEmptyObject } from "../../../../helpers/checkers";
import { TOKEN_EXPIRES_IN_MIN, TOKEN_NEVER_EXPIRES } from "../../../../helpers/opconstants";

export const mountTokens = (response, time) => {
    time = (typeof time === 'undefined') ? new Date().getTime() : time;
    return {
        accessToken: { value: response.jwt, expires: TOKEN_EXPIRES_IN_MIN, timestamp: time },
        refreshToken: { value: response.refresh_token, expires: TOKEN_NEVER_EXPIRES, timestamp: time }
    }
}

export const mountAccessToken = (response, time) => {
    time = (typeof time === 'undefined') ? new Date().getTime() : time;
    return { value: response.jwt, expires: TOKEN_EXPIRES_IN_MIN, timestamp: time }
}

export const mountProfile = data => {
    return {
        name: data.name,
        email: data.email,
        profileimg: data.avatar_url
    }
}

export const readLoginFormData = data => {
    if(isEmptyObject(data)) return {};
    return {
        email: data.email.value,
        password: data.password.value
    }
}

export const readSignUpFormData = data => {
    if(isEmptyObject(data)) return {};
    return {
        name: data.name.value,
        email: data.email.value,
        password: data.password.value
    }
}

export const readRefreshToken = tokens =>{
    if(isEmptyObject(tokens)) return {};
    return {
        refresh_token: tokens.refreshToken.value
    }
}