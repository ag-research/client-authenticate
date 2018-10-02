import { ac } from "../../actions/constants";

export const userProfile = () => {
    return {
        email: "",
        name: "",
        profileimg: ""
    }
}

const profile = (state = userProfile(), action) => {
    switch(action.type){
        case ac.S_PROF:
            return {...state, ...action.value};
        default:
            return state;
    }
}

export default profile