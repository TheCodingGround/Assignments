import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './Buttons';

class App extends Component {
    constructor(props){
        super(props)
        console.log('the constructor for app has been called');
        this.state = {
            currentTotal: 0,
            screenValue: "",
            name: '',
            surname: ''
        };

        this.addToScreenValue = this.addToScreenValue.bind(this);
        this.setInput = this.setInput.bind(this);
    }
    

    addToScreenValue(event){
        event.preventDefault();

        var newState = this.state;
        newState.screenValue += event.target.name;
        this.setState(newState);
    }

    setInput(e){
        var state = this.state;

        state[e.target.name] = e.target.value;

        this.setState({...state});
    }


  render() {
      console.log('current state', this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to our Calculator. Happy Calculating</h1>
        </header>
        <Buttons addToScreenValue={this.addToScreenValue} screenValue={this.state.screenValue}/>
        
      </div>
    );
  }
}

export default App;
