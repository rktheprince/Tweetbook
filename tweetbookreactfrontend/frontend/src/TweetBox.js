import React, { useState } from "react";
import "./TweetBox.css";

import axios from "axios";
import authHeader from './LoginService/auth-header';
import authService from './LoginService/auth.service';
class TweetBox extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    {
      tweet_id: 0,
      tweet_content: "",
      like_count: 0,
      comment_count: 0,
      created_at: null,
      updated_at: null,
      TweetAddError:"",
      user: [],
      currentuser: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  componentDidMount() {
    // const user= AuthService.getCurrentUser();
    const user = authService.getCurrentUser();
    this.setState({
      currentuser: user
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const user = authService.getCurrentUser();

    console.log(this.state.tweet_content)
    console.log(user.id)
    console.log(this.state.currentuser.id)
   if(this.state.tweet_content.trim()==="")
    {
      // this.setState({
      //     TweetAddError:"The field is empty"
      // })
      // console.log(this.state.TweetAddError);
      alert("This field is required");
    }
    else{

    
    await axios
      .post(`http://18.218.227.249:8081/AddTweet`, {
        tweet_content: this.state.tweet_content,
        like_count: this.state.like_count,
        comment_count: this.state.comment_count,
        user: {
          user_id: user.id
        }
      }, { headers: authHeader() }).then((response) => {
        window.location.reload()
        console.log(
          "Tweet added for User Id :" + this.state.currentuser.id
        );
        alert(
          "Tweet added for User Id :" + this.state.currentuser.id
        );
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }
}
  render() {
    return (
      <div style={{padding:"10px"}}>
      <div className="tweetBox" style={{borderRadius:"15px", backgroundColor:"#192734"}}>
        <form onSubmit={this.handleSubmit}>
          <div className="tweetBox__input">
            {/* <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" /> */}
            <input style={{borderRadius:"15px", padding:"10px", marginRight:"20px", width:"200px"}}
              //onChange={(e) => this.handleChange(e.target.value)}

              value={this.state.tweet_content} onChange={(event) => this.setState({ tweet_content: event.target.value })}
              placeholder="What's happening?"
              type="text"
            />
            <p>{this.state.TweetAddError}</p>

            <button style={{borderRadius:"15px", width:"100px"}} type="submit" className="btn "
            >
              <b>Add Tweet</b>
            </button>



          </div>
        </form>
      </div>
      <hr />
      </div>
    );


  }
}

export default TweetBox;
