import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Dashboard } from '.';
import { DashboardRootWrapper } from './utils/drw';
import { userProfile } from '../../redux/reducers/profile';
import { setDashboardScreenDimension } from '../../redux/reducers/screen/dashboard';

configure({adapter: new Adapter()})

describe('<Dashboard />', () => {
    const profile = userProfile();
    const dim = setDashboardScreenDimension();
    const wrapper = shallow(<Dashboard profile = {profile} dim = {dim} />);
    it('should render div.dashboard-main />', () => {
        expect(wrapper.find('.dashboard-main')).toHaveLength(1);
    })


})

