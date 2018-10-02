import { isEmptyObject } from '../../../helpers/checkers';
import { ac } from '../../actions/constants';

const isAuthenticated = state => { 
    const usertoken = localStorage.getItem('usertoken') || sessionStorage.getItem('usertoken') || "{}";
    return {authenticating: false, authenticated: !isEmptyObject(JSON.parse(usertoken))}
}

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