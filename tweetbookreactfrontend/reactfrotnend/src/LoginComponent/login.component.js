import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import '../styles/login.css';

import AuthService from "../LoginService/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          const user = AuthService.getCurrentUser();
          console.log(user.roles.includes("ROLE_ADMIN"))
          if(user.roles.includes("ROLE_ADMIN")){
            return this.props.history.push("/adminhome"),
            window.location.reload()
          }
           else{
            return(this.props.history.push("/mainhome"),
            window.location.reload()
         )
            }
          
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <div className="main col-md-12" style={{backgroundImage: "linear-gradient(0deg, skyblue, rgb(0, 89, 255))", padding:"50px 10px 50px 10px", height:"100vh" }}>
        <div style={{fontFamily: "Comic Sans MS", textAlign:"center", color:"white", paddingTop:"0px"}}><h1><b>TWEETBOOK</b></h1></div>
        <div className="card" style={{margin:"0px auto", marginTop:"0px", marginBottom:"0px", backgroundColor:"white"}}>
          <h2 style={{fontWeight: "900", fontFamily: "Fira Sans", textAlign:"center", color:"black", fontSize: "x-large", marginTop:"-20px"}}>Login</h2>
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form class="fm"
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label className="label" htmlFor="username"><b>Username</b></label>
              <Input style={{fontSize:"small"}}
                type="text"
                className="form-control"
                name="username"
                placeholder="Enter your Username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label className="label" htmlFor="password"><b>Password</b></label>
              <Input style={{fontSize:"small"}}
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter your Password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>
            <br/>
            <div className="form-group">
              <button style={{fontSize:"small"}}
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span><b>Login</b></span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}