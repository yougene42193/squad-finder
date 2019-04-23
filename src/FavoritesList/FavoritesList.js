import React from 'react';
import ListContext from '../context/ListContext'
import ApiService from '../services/api-service'
import config from '../config'
import './FavoritesList.css';

export default class FavoritesList extends React.Component {
    static defaultProps = {
        onDeleteNote: () => {},
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
    
        fetch(`${config.API_ENDPOINT}/api/favorites/${profileId}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          },
        })
          .then(res => {
            if (!res.ok)
              return res.json().then(e => Promise.reject(e))
              window.location.reload();
          })
          .then(() => {
            this.context.deleteNote(profileId)
            this.props.onDeleteNote(profileId)
          })
          .catch(error => {
            console.error({ error })
          })
      }

    renderFavorites() {
        const { playerList = [] } = this.context
        return playerList.map(player =>
            <tr className="list-item" key={player.id}>
                <td>{player.profile_name}</td>
                <td>{player.platform}</td>
                <td>{player.game}</td>
                <td>{player.region}</td>
                <td>{player.playstyle}</td>
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
                                : this.renderFavorites()}
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
}