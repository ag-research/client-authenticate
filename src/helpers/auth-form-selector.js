import { LOGIN_PAGE_TYPE, SIGNUP_PAGE_TYPE } from "./opconstants";

export const formName = (type) => {
    switch(type){
        case LOGIN_PAGE_TYPE:
            return 'login';
        case SIGNUP_PAGE_TYPE:
            return 'sign up';
        default:
            return 'login';
    }
}

export const formPageTitle = (type) => {
    switch(type){
        case LOGIN_PAGE_TYPE:
            return 'GSDLabs Login';
        case SIGNUP_PAGE_TYPE:
            return 'GSDLabs Sign Up';
        default:
            return 'GSDLabs Login';
    }
}