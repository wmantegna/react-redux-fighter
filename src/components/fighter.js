import React from 'react';

export class Fighter extends React.Component {
  render() {
    let fighter = this.props.fighterObject;
    
    if (fighter === undefined){
      return (<h3>No fighter data to display</h3>);
    }

    return (
      <div>
        <h3>{fighter.id} - {fighter.name}</h3>
        <strong>Attack: </strong> {fighter.attack}<br />
        <strong>Defense: </strong> {fighter.defense}
      </div>
    );
  }
}