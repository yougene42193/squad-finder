import React from 'react';
//import Filters from '../Filters/Filters'
import ListContext from '../context/ListContext'
import ApiService from '../services/api-service'
import './PlayerList.css';

export default class PlayerList extends React.Component {
    constructor() {
        super()
        this.state = {
            players: [],
            filteredPlayers: []
        }
    }

    static contextType = ListContext

    componentDidMount() {
        this.context.clearError()
        ApiService.getUsers()
            .then(this.context.setPlayerList)
            .catch(this.context.setError)
    }

    filterPlayers = (playerFilter) => {

    }

    handleAdd = () => {

    }

    renderPlayers() {
        const { playerList = [] } = this.context
        return playerList.map(player =>
            <tr className="list-item" id={player.id} key={player.id}>
                <td>{player.profile_name}</td>
                <td value={player.platform}>{player.platform}</td>
                <td value={player.game}>{player.game}</td>
                <td value={player.region}>{player.region}</td>
                <td value={player.playstyle}>{player.playstyle}</td>
                <td><a href="/">Add +</a></td>
            </tr>
        )
    }

    render() {
        const { error } = this.context
        return (
            <section className="player-list">
                <div className="filters">
                    <h2>Filters</h2>
                    <select className="platforms" 
                        value={this.state.platformFilter}
                        onChange={this.handleChange}
                    >
                        <option>-Filter Platform-</option>
                        <option value="Xbox One">Xbox One</option>
                        <option value="Playstation 4">Playstation 4</option>
                        <option value="PC">PC</option>
                    </select>
                    <select className="games">
                        <option>-Filter Games-</option>
                        <option value="Apex Legends">Apex Legends</option>
                        <option value="COD Blackout">COD Blackout</option>
                        <option value="Fortnie">Fortnite</option>
                        <option value="PUBG">PUBG</option>
                    </select>
                    <select className="regions">
                        <option>-Filter Region-</option>
                        <option value="NA">NA</option>
                        <option value="EU">EU</option>
                        <option value="EUW">EUW</option>
                        <option value="AS">AS</option>
                        <option value="BRZ">BRZ</option>
                    </select>
                    <select className="playstyle">
                        <option>-Filter Playstyle-</option>
                        <option value="Casual">Casual</option>
                        <option value="Semi-Hardcore">Semi-Hardcore</option>
                        <option value="Hardcore">Hardcore</option>
                    </select>
                    <div className="filter-buttons">
                        <button>Filter</button>
                        <button>Clear</button>
                    </div>
                </div>
                <div className="user-list">
                    <h2>List</h2>
                    <div className="list-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Platform</th>
                                    <th>Game</th>
                                    <th>Region</th>
                                    <th>Playstyle</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {error
                                    ? <p className="error-msg">There was an error, try again</p>
                                    : this.renderPlayers()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        )
    }
}