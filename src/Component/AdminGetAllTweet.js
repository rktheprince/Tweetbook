import axios from "axios";
import React from "react";

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
            <div class="card">
            <div class="card-body">
              <h5 class="card-title">{tweet.user.first_name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{tweet.created_at.split("T")[0]+" "+tweet.created_at.split("T")[1].split(".")[0]}</h6>
              <p class="card-text">{tweet.tweet_content}</p>
              <h6 class="card-subtitle mb-2 text-muted">Like: {tweet.like_count}     Comment: {tweet.comment_count}</h6>
              

            </div>
            <button className="btn btn-danger" onClick={() =>this.deletetweet(tweet.tweet_id)}style={{marginLeft: "5px"}}>Delete</button>

          </div>   
))
        return(
            <div>
                {/* <h1><span className="badge badge-light">View Tweets</span> */}
                <h1>View Tweets</h1>
                {cardTweet}

            </div>
        );
    }
}





export default AdminGetAllTweet;