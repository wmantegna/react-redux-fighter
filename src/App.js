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
      sayHi: 'hello world',
      selectedFighter: null
    };

    // generate fighter data
    this.fighters = [];
    let names = ['Bob', 'Joe', 'Jane', 'Jenny'];
    for (var i in names){
      let attack = Math.ceil(Math.random() * 10);
      let defense = Math.ceil(Math.random() * 10);
      let obj = {id: i, name: names[i], attack: attack, defense: defense};
      this.fighters.push(obj);
    }
  }

  handleSelect(fighter) {
    // alert('handleSelect: ' + fighter);
    this.setState({selectedFighter: fighter});
    alert('state.selectedFighter='+this.state.selectedFighter);
  }
  
  selectedFighter() {
    let fighter = this.state.selectedFighter;
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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>{this.state.sayHi}</h1>
        {/* <FighterList fighters={this.fighters} /> */}
        <FighterForm fighters={this.fighters} onSelect={this.handleSelect} />
        {this.selectedFighter()}
        
      </div>
    );
  }
}

export default App;
