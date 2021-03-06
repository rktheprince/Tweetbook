import React, { Component } from "react";
import { BrowserRouter as Router,Route,  NavLink } from "react-router-dom";
import AuthService from "../LoginService/auth.service";
import "../Profile.css";
import FollowingUser from "../Component/FollowingUser";
import FollowersUser from "../Component/FollowersUser";
import GetSpecificTweet from "../Component/GetSpecificTweet";
import { Sidebar } from '../components/Sidebar';
import authService from '../LoginService/auth.service';
import authHeader from '../LoginService/auth-header';
import axios from 'axios';
import '../styles/abc.css';

export default class profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
      value:"",
      followers:0,
      following:0

    };
  }

  editUser(id) {
    this.props.history.push(`/updateuser/${id}`);
  }

  componentDidMount=()=>{
    const users = authService.getCurrentUser();
    axios.get(`http://18.218.227.249:8081/getfriend/follower/count/${users.id}`, { headers: authHeader() })
            .then((result) => {
                this.setState({
                    followers: result.data
                })
                console.log(this.state.followers)
            }).catch((error) => {
                alert(JSON.stringify("error: " + error));
            });
            axios.get(`http://18.218.227.249:8081/getfriend/following/count/${users.id}`, { headers: authHeader() })
            .then((result) => {
                this.setState({
                    following: result.data
                })
                console.log(this.state.following)
            }).catch((error) => {
                alert(JSON.stringify("error: " + error));
            });
  }

  render() {

    const { currentUser } = this.state;
    console.log(currentUser);
    return (
      <div className="size row" id="root-container" style={{backgroundColor:"white"}}>
        <div className="side-nav col-md-3">
          <Sidebar/>
        </div>
        <div className="col-md-8" style={{marginTop:"50px"}}>
        {(this.state.userReady) ?
            <div>
              <header className="jumbotron">
                <h3>
                  <strong>{currentUser.username}</strong> Profile
                </h3>
              </header>

            </div> : null}
        <div className="row">
          <div className="col-12 app_body">
            <div className="scroll-wrapper scrollbar-inner" >
              <div className="scrollbar-inner scroll-content scroll-scrollx_visible scroll-scrolly_visible">

                <div className="xyz" style={{padding:"50px"}}>
                  <div className="row-no-gutters">
                    <div className="col">
                      <img alt="profile" draggable="true" src="https://icon-library.com/images/personal-profile-icon/personal-profile-icon-27.jpg" class="img-fluid rounded-circle"></img>

                    </div>
                    <div className="col pr-3 pt-3">
                      <button onClick={() => this.editUser(currentUser.id)} className="btn btn-outline-primary float-right font-weight-bold" href="/updateuser">Edit Profile</button>
                    </div>
                  </div>
                  <div className="pl-2">
                    <h4 className="p-0 mb-0 ml-2 font-weight-bolder" style={{fontSize:"medium"}}>{currentUser.first_name} {currentUser.last_name}</h4>
                    <p className="p-0 mt-0 ml-2 mb-1 text-muted" style={{fontSize:"medium"}}>@{currentUser.username}</p>
                    <h4 className="p-0 mb-0 ml-2 font-weight-bolder" style={{fontSize:"medium"}}>Followings: {this.state.following}    Followers:{this.state.followers}</h4>
<br/>
                  </div>
                  <div className="pl-2 mt-0">
                    <div className="row no-gutters ml-2 w-100 text-muted">
                      <div className="col-12 text-dark mt-1">
                        <div className="row no-gutters">
                          <div className="col-12">
                            <div class="row no-gutters">
                              {/* style="border-bottom: 1px solid rgba(0, 0, 0, 0.125);"> */}
                              <div class="col text-center font-weight-bold tablink tabactive" >
                                    <button type="button" class="btn btn-light" onClick={()=>{this.setState({value:"Tweet"})}}>Tweet</button>
                              </div>
                              <div class="col text-center font-weight-bold tablink">
                              <button type="button" class="btn btn-light" onClick={()=>{this.setState({value:"following"})}} >Following</button>
                              </div>
                              <div class="col text-center font-weight-bold tablink">
                              <button type="button" class="btn btn-light" onClick={()=>{this.setState({value:"followers"})}} >Followers</button>
                              {/* <NavLink exact to="/following" aria-current="page">following</NavLink> */}
                              </div>
                            </div>

                          </div>
                          <Router>
                          {/* <div class="content"> */}
                            <div style={{marginTop:"50px", marginLeft:"-35px"}}>
                            {(() => {
                              switch(this.state.value){
                                case "following": return  <FollowingUser/>
                                case "followers": return <FollowersUser/>
                                default: return <GetSpecificTweet></GetSpecificTweet>
                            }})()}
{/* <Route path="/showalluser" component={ShowAllUSers}></Route> */}
{/* <Route path="/following" component={FollowingUser}></Route> */}
{/* <Route path="/follower" component={FollowersUser}></Route> */}


                            </div>                            
                          {/* </div> */}
                          </Router>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    );
  }
}