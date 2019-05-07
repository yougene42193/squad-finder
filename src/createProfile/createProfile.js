import React from 'react';
import ApiService from '../services/api-service'
import './createProfile.css';

export default class CreateProfile extends React.Component {
    static defaultProps = {
        onProfileSuccess: () => {}
    }

    state = { error: null }


    handleSubmit = e => {
        e.preventDefault()
        const { profile_name, platform, game, region } = e.target

        this.setState({ error: null })
        ApiService.postUser({
            profile_name: profile_name.value,
            platform: platform.value,
            game: game.value,
            region: region.value,
        })
            .then(user => {
                profile_name.value = ''
                platform.value = ''
                game.value = ''
                region.value = ''
                this.props.onProfileSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })  
    }

    render() {
        return(
            <section className="profile-page">
                <fieldset>
                    <form 
                        className="profile-form"
                        onSubmit={this.handleSubmit}>
                        <h2 className="profile">Create Profile</h2>
                        <div className="username">
                            <label>Profile Name: </label>
                            <input type="text" name="profile_name" required />
                        </div>
                        <div className="platform">
                            <label>Platform: </label>
                            <select name="platform" required>
                                <option value=''>-Select Platform-</option>
                                <option value='Xbox One'>Xbox One</option>
                                <option value='Playstation 4'>Playstation 4</option>
                                <option value='PC'>PC</option>
                            </select>
                        </div>
                        <div className="game">
                            <label>Game: </label>
                            <select name="game" required>
                                <option value=''>-Select Game-</option>
                                <option value='Apex Legends' name="Apex Legends">Apex Legends</option>
                                <option value='COD Blackout' name="COD Blackout">COD Blackout</option>
                                <option value='Fortnite' name="Fortnite">Fornite</option>
                                <option value='PUBG' name="PUBG">PUBG</option>
                            </select>
                        </div>
                        <div className="region">
                            <label>Region: </label>
                            <select name="region" required>
                                <option value=''>-Select Region-</option>
                                <option value='NA'>NA</option>
                                <option value='EU'>EU</option>
                                <option value='EUW'>EUW</option>
                                <option value='AS'>AS</option>
                                <option value='BRZ'>BRZ</option>
                            </select>
                        </div>
                        <button type="submit">Confirm</button>
                    </form>
                </fieldset>
            </section>
        )
    }
}