import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMarkdown from 'react-markdown';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {source : ''}
  }

  handleChange(e){
    const name = e.target.name;
    const value = e.target.value;

    const newState = this.state;
    newState[name] = value;

    this.setState(newState)
  }

  handleSourceChange(e){
    this.setState({source : e.target.value})
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <textarea name='source' rows={9} onChange={(e) => this.handleChange(e)} />
        <ReactMarkdown source={this.state.source} />
      </div>
    );
  }
}

export default App;
