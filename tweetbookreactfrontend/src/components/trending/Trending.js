import React from 'react';
import '../../styles/Trending.css';
import { SearchIcon } from '../../images/svg/svgs'
import { TrendsList } from './TrendsList';
import { FollowSuggestionsList } from './FollowSuggestionsList';
import Search from '../../Component/Search';

export const Trending = () => {
    return (
        <>
            <div>
                <div className="search-box flex-align-center">
                 
                    
                    {/* <input placeholder="Search Twitter" className="search-input w-100" type="text"  /> */}
                </div>
                
                <div className="trends-list" style={{marginTop:"30px"}}>
                    <TrendsList />
                </div>
                <div className="follow-list">
                    <FollowSuggestionsList />
                </div>
            </div>
        </>
    )
}
