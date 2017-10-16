import React from 'react';

import { Fighter } from './fighter';

export class FighterForm extends React.Component {
  nodes;

  constructor(props) {
    super(props);
    this.state = { 
      selectedFighter: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.options = props.fighters.map((fighter) => {
      return <option value={fighter.id}>{fighter.name}</option>;
    });

  }

  handleChange(event) {
    this.setState({selectedFighter: event.target.value});
  }
  handleSubmit(event) {
    alert('Selected Fighter: ' + this.state.selectedFighter);
    this.props.onSelect(this.state.selectedFighter);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your Fighter:
          <select value={this.state.selectedFighter} onChange={this.handleChange}>
            {this.options}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}