import React from 'react'

const generateSubList = (fighter) => {
  if (fighter.damage > 0){
    return <li><strong>{fighter.name}</strong> takes <strong>{fighter.damage}</strong> damage!</li>;
  } else {
    return undefined;
  }
}

const Turn = ({ description, fighter1, fighter2 }) => {
  let subList = undefined;
  let fighter1Damage = generateSubList(fighter1);
  let fighter2Damage = generateSubList(fighter2);
  
  if (fighter1Damage || fighter2Damage){
    subList = <ul>
        {fighter1Damage}
        {fighter2Damage}
      </ul>;
  }


  return (
    <li>
      {description}
      {subList}
    </li>
  );
}

export default Turn