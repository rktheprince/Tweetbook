import axios from "axios";
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import authHeader from '../LoginService/auth-header';
import GetComment from "./GetComment";
import { NavLink } from "react-router-dom";
import "../styles/Register.css";
import AddComment from "./AddComment";
import { Link } from "react-router-dom";
import "../styles/Tweet.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
class GetAllTweet extends React.Component{

    
    constructor(props){
        super(props);
        this.state={
            tweet: [],
            show: false,
    
        };
      //  this.editUser=this.editUser.bind(this);
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

    likecount=(tweet_id)=>{
        axios.put(`http://localhost:8080/updatelike/${tweet_id}`,{} ,{ headers: authHeader() } )
        .then((result)=>{
            this.setState({ /* */ })
            window.location.reload()
            console.log(result);
            // alert("tweet deleted Successfully")
            // this.props.history.push("/admin");
        }).catch((error) => {
            alert(JSON.stringify("error: " + error));
        })

    }

    // commentcount=(tweet_id)=>{
    //     axios.put(`http://localhost:8080/AddComment/${tweet_id}`,{} ,{ headers: authHeader() } )
    //     .then((result)=>{
    //         this.setState({ /* */ })

    //         console.log(result);
    //         // alert("tweet deleted Successfully")
    //         // this.props.history.push("/admin");
    //     }).catch((error) => {
    //         alert(JSON.stringify("error: " + error));
    //     })

    // }

    // comment=(tweet_id)=>{
    //     <AddComment>{tweet_id}</AddComment>
       
    // }
    

    deletetweet=(tweet_id)=>{
        console.log('click')
        
        axios.delete(`http://localhost:8080/Delete/${tweet_id}`,{ headers: authHeader() } )
        .then((result)=>{
            this.setState({ /* */ })
            window.location.reload()

            console.log(result);
            alert("tweet deleted Successfully")
            this.props.history.push("/admin");
        }).catch((error) => {
            alert(JSON.stringify("error: " + error));
        })

    }

    // editUser(tweet_id){
    //     this.props.history.push(`/mainhomecomment/${tweet_id}`);
    // }
    
    render(){
        let cardTweet=this.state.tweet.map(tweet=>(
            <div  style={{padding:"50px"}}>
            <div class="card" style={{margin:"0px auto", marginTop:"-40px"}}>
            <div class="card-body">
            <h5 class="card-title">{tweet.user.first_name}&nbsp;&nbsp;{tweet.user.last_name}</h5>
              <p class="card-title" style={{fontSize:"small"}}>@{tweet.user.username}</p>
              
              <p class="card-text">{tweet.tweet_content}</p>
              <h6 class="card-subtitle mb-2 text-muted" style={{fontSize:"small"}}>{tweet.created_at.split("T")[0]+" "+tweet.created_at.split("T")[1].split(".")[0]}</h6>
              <h6 class="card-subtitle mb-2 text-muted" style={{fontSize:"medium"}}><FontAwesomeIcon icon={faHeart} onClick={()=>this.likecount(tweet.tweet_id)}/> : {tweet.like_count}  &nbsp;&nbsp;&nbsp;   <Link to={`getcomment/${tweet.tweet_id}`} ><FontAwesomeIcon icon={faComment}/> : {tweet.comment_count}</Link></h6>
              {/* <div className="card-content"> */}
              {/* <Link to={`getcomment/${tweet.tweet_id}`} >Add Comment</Link> */}
              {/* <FavoriteBorderIcon/> */}
            </div>
            {/* <button className="btn btn-danger" onClick={() =>this.deletetweet(tweet.tweet_id)}style={{marginLeft: "580px"}}>Delete</button> */}
            {/* <exact to={`/ShowComments/${tweet.tweet_id}`} 
                    type="button"> View Comment */}


{/* // this.state.show? <div>
//                   {/* tid={tweet.tweet_id} 
//                   <h1><AddComment >{tweet.tweet_id}</AddComment></h1>
//                   <GetComment>{tweet.tweet_id}</GetComment>
//                   </div> : null}
// <button className="button" onClick={()=>{this.setState({show:!this.state.show})}}>{ this.state.show? 'Hide' : 'Show'} Comment</button> */}

{/* <button onClick={()=>this.comment(tweet.tweet_id)}>Add Comment</button> */}
                 
              
{/* <div className="container-sm">
           <div>
              <div className="py-4" >
       <table class="table border shadow" >
                  <thead class="thead-dark">
                   <h4   backgroung-color="black" align="center" padding="200px" > All Comments</h4>
                   <h4 align="left"></h4>
                   </thead>
            <tbody>
               <table border="1" class="table border shadow">  
                  <tr>
                  <th scope="col" className = "bg-dark text-white">Comment Content</th>
                  <th scope="col" className = "bg-dark text-white">Action
                  </th> 
                  
                  </tr>
                  
                  { CommentList.reverse()}
               </table> 
            </tbody>
        </table> 

             
        </div> 
            </div>  
        </div> */}
                    
                 
           
            {/* <button className="btn btn-danger" onClick={GetComment}style={{marginLeft: "580px"}}>Comment</button> */}
            {/* <NavLink exact to={"/mainhomecomment"}>
                Comment
            </NavLink>
  */}
  {/* <button onClick={ () => this.editUser(tweet.tweet_id)} className="btn btn-info">Comment </button> */}

          </div> 
          </div>
))
        return(
            <div>
                {/* <h1><span className="badge badge-light">View Tweets</span> */}
                <h1></h1>
                {cardTweet}

            </div>
        );
    }
}





export default GetAllTweet;