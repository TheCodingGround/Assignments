import React, {Component} from 'react';
import IncrementCounter from './IncrementCounter';
import {connect} from 'react-redux';

class ShowCounter extends Component {
    render(){
        return (<div>{this.props.counter}</div>);
    }
}

const mapStateToProps = (state) => {
    return {counter: state.incrementCounter.counter}
}

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowCounter);