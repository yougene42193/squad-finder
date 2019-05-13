import React from 'react';
//import Filters from '../Filters/Filters'
import PlayerListContext from '../context/ListContext'
import ApiService from '../services/api-service'
import './PlayerList.css';
import Select from "react-select";


// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class PlayerList extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
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

    onFilteredChangeCustom = (value, accessor) => {
        let filtered = this.state.filteredPlayers;
        let insertNewFilter = 1;

        if (filtered.length > 0) {
            filtered.forEach((filter, i) => {
                if (filter["id"] === accessor) {
                    if (value === "" || !value.length) filtered.splice(i, 1);
                    else filter["value"] = value;

                    insertNewFilter = 0;
                }
            })
        }
        if (insertNewFilter) {
            filtered.push({ id: accessor, value: value });
        }

        this.setState({ filtered: filtered });
    }

    /*filterPlayers = (playerFilter) => {
        let filteredPlayers = this.state.players
        filteredPlayers = filteredPlayers.filter((player) => {
            let playerName = player.platform.toLowerCase()
        })
    }*/

    handleAdd = () => {

    }

    /*search = event => {
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
    }*/

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
        const { playerList = [] } = this.context;
        return (
            <section className="player-list">
                <h2>Player List</h2>
                <ReactTable 
                    data={playerList}
                    noDataText="There was an error, try again"
                    filterable
                    filtered={this.state.filtered}
                    onFilteredChange={(filtered, column, value) => {
                        this.onFilteredChangeCustom(value, column.id || column.accessor)
                    }}
                    defaultFilterMethod={(filter, row, column) => {
                        const id = filter.pivotId || filter.id;
                        if (typeof filter.value === "object") {
                            return row[id] !== undefined
                                ? filter.value.indexOf(row[id]) > -1
                                : true;
                        } else {
                            return row[id] !== undefined
                                ? String(row[id]).indexOf(filter.value) > -1
                                : true;
                        }
                    }}
                    columns={[
                        {
                            Header: "Username",
                            accessor: "profile_name"
                        },
                        {
                            Header: "Platform",
                            accessor: "platform",
                            Filter: ({ filter, onChange }) =>
                                <select
                                    onChange={event => onChange(event.target.value)}
                                    style={{ width: "100%" }}
                                    value={filter ? filter.value : "all"}
                                >
                                    <option value="">All</option>
                                    <option value="Xbox One">Xbox One</option>
                                    <option value="Playstation 4">Playstation 4</option>
                                    <option value="PC">PC</option>
                                </select>
                        },
                        {
                            Header: "Game",
                            accessor: "game",
                            Filter: ({ filter, onChange }) =>
                                <select
                                    onChange={event => onChange(event.target.value)}
                                    style={{ width: "100%" }}
                                    value={filter ? filter.value : "all"}
                                >
                                    <option value="">All</option>
                                    <option value="Apex Legends">Apex Legends</option>
                                    <option value="Fortnite">Fortnite</option>
                                    <option value="COD Blackout">COD Blackout</option>
                                    <option value="PUBG">PUBG</option>
                                </select>
                        },
                        {
                            Header: "Region",
                            accessor: "region",
                            Filter: ({ filter, onChange }) =>
                                <select
                                    onChange={event => onChange(event.target.value)}
                                    style={{ width: "100%" }}
                                    value={filter ? filter.value : "all"}
                                >
                                    <option value="">All</option>
                                    <option value="NA">NA</option>
                                    <option value="EU">EU</option>
                                    <option value="AS">AS</option>
                                    <option value="BRZ">BRZ</option>
                                </select>
                        },
                    ]}
                    defaultPageSize={10}
                />
            </section>
        )
        /* 
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
        */
    }
}