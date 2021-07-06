// import axios from "axios";
// import React, { Component } from "react";

// import { Link } from 'react-router-dom';

// import authHeader from '../LoginService/auth-header';
// import authService from "../LoginService/auth.service";

// class AddComment extends Component{

//     constructor(props) {
//         super(props);
//         this.state =
//         {
//           comment_id: 0,
//           comment_content: "",
//           created_at: null,
//           tweet:[],
//           // id:this.props.match.params.id
//          // user: [],
//           //currentuser: []
//         }
//         this.handleSubmit = this.handleSubmit.bind(this);
    
//       }
//     //   componentDidMount() {
//     //     // const user= AuthService.getCurrentUser();
//     //     const user = authService.getCurrentUser();
//     //     this.setState({
//     //       currentuser: user
//     //     })
//     //   }
//       handleSubmit = async (event) => {
//         event.preventDefault();
//         const user = authService.getCurrentUser();
    
//         console.log(id);
//         console.log(this.state.comment_content)
//       //  console.log(user.id)
//        // console.log(this.state.currentuser.id)
//     alert(event.tweet.tweet_id);
//        var id= `${this.props.match.params.id}`;

//       //  console.log(id);
//        console.log(event.tweet_id);
//         await axios
//           .post(`http://localhost:8080/AddComment`, {
//             comment_content: this.state.comment_content,
//             tweet: {
//             tweet_id: event.tweet.tweet_id
//             }
//           }, { headers: authHeader() }).then((response) => {
//             console.log(
//               "Comment added for Tweet Id :" + id
//             );
//             alert(
//               "Comment  added for Tweet Id :" + id
//             );
//           })
//           .catch((error) => {
//             alert(error.response.data.message);
//           });      
//       }
//       render() {
//         return (
//           <div className="tweetBox">
//             <form >
//               <div className="tweetBox__input">
//                 {/* <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" /> */}
//                 <input
//                   //onChange={(e) => this.handleChange(e.target.value)}
    
//                   value={this.state.comment_content} onChange={(event) => this.setState({ comment_content: event.target.value })}
//                   placeholder="What's happening?"
//                   type="text"
//                 />
    
//                 <button type="submit" className="btn btn-primary"
//                   onClick={()=>this.handleSubmit(this.props.tweet.tweet_id)}>
//                   Add Comment
//                 </button>
    
    
    
//               </div>
//             </form>
//           </div>
//         );
    
    
//       }
    

// }


// export default AddComment;


import axios from "axios";
import React, { Component } from "react";

import { Link } from 'react-router-dom';

import authHeader from '../LoginService/auth-header';
import authService from "../LoginService/auth.service";

class AddComment extends Component{

    constructor(props) {
        super(props);
        this.state =
        {
          comment_id: 0,
          comment_content: "",
          created_at: null,
          tweet:[]
         // user: [],
          //currentuser: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    
      }
    //   componentDidMount() {
    //     // const user= AuthService.getCurrentUser();
    //     const user = authService.getCurrentUser();
    //     this.setState({
    //       currentuser: user
    //     })
    //   }
    
      handleSubmit = async (event) => {
        event.preventDefault();
        const user = authService.getCurrentUser();
        console.log(this.props.children);
        console.log(this.state.comment_content)
      //  console.log(user.id)
       // console.log(this.state.currentuser.id)
       var id= this.props.children;
      //  console.log(id);
        await axios
          .post(`http://localhost:8080/AddComment`, {
            comment_content: this.state.comment_content,
            tweet: {
            tweet_id: id
            }
          }, { headers: authHeader() }).then((response) => {
            window.location.reload()
            console.log(
              "Comment added for Tweet Id :" + id
            );
            alert(
              "Comment  added for Tweet Id :" + id
            );
          })
          .catch((error) => {
            alert(error.response.data.message);
          });
      }
      render() {
        return (
          <div className="tweetBox">
            <form onSubmit={this.handleSubmit}>
              <div className="tweetBox__input">
                {/* <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" /> */}
                <input style={{border: "2px solid #1da1f2", borderRadius: "15px", padding:"5px"}}
                  //onChange={(e) => this.handleChange(e.target.value)}
    
                  value={this.state.comment_content} onChange={(event) => this.setState({ comment_content: event.target.value })}
                  placeholder="Add a Comment"
                  type="text"
                />
    
                <button type="submit" style={{width:"200px", marginLeft:"10px"}} className="btn btn-primary"
                >
                  Add Comment
                </button>
    
    
    
              </div>
            </form>
          </div>
        );
    
    
      }
    

}


export default AddComment;