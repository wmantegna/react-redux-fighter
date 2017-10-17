import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Fighter } from './components/fighter';
// import { FighterList } from './components/fighterList';
import { FighterForm } from './components/fighterForm';

class App extends Component {
  fighters = [];

  constructor(props) {
    super(props);
    this.state = {
      selectedFighter: null
    };

    this.generateFighters();

    // bind event handler
    this.handleSelect = this.handleSelect.bind(this);
  }

  generateFighters() {
      this.fighters = [];

      let names = ['Bob', 'Joe', 'Jane', 'Jenny'];
      for (var i in names) {
          let attack = Math.ceil(Math.random() * 10);
          let defense = Math.ceil(Math.random() * 10);
          let obj = { id: (parseInt(i, 10) + 10), name: names[i], attack: attack, defense: defense };
          this.fighters.push(obj);
      }
  }

  handleSelect(id) {
    // base case for '' value, meaning no option was selected
    if (isNaN(id)){
      return;
    }

    id = parseInt(id, 10);
    let fighter = this.fighters.find((item) => item.id === id);

    this.setState({selectedFighter: fighter});
  }
  
  generateFighterComponent(fighter) {
    let obj = null;

    if (fighter){
      obj = <Fighter 
        id={fighter.id}
        name={fighter.name}
        attack={fighter.attack}
        defense={fighter.defense} 
      />
    }
    
    return obj;
  }

  render() {
    let fighter = this.state.selectedFighter;
    let fighterHtml = this.generateFighterComponent(fighter);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <FighterList fighters={this.fighters} /> */}
        <FighterForm fighters={this.fighters} onSelect={this.handleSelect} />
        {fighterHtml}
        
      </div>
    );
  }
}

export default App;
