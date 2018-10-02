import { tokens } from "../../../../reducers/auth/tokens";
import { getTokens } from "../selectors";

describe('state selectors', () => {
    it('should return tokens state', () => {
        const state = { tokens: tokens(undefined, '') }
        expect(getTokens(state)).toEqual(state.tokens)
    })
})