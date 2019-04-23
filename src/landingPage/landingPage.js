import React from 'react'
import './landingPage.css'

export default class RegistrationForm extends React.Component {
    render() {
        return (
            <section className="register-form">
                <p>Squad finder helps you find others that play the same battle royale game and to team up with each other</p>
                <h3>Demo</h3>
                <p>username: demouser1</p>
                <p>password: Password1!</p>
                <p>or you can register an account.</p>
            </section>
        )
    }
}