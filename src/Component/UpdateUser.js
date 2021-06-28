import React, { Component } from 'react'
import UserService from '../LoginService/user.service'
import axios from 'axios';
import authHeader from '../LoginService/auth-header';

class UpdateUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            user_id: this.props.match.params.user_id,
            username: '',
            first_name: '',
            last_name: '',
            email_id: '',
            phone_no:'',
            password:''
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneNoHandler = this.changePhoneNoHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            UserService.get(this.state.user_id).then( (res) =>{
                let user= res.data;
                this.setState({username:user.username,
                    first_name: user.firstName,
                    last_name: user.lastName,
                    emailId : user.emailId,
                    password:user.password,
                    phone_no:user.phone_no
                });
            });
        }        
    }
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = {user_id: this.props.match.params.user_id,
            username: this.state.username,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email_id: this.state.email_id,
            phone_no: this.state.phone_no,
            password: this.state.password};
        console.log('user => ' + JSON.stringify(user));

        // step 5
        // if(this.state.id === '_add'){
        //     UserService.createUser(user).then(res =>{
        //         this.props.history.push('/showallusers');
        //     });
        // }else{
        //     UserService.updateUser(user, this.state.user_id).then( res => {
        //         this.props.history.push('/showallusers');
        //     });
        // }

        // const url = `http://localhost:8080/user/UpdateUser/` + user.user_id;
        // axios.put(url, {user
        // }, { headers: authHeader() })

        UserService.updateUser(user,this.state.user_id)
        .then((responseEmpData) => {this.props.history.push('/showallusers');
            // console.log(responseEmpData);
            // alert("Updated Successfully");
        }).catch((error) => {
            console.log(error);
            console.log("Some error in updating Tweet");
        })
    }

    changeUserNameHandler= (event) => {
        this.setState({username: event.target.value});
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({first_name: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({last_name: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email_id: event.target.value});
    }

    changePhoneNoHandler= (event) => {
        this.setState({phone_no: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    cancel(){
        this.props.history.push('/profile');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Edit Profile</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label style={{ fontSize:15}}> User Id: </label>
                                            <input placeholder="User Id" name="userid" className="form-control" style={{fontSize:15}}
                                                value={this.state.user_id} />
                                        </div>
                                        <div className = "form-group">
                                            <label style={{ fontSize:15}}> User Name: </label>
                                            <input placeholder="User Name" name="username" className="form-control" style={{fontSize:15}}
                                                value={this.state.username} onChange={this.changeUserNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label style={{ fontSize:15}}> First Name: </label>
                                            <input  name="firstName" className="form-control" style={{fontSize:15}}
                                                value={this.state.first_name} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label style={{ fontSize:15}}> Last Name: </label>
                                            <input  name="lastName" className="form-control" style={{fontSize:15}}
                                                value={this.state.last_name} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label style={{ fontSize:15}} > Email Id: </label>
                                            <input name="emailId" className="form-control" style={{fontSize:15}}
                                                value={this.state.email_id} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label style={{ fontSize:15}}> Phone no: </label>
                                            <input placeholder="Phone no" name="phoneno" className="form-control" style={{fontSize:15}} 
                                                value={this.state.phone_no} onChange={this.changePhoneNoHandler}/>
                                        </div>
                                        <br/>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateUser} style={{fontSize:15}}>Save</button>
                                        &nbsp; &nbsp;

                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "30px"}} style={{fontSize:15}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateUser