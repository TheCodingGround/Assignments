import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './Buttons';

class App extends Component {
    constructor(props){
        super(props)
        console.log('the constructor for app has been called');
        this.state = {currentTotal: 0, screenValue: ""};

        this.addToScreenValue = this.addToScreenValue.bind(this);
    }

    componentWillMount(){
        console.log("App will mount");
    }

    componentDidMount(){
        console.log("App did mount");
    }
    

    addToScreenValue(event){
        event.preventDefault();

        var newState = this.state;
        newState.screenValue += event.target.name;
        this.setState(newState);
    }


  render() {
      console.log('Component is rendering');
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
