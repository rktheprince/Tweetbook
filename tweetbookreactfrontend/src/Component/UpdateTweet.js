import React, { useState } from "react";
import axios from "axios";
import authHeader from "../LoginService/auth-header";
import authService from '../LoginService/auth.service';

class UpdateTweet extends React.Component 
{
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
        
        this.changeTweetContent=this.changeTweetContent.bind(this);
        this.update = this.update.bind(this);
      }
     changeTweetContent(event)
      {
          this.setState({
            tweet_content : event.target.value
          })
      };
      componentDidMount() 
      {
        const users=authService.getCurrentUser();
        // const user= AuthService.getCurrentUser();
        const user = authService.getCurrentUser();
        this.setState({
          currentuser: user
        })
      }

      update(e) 
      {
           e.preventDefault();
            console.log(this.props.match.params.id)
            
         let tweet={
          tweet_id:this.props.match.params.id,
          tweet_content:this.state.tweet_content,
          like_count: this.state.like_count,
          comment_count: this.state.comment_count,
          created_at:89879,
          updated_at:768777,
          user:{
            user_id: this.state.currentuser.id
               }
        }
        console.log(tweet)
        const url = `http://localhost:8081/Update`;
        axios.put(url, {
          // tweet_id:this.props.match.params.id,
          // tweet_content:this.state.tweet_content,
          // like_count: this.state.like_count,
          // comment_count: this.state.comment_count,
          // created_at:89879,
          // updated_at:768777,
          // user:{
          //   user_id: this.state.currentuser.id
          tweet
        

            // productPrice: this.state.productPrice,
            // productCount: this.state.productCount,
        }, { headers: authHeader() }).then((responseEmpData) => {
            console.log(responseEmpData);
            alert("Updated Successfully");
        }).catch((error) => {
            console.log(error);
            console.log("Some error in updating Tweet");
        })
      }


        render()
         {
            return(
            <div className= "container-sm  mt-5 pd-4">  
            <div class="card">
               <div class="card-header">
                 <h4>Update Tweet</h4>
               </div>

            <div class="card-body">
                <form className="row g-3">
                
                   <label for="tweet_content" className="form-label">Enter your Tweet</label>
                   <input type="text" className="form-control" id="tweet_content" name="tweet_content"  placeholder={this.state.tweet_content} onChange={this.changeTweetContent} />
            <div className ="col-2">
                   <button className="btn btn-success" onClick={this.update}  type="submit">Update</button>
                   </div>      
               </form>
            </div>
        
             </div>
             </div>

            )
            

            
        }
        

 }

export default UpdateTweet;