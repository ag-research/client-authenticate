import { combineReducers } from 'redux';
import dashboardscreen from './screen/dashboard'
import authenticatescreen from './screen/authenticate'
import auth from './auth'
import signupFormData from './auth/signup'
import loginFormData from './auth/login'
import profile from './profile'

export default combineReducers({ dashboardscreen, authenticatescreen, auth, signupFormData, loginFormData, profile })
