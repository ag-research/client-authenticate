import { isEmptyObject } from "../../../../helpers/checkers";

export const loadTokens = response => {
    return {accessToken: response.jwt, refreshToken: response.refresh_token}
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
