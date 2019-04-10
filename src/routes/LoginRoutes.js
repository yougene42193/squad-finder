import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm'
import { Section } from '../utils/utils';

export default class LoginRoutes extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        }
    }

    handleLoginSucces = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).form || '/'
        history.push(destination)
    }

    render() {
        return (
            <Section className='LoginPage'>
                <h2>Login</h2>
                <LoginForm
                    onLoginSuccess={this.handleLoginSucces}
                />
            </Section>
        )
    }
}