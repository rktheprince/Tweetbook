import axios from 'axios';
import React from 'react';
import authService from '../LoginService/auth.service';
import authHeader from '../LoginService/auth-header';


class FollowersUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            followers: [],
            user: []
        }
    }

    componentDidMount=()=>{
        const users = authService.getCurrentUser();
        // axios.get(`http://localhost:2211/getfriend/following/${this.props.match.params.id}`)
        axios.get(`http://18.218.227.249:8081/getfriend/follower/${users.id}`, { headers: authHeader() })

            .then((result) => {
                this.setState({
                    followers: result.data
                })
                console.log(this.state.followers.length)
            }).catch((error) => {
                alert(JSON.stringify("error: " + error));
            });

    }

    handleClick1 = () => {
        const users = authService.getCurrentUser();
        // axios.get(`http://localhost:2211/getfriend/following/${this.props.match.params.id}`)
        axios.get(`http://18.218.227.249:8081/getfriend/follower/${users.id}`, { headers: authHeader() })

            .then((result) => {
                this.setState({
                    followers: result.data
                })
                console.log(this.state.followers.length)
            }).catch((error) => {
                alert(JSON.stringify("error: " + error));
            });

    }


    render() {
        //this.state.following.map((list,index)=>{return <li> {index+1}  {list} </li>  })
        var followersList = this.state.followers.map((list, index) => {
            return (
                list === "No user is following you" ? <tr><td style={{fontSize:"medium"}}>No user is following you</td></tr> :
                    <tr key={index}>
                        {/* <td>{index+1}</td> */}
                        <td style={{fontSize:"medium"}}>@{list}</td>
                   
                    </tr>)
        })
        return (
            <div>
  
                <table className="table table-striped table-bordered">
                    <thead>
                        
                    </thead>
                    <tbody>
                        {followersList}
                    
                    </tbody>
                </table>

    

            </div>
        )
    }
}
export default FollowersUser;