import React from 'react';
import './PlayerList.css';

export default class PlayerList extends React.Component {
    render() {
        return (
            <section className="player-list">
                <div className="filters">
                    <h2>Filters</h2>
                    <select className="platforms">
                        <option>-Filter Platform-</option>
                        <option>Xbox One</option>
                        <option>Playstation 4</option>
                        <option>PC</option>
                    </select>
                    <select className="games">
                        <option>-Filter Games-</option>
                        <option>Apex Legends</option>
                        <option>COD Blackout</option>
                        <option>Fortnite</option>
                        <option>PUBG</option>
                    </select>
                    <select className="regions">
                        <option>-Filter Region-</option>
                        <option>NA</option>
                        <option>EU</option>
                        <option>EUW</option>
                        <option>AS</option>
                        <option>BRZ</option>
                    </select>
                    <select className="playstyle">
                        <option>-Filter Playstyle-</option>
                        <option>Casual</option>
                        <option>Semi-Hardcore</option>
                        <option>Hardcore</option>
                    </select>
                    <div className="filter-buttons">
                        <button>Filter</button>
                        <button>Clear</button>
                    </div>
                </div>
                <div className="user-list">
                    <h2>List</h2>
                    <div class='list-container'>
                        <table>
                            <tr>
                                <th>Username</th>
                                <th>Platform</th>
                                <th>Game</th>
                                <th>Region</th>
                                <th>Playstyle</th>
                                <th> </th>
                            </tr>
                            <tr class='list-item'>
                                <td>XboxPlayer1</td>
                                <td>Xbox One</td>
                                <td>Fortnite</td>
                                <td>NA</td>
                                <td>Hardcore</td>
                                <td><button class='add-button'>Add</button></td>
                            </tr>
                            <tr class='list-item'>
                                <td>PCMasterRace1</td>
                                <td>PC</td>
                                <td>Apex Legends</td>
                                <td>EU</td>
                                <td>Casual</td>
                                <td><button class='add-button'>Add</button></td>
                            </tr>
                            <tr class='list-item'>
                                <td>PS4player1</td>
                                <td>Playstation 4</td>
                                <td>COD Blackout</td>
                                <td>NA</td>
                                <td>Casual</td>
                                <td><button class='add-button'>Add</button></td>
                            </tr>
                            <tr class='list-item'>
                                <td>Player1</td>
                                <td>Playstation 4</td>
                                <td>Fortnite</td>
                                <td>EU</td>
                                <td>Semi-Hardcore</td>
                                <td><button class='add-button'>Add</button></td>
                            </tr>
                            <tr class='list-item'>
                                <td>Player2</td>
                                <td>Xbox One</td>
                                <td>PUBG</td>
                                <td>EU</td>
                                <td>Casual</td>
                                <td><button class='add-button'>Add</button></td>
                            </tr>
                            <tr class='list-item'>
                                <td>Player3</td>
                                <td>PC</td>
                                <td>PUBG</td>
                                <td>NA</td>
                                <td>Hardcore</td>
                                <td><button class='add-button'>Add</button></td>
                            </tr>
                            <tr class='list-item'>
                                <td>Player4</td>
                                <td>Xbox One</td>
                                <td>Apex Legends</td>
                                <td>NA</td>
                                <td>Casual</td>
                                <td><button class='add-button'>Add</button></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
        )
    }
}