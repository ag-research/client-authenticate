import React, { Component } from 'react'

class LoginForm extends Component {
    render() {
        return (
            <div className="auth-form-content">
                <div className="row">
                    <div className="col-md-12">
                        <form>
                            <div className="form-group">
                                <label>Email <span className="important">*</span></label>
                                <div className="input-group">
                                    <input type="email" name="email" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Password <span className="important">*</span></label>
                                <div className="input-group">
                                    <input type="password" name="password" className="form-control" />
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

export default LoginForm