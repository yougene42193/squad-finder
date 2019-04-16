import React from 'react';
import './LoginForm.css';
import TokenService from '../services/token-service'
import { Button, Input } from '../utils/utils'

export default class LoginForm extends React.Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    state = { error: null }

    handleSubmitBasicAuth = e => {
        e.preventDefault()
        const { user_name, password } = e.target

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(user_name.value, password.value)
        )

        user_name.value = ''
        password.value = ''
        this.props.onLoginSuccess()
    }

    render() {
        const{ error }  = this.state
        return (
            <section className="login-form">
                <fieldset>
                    <form 
                        className="register-section"
                        onSubmit={this.handleSubmitBasicAuth}
                    >
                        <div role='alert'>
                            {error && <p className='red'>{error}</p>}
                        </div>
                        <div className="username">
                            <label htmlFor='login-username'>Username: </label>
                            <Input 
                                name='user_name'
                                type="text" 
                                required
                                id='login-username'>
                            </Input>
                        </div>
                        <div className="password">
                            <label htmlFor='login-password'>Password: </label>
                            <Input 
                                name='password'
                                type="password" 
                                required
                                id='login-password'>
                            </Input>
                        </div>
                        <Button type="submit">Log in</Button>
                    </form>
                </fieldset>
            </section>
        )
    }
}