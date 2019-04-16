import React from 'react'

export default class Filters extends React.Component {
    render() {
        return (
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
        )
    }
}