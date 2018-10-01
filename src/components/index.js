import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { dashboardurl, loginurl, authurl } from '../helpers/url'
import Wrapper from './zutils/Wrapper'
import Dashboard from './dashboard'
import Authenticate from './authenticate'

import './general.css'
import { isEmptyObject } from '../helpers/checkers';

export const isAuthUrl = location => {
    if(isEmptyObject(location)) return false;
    return location.pathname.match(authurl) !== null;
}


/**
 * Here we determine whether to render the dashboard or authentication screen
 */
export const Root = ({ authenticated, location }) => {

    const pageToRender = authenticated  ? <Route path={ dashboardurl } component={ Dashboard } />
                            :  !isAuthUrl(location) ? <Redirect to={ loginurl } />  
                                : <Authenticate />

    return <Wrapper> {pageToRender} </Wrapper>
}

Root.propTypes = {
    user: PropTypes.shape({
        authenticated: PropTypes.bool.isRequired
    })
}

const mapStateToProps = state => ({
    authenticated: state.auth.authenticated
})

export default withRouter(connect(mapStateToProps, {})(Root))