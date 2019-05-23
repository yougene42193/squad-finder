import React from 'react';
import { Link } from 'react-router-dom'
import TokenService from '../services/token-service'
import './header.css'

export default class Header extends React.Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        window.reload();
    }

    renderLogoutLink() {
        return (
            <div className="loggedin-header">
                <nav role="navigation">
            
                    <div className='header-logged-in'>
                        <li><Link className="nav-header" to='/profile'>Profile</Link></li>
                        <li><Link
                            className="nav-header"
                            onClick={this.handleLogoutClick}
                            to='/'>
                                Logout
                        </Link></li>
                    </div>
                </nav>
                <header>
                    <h1><Link to='/list'>Squad Finder</Link></h1>
                </header>
            </div>
        )
    }

    renderLoginLink() {
        return (
            <div className="loggedout-header">
                <nav role="navigation">
                    <div className='header-not-logged-in'>
                        <li><Link
                            className="nav-header"
                            to='/register'>
                            Register    
                        </Link></li>
                        <li><Link
                            className="nav-header"
                            to='/login'>
                                Log in    
                        </Link></li>
                    </div>
                </nav>
                <header>
                    <h1><Link to='/'>Squad Finder</Link></h1>
                </header>
            </div>
        )
    }

    render() {
        return (
            <section className="top-header">
                {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
            </section>
        )
    }
}