import axios from "axios";
import React from "react";

import authHeader from '../LoginService/auth-header';

class GetData extends React.Component{

    
    constructor(props){
        super(props);
        this.state={
            tweet: [],
        };
    }
    
    componentDidMount(){
        axios.get(
            `http://localhost:8081/GetAllTweet`,{ headers: authHeader() } )
        .then((result) => {
            console.log(result);
            this.setState({
                tweet: result.data,
            });
          //  console.log(this.state.theatres);
        });
    }

    homePage = (event) => {
        this.props.history.push("/");
    };
    render(){
        return(
            <div>
                <h1>
                    <span className="badge badge-dark">View Tweets</span>
                </h1>
                <table class="table border shadow" border="2">
                <thead class="thead-dark">
                       <tr>
                           <th scope="col">tweet_id</th>
                           <th scope="col">tweet_content</th>
                           <th scope="col">like_count</th>
                           <th scope="col">comment_count</th>
                           <th scope="col">created_at</th>
                           <th scope="col">updated_at</th>
                           <th scope="col">user_id</th>
                           <th>Action</th>
                       </tr>
                   </thead>
                   
                <tbody>
                {this.state.tweet.map(m1 => (
                    <tr>
                        <td>{m1.tweet_id}</td>
                        <td>{m1.tweet_content}</td>
                        <td>{m1.like_count}</td>
                        <td>{m1.comment_count}</td>
                        <td>{m1.created_at}</td>
                        <td>{m1.updated_at}</td>
                        <td>{m1.user_id}</td>
                        {/* <td>
                                    <Link  
                                        className="btn btn-primary"
                                        to={`/movies/view/${m1.movieName}/${m1.movieTheatre}/${m1.movieDate}/${m1.movieTime}/booking`}
                                    >
                                        Book
                                    </Link>
                                  
                        </td> */ }
                        
                    </tr>
                ))}
                </tbody>
                </table>

                <div className="form-group">
                    <button className="btn btn-primary" onClick={this.homePage}>
                        Go Back
                    </button>
                </div>
            </div>
        );
    }
}





export default GetData;