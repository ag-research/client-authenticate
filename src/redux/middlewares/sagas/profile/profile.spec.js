import { call, put } from 'redux-saga/effects'
import { fetchUserProfile } from '.';
import Axios from 'axios';
import { apifetchprofileurl } from '../../../../helpers/url';
import { setProfile } from '../../../actions/profile';
import { mountProfile } from '../utils/helpers';

describe('profile saga', () => {
    const gen = fetchUserProfile();
    const res = { data: { email: "", name: "", profileimg: ""} }

    it('must call axios to fetch user profile', () => {
        expect(gen.next().value).toEqual(call(Axios.get, apifetchprofileurl))
    })

    it('must put SET_PROFILE action', () => {
        expect(gen.next(res).value).toEqual( put(setProfile(mountProfile(res.data))) )
    })
})