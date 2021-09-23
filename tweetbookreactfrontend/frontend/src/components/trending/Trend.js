import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class Trend extends React.Component { 
    constructor(props){
        super(props);
        this.state={
             trend : [
                {
                    name: '#cricket',
                    topic: 'Trending in the world',
                    tweets: 'latest news',
                    Link: 'https://sports.ndtv.com/cricket/news'
                    
                },
                {
                    name: 'Sports',
                    topic: 'Trending in India',
                    tweets: 'latest news',
                    Link: 'https://sports.ndtv.com/'
                }, {
                    name: 'Supreme Court of India',
                    topic: 'Trending in India',
                    tweets: 'latest news',
                    Link: 'https://timesofindia.indiatimes.com/topic/supreme-court-of-india'
                },
                {
                    name: 'covid updates India',
                    topic: 'Trending in India',
                    tweets: 'latest updates',
                    Link: 'https://www.covid19india.org/'
                }, {
                    name: 'World news',
                    topic: 'Trending in the world',
                    tweets: 'latest updates',
                    Link: 'https://www.bbc.com/news/world'
                }
            ]
        };
    }
    render(){
 
    
    let cardTrend=this.state.trend.map(trend=>(
        <div className="trends-card">
            <p className="trends-topic m-0">{trend.topic}</p>
            <h2 className="m-0">{trend.name}</h2>
            <p className="trend-tweet-count m-0">{trend.tweets} Tweets</p>
            <a target="_blank" href={trend.Link} className="trend-tweet-count m-0">{trend.Link}</a>
        </div>
    )
    )
    return (
        <div>{cardTrend}</div>
    )
    } 
}
 
export default Trend;