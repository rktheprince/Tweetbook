import React from 'react';
import { Link } from 'react-router-dom';
import authService from "../LoginService/auth.service";
import authHeader from '../LoginService/auth-header';
import axios from "axios";
import UpdateTweet from "./UpdateTweet";
class ShowAllTweets extends React.Component{
        constructor(props) 
        {
          super(props);
          this.state={AllTweets:[],errMsg:""} ;
        

        }

    
    componentDidMount(){
        const users=authService.getCurrentUser();
        axios.get(`http://18.218.227.249:8081/GetById/${users.id}`, { headers: authHeader() }).then((responseData) => {
            console.log(responseData);
            this.setState({ AllTweets: responseData.data })
            // console.log(product.productId);

        }).catch((error) => {
            console.log("Some error in reading the data ");
            this.setState({ errMsg: "Error In Reading product Data" })
        })
      }
      render()
      {

        var TweetList = this.state.AllTweets.map(
            (tweetList,index)=>
            {
                return(<tr key={tweetList.tweet_id}>
                    <td>{tweetList.user.username}</td>
                    <td>{tweetList.tweet_content}</td>
                    <td><Link exact to={`/UpdateTweet/${tweetList.tweet_id}`} type="button">Update</Link></td>
                    </tr>
                )
            }
        );
        
        return (
            <div className="container-sm">
               <div>
                  <div className="py-4" >
           <table class="table border shadow" >
                      <thead class="thead-dark">
                       <h4   backgroung-color="black" align="center" padding="200px" > All Tweets</h4>
                       <h4 align="left"></h4>
                       </thead>
                <tbody>
                   <table border="1" class="table border shadow">  
                      <tr>
                      <th scope="col" className = "bg-dark text-white">UserName</th>
                      <th scope="col" className = "bg-dark text-white">Tweet</th> 
                      <th scope="col" className = "bg-dark text-white">Action</th>     
                      </tr>
                      { TweetList.reverse()}
                   </table> 
                </tbody>
            </table> 

                 
            </div> 
                </div>  
            </div>
        )
        

      }

}
export default ShowAllTweets;