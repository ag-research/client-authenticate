import { takeLatest, call, put, select } from "redux-saga/effects";
import { ac } from "../../../actions/constants";
import Axios from "axios";
import { apirefreshtokenurl } from "../../../../helpers/url";
import { getTokens } from "../utils/selectors";
import { readRefreshToken, mountAccessToken } from "../utils/helpers";
import { setAccessToken } from "../../../actions/auth/tokens";

export function *doRefreshToken(){
    const toks = yield select(getTokens);
    try {
        const res = yield call(Axios.post, apirefreshtokenurl, readRefreshToken(toks))
        yield put(setAccessToken(mountAccessToken(res.data)))
    } catch (error) {
        
    }
}

export default function *watchTokenActions(){
    yield takeLatest(ac.RE_TOK, doRefreshToken)
}