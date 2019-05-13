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
            <div className='header-logged-in'>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/favorites'>Favorites</Link></li>
                <li><Link
                    onClick={this.handleLogoutClick}
                    to='/register'>
                    Logout
                </Link></li>
            </div>
        )
    }

    renderLoginLink() {
        return (
            <div className='header-not-logged-in'>
                <li><Link
                    to='/register'>
                    Register    
                </Link></li>
                <li><Link
                    to='/login'>
                    Log in    
                </Link></li>
            </div>
        )
    }

    render() {
        return (
            <section className="top-header">
                <nav role="navigation">
                    {/* Swap the render Links when complete */}
                    {TokenService.hasAuthToken()
                        ? this.renderLogoutLink()
                        : this.renderLoginLink()}
                </nav>
                <header>
                    <h1><Link to='/list'>Squad Finder</Link></h1>
                </header>
            </section>
        )
    }
}