import { Component } from 'react'
import { connect } from 'react-redux'
import { resizeAuthScreen } from '../../../redux/actions/screen';

class AuthenticateRootWrapper extends Component {
    componentWillMount(){
        window.addEventListener("resize", () => {
            this.props.resize();
        })
    }

    render() {
        return this.props.children
    }
}

const mapStateToProps = state => ({
    dim: state.authenticatescreen
})

const mapDispatchToProps = dispatch => ({
    resize: () => dispatch(resizeAuthScreen)
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateRootWrapper)