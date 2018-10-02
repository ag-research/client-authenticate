import { takeLatest, call, put } from 'redux-saga/effects'
import { ac } from '../../../actions/constants';
import { apiloginurl } from '../../../../helpers/url';
import Axios from 'axios';
import { setAuthenticated } from '../../../actions/auth';
import { setAccessToken, setAllTokens } from '../../../actions/auth/tokens';
import { loadTokens } from '../utils/helpers';

export function *loginUser(action){
    try {
        const res = yield call(Axios.get, apiloginurl);
        if(res.data.status === "success"){
            yield put(setAllTokens(loadTokens(res.data.response)));
            yield put(setAuthenticated(true))
            yield call(action.callback)
        }
    } catch (error) {
        
    }
}



export default function *watchLoginActions(){
    yield takeLatest(ac.LI_SUB, loginUser)
}