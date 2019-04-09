import React, { Component } from 'react';
import './App.css'
import Header from './header/header'
//import RegistrationForm from './RegistrationForm/RegistrationForm';
//import LoginForm from './LoginForm/LoginForm'
//import ProfilePage from './ProfilePage/ProfilePage'
//import PlayerList from './PlayerList/PlayerList'
import FavoritesList from './FavoritesList/FavoritesList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FavoritesList />
      </div>
    );
  }
}

export default App;
