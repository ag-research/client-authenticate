import { takeLatest, call, put } from 'redux-saga/effects'
import { ac } from '../../../actions/constants';
import Axios from 'axios';
import { setProfile } from '../../../actions/profile';

export function *fetchUserProfile(){    
    try {
        const res = yield call(Axios.get, fetchprofileurl);
        if(res.data.status === "success"){
            yield put(setProfile(r.data.data))
        }
    } catch (error) {
        
    }
    // yield put(setProfile({name: "Caleb", profileimg: "/static/img/mock-dp.png"}))
}

export default function *watchProfileActions(){
    yield takeLatest(ac.F_PROF, fetchUserProfile)
}