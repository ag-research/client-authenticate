import { ac } from "../../constants";
import { logIn, logOut } from "../";

describe('auth action creator', () => {
    it('should create LOG_IN action', () => {
        expect(logIn).toEqual({
            type: ac.LOG_IN
        })
    })

    it('should create LOG_OUT action', () => {
        expect(logOut).toEqual({
            type: ac.LOG_OUT
        })
    })
})