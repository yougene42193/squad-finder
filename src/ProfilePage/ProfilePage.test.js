import React from 'react';
import { shallow } from 'enzyme';

import ProfilePage from './ProfilePage'

describe('Profile Component', () => {
    it('renders without crashing', () => {
        shallow(<ProfilePage />)
    }) 
})