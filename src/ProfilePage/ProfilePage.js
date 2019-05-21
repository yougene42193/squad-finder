import React from 'react';
import Popup from '../popup/popup';
import ApiService from '../services/api-service'
import './ProfilePage.css';

export default class ProfilePage extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = { showPop: false };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }*/

    static defaultProps = {
        onProfileSuccess: () => {}
    }

    state = { error: null, success: null }


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
            .then(res => {
                profile_name.value = ''
                platform.value = ''
                game.value = ''
                region.value = ''
                this.setState({ success: res.success })
                this.props.onProfileSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error, showPopup: false })
            })  
    }

    render() {
        const { success } = this.state
        return(
            <section className="profile-page">
                <fieldset>
                    <form 
                        className="profile-form"
                        onSubmit={this.handleSubmit}>
                        <div className="success">{success && <p className="error-msg">Success</p>}</div>
                        <div className="username">
                            <label>Username: </label>
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
                                <option value='AS'>AS</option>
                                <option value='BRZ'>BRZ</option>
                            </select>
                        </div>
                        <button className="profile-confirm"type="submit">Confirm</button>
                        {/*{this.state.showPopup ?
                            <Popup 
                                text='Success'
                                closePopup={this.togglePopup.bind(this)}
                            />
                            : null
                        }*/}
                    </form>
                </fieldset>
            </section>
        )
    }
}