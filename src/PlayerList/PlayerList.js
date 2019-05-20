import React from 'react';
import PlayerListContext from '../context/ListContext'
import ApiService from '../services/api-service'
import './PlayerList.css';


// Import React Table
import ReactTable from "react-table";

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

    renderPlayers() {
        const { playerList = [] } = this.context
        return playerList.map(player =>
            <tr className="list-item" id={player.id} key={player.id}>
                <td>{player.profile_name}</td>
                <td value={player.platform}>{player.platform}</td>
                <td value={player.game}>{player.game}</td>
                <td value={player.region}>{player.region}</td>
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
                    noDataText="No results, try again"
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
                                ? String(row[id].toLowerCase()).indexOf(filter.value.toLowerCase()) > -1
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
    }
}