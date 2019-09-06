
import React, { Component } from 'react';
import { connect } from 'react-redux'

class Books extends Component {
  render(){
    console.log('props', this.props)
    return <div><h1>Books</h1>
      {this.props.availableBooks.map(b => <div key={b.name}>{b.name}</div>)}
      <input type="text" onChange={ e=> this.setState({ name: e.target.value})} />
      <button onClick={() => this.props.addBook(this.state.name)}>Add</button>
    </div>
  }

}

const mapStateToProps = (state) => ({
  availableBooks: state.books.availableBooks,
})

const mapDispatchToProps = dispatch => ({
  addBook: (name) => {
    dispatch({type: "ADD_BOOK", payload: { name }})
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Books)