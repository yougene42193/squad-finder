import React from 'react';
import { shallow } from 'enzyme';

import PlayerList from './PlayerList'

describe('Player List Component', () => {
    it('renders without crashing', () => {
        shallow(<PlayerList />)
    }) 
})