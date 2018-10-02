import { takeLatest, call, put } from 'redux-saga/effects'
import { ac } from '../../../actions/constants';
import Axios from 'axios';
import { setProfile } from '../../../actions/profile';
import { apifetchprofileurl } from '../../../../helpers/url';
import { mountProfile } from '../utils/helpers';

export function *fetchUserProfile(){    
    try {
        const res = yield call(Axios.get, apifetchprofileurl);
        yield put(setProfile(mountProfile(res.data)))
    } catch (error) {
        
    }
}

export default function *watchProfileActions(){
    yield takeLatest(ac.F_PROF, fetchUserProfile)
}