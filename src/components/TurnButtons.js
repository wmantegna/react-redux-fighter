import React from 'react'
import { connect } from 'react-redux';

import { takeTurn } from '../actions'

let TurnButtons = ({dispatch, fighter1, fighter2}) => {
  let commonFunctionProps = [fighter1, fighter2];

  return (
    <div>
      <button onClick={() => { 
        dispatch(takeTurn('ATTACK', ...commonFunctionProps))
      }}>
        Attack
      </button>
      
      <button onClick={() => { 
        dispatch(takeTurn('REFLECT', ...commonFunctionProps))
      }}>
        Reflect
      </button>
    </div>
  );
}

TurnButtons = connect()(TurnButtons)

export default TurnButtons