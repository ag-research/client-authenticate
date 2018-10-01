import { ac } from "../constants";

export const loginSetEmail = email => ({type: ac.LI_S_E, value: email})
export const loginSetPassword = password => ({type: ac.LI_S_P, value: password})
//Saga will listen for submit action