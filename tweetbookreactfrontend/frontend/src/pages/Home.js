import React, { Component } from 'react'
import { NewTweet } from '../components/NewTweet';
import '../styles/Main.css';
import { TweetList } from '../components/TweetList';


export default class Home extends Component  {
    render(){
    return (
        <>
            <div className="home">
                <h1>Home</h1>
            </div>
            <NewTweet />
            {/* <div className="tweets">
                <TweetList />
            </div> */}
        </>
    )
}
}
