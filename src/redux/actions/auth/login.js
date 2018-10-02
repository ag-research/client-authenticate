import { ac } from "../constants";

export const loginSetEmail = email => ({type: ac.LI_S_E, value: email})
export const loginSetPassword = password => ({type: ac.LI_S_P, value: password})
export const loginSubmit = callback =>  ({type: ac.LI_SUB, callback: callback}) //saga captures
export const loginSetSubmitResponse = details => ({type: ac.LI_SUB_RES, value: details})
export const loginFormReset = {type: ac.LI_F_RES}