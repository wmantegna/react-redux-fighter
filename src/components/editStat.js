import React from 'react';
import { connect } from 'react-redux';

import { updateFighter } from '../actions'

let EditStat = ({ dispatch, id, stat, value }) => {
  let statName = stat.charAt(0).toUpperCase() + stat.slice(1);

  return (
    <div>
      <strong>{statName}: </strong> {value}
      <button onClick={() => {
        dispatch(updateFighter(id, stat, 1))
      }}>
        +
      </button>
    </div>
  );
}

EditStat = connect()(EditStat);

export default EditStat