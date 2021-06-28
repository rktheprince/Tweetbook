import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from "../LoginService/auth.service";
import pic from '../images/icon.png';

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    
        this.state = {
          showAdminBoard: false,
          currentUser: undefined,
        };
      }
    
      componentDidMount() {
        const user = AuthService.getCurrentUser();
    
        if (user) {
          this.setState({
            currentUser: user,
            showAdminBoard: user.roles.includes("ROLE_ADMIN"),
          });
        }
      }
    
      logOut() {
        AuthService.logout();
      }
    
      render() {
        const { currentUser, showAdminBoard } = this.state;

        return (
            <div className="sticky-top">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link class="navbar-brand" style={{color:"#0059fe"}} to="/">
                        <b><img src={pic} style={{width:"50px", height:"50px", fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}} />&nbsp;&nbsp;TWEETBOOK</b>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            {/* <Link to={"/home"} className="nav-link">
                Home
              </Link> */}
                        </li>

                        {showAdminBoard && (
                            <li className="nav-item">
                                <Link to={"/admin"} className="nav-link">
                                    Admin Board
                                </Link>
                            </li>
                        )}

                        {/* {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )} */}
                    </ul>

                    {currentUser ? (
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/profile"} className="nav-link">
                                    {currentUser.username}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="/login" className="nav-link" onClick={this.logOut}>
                                    LogOut
                                </a>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link">
                                    <b>LOGIN</b>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/register"} className="nav-link">
                                    <b>SIGNUP</b>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/contactus"} className="nav-link">
                                    <b>CONTACTUS</b>
                                </Link>
                            </li>
                        </ul>
                    )}
                    </div>
                </nav>
            </div>
        );
    }
}
