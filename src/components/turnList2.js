import React from 'react'
import { connect } from 'react-redux';

import Turn from './turn'

let TurnList = ({ turns }) => {
  let history = <span>No turns have been taken yet!</span>;
  if (turns.length > 0){
    history = <ol>
      {turns.map(turn => (
        <Turn key={turn.id} {...turn} />
      ))}
    </ol>;
  }
  
  return (
    <div>
    <h2>Turn History</h2>
    {history}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    turns: state.turns
  }
}

TurnList = connect(mapStateToProps, null)(TurnList)

export default TurnList