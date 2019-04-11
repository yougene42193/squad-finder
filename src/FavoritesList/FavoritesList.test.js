import React from 'react';
import { shallow } from 'enzyme';

import FavoritesList from './FavoritesList'

describe('Favorite List Component', () => {
    it('renders without crashing', () => {
        shallow(<FavoritesList />)
    }) 
})