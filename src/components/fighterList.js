import React, { Component } from 'react';

import { Fighter } from './fighter';

export class FighterList extends React.Component {
  nodes;

  constructor(props) {
    super(props);

    this.nodes = props.fighters.map((fighter) => {
      return <Fighter 
        name={fighter.name}
        attack={fighter.attack}
        defense={fighter.defense} 
      />
    });
  }

  render() {
    return (
      <div>
        <h1>FighterList</h1>
        {this.nodes}
      </div>
    );
  }
}