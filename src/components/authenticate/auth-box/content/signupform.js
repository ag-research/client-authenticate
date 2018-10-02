import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as fm from '../../../../helpers/formvalidator'
import Wrapper from '../../../zutils/Wrapper';
import FormNotifier from './formnotifier'
import { signupSetName, signupSetPassword, signupSetEmail, signupSetConfirmPassword, signupSubmit, signupSetSubmitResponse, signupFormReset } from '../../../../redux/actions/auth/signup';
import { setAuthenticating } from '../../../../redux/actions/auth';
import { dashboardurl } from '../../../../helpers/url';
import { submitResponseState } from '../../../../helpers/opconstants';

class SignupForm extends Component {
    setFormName(value) {
        const { setName } = this.props;
        const isValid = fm.isValidName(value);
        setName({
            value: value,
            faulty: !isValid,
            error: !isValid ? "Please enter a valid name" : ""
        })
    }
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
        const { setPassword, setConfirmPassword, formdata: { cpassword }  } = this.props;
        const isValid = fm.isValidPassword(value);
        setPassword({
            value: value,
            faulty: !isValid,
            error: !isValid ? "Password must be more than 8 characters and must contain a number, a lowercase and an uppercase letter" : ""
        })
        if(value !== cpassword.value && !cpassword.faulty){
            setConfirmPassword({
                ...cpassword,
                faulty: true,
                error: "Passwords don't match"
            })
        }else if(value === cpassword.value) {
            setConfirmPassword({
                ...cpassword,
                faulty: false,
                error: ""
            })            
        }
    }
    setFormConfirmPassword(value) {
        const { setConfirmPassword, formdata: { password } } = this.props;
        const isValid = (value === password.value);
        setConfirmPassword({
            value: value,
            faulty: !isValid,
            error: ( !isValid ? "Passwords don't match" : "")
        })
    }
    submitForm() {
        const { formdata, setAuthenticating, signupSubmit, setSubmitResponse } = this.props;
        for (let key in formdata) {
            if(key !== "submit"){
                if (formdata[key].faulty || formdata[key].value.length === 0) return null;
            }
        }
        setAuthenticating(true);
        setSubmitResponse({...submitResponseState});
        signupSubmit(() => this.setBrowserLocation());
    }
    setBrowserLocation(){
        const { setAuthenticating, resetForm } = this.props;
        this.props.history.replace(dashboardurl);
        resetForm();
        setAuthenticating(false);
    }
    render() {
        const { formdata: { name, email, password, cpassword, submit }, authenticating } = this.props;
        return (
            <div className="auth-form-content">
                <div className="row">
                    <div className="col-md-12">
                        <form id="signup-form" onSubmit={e => { e.preventDefault(); this.submitForm() }}>

                            {submit.faulty ?
                                <div className="form-group">
                                    <FormNotifier statusclass="failure">
                                        {submit.error_msg}
                                    </FormNotifier>
                                </div> : ""
                            }

                            <div className="form-group">
                                <label>Name <span className="important">*</span></label>
                                <div className="input-group">
                                    <input type="text" name="name" defaultValue={name.value}
                                        className={"form-control" + (name.faulty ? " input-error" : "")}
                                        onInput={e => this.setFormName(e.target.value)} disabled={authenticating} />
                                </div>
                                {name.faulty ? <Wrapper> <small className="important"> {name.error} </small> </Wrapper> : ""}
                            </div>

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

                            <div className="form-group">
                                <label>Confirm Password <span className="important">*</span></label>
                                <div className="input-group">
                                    <input type="password" name="cpassword" defaultValue={cpassword.value}
                                        className={"form-control" + (cpassword.faulty ? " input-error" : "")}
                                        onInput={e => this.setFormConfirmPassword(e.target.value)} disabled={authenticating} />
                                </div>
                                {cpassword.faulty ? <Wrapper> <small className="important"> {cpassword.error} </small> </Wrapper> : ""}
                            </div>

                            <div className="form-group mt-5">
                                <button className="btn btn-default btn-block auth-btn" type="submit" disabled={authenticating}>
                                    {authenticating ?
                                        <Wrapper>
                                            <img className="btn-loader" src="/static/icons/small-loader-white.gif" alt="..." />
                                            SIGNING UP...
                                         </Wrapper> : "SIGN UP"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

SignupForm.propTypes = {
    formdata: PropTypes.shape({
        name: PropTypes.object.isRequired,
        email: PropTypes.object.isRequired,
        password: PropTypes.object.isRequired,
        cpassword: PropTypes.object.isRequired,
        submit: PropTypes.object.isRequired
    }),
    authenticating: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    formdata: state.signupFormData,
    authenticating: state.auth.authenticating
})

const mapDispatchToProps = dispatch => ({
    setName: name => dispatch(signupSetName(name)),
    setEmail: email => dispatch(signupSetEmail(email)),
    setPassword: password => dispatch(signupSetPassword(password)),
    setConfirmPassword: cpassword => dispatch(signupSetConfirmPassword(cpassword)),
    setAuthenticating: value => dispatch(setAuthenticating(value)),
    signupSubmit: callback => dispatch(signupSubmit(callback)),
    setSubmitResponse: response => dispatch(signupSetSubmitResponse(response)),
    resetForm: () => dispatch(signupFormReset)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm))