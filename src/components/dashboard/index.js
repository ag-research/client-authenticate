import React, { Component } from 'react'
import { connect } from 'react-redux'

import DashboardRootWrapper from './utils/drw';
import Container from '../zutils/Container';

import './css/dashboard.css'
import Wrapper from '../zutils/Wrapper';
import PageLoader from './page-loader';
import { setAuthenticated } from '../../redux/actions/auth';

export class Dashboard extends Component {
    constructor() {
        super();
        document.title = "GSDLabs Dashboard";
    }

    componentWillMount() {

    }

    onLogout() {
        localStorage.setItem('refresh_token', null);
        this.props.setAuth(false);
    }

    render() {
        const { profile: { name, profileimg }, dim } = this.props;
        const dmstyle = {
            height: dim.dashboardMainHeight,
        }
        const drbstyle = {
            width: dim.dashboardRoundBoxWidth,
            height: dim.dashboardRoundBoxHeight,
            marginTop: dim.dashboardRoundBoxMarginTop
        }
        return (
            <Wrapper>
                {name.length === 0 ? <PageLoader /> :
                    <DashboardRootWrapper>
                        <div className="dashboard-main" style={dmstyle}>
                            <Container>
                                <div className="dashboard-round-box rel-position bg-white" style={drbstyle}>
                                    <div className="text-center mt-4">
                                        <p><img alt=" " className="profile-img" src={profileimg} /> </p>
                                        <p>Welcome {name}!</p>
                                        <p>
                                            <button className="btn btn-primary elevation-10px-bottom rel-position"
                                                onClick={() => this.onLogout()}>
                                                Logout
                                        <div className="rippleJS fill"></div>
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </DashboardRootWrapper>
                }
            </Wrapper>
        )
    }
}

const mapStateToProps = state => ({
    dim: state.dashboardscreen,
    profile: state.profile,
})

const mapDispatchToProps = dispatch => ({
    setAuth: val => dispatch(setAuthenticated(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)