import dashboardscreen, { setDashboardScreenDimension } from "../dashboard";
import { resizeDashboardScreen } from "../../../actions/screen";

describe('dashboard screen dimension reducers', () => {
    it('should return correct dashboard dimensions for initial state', () => {
        expect(dashboardscreen(undefined, '')).toEqual(setDashboardScreenDimension())
    })

    it('should return correct dashboard dimensions on RESIZE_DASHBOARD_SCREEN', () => {
        const state = setDashboardScreenDimension()
        expect(dashboardscreen(state, resizeDashboardScreen)).toEqual(setDashboardScreenDimension())
    })
})