import { ac } from "../../actions/constants";
import { inputElementState } from "../../../helpers/opconstants";

export const loginFormState = {
    email: {...inputElementState},
    password: {...inputElementState}
}

const loginFormData = (state = loginFormState, action) => {
    switch(action.type){
        case ac.LI_S_E:
            return {...state, email: action.value}
        case ac.LI_S_P:
            return {...state, password: action.value}
        default:
            return state;            
    }
}

export default loginFormData