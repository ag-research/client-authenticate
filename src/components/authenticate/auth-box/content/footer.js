import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { LOGIN_PAGE_TYPE, SIGNUP_PAGE_TYPE } from '../../../../helpers/opconstants'
import { signupurl, loginurl } from '../../../../helpers/url'
import Wrapper from '../../../zutils/Wrapper';

const Footer = ({ type, authenticating }) => {
    return (
        <Wrapper>
            {authenticating ? <br className="mb-4" /> :
                <div className="auth-form-footer text-center mb-4">
                    {type === LOGIN_PAGE_TYPE ? <p> <Link to={signupurl}> Don't have an account yet? </Link> </p> : null}
                    {type === SIGNUP_PAGE_TYPE ? <p> <Link to={loginurl}> Already have an account? </Link> </p> : null}
                </div>
            }
        </Wrapper>
    )
}

const mapStateToProps = state => ({
    authenticating: state.auth.authenticating
})

export default connect(mapStateToProps, {})(Footer)