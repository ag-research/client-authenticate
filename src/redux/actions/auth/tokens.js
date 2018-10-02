import { ac } from "../constants";

export const setAllTokens = tokens => ({type: ac.S_ALL_TOK, value: tokens})
export const setAccessToken = accessToken => ({type: ac.S_A_TOK, value: accessToken})
export const setRefreshToken = refreshToken => ({type: ac.S_R_TOK, value: refreshToken})
