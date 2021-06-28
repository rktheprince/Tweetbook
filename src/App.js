import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
// import Sidebar from "./Sidebar";
// import Feed from "./Feed";
// import Widgets from "./Widgets";

//import AuthService from "./LoginService/auth.service";

import Login from "./LoginComponent/login.component";
// import Profile from "./LoginComponent/profile.component";
import Registration from "./LoginComponent/Registration";
import Search from "./Component/Search";
import UpdateTweet from "./Component/UpdateTweet";
import ShowAllTweets from "./Component/ShowAllTweets";
import Navigation from "./LoginComponent/Navigation";
import Footer from './LoginComponent/Footer'

import ShowAllUSers from "./Component/ShowAllUsers";
import ViewUser from "./Component/ViewUser";
import UpdateUser from "./Component/UpdateUser";
import Home from "./MainHome";
import MainHome from "./MainHome";
import GetAllTweet from "./Component/GetAllTweet";
import GetComment from "./Component/GetComment";
import profile from "./LoginComponent/profile.component";
import AdminHomePage from "./AdminHomePage";

//import UpdateTweet from "./UpdateTweet";
//import ShowAllTweets from "./ShowAllTweets";
import MainHomeComment from "./MainHomeComment";
import Guest from "./LoginComponent/Guest";
import Contact from "./LoginComponent/Contact";

function App() {
  return (
    <div>
      <Navigation/>
          <Switch>
            <Route exact path="/" component={Guest} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Registration} />
            <Route exact path="/mainhome" component={MainHome} />
            {/* <Route exact path="/sidebar" component={Sidebar} />
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/widgets" component={Widgets} />
            <Route exact path="/profile" component={Profile} /> */}
            <Route exact path="/GetByUsername/:username1" component={Search} />
            <Route exact path="/UpdateTweet/:id" component={UpdateTweet}/>
            <Route exact path="/ShowAllTweets" component={ShowAllTweets}/>
            <Route exact path="/showallusers" component={ShowAllUSers} />
            <Route exact path="/viewuser/:user_id" component={ViewUser} />
            <Route exact path="/updateuser/:user_id" component={UpdateUser} />
            <Route exact path="/profile" component={profile} />
            <Route exact path="/contactus" component={Contact}/>
            <Route exact path="/GetAllTweets" component={GetAllTweet}/>
            <Route exact path="/adminhome" component={AdminHomePage}/>
            <Route exact path="/search" component={Search}/>
            <Route exact path="/getcomment/:id" component={GetComment} />
          </Switch>
          <Footer/>
        </div>
  )
}


export default App;