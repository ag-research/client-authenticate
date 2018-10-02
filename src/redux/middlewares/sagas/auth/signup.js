import { takeLatest, call, put, select } from 'redux-saga/effects'
import { ac } from '../../../actions/constants';
import Axios from 'axios';
import { apisignupurl } from '../../../../helpers/url';
import { setAuthenticated } from '../../../actions/auth';
import { setAllTokens } from '../../../actions/auth/tokens';
import { loadTokens, readSignUpFormData } from '../utils/helpers';
import { getSignUpFormData } from '../utils/selectors';
import { submitResponseState } from '../../../../helpers/opconstants';

export function* signupUser(action) {
    const signupData = yield select(getSignUpFormData);
    try {
        const res = yield call(Axios.post, apisignupurl, readSignUpFormData(signupData));
        yield put(setAllTokens(loadTokens(res.data)))
        yield put({ type: ac.SU_SUB_RES, value: { ...submitResponseState } })
        yield put(setAuthenticated(true))
        yield call(action.callback)
    } catch (error) {
        //handle message from server, otherwise handle message from client
        const message = error.response ? error.response.data.message : error.message;
        yield put({ type: ac.SU_SUB_RES, value: { faulty: true, error_msg: message, success_msg: "" } })
    }
}

export default function* watchSignUpActions() {
    yield takeLatest(ac.SU_SUB, signupUser)
}