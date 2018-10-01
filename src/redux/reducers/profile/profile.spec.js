import profile, { userProfile } from ".";

describe('profile reducers', () => {
    it('should handle initial state', () => {
        expect(profile(undefined, '')).toEqual(userProfile())
    })
})