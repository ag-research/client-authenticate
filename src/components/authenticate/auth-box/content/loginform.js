import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import * as fm from '../../../../helpers/formvalidator'
import { loginSetEmail, loginSetPassword } from '../../../../redux/actions/auth/login';

class LoginForm extends Component {
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
    submitForm(){
        
    }
    render() {
        const { formdata: { email, password} } = this.props;
        return (
            <div className="auth-form-content">
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={e => {e.preventDefault()}}>
                            <div className="form-group">
                                <label>Email <span className="important">*</span></label>
                                <div className="input-group">
                                    <input type="email" name="email" className={ "form-control" + email.faulty ? " input-error" : "" } 
                                        onInput={e => this.setFormEmail(e)}  />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Password <span className="important">*</span></label>
                                <div className="input-group">
                                    <input type="password" name="password" className={ "form-control" + password.faulty ? " input-error" : "" } 
                                        onInput={e => this.setFormPassword(e)} />
                                </div>
                            </div>
                            <div className="form-group mt-5">
                                <button className="btn btn-default btn-block auth-btn" type="submit">
                                    LOGIN
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
        password: PropTypes.object.isRequired
    })
}

const mapStateToProps = state => ({
    formdata: state.loginFormData,
})

const mapDispatchToProps = dispatch => ({
    setEmail: email => dispatch(loginSetEmail(email)),
    setPassword: password => dispatch(loginSetPassword(password)),
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)