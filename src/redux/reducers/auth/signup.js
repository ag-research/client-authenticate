import { ac } from "../../actions/constants";
import { inputElementState, submitResponseState } from "../../../helpers/opconstants";

export const signupFormState = {
    name:  {...inputElementState},
    email:  {...inputElementState},
    password:  {...inputElementState},
    cpassword:  {...inputElementState},
    submit: {...submitResponseState}
}

const signupFormData = (state = signupFormState, action) => {
    switch(action.type){
        case ac.SU_S_N:
            return {...state, name: action.value}
        case ac.SU_S_E:
            return {...state, email: action.value}
        case ac.SU_S_P:
            return {...state, password: action.value}
        case ac.SU_S_CP:
            return {...state, cpassword: action.value}
        case ac.SU_SUB_RES:
            return {...state, submit: action.value}
        default:
            return state;            
    }
}

export default signupFormData