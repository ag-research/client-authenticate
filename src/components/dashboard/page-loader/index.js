import React, {Component} from 'react'
import { connect } from 'react-redux';

import Axios from 'axios';
import Wrapper from '../../zutils/Wrapper';
import { fetchProfile } from '../../../redux/actions/profile';
import { refreshTokenAction } from '../../../redux/actions/auth/tokens';

class PageLoader extends Component{
    componentDidMount() {
        const { tokens: { accessToken }, doRefreshToken } = this.props;
        const expired = ((new Date().getTime() - parseInt(accessToken.timestamp, 10))/60) > accessToken.expires
        if(accessToken.value.length === 0 || expired){
            doRefreshToken()
        }else{
            Axios.defaults.headers.common['x-access-token'] = accessToken.value;
            this.props.fetchProfile();
        }
    }
    render(){
        const { dim } = this.props;
        const pstyle = {
            width: 100 + "%",
            height: dim.dashboardmainHeight
        }
        const istyle = {
            paddingTop: "200px"
        }
        return (
            <Wrapper>
                <div style={pstyle} className="bg-white">
                    <div className="loader-center">
                    <img alt=" " className="text-center" style={istyle} src="/static/icons/ajax-loader1.gif"/>                    
                    </div>
                </div>
            </Wrapper>
        );
    }

}

const mapStateToProps = state => ({
    dim: state.dashboardscreen,
    tokens: state.tokens
})

const mapDispatchToProps = dispatch => ({
    fetchProfile: () => dispatch(fetchProfile),
    doRefreshToken: () => dispatch(refreshTokenAction)
})

export default connect(mapStateToProps, mapDispatchToProps)(PageLoader);