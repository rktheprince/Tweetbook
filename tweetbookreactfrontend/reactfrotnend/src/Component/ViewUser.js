import React, { Component } from 'react'
//import EmployeeService from '../services/EmployeeService'
import UserService from '../LoginService/user.service'

class ViewUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user_id: this.props.match.params.user_id,
            user1: {}
        }
    }

    componentDidMount(){
        UserService.get(this.state.user_id).then( res => {
            this.setState({user1: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View User Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> User UserName: </label>
                            <div> { this.state.user1.username }</div>
                        </div>
                        <div className = "row">
                            <label> User First Name: </label>
                            <div> { this.state.user1.first_name }</div>
                        </div>
                        <div className = "row">
                            <label> User Last Name: </label>
                            <div> { this.state.user1.last_name }</div>
                        </div>
                        <div className = "row">
                            <label> user Email ID: </label>
                            <div> { this.state.user1.email_id }</div>
                        </div>
                        <div className = "row">
                            <label> User phone_no: </label>
                            <div> { this.state.user1.phone_no }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewUser