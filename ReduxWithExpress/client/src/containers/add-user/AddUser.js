import React, { Component } from 'react'


export default class AddUser extends Component {
    constructor(props){
        super(props)

        this.state = {
          name: '',
          surname: '',
          email: ''
        }
    }

    input(e){
        const state = this.state
        const { name, value } = e.target
        state[name] = value
        this.setState({ ...state })
    }

    render(){
        const { onSubmit, isSaving, isSaved, reset, id } = this.props

        if (isSaved){
            return (<div><h3>Your reference is: {id}</h3>
                <button onClick={() => reset()}>Ok</button>
                </div>)
        }

        return (<div>
          <h3>Add User</h3>

          <input onChange={(e) => this.input(e)} type="text" placeholder="name" name="name" />
          <input onChange={(e) => this.input(e)} type="text" placeholder="surname" name="surname" />
          <input onChange={(e) => this.input(e)} type="email" placeholder="email" name="email" />

          { !isSaving 
            && <button onClick={() => onSubmit(this.state)}>Add</button>
         }
          { isSaving && <div>Saving...</div> }
       
        </div>)
    }
}