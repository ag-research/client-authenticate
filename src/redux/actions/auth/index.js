import { ac } from "../constants";

export const setAuthenticated = value => ({type: ac.AUTH_ED, value: value})
export const setAuthenticating = value => ({type: ac.AUTH_IN, value: value})