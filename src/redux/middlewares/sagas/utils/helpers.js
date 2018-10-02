export const loadTokens = response => {
    return {accessToken: response.jwt, refreshToken: response.refresh_token}
}