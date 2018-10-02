import { ac } from "../../actions/constants";
import { inputElementState, submitResponseState } from "../../../helpers/opconstants";

export const loginFormState = {
    email: {...inputElementState},
    password: {...inputElementState},
    submit: {...submitResponseState}
}

const loginFormData = (state = loginFormState, action) => {
    switch(action.type){
        case ac.LI_S_E:
            return {...state, email: action.value}
        case ac.LI_S_P:
            return {...state, password: action.value}
        case ac.LI_SUB_RES:
            return {...state, submit: action.value}
        case ac.LI_F_RES:
            return loginFormState;
        default:
            return state;            
    }
}

export default loginFormData