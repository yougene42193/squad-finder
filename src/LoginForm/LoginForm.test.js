import React from 'react';
import { shallow } from 'enzyme';

import LoginForm from './LoginForm'

describe('Log in Component', () => {
    it('renders without crashing', () => {
        shallow(<LoginForm />)
    }) 
})