import React from 'react';
import Trend  from '../trending/Trend';
 
export const TrendsList = () => {
    
    return (
        <div>
            <div className="trends-for-you flex-space-between">
                <h1 className="m-0">Topics you might like</h1>
                
            </div>
            <div className="trends">
                <Trend/>
            </div>
        </div>
    )
}