import React from 'react'

const Fighter = ({ id, attack, defense, healthLeft }) => {
  return (
    <div>
      <strong>Fighter {id}</strong><br />
      <strong>Health: </strong> {healthLeft}<br />
      <strong>Attack: </strong> {attack}<br />
      <strong>Defense: </strong> {defense}
    </div>
  );
}

export default Fighter