import React from 'react';

export class FighterForm extends React.Component {
  selectedId = '';

  constructor(props) {
    super(props);

    // bind event handler
    this.handleChange = this.handleChange.bind(this);

    this.generateOptions(props);
  }

  generateOptions(props) {
      this.options = props.fighters.map((fighter) => {
        return (
          <option key={fighter.id} value={fighter.id.toString()}>
            {fighter.name}
          </option>
        );
      });
  }

  handleChange(event) {
    this.selectedId = event.target.value;
    this.props.onSelect(this.selectedId);
  }

  render() {
    return (
      <div>
        Pick your Fighter:  
        <select value={this.selectedId} onChange={this.handleChange}>
          <option value=''>--</option>
          {this.options}
        </select>
      </div>
    );
  }
}