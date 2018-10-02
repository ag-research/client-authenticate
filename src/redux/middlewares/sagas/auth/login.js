import { takeLatest, call, put, select } from 'redux-saga/effects'
import { ac } from '../../../actions/constants';
import { apiloginurl } from '../../../../helpers/url';
import Axios from 'axios';
import { setAuthenticated, setAuthenticating } from '../../../actions/auth';
import { setAllTokens } from '../../../actions/auth/tokens';
import { readLoginFormData, mountTokens } from '../utils/helpers';
import { getLoginFormData } from '../utils/selectors';
import { submitResponseState } from '../../../../helpers/opconstants';
import { loginSetSubmitResponse } from '../../../actions/auth/login';

export function *loginUser(action){
    const loginData = yield select(getLoginFormData);
    try {
        const res = yield call(Axios.post, apiloginurl, readLoginFormData(loginData)); 
        yield put(setAllTokens(mountTokens(res.data)));
        yield put(loginSetSubmitResponse({ ...submitResponseState }))
        yield put(setAuthenticated(true))
        yield call(action.callback)
    } catch (error) {
        //handle message from server, otherwise handle message from client
        const message = error.response ? error.response.data.message : error.message;
        yield put(loginSetSubmitResponse({ faulty: true, error_msg: message, success_msg: "" }))
        yield put(setAuthenticating(false))
    }
}

export default function *watchLoginActions(){
    yield takeLatest(ac.LI_SUB, loginUser)
}