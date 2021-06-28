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
    await axios
      .post(`http://localhost:8080/AddTweet`, {
        tweet_content: this.state.tweet_content,
        like_count: this.state.like_count,
        comment_count: this.state.comment_count,
        user: {
          user_id: user.id
        }
      }, { headers: authHeader() }).then((response) => {
        console.log(
          "Tweet added for User Id :" + this.state.currentuser.id
        );
        alert(
          "Tweet not added for User Id :" + this.state.currentuser.id
        );
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }
  render() {
    return (
      <div style={{padding:"30px"}}>
      <div className="tweetBox" style={{borderRadius:"15px", backgroundColor:"#192734"}}>
        <form onSubmit={this.handleSubmit}>
          <div className="tweetBox__input">
            {/* <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" /> */}
            <input style={{borderRadius:"15px", padding:"10px", marginRight:"20px"}}
              //onChange={(e) => this.handleChange(e.target.value)}

              value={this.state.tweet_content} onChange={(event) => this.setState({ tweet_content: event.target.value })}
              placeholder="What's happening?"
              type="text"
            />

            <button style={{borderRadius:"15px"}} type="submit" className="btn "
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
