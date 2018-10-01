import { combineReducers } from 'redux';
import dashboardscreen from './screen/dashboard'
import authenticatescreen from './screen/authenticate'
import auth from './auth'
import profile from './profile'

export default combineReducers({ dashboardscreen, authenticatescreen, auth, profile })
