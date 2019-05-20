import React from 'react';
import ListContext from '../context/ListContext'
import ApiService from '../services/api-service'
import './FavoritesList.css';

export default class FavoritesList extends React.Component {
    static defaultProps = {
        onDeleteFavorite: () => {},
    }

    static contextType = ListContext

    componentDidMount() {
        this.context.clearError()
        ApiService.getFavorites()
            .then(this.context.setPlayerList)
            .catch(this.context.setError)
    }

    handleClickDelete = e => {
        e.preventDefault()
        const profileId = this.props.id
    
        ApiService.deleteFavorite(profileId)
      }

    renderFavorites() {
        const { playerList = [] } = this.context
        return playerList.map(player =>
            <tr className="list-item" key={player.id}>
                <td>{player.profile_name}</td>
                <td>
                    <button 
                        type="delete" 
                        onClick={this.handleDelete}
                    >
                    Delete -
                    </button>
                </td>
            </tr>
        )
    }
    render() {
        const { error } = this.context
        return (
            <section className="favorites-list">
                <h2>Favorites</h2>
                <div className="list-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {error
                                ? <p className="error-msg">There was an error, try again</p>
                                : this.renderFavorites()}
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
}