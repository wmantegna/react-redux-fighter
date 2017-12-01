import React from 'react';

import EditStat from './editStat';
import NameInput from './nameInput';

let EditFighter = ({ fighter }) => {
  let id = fighter.id;
  
  return (
    <div>
      <h3>Pick Your Stats!</h3>
      <NameInput id={id} />
      <EditStat stat="health" id={id} value={fighter.health} />
      <EditStat stat="attack" id={id} value={fighter.attack} />
      <EditStat stat="defense" id={id} value={fighter.defense} />
      <strong>Points Left:</strong> {fighter.skillPoints} points
    </div>
  );
}

export default EditFighter