import React from 'react';
import axios from "axios";
import authHeader from '../LoginService/auth-header';
import authService from '../LoginService/auth.service';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            following: [],
            user: [],
            users: ""
        };

    }
    handleClick = () => {
        console.log(this.state.users);
        console.log(`http://localhost:8080/search/username/${this.state.users}`);
        axios.get(`http://localhost:8080/search/username/${this.state.users}`, { headers: authHeader() }).then((result) => {

            console.log("Searching....");
            console.log(result);
            this.setState({
                user: result.data,
            });

        });
    }

    getFollowingUser = (event) => {

        axios.get(`http://localhost:8080/user/GetByUsername/` + event, { headers: authHeader() })
            .then((response) => {
                this.setState({
                    following: response.data
                })
                this.addFollow(this.state.following.user_id);
            }).catch((error) => {
                alert(JSON.stringify("error: " + error));
            })

    }
    addFollow = (fid) => {
        const ussers = authService.getCurrentUser();
        console.log(ussers)
        axios.post(`http://localhost:8080/add/following`, {
            following: fid,
            user: {
                user_id: ussers.id
            }
        }, { headers: authHeader() })
            .then((response) => {
                this.setState({
                    message: response.data
                })
                alert(this.state.message)
            }).catch((error) => {
                alert(JSON.stringify("error: " + error));
            })



    }

    render() {

        return (

            <div>

                <div className="py-4">
                    <h2 >Search Users..!!</h2>
                    <input type="text" className="form-control" id="username" placeholder="Type to search..."
                        value={this.state.users} onChange={(event) => this.setState({ users: event.target.value })}
                    />
                    <br />
                    <button onClick={this.handleClick}>
                        search

                    </button>


                </div>

                {this.state.user.map(m1 => (
                    <div class="card">
                        <div class="card-body">
                            {/* <h5 class="card-title">{tweet.user.first_name}</h5> */}
                            {/* <h6 class="card-subtitle mb-2 text-muted">{tweet.created_at.split("T")[0]+" "+tweet.created_at.split("T")[1].split(".")[0]}</h6> */}
                            <p class="card-text">{m1.username}</p>
                            <h6 class="card-subtitle ">First Name: {m1.first_name}   </h6>
                            <h6 class="card-subtitle ">  Last Name: {m1.last_name}</h6>
                            <button className="mr-4 btn btn-success" onClick={() => this.getFollowingUser(m1.username)}>Follow</button>
                        </div>

                    </div>
                ))


                }



            </div>)
    }
}
export default Search;