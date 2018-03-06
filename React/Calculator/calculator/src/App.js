import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    constructor(props){
        super(props)
        this.state = {currentTotal: 0, screenValue: ""};
    }



    addToScreenValue(event){
        event.preventDefault();

        var newState = this.state;
        newState.screenValue += event.target.name;
        this.setState(newState);
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to our Calculator. Happy Calculating</h1>
        </header>
        <p className="calculator">
            <label className="result-label">{this.state.screenValue}</label>
            <button name="1" onClick={(event) => this.addToScreenValue(event)}>1</button>
            <button name="2" onClick={(event) => this.addToScreenValue(event)}>2</button>
            <button name="3" onClick={(event) => this.addToScreenValue(event)}>3</button>
            <button name="4" onClick={(event) => this.addToScreenValue(event)}>4</button>
            <button name="5" onClick={(event) => this.addToScreenValue(event)}>5</button>
            <button name="6" onClick={(event) => this.addToScreenValue(event)}>6</button>
            <button name="7" onClick={(event) => this.addToScreenValue(event)}>7</button>
            <button name="8" onClick={(event) => this.addToScreenValue(event)}>8</button>
            <button name="9" onClick={(event) => this.addToScreenValue(event)}>9</button>
            <button name="plus">+</button>
            <button name="equals">=</button>
            <button name="clear">Clear</button>
        </p>
      </div>
    );
  }
}

export default App;
