import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './containers/Users'
import Books from './containers/Books'

function App() {
  return (
    <div className="App">
      <Users />
      <Books />
    </div>
  );
}

export default App;
