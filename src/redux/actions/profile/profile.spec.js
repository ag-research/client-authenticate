import { setProfile, fetchProfile } from ".";

describe('profile action creator', () => {
    it('should create FETCH_PROFILE action', () => {
        expect(fetchProfile).toEqual({type: ac.F_PROF})
    })

    it('should create SET_PROFILE action', () => {
        const profile = {}
        expect(setProfile(profile)).toEqual({type: ac.S_PROF, value: profile})
    })
})