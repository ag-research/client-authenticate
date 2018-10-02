import { call } from 'redux-saga/effects'
import { fetchUserProfile } from '.';
import Axios from 'axios';
import { apifetchprofileurl } from '../../../../helpers/url';

describe('profile saga', () => {
    const gen = fetchUserProfile();
    it('must call axios to fetch user profile', () => {
        expect(gen.next().value).toEqual(call(Axios.get, apifetchprofileurl))
    })
})