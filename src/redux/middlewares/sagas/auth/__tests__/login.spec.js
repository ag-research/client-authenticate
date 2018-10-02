import { call } from 'redux-saga/effects'
import Axios from "axios";
import { loginUser } from "../login";
import { apiloginurl } from "../../../../../helpers/url";

describe('login saga', () => {
    it('must call axios to get login user', () => {
        const gen = loginUser();
        expect(gen.next()).toStrictEqual(call(Axios.get, apiloginurl))
    })
})