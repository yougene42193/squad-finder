import React from 'react';
import { shallow } from 'enzyme';

import RegistrationForm from './RegistrationForm';

describe('Registration Component', () => {
    it('renders without crashing', () => {
        shallow(<RegistrationForm />)
    }) 
})