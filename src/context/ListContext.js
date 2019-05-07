import React, { Component } from 'react'

const PlayerListContext = React.createContext({
    playerList: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setPlayerList: () => {},
    addUser: () => {},
})
export default PlayerListContext

export class PlayerListProvider extends Component {
    state = {
        playerList: [],
        error: null,
    };

    setUsers = users => {
        this.setState({ users })
    }

    addUser = user => {
        this.setUsers([
            ...this.state.users,
            user
        ])
    }
    setCurrentUser = user => {
        this.setState({ user })
    }
    
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
            setUsers: this.setUsers,
            addUser: this.addUser,
        }
        return (
            <PlayerListContext.Provider value={value}>
                {this.props.children}
            </PlayerListContext.Provider>
        )
    }
}