import axios from 'axios';
import React from 'react';
import authService from '../LoginService/auth.service';
import authHeader from '../LoginService/auth-header';


class GetSpecificTweet extends React.Component {
    constructor(props){
        super(props);
        this.state={
            tweet: [],
        };
    }

    componentDidMount(){
        const users = authService.getCurrentUser();
        axios.get(
            `http://localhost:8080/GetById/${users.id}`,{ headers: authHeader() } )
        .then((result) => {
            console.log(result);
            this.setState({
                tweet: result.data,
            });
          //  console.log(this.state.theatres);
        });
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
          </div>   
))
        return(
            <div>
{cardTweet}
</div>
        )
    }
}
export default GetSpecificTweet;