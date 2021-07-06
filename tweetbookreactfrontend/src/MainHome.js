import { Component } from "react";
import { Sidebar } from './components/Sidebar';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import { Trending } from './components/trending/Trending';
//import { Home } from './pages/Home';
//import { Profile } from './pages/Profile';
import { Status } from './pages/Status';
import Home from "./pages/Home";
import TweetBox from "./TweetBox";
import GetAllTweet from "./Component/GetAllTweet";
import ShowAllTweets from "./Component/ShowAllTweets";
import AddComment from "./Component/AddComment";
import GetComment from "./Component/GetComment";
import MainHomeComment from "./MainHomeComment";
import profile from "./LoginComponent/profile.component";
import GetSpecificTweet from "./Component/GetSpecificTweet";
import './styles/mainhome.css';
import Search from "./Component/Search";

class MainHome extends Component {
    render() {
        return (
            <div>
<Router>
                <ScrollToTop>
                    <div>
                        <div className="mac ">

                            <div className="side-nav" style={{width:"200px"}}>
                                <Sidebar />
                            </div>
                            <div className="main " style={{backgroundColor:"white"}}>
                            <Switch>
                        <Route exact path="/mainhome" component={TweetBox}/>
                    <Route exact path="/profile" component={profile} />
                    <Route exact path="/search" component={Search}/>
                    </Switch>
                                {/* <ShowAllTweets></ShowAllTweets> */}
                                {/* 
                        <GetComment></GetComment> */}
                                {/* <AddComment></AddComment> */}
                                
                                {/* <GetSpecificTweet></GetSpecificTweet> */}
                                {/* <Route exact path="/mainhomecomment" component={MainHomeComment}/>
                        */}
                                {/* <Home></Home> */}
                                {/* <Route exact path="/tweet" component={TweetBox} /> */}
                                {/* 
                    <Route exact path="/status/:id" component={Status} /> */}
                           
            
                            </div>

                            <div className="trending " style={{ backgroundColor: "rgb(21, 32, 43)"}}>
                                <Trending />
                            </div>
                        </div>
                    </div>
                </ScrollToTop>
                </Router>

            </div>
        )
    }
}
export default MainHome