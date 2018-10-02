import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Dashboard } from '.';
import { DashboardRootWrapper } from './utils/drw';
import { userProfile } from '../../redux/reducers/profile';
import { setDashboardScreenDimension } from '../../redux/reducers/screen/dashboard';
import PageLoader from './page-loader';

configure({adapter: new Adapter()})

describe('<Dashboard />', () => {
    const profile = userProfile();
    const dim = setDashboardScreenDimension();
    const wrapper = shallow(<Dashboard profile = {profile} dim = {dim} />);

    it('should render <PageLoader />', () => {
        expect(wrapper.find(PageLoader)).toHaveLength(1);
    })

    it('should render div.dashboard-main', () => {
        wrapper.setProps({ profile: {...profile, name: "Caleb"}, dim: {...dim}})
        expect(wrapper.find('.dashboard-main')).toHaveLength(1);
    })
})

