import React from 'react'

const Fighter = ({ attack, defense, health }) => {
  return (
    <div>
      <strong>Health: </strong> {health}<br />
      <strong>Attack: </strong> {attack}<br />
      <strong>Defense: </strong> {defense}
    </div>
  );
}

export default Fighter