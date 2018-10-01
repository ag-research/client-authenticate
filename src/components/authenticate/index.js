import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'

import AuthenticateRootWrapper from './utils/arw';
import Container from '../zutils/Container';
import Row from '../zutils/Row';
import { loginurl, signupurl } from '../../helpers/url';
import AuthBox from './auth-box';
import { LOGIN_PAGE_TYPE, SIGNUP_PAGE_TYPE } from '../../helpers/opconstants';
import { isEmptyObject } from '../../helpers/checkers';

import './auth.css'

export const isUnknownUrl = location => {
    if (isEmptyObject(location)) return true;
    return location.pathname.match(loginurl) === null && location.pathname.match(signupurl) === null
}

export const Authenticate = ({ location }) => {
    return (
        <AuthenticateRootWrapper>
            {isUnknownUrl(location) ? <Redirect to={loginurl} /> : null}
            <div className="authenticate-main">
                <Container>
                    <Row>
                        <Route path={loginurl} exact render={() => <AuthBox type={LOGIN_PAGE_TYPE} />} />
                        <Route path={signupurl} exact render={() => <AuthBox type={SIGNUP_PAGE_TYPE} />} />
                    </Row>
                </Container>
            </div>
        </AuthenticateRootWrapper>
    )
}

export default withRouter(Authenticate)