import { takeLatest, call, put, select } from 'redux-saga/effects'
import { ac } from '../../../actions/constants';
import Axios from 'axios';
import { apisignupurl } from '../../../../helpers/url';
import { setAuthenticated } from '../../../actions/auth';
import { setAllTokens } from '../../../actions/auth/tokens';
import { loadTokens, readSignUpFormData } from '../utils/helpers';
import { getSignUpFormData } from '../utils/selectors';

export function *signupUser(action){
    const signupData = yield select(getSignUpFormData);
    try {
        const res = yield call(Axios.post, apisignupurl, readSignUpFormData(signupData));
        if(res.status === 200){
            yield put(setAllTokens(loadTokens(res.data.payload)))
            yield put(setAuthenticated(true))
            yield call(action.callback)
        }
    } catch (error) {
        
    }
}

export default function *watchSignUpActions(){
    yield takeLatest(ac.SU_SUB, signupUser)
}