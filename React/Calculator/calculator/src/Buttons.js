import React, { Component } from "react";

export default class Buttons extends Component {
  render() {
    return (
      <div className="calculator">
        <label className="current-calc-label">
          &nbsp; {this.props.currentCalc}
        </label>
        <label className="result-label">&nbsp; {this.props.screenValue}</label>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+"].map(number => {
          return (
            <button
              key={number}
              name={number}
              onClick={event => this.props.addToScreenValue(event)}
            >
              {number}
            </button>
          );
        })}

        <button name="+" onClick={this.props.appendOperator}>
          +
        </button>
        <button name="-" onClick={this.props.appendOperator}>
          -
        </button>
        <button name="*" onClick={this.props.appendOperator}>
          *
        </button>
        <button name="/" onClick={this.props.appendOperator}>
          /
        </button>
        <button name="equals" onClick={this.props.equals}>
          =
        </button>
        <button name="clear" onClick={this.props.clear}>
          Clear
        </button>
      </div>
    );
  }
}
