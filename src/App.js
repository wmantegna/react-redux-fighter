import React from 'react'
import { connect } from 'react-redux';

import './App.css'

import Fighter from './components/Fighter';

const mapStateToProps = state => {
  return {
    myFighter: state.myFighter
  }
}

let App = ({ myFighter }) => (
  <div>
    <h1>Fighters</h1>
    <Fighter {...myFighter} />
  </div>
);

App = connect(mapStateToProps)(App);
export default App;
