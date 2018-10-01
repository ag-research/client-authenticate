import { resizeDashboardScreen, resizeAuthScreen } from ".";
import { ac } from "../constants";

describe('screen dimension action creators', () => {
    
    it('should create RESIZE_AUTH_SCREEN action', () => {
        expect(resizeAuthScreen).toEqual({ type: ac.R_A_S })
    })

    it('should create RESIZE_DASHBOARD_SCREEN action', () => {
        expect(resizeDashboardScreen).toEqual({ type: ac.R_D_S })
    })
})