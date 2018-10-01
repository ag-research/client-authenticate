import { isEmptyObject } from '../../../helpers/checkers';
import { ac } from '../../actions/constants';

export const initState = {
    authenticated: false,
    authenticating: false
}

const isAuthenticated = state => { 
    const usertoken = localStorage.getItem('usertoken') || sessionStorage.getItem('usertoken') || "{}";
    return {...state, authenticated: !isEmptyObject(JSON.parse(usertoken))}
}

export const auth = (state = initState, action) => {
    switch(action.type){       
        case ac.AUTH_ED:
            return {...state, authenticated: action.value}
        case ac.AUTH_IN:
            return {...state, authenticating: action.value}
        default:
            return isAuthenticated(state);
    }
}

export default auth