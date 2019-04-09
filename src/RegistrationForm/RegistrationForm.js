import React from 'react';
import './RegistrationForm.css'

export default class RegistrationForm extends React.Component {
    render() {
        return (
            <section className="register-form">
                <fieldset>
                    <form className="register-section">
                        <h2 className="register">Register</h2>
                        <div className="username">
                            <label>Username: </label>
                            <input type="text" required />
                        </div>
                        <div className="password">
                            <label>Password: </label>
                            <input type="text" required />
                        </div>
                        <div className="confirm-password">
                            <label>Confirm Password: </label>
                            <input type="text" required />
                        </div>
                        <button>Register</button>
                    </form>
                </fieldset>
            </section>
        )
    }
}