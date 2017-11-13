import React from 'react';

import EditStat from './EditStat';
import NameInput from './NameInput';

let EditFighter = ({ id, name, health, attack, defense, skillPoints }) => (
  <div>
    <h3>Pick Your Stats!</h3>
    <NameInput id={id} />
    <EditStat stat="health" id={id} value={health} />
    <EditStat stat="attack" id={id} value={attack} />
    <EditStat stat="defense" id={id} value={defense} />
    <strong>Points Left:</strong> {skillPoints} points
  </div>
)

export default EditFighter