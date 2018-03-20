import React, { Component } from 'react';

export default class Buttons extends Component {

    constructor(props){
        super(props)
        console.log('the constructor for buttons has been called');
    }

    componentWillMount(){
        console.log("buttons will mount");
    }

    componentDidMount(){
        console.log("buttons did mount");
    }

  render(){
    console.log('buttons is rendering');

    var people = [
      { name: 'Mary', surname: "Mafa", balance:10 },
      { name: "Mark", surname: "Weni", balance:20 },
      { name: "Johannes", surname: "Mokgokong", balance: 1000 }
    ];

    return (
        <div className="calculator">
        {
          <table>
            <thead>
              <tr>
                <th>
                  Name
          </th>
                <th>
                  Surname
          </th>
                <th>
                  Balance
          </th>
              </tr>
            </thead>
            <tbody>

            {
              people.map(p => 
              <tr>
                <td>{p.name}</td>
                <td>{p.surname} </td>
                <td>{p.balance} </td>
              </tr>
              )
            }
            </tbody>
          </table>

        }

        <div>Total value: {people.reduce((acc, val) => acc + val.balance, 0)}</div>


        <label className="result-label">&nbsp; {this.props.screenValue}</label>
        {

          [1,2,3,4,5, 6, 7, 8, 9].map(number =>
                                      {
          return <button name={number} onClick={(event) => this.props.addToScreenValue(event)}>{number}</button>;
                                      }
                                     )}

            <button name="plus">+</button>
            <button name="equals">=</button>
            <button name="clear">Clear</button>
        </div>
    );
  }
}