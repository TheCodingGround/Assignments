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

    async getUsers(){
        try{
        const { data } = await axios('http://localhost:3000/users');
        console.log('users response is',data);
        this.setState({
          users:data
        });
        }catch(e){
            console.error("could not get users", e);
        }
    }

    render(){
        return (<div>
            <h3>Users</h3>
            {this.state.users.map(u => {
                return <div>{u.name} {u.surname} {u.email}</div>
            })}
            </div>)
    }
}