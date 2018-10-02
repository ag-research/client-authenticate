import React, {Component} from 'react'
import { connect } from 'react-redux';
import Wrapper from '../../zutils/Wrapper';
import { fetchProfile } from '../../../redux/actions/profile';

class PageLoader extends Component{
    componentDidMount() {
        this.props.fetchProfile();
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
    dim: state.dashboardscreen
})

const mapDispatchToProps = dispatch => ({
    fetchProfile: () => dispatch(fetchProfile)     
})

export default connect(mapStateToProps, mapDispatchToProps)(PageLoader);