import React from 'react';
import EditStat from './EditStat';

let EditFighter = ({ id, name, health, attack, defense, skillPoints }) => (
  <div>
    <h3>Pick Your Stats!</h3>
    <strong>Fighter {id}</strong><br />
    <EditStat stat="health" id={id} value={health} />
    <EditStat stat="attack" id={id} value={attack} />
    <EditStat stat="defense" id={id} value={defense} />
    <strong>Points Left:</strong> {skillPoints} points
  </div>
)

export default EditFighter