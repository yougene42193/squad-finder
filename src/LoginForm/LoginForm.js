import React from 'react';
import './LoginForm.css';
import TokenService from '../services/token-service'
import { Button, Input } from '../utils/utils'
import AuthApiService from '../services/auth-api-service';

export default class LoginForm extends React.Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    state = { error: null }

    handleSubmitJwtAuth = e => {
        e.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = e.target

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value,
        })
            .then(res => {
                user_name.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
        
    }

    render() {
        const{ error }  = this.state
        return (
            <section className="login-form">
                <fieldset>
                    <form 
                        className="login-section"
                        onSubmit={this.handleSubmitJwtAuth}
                    >
                        <div role='alert'>
                            {error && <p className='error-msg'>Incorrect username or password</p>}
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
                        <Button className="login-submit" type="submit">Log in</Button>
                    </form>
                    <h3>Demo</h3>
                <p>username: demouser1</p>
                <p>password: Password1!</p>
                <p>or you can register an account.</p>
                </fieldset>
            </section>
        )
    }
}