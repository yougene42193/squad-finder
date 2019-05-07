import React from 'react'

export default class Filters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            platformFilter: ""
            /*gameFilter: "",
            regionFilter: "",
        }
    }

    handleChange = (e) => {
        this.setState({
            platformFilter: e.target.value
            /*gameFilter: e.target.value,
            regionFilter: e.target.value,
        })
    }

    render() {
        return (
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
                    <div className="filter-buttons">
                        <button>Filter</button>
                        <button>Clear</button>
                    </div>
                </div>
        )
    }
}