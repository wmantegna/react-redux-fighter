import React, { Component } from 'react';

import { Fighter } from './components/fighter';
import { FighterForm } from './components/fighterForm';

class App extends Component {
  fighters = [
    {id: 1, name: 'John', attack: 10, defense: 10},
    {id: 2, name: 'Jane', attack: 10, defense: 10}
  ];


  constructor(props) {
    super(props);
    this.state = {
      selectedFighter: undefined
    };

    // bind event handler
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(id) {
    let fighter = this.fighters.find((item) => item.id == id);

    this.setState({selectedFighter: fighter});
  }
  
  render() {
    let fighter = this.state.selectedFighter;

    return (
      <div className="App">
        <FighterForm fighters={this.fighters} onSelect={this.handleSelect} />
        <Fighter fighterObject={fighter} />
      </div>
    );
  }
}

export default App;
