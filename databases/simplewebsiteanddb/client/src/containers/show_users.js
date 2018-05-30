import React, {Component} from 'react'
import axios from 'axios';

export default class ShowUsers extends Component {
    constructor(props){
        super(props)
        this.state = {users:[]}
    }

    componentWillMount(){
        this.getUsers();
    }

    getUsers(){

        axios('http://localhost:3000/users').then((res) => {
            console.log(res);
            const users = res;
            this.setState({users});
        });
    }
    render(){
        return (<div>
            <h3>Users</h3>
            {this.state.users.map(u => {
                <div>{u.name} {u.surname} {u.email}</div>
            })}
            </div>)
    }
}