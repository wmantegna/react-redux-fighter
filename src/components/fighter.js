import React from 'react'

const Fighter = ({ id, name, attack, defense, health, healthLeft }) => {
  return (
    <div>
      <h3>{name}</h3><br />
      <strong>Health: </strong> {healthLeft}/{health}<br />
      <strong>Attack: </strong> {attack}<br />
      <strong>Defense: </strong> {defense}
    </div>
  );
}

export default Fighter