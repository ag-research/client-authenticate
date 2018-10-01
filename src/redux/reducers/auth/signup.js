import { ac } from "../../actions/constants";
import { inputElementState } from "../../../helpers/opconstants";

export const signupFormState = {
    name:  {...inputElementState},
    email:  {...inputElementState},
    password:  {...inputElementState},
    cpassword:  {...inputElementState}
}

const signupFormData = (state = {}, action) => {
    switch(action.type){
        case ac.SU_S_N:
            return {...state, name: action.value}
        case ac.SU_S_E:
            return {...state, email: action.value}
        case ac.SU_S_P:
            return {...state, password: action.value}
        case ac.SU_S_CP:
            return {...state, cpassword: action.value}
        default:
            return signupFormState;            
    }
}

export default signupFormData