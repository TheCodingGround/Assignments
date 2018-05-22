import React, {Component} from 'react';
import { connect } from 'react-redux'
import { increment } from '../redux/incrementCounter'

class IncrementCounter extends Component {
    constructor(props){
        super(props)
        this.state = {incrementCounter: 0};
    }

    setCounter(e){
        this.setState({ incrementCounter: +e.target.value })
    }

    render() {
        return (
            <div>
            <input type="number" value={this.state.incrementCounter} onChange={(e)=> this.setCounter(e)}/>
            <button onClick={() => this.props.increment(this.state.incrementCounter)}>Increment</button>
        </div>);


    }

}

const mapstatetoprops = state => ({
})

const mapdispatchtoprops = dispatch => ({
    increment: (valuetoincrement) => dispatch(increment(valuetoincrement))
})

  export default connect(
    mapstatetoprops,
    mapdispatchtoprops
  )(IncrementCounter)