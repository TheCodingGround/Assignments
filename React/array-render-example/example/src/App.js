import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import People from './People';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
          people: [
            {name:"Johannes", surname: "Mokgokong", balance:1},
            {name:"Mary", surname: "Mafa", balance:1000},
            {name:"Cindy", surname: "Mahlangu", balance:101},
            {name:"Vuyisile", surname: "Weni", balance:102},
            {name:"Mercy", surname: "Mncube", balance:100},
            {name:"Sabelo", surname: "Msibi", balance:100},
            {name:"Moral", surname: "Jera", balance:100}
        ]
        };
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
        <People people={this.state.people} addToScreenValue={this.addToScreenValue} screenValue={this.state.screenValue}/>
      </div>
    );

  }
}

export default App;
