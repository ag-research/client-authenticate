import { call } from 'redux-saga/effects'
import { fetchUserProfile } from '.';
import Axios from 'axios';
import { apifetchprofileurl } from '../../../../helpers/url';

describe('profile saga', () => {
    it('must call axios to fetch user profile', () => {
        const gen = fetchUserProfile();
        expect(gen.next()).toStrictEqual(call(Axios.get, apifetchprofileurl))
    })
})