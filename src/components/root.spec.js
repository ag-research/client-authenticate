import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Root, isAuthUrl } from './';
import { Route, Redirect } from 'react-router-dom'
import Authenticate from './authenticate';
import { loginurl } from '../helpers/url';

configure({adapter: new Adapter()})


describe('isAuthUrl', () => {
    it('should determine if empty location is url', () => {
        expect( isAuthUrl({}) ).toBe(false);
    })

    it('should determine if login location is url', () => {
        expect( isAuthUrl({pathname: loginurl}) ).toBe(true);
    })
})

describe('<Root />', () => {
    const props = { authenticated: false, location: {} };
    const wrapper = shallow(<Root authenticated={false} location={{}} />);
    afterEach(() => {
        wrapper.setProps(props)
    })

    it('should render <Route to Dashboard/> when authenticated', () => {
        wrapper.setProps({authenticated: true, location: {}})
        expect(wrapper.find(Route)).toHaveLength(1)
    })

    it('should render <Redirect to Login/> when not authenticated and given an invalid auth url', () => {
        expect(wrapper.find(Redirect)).toHaveLength(1)
    })

    it('should render <Authenticate/> when not authenticated and given a valid auth url', () => {
        wrapper.setProps({authenticated: false, location: {pathname: loginurl} })
        expect(wrapper.find(Authenticate)).toHaveLength(1)
    })


})

