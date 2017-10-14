import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Fighter } from './components/fighter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <Fighter name="bob" />
        
      </div>
    );
  }
}

export default App;
