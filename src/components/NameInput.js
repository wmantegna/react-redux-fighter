import React from 'react'
import { connect } from 'react-redux'
import { updateFighterName } from '../actions'
import Chance from 'chance';
let chance = new Chance();

let NameInput = ({ dispatch, id }) => {
  let input
  let name = chance.first();
  dispatch(updateFighterName(id, name));

  return (
    <div>
      <strong>Name: </strong>
      <input 
        ref={node => { input = node }} 
        value={name}
        onBlur={() => { dispatch(updateFighterName(id, input.value)) }}
      />
    </div>
  )
}

NameInput = connect()(NameInput)

export default NameInput