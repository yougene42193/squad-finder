import React from 'react';
import { Button, Input } from '../utils/utils'
import './RegistrationForm.css'


/*const matches = field => (value, allValues) =>
  field in allValues && value.trim() === allValues[field].trim()
    ? undefined
    : 'Does not match';*/

//const matchPassword = matches('password')

export default class RegistrationForm extends React.Component {
    static defaultProps = {
        onRegistrationSuccess: () => {}
    }

    state = { error: null }

    handleSubmit = e => {
        e.preventDefault()
        const { user_name, password } = e.target

        console.log('registration form submit')
        console.log({ user_name, password })

        user_name.value = ''
        password.value = ''
        //matchPassword.value = ''
        this.props.onRegistrationSuccess()
    }

    render() {
        const { error } = this.state
        return (
            <section className="register-form">
                <fieldset>
                    <form 
                        className="register-section"
                        onSubmit={this.handleSubmit}
                        >
                        <div role='alert'>
                            {error && <p className='red'>{error}</p>}
                        </div>
                        <div className="username">
                            <label htmlFor='register-username'>Username: </label>
                            <Input 
                                name='user_name'
                                type="text" 
                                required
                                id='register-username'>
                            </Input>
                        </div>
                        <div className="password">
                            <label htmlFor='register-password'>Password: </label>
                            <Input 
                                name='password'
                                type="text" 
                                required
                                id='register-password'>
                            </Input>
                        </div>
                        {/*<div className="confirm-password">
                            <label htmlFor='register-confirm'>Confirm Password: </label>
                            <Input 
                                name='matchPassword'
                                type="text" 
                                required
                                id='confirm-password'
                                validate={[ matchPassword ]}>
                            </Input>
                        </div>*/}
                        <Button type="submit">Register</Button>
                    </form>
                </fieldset>
            </section>
        )
    }
}