import React, { Component } from 'react'
import UserService from '../LoginService/user.service'
import axios from 'axios';
import authHeader from '../LoginService/auth-header'
import { LaptopWindows } from '@material-ui/icons';

class AdminShowAllUsers extends Component {
    constructor(props) {
        super(props)

        this.state = {
                user1: [],
        }
       
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(user_id){
        UserService.delete(user_id).then( res => {
            this.setState({user1: this.state.user1.filter(user => user.user_id !== user_id)});
            window.location.reload();
            alert("User deleted Succesfully")
        }).catch((error) => {
            alert(JSON.stringify("error: " + error));
        });
    }
   

    componentDidMount(){
        axios.get(
            `http://localhost:8080/user/ListAllUsers`,{ headers: authHeader() } )
        .then((result) => {
            console.log(result);
            this.setState({
                user1: result.data,
            });
        }).catch((error) => {
            alert(JSON.stringify("error: " + error));
        });
    }

    render() {
        let alluser= this.state.user1.map(
            u1 => 
            <tr style={{color:"white", fontSize:"medium"}} key={u1.user_id}>
            <td>{u1.user_id}</td>
                 <td> {u1.username} </td>   
                 <td> {u1.first_name} </td>   
                 <td> {u1.last_name}</td>
                 <td> {u1.email_id}</td>
                 <td> {u1.phone_no} </td>   
                 <td>
                     <button style={{marginLeft: "10px", width:"60px", height:"30px", fontSize:"small", lineHeight:"0px"}} onClick={ () => this.deleteUser(u1.user_id)} className="btn btn-danger">Delete </button>
                 </td>
            </tr>
        )
        return (
            <div>
                 <h2 className="text-center" style={{fontSize:"x-large", margin:"30px 0px"}}>Users List</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered" style={{color:"white", fontSize:"medium", width:"90vw", margin:"0px auto"}}>

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
                            <tbody style={{color:"white"}}>
                                {alluser}
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default AdminShowAllUsers;