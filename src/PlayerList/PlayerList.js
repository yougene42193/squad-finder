import React from 'react';
import Filters from '../Filters/Filters'
import ListContext from '../context/ListContext'
import ApiService from '../services/api-service'
import './PlayerList.css';

export default class PlayerList extends React.Component {
    static contextType = ListContext

    componentDidMount() {
        this.context.clearError()
        ApiService.getUsers()
            .then(this.context.setPlayerList)
            .catch(this.context.setError)
    }

    renderPlayers() {
        const { playerList = [] } = this.context
        return playerList.map(player =>
            <tr className="list-item" key={player.id}>
                <td>{player.profile_name}</td>
                <td>{player.platform}</td>
                <td>{player.game}</td>
                <td>{player.region}</td>
                <td>{player.playstyle}</td>
                <td><a href="/">Add +</a></td>
            </tr>
        )
    }

    render() {
        const { error } = this.context
        return (
            <section className="player-list">
                <Filters />
                <div className="user-list">
                    <h2>List</h2>
                    <div className="list-container">
                        <table>
                            <tr>
                                <th>Username</th>
                                <th>Platform</th>
                                <th>Game</th>
                                <th>Region</th>
                                <th>Playstyle</th>
                                <th> </th>
                            </tr>
                            {error
                                ? <p className="error-msg">There was an error, try again</p>
                                : this.renderPlayers()}
                        </table>
                    </div>
                </div>
            </section>
        )
    }
}