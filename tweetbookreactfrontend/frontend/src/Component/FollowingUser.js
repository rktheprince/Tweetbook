import axios from 'axios';
import React from 'react';
import authService from '../LoginService/auth.service';
import authHeader from '../LoginService/auth-header';

class FollowingUser extends React.Component{

    constructor(props){
        super(props);
        this.state={
            message:'',
            following:[],
            user:[]
        }
    }

    componentDidMount=()=>{
        const users=authService.getCurrentUser();
        console.log(users);
        console.log(users.id)

        // axios.get(`http://localhost:2211/getfriend/following/${this.props.match.params.id}`)
        axios.get(`http://18.218.227.249:8081/getfriend/following/${users.id}`,{headers:authHeader()})

        .then((result)=>{
            this.setState({
                following:result.data
            })
console.log(this.state.following.length)
        })
    }
    
handleName=(event)=>{

    console.log(event)
        axios.get('http://18.218.227.249:8081/user/GetByUsername/'+event,{headers:authHeader()})
        .then((response)=>{
            this.setState({
                user:response.data
            })
            
            console.log(this.state.user.user_id)
             this.unFollow();
        
        }) .catch((error) => {
            alert(JSON.stringify("error: " + error));
          });
        
}
    unFollow=()=>{
        const users=authService.getCurrentUser();
        var m= this.state.user.user_id;
        console.log("---------------------"+m)
        //   console.log(`http://localhost:8081/getfriend/unfollowing/`+this.state.user.user_id,{headers:authHeader()})
        axios.delete(`http://18.218.227.249:8081/getfriend/unfollowing/${users.id}/${this.state.user.user_id}`,{headers:authHeader()})
        .then((result)=>{
            this.setState({
                message:result.data
            })
            window.location.reload()
console.log(this.state.message)
alert(this.state.message)
        }).catch((error) => {
            alert(JSON.stringify("error: " + error));
          });
    }



    render(){
        //this.state.following.map((list,index)=>{return <li> {index+1}  {list} </li>  })
        var followingList= this.state.following.map((list,index)=>{
            return (
                list==="You are not following user"?<tr><td style={{fontSize:"medium"}}>You are not following user</td></tr>:
            <tr key={index}>
                {/* <td>{index+1}</td> */}
                <td style={{fontSize:"medium"}}> @{list}</td>
                <td><button onClick={() => this.handleName(list)} className="btn btn-info">Unfollow </button></td>
            </tr>  )})
        return(
            <div>
  
 <table className="table table-striped table-bordered">
                        <thead>
                            
                            </thead>
                            <tbody>
                                {followingList}
                            </tbody>
                            </table>

                   

            </div>
        )
    }
}
export default FollowingUser;