import React from 'react';
import { connect } from 'react-redux';

import { updateMyFighter } from '../actions'

let EditStat = ({ dispatch, stat, value }) => {
  let statName = stat.charAt(0).toUpperCase() + stat.slice(1);

  return (
    <div>
      <strong>{statName}: </strong> {value}
      <button onClick={() => {
        dispatch(updateMyFighter(stat, 1))
      }}>
        +
      </button>
    </div>
  );
}

EditStat = connect()(EditStat);

export default EditStat