import { takeLatest, call, put } from 'redux-saga/effects'
import { ac } from '../../../actions/constants';
import { apiloginurl, dashboardurl } from '../../../../helpers/url';
import Axios from 'axios';
import { setAuthenticated } from '../../../actions/auth';

export function *loginUser(){
    try {
        const res = yield call(Axios.get, apiloginurl);
        if(res.data.status === "success"){
            yield put(setAuthenticated(true))
        }
    } catch (error) {
        
    }
}

export default function *watchLoginActions(){
    yield takeLatest(ac.LI_SUB, loginUser)
}