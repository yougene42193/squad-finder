import React from 'react';
import './LoginForm.css';

export default class LoginForm extends React.Component {
    render() {
        return (
            <section className="login-form">
                <fieldset>
                    <form className="register-section">
                        <h2 className="register">Log In</h2>
                        <div className="username">
                            <label>Username: </label>
                            <input type="text" required />
                        </div>
                        <div className="password">
                            <label>Password: </label>
                            <input type="text" required />
                        </div>
                        <button type="submit">Log in</button>
                    </form>
                </fieldset>
            </section>
        )
    }
}