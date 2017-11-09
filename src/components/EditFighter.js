import React from 'react';
import EditStat from './EditStat';

let EditFighter = ({ id, name, health, attack, defense, skillPoints }) => (
  <div>
    <h3>{id} - {name}</h3>
    <EditStat stat="health" value={health} />
    <EditStat stat="attack" value={attack} />
    <EditStat stat="defense" value={defense} />
    <strong>Points Left:</strong> {skillPoints} points
  </div>
)

export default EditFighter