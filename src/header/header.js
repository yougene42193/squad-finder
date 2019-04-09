import React from 'react';
import './header.css'

export default class Header extends React.Component {
    render() {
        return (
            <section className="header">
                <nav role="navigation">
                    <li><a href='#'>Profile</a></li>
                    <li><a href='#'>Favorites</a></li>
                    <li><a href='#'>Logout</a></li>
                </nav>
                <header>
                    <h1>Squad Finder</h1>
                </header>
            </section>
        )
    }
}