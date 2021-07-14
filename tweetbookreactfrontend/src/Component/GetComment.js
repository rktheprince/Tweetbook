import axios from "axios";
import React from "react";

import { Link } from 'react-router-dom';

import authHeader from '../LoginService/auth-header';
import authService from "../LoginService/auth.service";
import AddComment from "./AddComment";
class GetComment extends React.Component {


  // constructor(props){
  //     super(props);
  //     this.state={
  //         comment: [],
  //     };
  // }

  // componentDidMount(){
  //     axios.get(
  //         `http://localhost:8080/GetAllComment`,{ headers: authHeader() } )
  //     .then((result) => {
  //         console.log(result);
  //         this.setState({
  //             comment: result.data,
  //         });
  //       //  console.log(this.state.theatres);
  //     });
  // }

  // homePage = (event) => {
  //     this.props.history.push("/");
  // };
  // render(){
  //     return(
  //         <div>
  //             <h1>
  //                 <span className="badge badge-dark">View Tweets</span>
  //             </h1>
  //             <table class="table border shadow" border="2">
  //             <thead class="thead-dark">
  //                    <tr>
  //                        <th scope="col">comment_id</th>
  //                        <th scope="col">comment_content</th>
  //                        {/* <th scope="col"></th>
  //                        <th scope="col">comment_count</th>
  //                        <th scope="col">created_at</th>
  //                        <th scope="col">updated_at</th>
  //                        <th scope="col">user_id</th>
  //                        <th>Action</th> */}
  //                    </tr>
  //                </thead>

  //             <tbody>
  //             {this.state.comment.map(m1 => (
  //                 <tr>
  //                     <td>{m1.comment_id}</td>
  //                     <td>{m1.comment_content}</td>
  //                     {/* <td>{m1.like_count}</td>
  //                     <td>{m1.comment_count}</td>
  //                     <td>{m1.created_at}</td>
  //                     <td>{m1.updated_at}</td>
  //                     <td>{m1.user_id}</td> */}
  //                     {/* <td>
  //                                 <Link  
  //                                     className="btn btn-primary"
  //                                     to={`/movies/view/${m1.movieName}/${m1.movieTheatre}/${m1.movieDate}/${m1.movieTime}/booking`}
  //                                 >
  //                                     Book
  //                                 </Link>

  //                     </td> */ }

  //                 </tr>
  //             ))}
  //             </tbody>
  //             </table>

  //             <div className="form-group">
  //                 <button className="btn btn-primary" onClick={this.homePage}>
  //                     Go Back
  //                 </button>
  //             </div>
  //         </div>
  //     );
  // }


  constructor(props) {
    super(props);
    this.state = { AllComments: [], errMsg: "" };
    this.deletecomment = this.deletecomment.bind(this);


  }


  componentDidMount() {
    //console.log(AllComments);
    const users = authService.getCurrentUser();
    axios.get(`http://18.218.227.249:8081/GetCBTid/${this.props.match.params.id}`, { headers: authHeader() }).then((responseData) => {
      console.log(responseData);
      this.setState({ AllComments: responseData.data })
      // console.log(product.productId);

    }).catch((error) => {
      console.log("Some error in reading the data ");
      this.setState({ errMsg: "Error In Reading product Data" })

    })
  }

  deletecomment = (e, i) => {
    // e.preventDefault();
    axios
      .delete(`http://18.218.227.249:8081/DeleteComment/` + e, { headers: authHeader() }
      )
      .then(
        (result) => {
          // window.location.reload()
          alert("Comment is deleted.");
          this.props.history.push("/getcomment/"+i);
          console.log(i);
        },
        (error) => {
          alert("Comment is  deleted.");
        }
      );
    this.props.history.push("/");


  }


  render() {

    var commentList = this.state.AllComments.map(commentList=>(
      <div style={{ padding: "30px" }}>
        <div class="card" style={{ margin: "0px auto", marginTop: "-40px" }}>
          <div class="card-body">
            {/* <h5 class="card-title">{tweet.user.first_name}&nbsp;&nbsp;{tweet.user.last_name}</h5> */}
            <p class="card-title" style={{ fontSize: "small" }}>@{commentList.tweet.user.username}</p>

            <p class="card-text">{commentList.comment_content}</p>
            <Link exact to={`/DeleteComment/${commentList.comment_id}`}
              type="button" className="btn" onClick={() => this.deletecomment(commentList.comment_id,this.props.match.params.id)}> Delete
            </Link>
            {/* <h6 class="card-subtitle mb-2 text-muted" style={{fontSize:"small"}}>{tweet.created_at.split("T")[0]+" "+tweet.created_at.split("T")[1].split(".")[0]}</h6>
        <h6 class="card-subtitle mb-2 text-muted" style={{fontSize:"medium"}}><FontAwesomeIcon icon={faHeart} onClick={()=>this.likecount(tweet.tweet_id)}/> : {tweet.like_count}  &nbsp;&nbsp;&nbsp;   <Link to={`getcomment/${tweet.tweet_id}`} ><FontAwesomeIcon icon={faComment}/> : {tweet.comment_count}</Link></h6> */}
            {/* <div className="card-content"> */}
            {/* <Link to={`getcomment/${tweet.tweet_id}`} >Add Comment</Link> */}
            {/* <FavoriteBorderIcon/> */}
          </div>
        </div>
      </div>));
    

    return (
      <div className="container-sm">
       <div>
         <button className="btn btn-primary"  onClick={()=>this.props.history.push("/mainhome") } style={{fontSize:"medium", width:"100px"}}>BACK</button>
         </div>
        <div>

          <AddComment>{this.props.match.params.id}</AddComment>

        </div>
        <div>
          <div className="py-4" >
            {commentList}

            {/* <table class="table border shadow" >
                  <thead class="thead-dark">
                   <h4   backgroung-color="black" align="center" padding="200px" > All Comments</h4>
                   <h4 align="left"></h4>
                   </thead>
            <tbody>
               <table border="1" class="table border shadow">  
                  <tr>
                  <th scope="col" className = "bg-dark text-white">Comment Content</th>
                  {/* <th scope="col" className = "bg-dark text-white">Tweet</th>  
                  <th scope="col" className = "bg-dark text-white">Username
                  </th> 
                  
                  <th scope="col" className = "bg-dark text-white">Action
                  </th> 
                  </tr>
                  
                  { CommentList.reverse()}
               </table>  
            </tbody>
        </table> */}


        </div>
      </div>
      </div>
    );
}
      }
  






export default GetComment;