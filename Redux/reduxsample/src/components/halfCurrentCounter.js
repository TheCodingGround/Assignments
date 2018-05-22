import React, {Component} from 'react'
import {connect} from 'react-redux'
import {halfCounter, increment} from '../redux/incrementCounter'

class HalfCurrentCounter extends Component {
    render(){
        return <button onClick={()=>this.props.half()}>Half Current Counter</button>;
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = dispatch => ({
    half: () => dispatch(halfCounter())
});

export default connect(mapStateToProps,mapDispatchToProps)(HalfCurrentCounter)