import React, { Component } from 'react'
import UserService from '../LoginService/user.service'
import axios from 'axios';
import authHeader from '../LoginService/auth-header'

class ShowAllUSers extends Component {
    constructor(props) {
        super(props)

        this.state = {
                user1: [],
        }
       // this.addEmployee = this.addEmployee.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(user_id){
        UserService.delete(user_id).then( res => {
            this.setState({user1: this.state.user1.filter(user => user.user_id !== user_id)});
        });
    }
    viewUser(user_id){
        this.props.history.push(`/viewuser/${user_id}`);
    }
    editUser(user_id){
        this.props.history.push(`/updateuser/${user_id}`);
    }

    componentDidMount(){
        axios.get(
            `http://localhost:8081/user/ListAllUsers`,{ headers: authHeader() } )
        .then((result) => {
            console.log(result);
            this.setState({
                user1: result.data,
            });
            console.log(this.state.user_id);
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Users List</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> User Id</th>
                                    <th> Useranme</th>
                                    <th> First Name</th>
                                    <th> Last Name</th>
                                    <th> Email Id</th>
                                    <th> Phone no</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.user1.map(
                                        u1 => 
                                        <tr>
                                        <td>{u1.user_id}</td>
                                             <td> {u1.username} </td>   
                                             <td> {u1.first_name} </td>   
                                             <td> {u1.last_name}</td>
                                             <td> {u1.email_id}</td>
                                             <td> {u1.phone_no} </td>   
                                             <td>
                                                 <button onClick={ () => this.editUser(u1.user_id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(u1.user_id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(u1.user_id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ShowAllUSers