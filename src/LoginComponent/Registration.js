import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../LoginService/auth.service";
import './login.css';

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email_id = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vfirstname = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The firstname must be between 3 and 20 characters.
      </div>
    );
  }
};

const vlastname = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The lastname must be between 3 and 20 characters.
      </div>
    );
  }
};

const vphoneno = value => {
  if (value.length < 10 || value.length > 10) {
    return (
      <div className="alert alert-danger" role="alert">
        The phone must be of 10 digits.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeFirstname=this.onChangeFirstname.bind(this);
    this.onChangeLastname=this.onChangeLastname.bind(this);
    this.onChangePhone_no=this.onChangePhone_no.bind(this);

    this.state = {
      first_name:"",
      last_name:"",
      username: "",
      email_id: "",
      password: "",
      phone_no:"",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeFirstname(e) {
    this.setState({
      first_name: e.target.value
    });
  }

  onChangeLastname(e) {
    this.setState({
      last_name: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email_id: e.target.value
    });
  }

  onChangePhone_no(e) {
    this.setState({
      phone_no: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.first_name,
        this.state.last_name,
        this.state.email_id,
        this.state.phone_no,
        this.state.password
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <div className="main col-md-12 col-sm-12 col-xs-12" style={{backgroundImage: "linear-gradient(0deg, skyblue, rgb(0, 89, 255))", padding:"50px 10px 90px 10px", width:"100%"}}>
        <div style={{fontFamily: "Comic Sans MS", textAlign:"center", color:"white"}}><h1><b>TWEETBOOK</b></h1></div>
        <div className="card">
        <h2 style={{fontWeight: "900", fontFamily: "Geneva", textAlign:"center"}}>Registration</h2>
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username"><b>Username</b></label>
                  <Input
                    type="text"
                    placeholder="Enter any Username"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="first_name"><b>Firstname</b></label>
                  <Input
                    type="text"
                    placeholder="Enter your First Name"
                    className="form-control"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.onChangeFirstname}
                    validations={[required, vfirstname]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="last_name"><b>Lastname</b></label>
                  <Input
                    type="text"
                    placeholder="Enter your Last Name"
                    className="form-control"
                    name="last_name"
                    value={this.state.last_name}
                    onChange={this.onChangeLastname}
                    validations={[required, vlastname]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email"><b>Email</b></label>
                  <Input
                    type="text"
                    placeholder="Enter your Email"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email_id]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone_no"><b>Phone no</b></label>
                  <Input
                    type="text"
                    placeholder="Enter your Phone Number"
                    className="form-control"
                    name="phone_no"
                    value={this.state.phone_no}
                    onChange={this.onChangePhone_no}
                    validations={[required, vphoneno]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password"><b>Password</b></label>
                  <Input
                    type="password"
                    placeholder="Enter new Password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>
                <br/>
                <div className="form-group">
                  <button className="btn btn-primary btn-block"><b>Sign Up</b></button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
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