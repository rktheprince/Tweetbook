import React from 'react';
import axios from "axios";
import authHeader from '../LoginService/auth-header';
import authService from '../LoginService/auth.service';
import {Sidebar} from '../components/Sidebar';

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
        console.log(`http://18.218.227.249:8081/search/username/${this.state.users}`);
        axios.get(`http://18.218.227.249:8081/search/username/${this.state.users}`, { headers: authHeader() }).then((result) => {

            console.log("Searching....");
            console.log(result);
            this.setState({
                user: result.data,
            });

        });
    }

    getFollowingUser = (event) => {

        axios.get(`http://18.218.227.249:8081/user/GetByUsername/` + event, { headers: authHeader() })
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
        axios.post(`http://18.218.227.249:8081/add/following`, {
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
                alert("You cannot follow yourself");
            })



    }

    render() {

        return (

            <div className="row">
                <div className="side-nav col-md-3 ">
                                <Sidebar />
                            </div>
                <div className="py-4 col-md-9">
                    <h1 style={{color:'black'}}>Search Users..!!</h1>
                    <input type="text" style={{fontSize:"medium",  padding:"7px"}} className="form-control" id="username" placeholder="Type to search..."
                        value={this.state.users} onChange={(event) => this.setState({ users: event.target.value })}
                    />
                    <br />
                    <button className="btn"  style={{fontSize:"medium", width:"200px", marginLeft:"330px"}} onClick={this.handleClick}>
                        search

                    </button>


                </div>

                {this.state.user.map(m1 => (
                    <div class="card" style={{marginLeft:"500px", marginTop:"-800px", height:"240px"}}>
                        <div class="card-body">
                            {/* <h5 class="card-title">{tweet.user.first_name}</h5> */}
                            {/* <h6 class="card-subtitle mb-2 text-muted">{tweet.created_at.split("T")[0]+" "+tweet.created_at.split("T")[1].split(".")[0]}</h6> */}
                            <p class="card-text">{m1.username}</p>
                            <h6 class="card-subtitle" style={{fontSize:"medium"}}>First Name: {m1.first_name}   </h6>
                            <h6 class="card-subtitle" style={{fontSize:"medium"}}>  Last Name: {m1.last_name}</h6>
                            <button className="mr-4 btn btn-success" onClick={() => this.getFollowingUser(m1.username)} style={{fontSize:"medium", marginTop:"20px"}}>Follow</button>
                        </div>

                    </div>
                ))


                }



            </div>)
    }
}
export default Search;