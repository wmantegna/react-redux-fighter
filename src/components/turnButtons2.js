import React from 'react'
import { connect } from 'react-redux';

// import { takeTurn } from '../actions'
import { takeTurnAndUpdateFighters } from '../actions'

let TurnButtons = ({fighter1, fighter2, onAttack, onReflect}) => {
  return (
    <div>
      <button onClick={ () => onAttack(fighter1, fighter2) }>
        Attack
      </button>
      
      <button onClick={ () => onReflect(fighter1, fighter2) }>
        Reflect
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
      onAttack: (fighter1, fighter2) => dispatch(takeTurnAndUpdateFighters('ATTACK', fighter1, fighter2)),
      onReflect: (fighter1, fighter2) => dispatch(takeTurnAndUpdateFighters('REFLECT', fighter1, fighter2))
  };
};

TurnButtons = connect(null, mapDispatchToProps)(TurnButtons)

export default TurnButtons