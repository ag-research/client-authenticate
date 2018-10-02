import { call } from 'redux-saga/effects'
import Axios from "axios";
import { apisignupurl } from "../../../../../helpers/url";
import { signupUser } from "../signup";

describe('login saga', () => {
    it('must call axios to get login user', () => {
        const gen = signupUser();
        expect(gen.next()).toStrictEqual(call(Axios.get, apisignupurl))
    })
})