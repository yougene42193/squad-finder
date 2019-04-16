import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css'
import Header from './header/header'
import RegistrationRoutes from './routes/RegistrationRoutes';
import LoginRoutes from './routes/LoginRoutes'
import ProfileRoutes from './routes/ProfileRoutes'
import PlayerList from './PlayerList/PlayerList'
import FavoritesList from './FavoritesList/FavoritesList'
import NotFoundPage from './NotFoundPage/NotFoundPage'

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
              component={RegistrationRoutes}
            />
            <Route 
              path='/login'
              component={LoginRoutes}
            />
            <Route 
              path='/profile'
              component={ProfileRoutes}
            />
            <Route 
              path='/favorites'
              component={FavoritesList}
            />
            <Route 
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
