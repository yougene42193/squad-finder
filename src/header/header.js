import React from 'react';
import { Link } from 'react-router-dom'
import './header.css'

export default class Header extends React.Component {
    render() {
        return (
            <section className="header">
                <nav role="navigation">
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='/favorites'>Favorites</Link></li>
                    <li><Link to='/register'>Logout</Link></li>
                </nav>
                <header>
                    <h1><Link to='/'>Squad Finder</Link></h1>
                </header>
            </section>
        )
    }
}