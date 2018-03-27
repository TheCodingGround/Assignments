import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMarkdown from 'react-markdown';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {source : ''}
  }

  handleSourceChange(name, value){
    var newState = this.state;
    newState[name] = value;
    this.setState(...newState)
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <textarea name='source' rows={9} onChange={(e) => this.handleSourceChange(e.target.name, e.target.value)} />
        <ReactMarkdown source={this.state.source} />
      </div>
    );
  }
}

export default App;
