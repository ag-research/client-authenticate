import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as fm from '../../../../helpers/formvalidator'
import { loginSetEmail, loginSetPassword, loginSubmit, loginSetSubmitResponse, loginFormReset } from '../../../../redux/actions/auth/login';
import Wrapper from '../../../zutils/Wrapper';
import FormNotifier from './formnotifier'
import { setAuthenticating } from '../../../../redux/actions/auth';
import { dashboardurl } from '../../../../helpers/url';
import { submitResponseState } from '../../../../helpers/opconstants';

class LoginForm extends Component {
    setFormEmail(value) {
        const { setEmail } = this.props;
        const isValid = fm.isValidEmail(value);
        setEmail({
            value: value,
            faulty: !isValid,
            error: !isValid ? "Please enter a valid email" : ""
        })
    }
    setFormPassword(value) {
        const { setPassword } = this.props;
        const isValid = fm.isValidPassword(value);
        setPassword({
            value: value,
            faulty: !isValid,
            error: !isValid ? "Password must be more than 8 characters and must contain a number, a lowercase and an uppercase letter" : ""
        })
    }
    submitForm() {
        const { formdata, setAuthenticating, loginSubmit, setSubmitResponse } = this.props;
        for (let key in formdata) {
            if(key !== "submit"){
                if (formdata[key].faulty || formdata[key].value.length === 0) return null;
            }
        }
        setAuthenticating(true);
        setSubmitResponse({...submitResponseState});
        loginSubmit(() => this.setBrowserLocation());
    }
    setBrowserLocation() {
        const { setAuthenticating, resetForm } = this.props;
        this.props.history.replace(dashboardurl);
        resetForm();
        setAuthenticating(false);
    }
    render() {
        const { formdata: { email, password, submit }, authenticating } = this.props;
        return (
            <div className="auth-form-content">
                <div className="row">
                    <div className="col-md-12">
                        <form id="login-form" onSubmit={e => { e.preventDefault(); this.submitForm() }}>

                            {submit.faulty ?
                                <div className="form-group">
                                    <FormNotifier statusclass="failure">
                                        {submit.error_msg}
                                    </FormNotifier>
                                </div> : ""
                            }

                            <div className="form-group">
                                <label>Email <span className="important">*</span></label>
                                <div className="input-group">
                                    <input type="text" name="email" defaultValue={email.value}
                                        className={"form-control" + (email.faulty ? " input-error" : "")}
                                        onInput={e => this.setFormEmail(e.target.value)} disabled={authenticating} />
                                </div>
                                {email.faulty ? <Wrapper> <small className="important"> {email.error} </small> </Wrapper> : ""}
                            </div>

                            <div className="form-group">
                                <label>Password <span className="important">*</span></label>
                                <div className="input-group">
                                    <input type="password" name="password" defaultValue={password.value}
                                        className={"form-control" + (password.faulty ? " input-error" : "")}
                                        onInput={e => this.setFormPassword(e.target.value)} disabled={authenticating} />
                                </div>
                                {password.faulty ? <Wrapper> <small className="important"> {password.error} </small> </Wrapper> : ""}
                            </div>

                            <div className="form-group mt-5">
                                <button className="btn btn-default btn-block auth-btn" type="submit" disabled={authenticating}>
                                    {authenticating ?
                                        <Wrapper>
                                            <img className="btn-loader" src="/static/icons/small-loader-white.gif" alt="..." />
                                            LOGGING IN...
                                         </Wrapper> : "LOGIN"}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

LoginForm.propTypes = {
    formdata: PropTypes.shape({
        email: PropTypes.object.isRequired,
        password: PropTypes.object.isRequired,
        submit: PropTypes.object.isRequired
    }),
    authenticating: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    formdata: state.loginFormData,
    authenticating: state.auth.authenticating
})

const mapDispatchToProps = dispatch => ({
    setEmail: email => dispatch(loginSetEmail(email)),
    setPassword: password => dispatch(loginSetPassword(password)),
    setAuthenticating: value => dispatch(setAuthenticating(value)),
    loginSubmit: callback => dispatch(loginSubmit(callback)),
    setSubmitResponse: response => dispatch(loginSetSubmitResponse(response)),
    resetForm: () => dispatch(loginFormReset)
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))