import React, { Component } from 'react';
import CreateProfile from '../createProfile/createProfile'
import { Section } from '../utils/utils';

export default class CreateProfileRoutes extends Component {
    static defaultProps = {
        history: {
          push: () => {},
        },
    }

    handleCreateSuccess = user => {
        const { history } = this.props
        history.push('/login')
    }

    render() {
        return (
            <Section className="ProfilePage">
                <h2>Create Profile</h2>
                <CreateProfile 
                    onProfileSuccess={this.handleCreateSuccess}
                />
            </Section>
        )
    }
}