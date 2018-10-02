//App routes
export const homeurl = "/"
export const dashboardurl = "/"
export const authurl = "/auth"
export const loginurl = authurl + "/login"
export const signupurl = authurl + "/signup"

//API urls
export const appurl = "http://localhost:6060"
export const apiloginurl = appurl + "/access-tokens"
export const apisignupurl = appurl + "/users"
export const apirefreshtokenurl = appurl + "/access-tokens/refresh"
export const apilogouturl = appurl + "/access-tokens"
export const apifetchprofileurl = appurl + "/me"