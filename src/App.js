import React from 'react'
import { connect } from 'react-redux';

import './App.css'

import Fighter from './components/Fighter';
import EditFighter from './components/EditFighter';

const mapStateToProps = state => {
  return {
    myFighter: state.myFighter
  }
}

let App = ({ myFighter }) => {
  let fighter;
  if (myFighter.skillPoints > 0){
    fighter = <EditFighter {...myFighter} />;
  } else {
    fighter = <Fighter {...myFighter} />;
  }

  return (
    <div>
    <h1>Fighters</h1>
    {fighter}
  </div>
  );
}

App = connect(mapStateToProps)(App);
export default App;
