import React, { Component } from 'react'
import { connect } from 'react-redux'

import DashboardRootWrapper from './utils/drw';
import Container from '../zutils/Container';

import './css/dashboard.css'
// import ripplejs from '../../helpers/ripplejs';

export class Dashboard extends Component {
    constructor(){
        super();        
        document.title = "GSDLabs Dashboard"
    }

    componentWillMount(){
        // ripplejs();
    }

    onLogout() {

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
            <DashboardRootWrapper>
                <div className="dashboard-main" style={ dmstyle }>
                    <Container>
                        <div className="dashboard-round-box rel-position bg-white" style = { drbstyle }>
                            <div className="text-center mt-4">
                                <p><img alt=" " className="profile-img" src={profileimg} /> </p>
                                <p>Welcome {name}!</p>
                                <p>
                                    <button className="btn btn-primary elevation-10px-bottom rel-position"
                                        onClick={ () => this.onLogout() }>
                                        Logout
                                        <div className="rippleJS fill"></div>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </Container>
                </div>
            </DashboardRootWrapper>
        )
    }
}

const mapStateToProps = state => ({
    dim: state.dashboardscreen,
    profile: state.profile,
})

export default connect(mapStateToProps, {})(Dashboard)