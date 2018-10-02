import { takeLatest, call, put } from 'redux-saga/effects'
import { ac } from '../../../actions/constants';
import Axios from 'axios';
import { apisignupurl } from '../../../../helpers/url';
import { setAuthenticated } from '../../../actions/auth';

export function *signupUser(){
    try {
        const res = yield call(Axios.get, apisignupurl);
        if(res.data.status === "success"){
            yield put(setAuthenticated(true))
        }
    } catch (error) {
        
    }
}

export default function *watchSignUpActions(){
    yield takeLatest(ac.SU_SUB, signupUser)
}