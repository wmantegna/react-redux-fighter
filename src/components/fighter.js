import React from 'react';

export class Fighter extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.id} - {this.props.name}</h3>
        <strong>Attack: </strong> {this.props.attack}<br />
        <strong>Defense: </strong> {this.props.defense}
      </div>
    );
  }
}