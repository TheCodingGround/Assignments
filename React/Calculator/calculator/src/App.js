import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Buttons from "./Buttons";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCalc: "",
      currentTotal: 0,
      screenValue: "",
      name: "",
      surname: ""
    };

    this.addToScreenValue = this.addToScreenValue.bind(this);
    this.setInput = this.setInput.bind(this);
  }

  plus() {
    var newState = this.state;
    newState.currentCalc =
      newState.currentCalc + Number(this.state.screenValue).toString() + "+";
    this.setState({ ...newState });
    this.clear();
  }

  equals() {
    var currentCalc = this.state.currentCalc + this.state.screenValue;
    var calcResult = eval(currentCalc);

    this.setState({
      screenValue: calcResult,
      currentCalc: currentCalc
    });
  }

  addToScreenValue(event) {
    event.preventDefault();

    var newState = this.state;
    newState.screenValue += event.target.name;
    this.setState(newState);
  }

  setInput(e) {
    var state = this.state;

    state[e.target.name] = e.target.value;

    this.setState({ ...state });
  }

  clear() {
    this.setState({ screenValue: "" });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Welcome to our Calculator. Happy Calculating
          </h1>
        </header>
        <Buttons
          clear={() => this.clear()}
          currentCalc={this.state.currentCalc}
          addToScreenValue={this.addToScreenValue}
          screenValue={this.state.screenValue}
          plus={() => this.plus()}
          equals={() => this.equals()}
        />
      </div>
    );
  }
}

export default App;
