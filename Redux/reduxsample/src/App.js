import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IncrementCounter from './components/IncrementCounter';
import ShowCounter from './components/ShowCounter';
import HalfCurrentCounter from './components/halfCurrentCounter'

class App extends Component {
  render() {
    return (
      <div>
        <IncrementCounter />
        <ShowCounter />
        <HalfCurrentCounter />
      </div>
    );
  }
}

export default App;