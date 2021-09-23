import { Component } from "react";
import { Sidebar } from './components/Sidebar';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import { Trending } from './components/trending/Trending';
//import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Status } from './pages/Status';
import Home from "./pages/Home";
import TweetBox from "./TweetBox";
import GetAllTweet from "./Component/GetAllTweet";
import ShowAllTweets from "./Component/ShowAllTweets";
import AddComment from "./Component/AddComment";
import GetComment from "./Component/GetComment";
class MainHomeComment extends Component{
    render(){
        return(
            <div>
                {/* <Router > */}

                <ScrollToTop>
                <div className="App">
                    <div className="side-nav">
                    <Sidebar />
                    </div>
                    <div className="main">
                        {/* <TweetBox></TweetBox> */}
                        {/* <ShowAllTweets></ShowAllTweets> */}
                        {/* <GetAllTweet></GetAllTweet> */}
                        {/* <AddComment></AddComment> */}
                        <GetComment>

                        </GetComment>
                    <AddComment></AddComment>
                        {/* <Home></Home> */}
                    {/* <Route exact path="/tweet" component={TweetBox} /> */}
                    {/* <Route exact path="/:id" component={Profile} />
                    <Route exact path="/status/:id" component={Status} /> */}
                    </div>

                    <div className="trending">
                    <Trending />
                    </div>
                </div>
                </ScrollToTop>

{/* </Router> */}
            </div>
        )
    }
}
export default MainHomeComment