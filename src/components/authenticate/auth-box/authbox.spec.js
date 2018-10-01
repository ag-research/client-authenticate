import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { AuthBox } from '.';
import LoginForm from './content/loginform';
import { LOGIN_PAGE_TYPE, SIGNUP_PAGE_TYPE } from '../../../helpers/opconstants';
import SignupForm from './content/signupform';
import { setAuthenticateScreenDimension } from '../../../redux/reducers/screen/authenticate';

configure({adapter: new Adapter()})

describe('<AuthBox />', () => {
    const wrapper = shallow(<AuthBox type={ LOGIN_PAGE_TYPE } dim={setAuthenticateScreenDimension()} />)

    afterEach(() => {
        wrapper.setProps({type: LOGIN_PAGE_TYPE})
    })
    it('should render login form', () => {
        expect(wrapper.find(LoginForm)).toHaveLength(1)
    })
    
    it('should render sign up form', () => {
        wrapper.setProps({type: SIGNUP_PAGE_TYPE})
        expect(wrapper.find(SignupForm)).toHaveLength(1)
    })
})