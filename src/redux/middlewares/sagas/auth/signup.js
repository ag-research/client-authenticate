import { takeLatest, call, put } from 'redux-saga/effects'
import { ac } from '../../../actions/constants';
import Axios from 'axios';
import { apisignupurl } from '../../../../helpers/url';
import { setAuthenticated } from '../../../actions/auth';
import { setAllTokens } from '../../../actions/auth/tokens';
import { loadTokens } from '../utils/helpers';

export function *signupUser(action){
    try {
        const res = yield call(Axios.get, apisignupurl);
        if(res.data.status === "success"){
            yield put(setAllTokens(loadTokens(res.data.response)))
            yield put(setAuthenticated(true))
            yield call(action.callback)
        }
    } catch (error) {
        
    }
}

export default function *watchSignUpActions(){
    yield takeLatest(ac.SU_SUB, signupUser)
}