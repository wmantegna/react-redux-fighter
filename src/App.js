import React from 'react'
import { connect } from 'react-redux';

import './App.css'

import EditMyFighter from './components/EditMyFighter';
import Game from './components/Game';

const mapStateToProps = state => {
  return {
    myFighter: state.myFighter
  }
}

let App = ({ myFighter }) => {
  let fighter;
  if (myFighter.skillPoints > 0){
    fighter = <EditMyFighter {...myFighter} />;
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

App = connect(mapStateToProps)(App);
export default App;
