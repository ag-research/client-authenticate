import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { resizeDashboardScreen } from '../../../redux/actions/screen';


class DashboardRootWrapper extends Component {
    componentWillMount(){
        const { resizeDashboard } = this.props;
        window.addEventListener("resize", () => {
            resizeDashboard();
        })
    }

    render(){
        return this.props.children
    }
}

const mapStateToProps = state => ({
    dim: state.dashboardscreen
})

const mapDispatchToProps = dispatch => ({
    resizeDashboard: () => dispatch(resizeDashboardScreen)
})

DashboardRootWrapper.propTypes = {
    resizeDashboard: PropTypes.func.isRequired

}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardRootWrapper)