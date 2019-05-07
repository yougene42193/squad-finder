import React from 'react';
//import Filters from '../Filters/Filters'
import PlayerListContext from '../context/ListContext'
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

    static contextType = PlayerListContext

    componentDidMount() {
        this.context.clearError()
        ApiService.getUsers()
            .then(this.context.setPlayerList)
            .catch(this.context.setError)
    }

    filterPlayers = (playerFilter) => {
        let filteredPlayers = this.state.players
        filteredPlayers = filteredPlayers.filter((player) => {
            let playerName = player.platform.toLowerCase()
        })
    }

    handleAdd = () => {

    }

    search = event => {
        const { playerList = [] } = this.context
        event.preventDefault();
        if (event.target.value) {
            let filtered = playerList.filter(item => {
                return (
                    item.id === event.target.value ||
                    item.profile_name.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.platform.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.game.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.region.toLowerCase().includes(event.target.value.toLowerCase())
                )
            })
            this.setState({
                ...this.state,
                searchString: event.target.value,
                playerList: filtered
            })
        } else {
            this.setState({
                ...this.state,
                playerList: this.state.orignalList,
                searchString: '',
                idString: ''
            })
        }
    }

    renderPlayers() {
        const { playerList = [] } = this.context
        return playerList.map(player =>
            <tr className="list-item" id={player.id} key={player.id}>
                <td>{player.profile_name}</td>
                <td value={player.platform}>{player.platform}</td>
                <td value={player.game}>{player.game}</td>
                <td value={player.region}>{player.region}</td>
                <td><a href="/">Add +</a></td>
            </tr>
        )
    }

    render() {
        const { error } = this.context
        const {
            searchString
        } = this.state
        return (
            <section className="player-list">
                <div className="filters">
                    <h2>Filters</h2>
                    <input
                        type="search"
                        value={searchString}
                        onChange={this.search}
                        placeholder="Search filter"
                    />
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