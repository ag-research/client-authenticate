import { ac } from "../../actions/constants";

export const setAuthenticateScreenDimension = () => {
    const mobi = (window.innerWidth <= 576) ? true : false;
    const ww = window.innerWidth;
    const wh = window.innerHeight;
    const abt = mobi ? "10px" : "70px";

    return {
        authenticatemainWidth: ww,
        authenticatemainHeight: wh,
        authenticateBoxMarginTop: abt,
    }
}

const authenticatescreen = (state = {}, action) => {
    switch(action.type){
        case ac.R_A_S:
            return setAuthenticateScreenDimension();
        default:
            return setAuthenticateScreenDimension();
    }
}

export default authenticatescreen