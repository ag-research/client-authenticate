import { ac } from "../constants";

export const fetchProfile = {type: ac.F_PROF}
export const setProfile = profile => ({type: ac.S_PROF, value: profile})