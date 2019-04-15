import React from 'react';
import { shallow } from 'enzyme';

import Header from './header'

describe('Header Component', () => {
    it('renders without crashing', () => {
        shallow(<Header />)
    }) 
})