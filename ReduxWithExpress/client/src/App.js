import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './containers/add-user'

class App extends Component {
  render() {
    return (
      <div>
      <AddUser />
      </div>
    );
  }
}

export default App;