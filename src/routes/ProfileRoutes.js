import React, { Component } from 'react';
import ProfilePage from '../ProfilePage/ProfilePage'
import { Section } from '../utils/utils';

export default class ProfileRoutes extends Component {
    static defaultProps = {
        history: {
          push: () => {},
        },
    }

    handleProfileSuccess = user => {
        const { history } = this.props
        history.push('/')
    }

    render() {
        return (
            <Section className="ProfilePage">
                <h2>Profile</h2>
                <ProfilePage 
                    onProfileSuccess={this.handleProfileSuccess}
                />
            </Section>
        )
    }
}