import { ac } from "../../actions/constants";
import { TOKEN_NEVER_EXPIRES, TOKEN_EXPIRES_IN_MIN } from "../../../helpers/opconstants";

export const initState = {
    accessToken: JSON.parse(localStorage.getItem('access_token') || "{}") || { value: "", expires: TOKEN_EXPIRES_IN_MIN, timestamp: ""},
    refreshToken: JSON.parse(localStorage.getItem('refresh_token') || "{}") || { value: "", expires: TOKEN_NEVER_EXPIRES, timestamp: ""}
}

const setAllToks = (tokens) => {
    localStorage.setItem('access_token', JSON.stringify(tokens.accessToken))  
    localStorage.setItem('refresh_token', JSON.stringify(tokens.refreshToken))    
    return {accessToken: {...tokens.accessToken}, refreshToken: {...tokens.refreshToken} }
}

export const tokens = (state = initState, action) => {
    switch(action.type){
        case ac.S_ALL_TOK:
            return setAllToks(action.value)
        case ac.S_A_TOK:
            localStorage.setItem('access_token', JSON.stringify(action.value))
            return {...state, accessToken: {...action.value} }
        case ac.S_R_TOK:
            localStorage.setItem('refresh_token', JSON.stringify(action.value))
            return {...state, refreshToken: {...action.value} }
        default:
            return state;
    }
}

export default tokens