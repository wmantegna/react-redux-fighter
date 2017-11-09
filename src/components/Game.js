import React from 'react'
import { connect } from 'react-redux';

import Fighter from './Fighter';

let Game = ({myFighter, computer}) => {
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
            <td><Fighter {...myFighter} /></td>
            <td><Fighter {...computer} /></td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
}

const mapStateToProps = state => {
  // return {};
  console.log(state);
  return {
    myFighter: state.myFighter,
    computer: state.game.computer
  }
}
const mapDispatchToProps = dispatch => {
  return {};
  // return {
  //   onTodoClick: id => {
  //     dispatch(toggleTodo(id))
  //   }
  // }
}

Game = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default Game