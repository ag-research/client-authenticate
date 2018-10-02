import { takeLatest, call, put, select } from 'redux-saga/effects'
import { ac } from '../../../actions/constants';
import { apiloginurl } from '../../../../helpers/url';
import Axios from 'axios';
import { setAuthenticated } from '../../../actions/auth';
import { setAllTokens } from '../../../actions/auth/tokens';
import { loadTokens, readLoginFormData } from '../utils/helpers';
import { getLoginFormData } from '../utils/selectors';

export function *loginUser(action){
    const loginData = yield select(getLoginFormData);
    try {
        const res = yield call(Axios.post, apiloginurl, readLoginFormData(loginData));        
        if(res.status === 200){
            yield put(setAllTokens(loadTokens(res.data.payload)));
            yield put(setAuthenticated(true))
            yield call(action.callback)
        }
    } catch (error) {
        
    }
}

export default function *watchLoginActions(){
    yield takeLatest(ac.LI_SUB, loginUser)
}