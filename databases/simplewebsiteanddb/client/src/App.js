import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './containers/add_user'
import ShowUsers from './containers/show_users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to our Users App</h1>
        </header>
        <AddUser/>
        <ShowUsers/>
      </div>
    );
  }
}

export default App;
