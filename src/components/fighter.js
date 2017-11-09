import React from 'react'

const Fighter = ({ id, name, health, attack, defense }) => {
  return (
    <div>
      <h3>{id} - {name}</h3>
      <strong>Health: </strong> {health}<br />
      <strong>Attack: </strong> {attack}<br />
      <strong>Defense: </strong> {defense}
    </div>
  );
}

export default Fighter