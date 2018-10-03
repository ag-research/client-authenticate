import { isEmptyObject } from '../../../helpers/checkers';
import { ac } from '../../actions/constants';

const isAuthenticated = () => { 
    const access_token = localStorage.getItem('access_token') || "{}";
    const refresh_token = localStorage.getItem('refresh_token') || "{}";
    return {
        authenticating: false, 
        authenticated: !isEmptyObject(JSON.parse(refresh_token)) || !isEmptyObject(JSON.parse(access_token))
    }
}
export const initState = isAuthenticated();

export const auth = (state = isAuthenticated(), action) => {
    switch(action.type){       
        case ac.AUTH_ED:
            return {...state, authenticated: action.value}
        case ac.AUTH_IN:
            return {...state, authenticating: action.value}
        default:
            return state;
    }
}

export default auth