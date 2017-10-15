import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Fighter } from './components/fighter';
import { FighterList } from './components/fighterList';

class App extends Component {
  fighters = [];

  constructor(props) {
    super(props);
    this.fighters = [];
    let names = ['Bob', 'Joe', 'Jane', 'Jenny'];
    for (var i in names){
      let attack = Math.ceil(Math.random() * 10);
      let defense = Math.ceil(Math.random() * 10);
      let obj = {name: names[i], attack: attack, defense: defense};
      this.fighters.push(obj);
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <FighterList fighters={this.fighters} />
      </div>
    );
  }
}

export default App;
