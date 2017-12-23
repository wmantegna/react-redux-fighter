import React from 'react'
import { connect } from 'react-redux';

import './App.css'

import EditFighter from './components/editFighter';
import Game from './components/game';

let App = ({ fighters }) => {
  let fighter;
  let myFighter = fighters[0];

  if (myFighter.skillPoints > 0){
    fighter = <EditFighter fighter={myFighter} />;
  } else {
    fighter = <Game />;
  }

  return (
    <div>
      <h1>Fighters</h1>
      <hr />
      {fighter}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    fighters: state.fighters
  }
}

App = connect(mapStateToProps, null)(App);

export default App;
