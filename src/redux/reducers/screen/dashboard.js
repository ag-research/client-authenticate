import { ac } from "../../actions/constants";

export const setDashboardScreenDimension = () => {
    const mobi = (window.innerWidth <= 576) ? true : false;
    const ww = window.innerWidth;
    const wh = window.innerHeight;
    const drbw = mobi ? "100%" : "300px";
    const drbh = "300px";
    const drbt = (wh - 300)/2;

    return {
        dashboardmainWidth: ww,
        dashboardmainHeight: wh,
        dashboardRoundBoxWidth: drbw,
        dashboardRoundBoxHeight: drbh,
        dashboardRoundBoxMarginTop: drbt,
    }

}

const dashboardscreen = (state = {}, action) => {
    switch(action.type){
        case ac.R_D_S:
            return setDashboardScreenDimension();
        default:
            return setDashboardScreenDimension();
    }
}

export default dashboardscreen