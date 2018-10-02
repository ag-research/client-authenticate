import { ac } from "../constants";

export const signupSetName = name => ({type: ac.SU_S_N, value: name})
export const signupSetEmail = email => ({type: ac.SU_S_E, value: email})
export const signupSetPassword = password => ({type: ac.SU_S_P, value: password})
export const signupSetConfirmPassword = password => ({type: ac.SU_S_CP, value: password})
export const signupSubmit = {type: ac.SU_SUB} //saga captures