import React from 'react'
import { Redirect } from 'react-router-dom'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Authenticate, isUnknownUrl } from '.';
import AuthenticateRootWrapper from './utils/arw';
import { authurl, loginurl, signupurl } from '../../helpers/url';

configure({adapter: new Adapter()})

describe('<Authenticate />', () => {
    const wrapper = shallow(<Authenticate location={{}} />);

    it('should render <AuthenticateRootWrapper />', () => {
        expect(wrapper.find(AuthenticateRootWrapper)).toHaveLength(1);
    })

    it('should render <Redirect /> for unknown url', () => {
        expect(wrapper.find(Redirect)).toHaveLength(1);
    })
})

describe('isUnknownUrl', () => {
    it('should confirm that url is an unknown authentication url', () => {
        expect(isUnknownUrl({ pathname: authurl})).toBe(true)
    })

    it('should confirm that loginurl is NOT an unknown authentication url', () => {
        expect(isUnknownUrl({ pathname: loginurl })).toBe(false)
    })

    it('should confirm that signupurl is NOT an unknown authentication url', () => {
        expect(isUnknownUrl({ pathname: signupurl })).toBe(false)
    })
})
