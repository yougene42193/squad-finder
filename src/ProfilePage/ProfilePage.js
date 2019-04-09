import React from 'react';
import './ProfilePage.css';

export default class ProfilePage extends React.Component {
    render() {
        return(
            <section className="profile-page">
                <fieldset>
                    <form className="profile-form">
                        <h2 className="profile">Profile</h2>
                        <div classname="username">
                            <label>Username: </label>
                            <input type="text" required />
                        </div>
                        <div className="platform">
                            <label>Platform: </label>
                            <select>
                                <option>-Select Platform-</option>
                                <option>Xbox One</option>
                                <option>Playstation 4</option>
                                <option>PC</option>
                            </select>
                        </div>
                        <div className="game">
                            <label>Game: </label>
                            <select>
                                <option>-Select Game-</option>
                                <option>Apex Legends</option>
                                <option>COD: Blackout</option>
                                <option>Fornite</option>
                                <option>PUBG</option>
                            </select>
                        </div>
                        <div className="region">
                            <label>Region: </label>
                            <select>
                                <option>-Select Region-</option>
                                <option>NA</option>
                                <option>EU</option>
                                <option>EUW</option>
                                <option>AS</option>
                                <option>BRZ</option>
                            </select>
                        </div>
                        <div className="playstyle">
                            <label>Playstyle: </label>
                            <select>
                                <option>-Select Playstyle-</option>
                                <option>Casual</option>
                                <option>Semi-Hardcore</option>
                                <option>Hardcore</option>
                            </select>
                        </div>
                        <button type="submit">Confirm</button>
                    </form>
                </fieldset>
            </section>
        )
    }
}