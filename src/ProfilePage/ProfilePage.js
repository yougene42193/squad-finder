import React from 'react';
import './ProfilePage.css';

export default class ProfilePage extends React.Component {
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

    render() {
        return(
            <section className="profile-page">
                <fieldset>
                    <form className="profile-form">
                        <h2 className="profile">Profile</h2>
                        <div className="username">
                            <label>Username: </label>
                            <input type="text" value={this.state.username} onChange={this.handleUserChange} required />
                        </div>
                        <div className="platform">
                            <label>Platform: </label>
                            <select value={this.state.platform} onChange={this.handlePlatformChange} required>
                                <option value=''>-Select Platform-</option>
                                <option value='xb'>Xbox One</option>
                                <option value='ps'>Playstation 4</option>
                                <option value='pc'>PC</option>
                            </select>
                        </div>
                        <div className="game">
                            <label>Game: </label>
                            <select value={this.state.game} onChange={this.handleGameChange} required>
                                <option value=''>-Select Game-</option>
                                <option value='AL'>Apex Legends</option>
                                <option value='COD'>COD: Blackout</option>
                                <option value='FN'>Fornite</option>
                                <option value='PUBG '>PUBG</option>
                            </select>
                        </div>
                        <div className="region">
                            <label>Region: </label>
                            <select value={this.state.region} onChange={this.handleRegionChange} required>
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
                            <select value={this.state.playstyle} onChange={this.handlePlaystyleChange} required>
                                <option value=''>-Select Playstyle-</option>
                                <option value='CS'>Casual</option>
                                <option value='SM'>Semi-Hardcore</option>
                                <option value='HC'>Hardcore</option>
                            </select>
                        </div>
                        <button type="submit" onClick={() => this.handleClick()}>Confirm</button>
                    </form>
                </fieldset>
            </section>
        )
    }
}