import React, {Component} from 'react'
import axios from 'axios';

export default class AddUser extends Component {
    constructor(props){
        super(props)
        this.state = {name:'', surname:'',email:'',userAdded:false}
    }

    setInputValue(e){
        const name = e.target.name;
        const value = e.target.value;
        const state = this.state;
        state[name] = value;

        this.setState({...state});
    }

    saveUser(){
        var user = this.state;

        axios.post('http://localhost:3000/users',user).then((res) => {
            console.log(res);
            this.setState({userAdded:true});
        });
    }
    render(){
        if (this.state.userAdded)return (<div>User Added</div>);

        return (<div>
            <h3>Add a User</h3>
            <label>Name</label><input name="name" value={this.state.name} onChange={(e) => this.setInputValue(e)} />
            <label>Surname</label><input name="surname" value={this.state.surname} onChange={(e) => this.setInputValue(e)} />
            <label>Email</label><input name="email" value={this.state.email} onChange={(e) => this.setInputValue(e)} />
            <button onClick={() => this.saveUser()}>Save</button>
            </div>)
    }

}