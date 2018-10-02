import { takeLatest, call, put, select } from 'redux-saga/effects'
import { ac } from '../../../actions/constants';
import { apiloginurl } from '../../../../helpers/url';
import Axios from 'axios';
import { setAuthenticated } from '../../../actions/auth';
import { setAllTokens } from '../../../actions/auth/tokens';
import { loadTokens, readLoginFormData } from '../utils/helpers';
import { getLoginFormData } from '../utils/selectors';
import { submitResponseState } from '../../../../helpers/opconstants';

export function *loginUser(action){
    const loginData = yield select(getLoginFormData);
    try {
        const res = yield call(Axios.post, apiloginurl, readLoginFormData(loginData)); 
        yield put(setAllTokens(loadTokens(res.data)));
        yield put({ type: ac.LI_SUB_RES, value: { ...submitResponseState } })
        yield put(setAuthenticated(true))
        yield call(action.callback)
    } catch (error) {
        //handle message from server, otherwise handle message from client
        const message = error.response ? error.response.data.message : error.message;
        yield put({ type: ac.LI_SUB_RES, value: { faulty: true, error_msg: message, success_msg: "" } })
    }
}

export default function *watchLoginActions(){
    yield takeLatest(ac.LI_SUB, loginUser)
}