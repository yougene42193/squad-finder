import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css'
import Header from './header/header'
import landingPage from './landingPage/landingPage'
import RegistrationRoutes from './routes/RegistrationRoutes';
import LoginRoutes from './routes/LoginRoutes'
import ProfileRoutes from './routes/ProfileRoutes'
import PlayerList from './PlayerList/PlayerList'
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
              component={landingPage}
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
              path='/list'
              component={PlayerList}
            />
            <Route 
              path='/profile'
              component={ProfileRoutes}
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
