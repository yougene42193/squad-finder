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

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).form || '/list'
        history.push(destination)
        window.location.reload();
    }

    render() {
        return (
            <Section className='LoginPage'>
                <h2>Login</h2>
                <LoginForm
                    onLoginSuccess={this.handleLoginSuccess}
                />
            </Section>
        )
    }
}