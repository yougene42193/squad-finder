import React, { Component } from 'react';
import './App.css'
import Header from './header/header'
import RegistrationForm from './RegistrationForm/RegistrationForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RegistrationForm />
      </div>
    );
  }
}

export default App;
