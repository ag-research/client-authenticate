import { isEmptyObject } from '../../../helpers/checkers';
import { ac } from '../../actions/constants';

const isAuthenticated = () => { 
    const usertoken = localStorage.getItem('usertoken') || sessionStorage.getItem('usertoken') || "{}";
    return {authenticated: !isEmptyObject(JSON.parse(usertoken))}
}

export const auth = (state = {}, action) => {
    switch(action.type){
        case ac.LOG_IN:
            return {authenticated: true}           
        case ac.LOG_OUT:
            return {authenticated: false}
        default:
            return isAuthenticated();
    }
}

export default auth