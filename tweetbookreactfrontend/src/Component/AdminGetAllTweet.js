import axios from "axios";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import '../styles/AdminGetAllTweet.css';

import authHeader from '../LoginService/auth-header';

class AdminGetAllTweet extends React.Component{

    
    constructor(props){
        super(props);
        this.state={
            tweet: [],
        };
    }
    
    componentDidMount(){
        axios.get(
            `http://localhost:8080/GetAllTweet`,{ headers: authHeader() } )
        .then((result) => {
            console.log(result);
            this.setState({
                tweet: result.data,
            });
          //  console.log(this.state.theatres);
        });
    }

    deletetweet=(tweet_id)=>{
        console.log('click')
        
        axios.delete(`http://localhost:8080/Delete/${tweet_id}`,{ headers: authHeader() } )
        .then((result)=>{
            this.setState({ /* */ })

            console.log(result);
            alert("tweet deleted Successfully")
            this.props.history.push("/admin");
        }).catch((error) => {
            alert(JSON.stringify("error: " + error));
        })

    }

    
    render(){
        let cardTweet=this.state.tweet.map(tweet=>(
            <div class="card" style={{margin:"0px auto", marginBottom:"15px"}}>
            <div class="card-body">
              <h5 class="card-title">{tweet.user.first_name}&nbsp;&nbsp;{tweet.user.last_name}</h5>
              <p class="card-title" style={{fontSize:"small"}}>@{tweet.user.username}</p>
              
              <p class="card-text">{tweet.tweet_content}</p>
              <h6 class="card-subtitle mb-2 text-muted" style={{fontSize:"small"}}>{tweet.created_at.split("T")[0]+" "+tweet.created_at.split("T")[1].split(".")[0]}</h6>
              <h6 class="card-subtitle mb-2 text-muted" style={{fontSize:"medium"}}><FontAwesomeIcon icon={faHeart}/> : {tweet.like_count}  &nbsp;&nbsp;&nbsp;   <FontAwesomeIcon icon={faComment}/> : {tweet.comment_count}</h6>
              

            </div>
            <button className="btn btn-danger" onClick={() =>this.deletetweet(tweet.tweet_id)}style={{marginLeft: "5px", fontSize:"small"}}>Delete</button>

          </div>   
))
        return(
            <div>
                {/* <h1><span className="badge badge-light">View Tweets</span> */}
                <h1 style={{fontSize:"x-large", margin:"30px 0px"}}>View Tweets</h1>
                {cardTweet}

            </div>
        );
    }
}





export default AdminGetAllTweet;