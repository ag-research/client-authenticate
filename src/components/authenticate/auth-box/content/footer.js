import React from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_PAGE_TYPE, SIGNUP_PAGE_TYPE } from '../../../../helpers/opconstants';
import { signupurl, loginurl } from '../../../../helpers/url';

const Footer = ({ type }) => {
    return (
        <div className="auth-form-footer text-center mb-4">
            { type === LOGIN_PAGE_TYPE ? <p> <Link to={signupurl}> Don't have account yet? </Link> </p>: null }
            { type === SIGNUP_PAGE_TYPE ? <p> <Link to={loginurl}> Already have an account? </Link> </p>: null }
        </div>
    )
}

export default Footer