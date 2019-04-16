import React from 'react';
import ApiService from '../services/api-service'
import './ProfilePage.css';

export default class ProfilePage extends React.Component {
    static defaultProps = {
        onProfileSuccess: () => {}
    }

    state = { error: null }


    handleSubmit = e => {
        e.preventDefault()
        const { profile_name, platform, game, region, playstyle } = e.target

        this.setState({ error: null })
        ApiService.postUser({
            profile_name: profile_name.value,
            platform: platform.value,
            game: game.value,
            region: region.value,
            playstyle: playstyle.value,
        })
            .then(user => {
                profile_name.value = ''
                platform.value = ''
                game.value = ''
                region.value = ''
                playstyle.value = ''
                this.props.onProfileSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })  
    }
/*
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            platform: '',
            game: '',
            region: '',
            playstyle: ''
        }

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePlatformChange = this.handlePlatformChange.bind(this);
        this.handleGameChange = this.handleGameChange.bind(this);
        this.handleRegionChange = this.handleRegionChange.bind(this);
        this.handlePlaystyleChange = this.handlePlaystyleChange.bind(this);
    }
    state = {
        selected: null,
        hasError: false
    };

    handleUserChange(event) {
        this.setState({
            username: event.target.value,
        })
    }

    handlePlatformChange(event) {
        this.setState({
            platform: event.target.value,
        })
    }

    handleGameChange(event) {
        this.setState({
            game: event.target.value,
        })
    }

    handleRegionChange(event) {
        this.setState({
            region: event.target.value,
        })
    }

    handlePlaystyleChange(event) {
        this.setState({
            playstyle: event.target.value
        })
    }
    
    handleClick() {
        this.setState({ hasError: false });
        if (!this.state.selected) {
            this.setState({ hasError: true })
        }
    }
*/
    render() {
        return(
            <section className="profile-page">
                <fieldset>
                    <form 
                        className="profile-form"
                        onSubmit={this.handleSubmit}>
                        <h2 className="profile">Profile</h2>
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
                        <div className="playstyle">
                            <label>Playstyle: </label>
                            <select name="playstyle" required>
                                <option value=''>-Select Playstyle-</option>
                                <option value='Casual'>Casual</option>
                                <option value='Semi-Hardcore'>Semi-Hardcore</option>
                                <option value='Hardcore'>Hardcore</option>
                            </select>
                        </div>
                        <button type="submit">Confirm</button>
                    </form>
                </fieldset>
            </section>
        )
    }
}