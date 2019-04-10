import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css'
import Header from './header/header'
import RegistrationForm from './RegistrationForm/RegistrationForm';
import LoginForm from './LoginForm/LoginForm'
import ProfilePage from './ProfilePage/ProfilePage'
import PlayerList from './PlayerList/PlayerList'
import FavoritesList from './FavoritesList/FavoritesList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route 
              exact path='/'
              component={PlayerList}
            />
            <Route 
              path='/register'
              component={RegistrationForm}
            />
            <Route 
              path='/login'
              component={LoginForm}
            />
            <Route 
              path='/profile'
              component={ProfilePage}
            />
            <Route 
              path='/favorites'
              component={FavoritesList}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
