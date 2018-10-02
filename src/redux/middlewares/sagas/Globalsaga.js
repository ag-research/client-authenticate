import { all } from 'redux-saga/effects'
import watchProfileActions from './profile';
import watchSignUpActions from './auth/signup';
import watchLoginActions from './auth/login';
import watchTokenActions from './auth/tokens';

export default function *globalSaga(){
    yield all([
        watchSignUpActions(),
        watchLoginActions(),
        watchTokenActions(),
        watchProfileActions()
    ]);
}

