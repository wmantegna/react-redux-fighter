import React from 'react'
import { connect } from 'react-redux';

import Fighter from './fighter';
import TurnButtons from './turnButtons';
import TurnList from './turnList';

let Game = ({fighter1, fighter2}) => {
  return (
    <div>
      <h2>Let the games begin!</h2>
      <table>
        <tbody>
          <tr>
            <td>You</td>
            <td>Computer</td>
          </tr>
          <tr>
            <td><Fighter {...fighter1} /></td>
            <td><Fighter {...fighter2} /></td>
          </tr>
          <tr>
            <td>
              <TurnButtons fighter1={fighter1} fighter2={fighter2} />
            </td>
          </tr>
        </tbody>
      </table>

      <TurnList />
      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    fighter1: state.fighters[0],
    fighter2: state.fighters[1]
  }
}

Game = connect(mapStateToProps, null)(Game)

export default Game