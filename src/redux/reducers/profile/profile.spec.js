import profile, { userProfile } from ".";
import { setProfile } from "../../actions/profile";

describe('profile reducers', () => {
    it('should handle initial state', () => {
        expect(profile(undefined, '')).toEqual(userProfile())
    })
    
    it('should handle SET_PROFILE action', () => {
        const newProfile = profile(userProfile(), setProfile({}));
        expect(newProfile).toEqual(userProfile())
    })
})