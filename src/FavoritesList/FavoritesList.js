import React from 'react';
import './FavoritesList.css';

export default class FavoritesList extends React.Component {
    render() {
        return (
            <section className="favorites-list">
                <h2>Favorites</h2>
                <div class="list-container">
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
                            <td><button class='add-button'>Remove</button></td>
                        </tr>
                        <tr class='list-item'>
                            <td>Player2</td>
                            <td>Xbox One</td>
                            <td>PUBG</td>
                            <td>EU</td>
                            <td>Casual</td>
                            <td><button class='add-button'>Remove</button></td>
                        </tr>
                        <tr class='list-item'>
                            <td>Player4</td>
                            <td>Xbox One</td>
                            <td>Apex Legends</td>
                            <td>NA</td>
                            <td>Casual</td>
                            <td><button class='add-button'>Remove</button></td>
                        </tr>
                    </table>
                </div>
            </section>
        )
    }
}