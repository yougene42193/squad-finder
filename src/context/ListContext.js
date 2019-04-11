import React, { Component } from 'react'

const PlayerListContext = React.createContext({
    playerList: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setPlayerList: () => {},
})
export default PlayerListContext

export class PlayerListProvider extends Component {
    state = {
        playerList: [],
        error: null,
    };

    setPlayerList = playerList => {
        this.setState({ playerList })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    render() {
        const value = {
            playerList: this.state.playerList,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setPlayerList: this.setPlayerList,
        }
        return (
            <PlayerListContext.Provider value={value}>
                {this.props.children}
            </PlayerListContext.Provider>
        )
    }
}