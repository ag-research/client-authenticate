import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import * as fm from '../../../../helpers/formvalidator'
import { signupSetName, signupSetPassword, signupSetEmail, signupSetConfirmPassword } from '../../../../redux/actions/auth/signup';

class SignupForm extends Component {
    setFormName(e){
        const { setName } = this.props;
        const isValid = fm.isValidName(e.target.value);
        setName({
            value: e.target.value,
            faulty: isValid,
            error: !isValid ? "Please enter a valid name" : "" 
        })
    }
    setFormEmail(e){
        const { setEmail } = this.props;
        const isValid = fm.isValidEmail(e.target.value);
        setEmail({
            value: e.target.value,
            faulty: isValid,
            error: !isValid ? "Please enter a valid email" : "" 
        })
    }
    setFormPassword(e){
        const { setPassword } = this.props;
        const isValid = fm.isValidPassword(e.target.value);
        setPassword({
            value: e.target.value,
            faulty: isValid,
            error: !isValid ? "Please enter a valid password" : "" 
        })
    }
    setFormConfirmPassword(e){
        const { setConfirmPassword, formdata: { password } } = this.props;
        const isValid = fm.isValidPassword(e.target.value);
        setConfirmPassword({
            value: e.target.value,
            faulty: isValid,
            error: (!isValid ? "Please enter a valid password" : password.value.length !== 0 && e.target.value !== password ?  "Passwords don't match" : "")
        })
    }
    submitForm(){
        
    }
    render() {
        const { formdata: { name, email, password, cpassword } } = this.props;
        return (
            <div className="auth-form-content">
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={e => {e.preventDefault()}}>
                            <div className="form-group">
                                <label>Name <span className="important">*</span></label>
                                <div className="input-group">
                                    <input type="text" name="name" className={ "form-control" + name.faulty ? " input-error" : "" }
                                        onInput={e => this.setFormName(e)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Email <span className="important">*</span></label>
                                <div className="input-group">
                                    <input type="email" name="email" className={ "form-control" + email.faulty ? " input-error" : "" } 
                                        onInput={e => this.setFormEmail(e)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Password <span className="important">*</span></label>
                                <div className="input-group">
                                    <input type="password" name="password" className={ "form-control" + password.faulty ? " input-error" : "" } 
                                        onInput={e => this.setFormPassword(e)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Confirm Password <span className="important">*</span></label>
                                <div className="input-group">
                                    <input type="password" name="cpassword" className={ "form-control" + cpassword.faulty ? " input-error" : "" } 
                                        onInput={e => this.setFormConfirmPassword(e)} />
                                </div>
                            </div>
                            <div className="form-group mt-5">
                                <button className="btn btn-default btn-block auth-btn" type="submit">
                                    SIGN UP
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
        cpassword: PropTypes.object.isRequired
    })
}

const mapStateToProps = state => ({
    formdata: state.signupFormData,
})

const mapDispatchToProps = dispatch => ({
    setName: name => dispatch(signupSetName(name)),
    setEmail: email => dispatch(signupSetEmail(email)),
    setPassword: password => dispatch(signupSetPassword(password)),
    setConfirmPassword: cpassword => dispatch(signupSetConfirmPassword(cpassword)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)