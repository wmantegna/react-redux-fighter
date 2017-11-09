import React from 'react'
import PropTypes from 'prop-types'
import Fighter from './Fighter'

const FighterList = ({ fighters, onFighterClick }) => (
  <div>
    <h2>Fighter List</h2>
    {fighters.map(fighter => (
      <Fighter key={fighter.id} {...fighter} onClick={() => onFighterClick(fighter.id)} />
    ))}
  </div>
)

FighterList.propTypes = {
  fighters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      attack: PropTypes.number.isRequired,
      defense: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
}

export default FighterList