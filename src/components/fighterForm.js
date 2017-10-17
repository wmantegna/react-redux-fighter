import React from 'react';

export class FighterForm extends React.Component {
  nodes;

  constructor(props) {
    super(props);
    this.state = { 
      selectedId: ''
    };

    // bind event handlers
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.generateOptions(props);
  }

  generateOptions(props) {
      this.options = props.fighters.map((fighter) => {
          return <option key={fighter.id} value={fighter.id.toString()}>{fighter.name}</option>;
      });
  }

  handleChange(event) {
    this.setState({selectedId: event.target.value});
  }
  handleSubmit(event) {
    this.props.onSelect(this.state.selectedId);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your Fighter:
          <select value={this.state.selectedId} onChange={this.handleChange}>
            <option>--</option>
            {this.options}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}