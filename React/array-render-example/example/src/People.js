import React, { Component } from 'react';

const BoldCell = (props) => {
  return (<td style={{margin:10, fontWeight:"bold"}}>{props.value}</td>);
}

const NormalCell = (props) => {
  return (<td style={{margin:10}}>{props.value}</td>);
}

export default class People extends Component {

  getPeopleRows(){
    return this.props.people.map(p => 
              <tr key={p.name}>
                <BoldCell value={p.name} />
                <BoldCell value={p.surname}/>
                <NormalCell value={p.balance}/>
              </tr>
              );
  }

  render(){
    return (
        <div>
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
              {this.getPeopleRows()}
            </tbody>
          </table>

        }

        <div>Total value: {this.props.people.reduce((acc, val) => acc + val.balance, 0)}</div>
      </div>
    );
  }
}