import { ac } from "../../actions/constants";
import { TOKEN_NEVER_EXPIRES, TOKEN_EXPIRES_IN_MIN } from "../../../helpers/opconstants";

export const initState = {
    accessToken: { value: "", expires: TOKEN_EXPIRES_IN_MIN, timestamp: ""},
    refreshToken: { value: localStorage.getItem('refresh_token') || "", expires: TOKEN_NEVER_EXPIRES, timestamp: ""}
}

const setAllToks = (tokens) => {
    localStorage.setItem('refresh_token', tokens.refreshToken)    
    return {accessToken: {...tokens.accessToken}, refreshToken: {...tokens.refreshToken} }
}

export const tokens = (state = initState, action) => {
    switch(action.type){
        case ac.S_ALL_TOK:
            return setAllToks(action.value)
        case ac.S_A_TOK:
            return {...state, accessToken: {...action.value}}
        case ac.S_R_TOK:
            localStorage.setItem('refresh_token', action.value)
            return {...state, refreshToken: {...action.value} }
        default:
            return state;
    }
}

export default tokens