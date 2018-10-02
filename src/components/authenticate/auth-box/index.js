import React from 'react'
import { connect } from 'react-redux'

import Header from './content/header';
import Footer from './content/footer';
import LoginForm from './content/loginform';
import SignupForm from './content/signupform';
import { LOGIN_PAGE_TYPE, SIGNUP_PAGE_TYPE } from '../../../helpers/opconstants';

import './css/formnotifier.css'

export const AuthBox = ({ type, dim }) => {
    const abstyle = {
        marginTop: dim.authenticateBoxMarginTop 
    }
    return (
        <div className="authenticate-box rel-position bg-white elevation-10px-bottom" style={abstyle}>
            <Header type={type} />
            {type === LOGIN_PAGE_TYPE ? <LoginForm /> : null}
            {type === SIGNUP_PAGE_TYPE ? <SignupForm /> : null}
            <Footer type={type} />
        </div>
    )
}

const mapStateToProps = state => ({
    dim: state.authenticatescreen
})

export default connect(mapStateToProps, {})(AuthBox)