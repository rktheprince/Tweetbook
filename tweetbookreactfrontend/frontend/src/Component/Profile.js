import axios from "axios";
import React from "react";

class Profile extends React.Component{
    state = {
        username: this.props.username,
        user: []
    }

    componentDidMount(){
        const url = `http://localhost:8081/user/GetByUsername/${this.state.username}`
        axios.get(url).then((response) => {
            this.setState({
                user: response.data
            })
        });
    }
    render(){
        return(
            <div>{this.props.username}</div>
        )
    }
}

export default Profile;