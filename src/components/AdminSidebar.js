import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import { Link } from 'react-router-dom';

export const AdminSidebar = () => {
    return (
        <div>
            <div className="side-nav-header" style={{color:"white", fontSize:"x-large"}}><h1>Admin Dashboard</h1>
            </div>
            <div className="side-nav-items" style={{height:"40vh"}}>

                <ul className="p-0">
                    <li className="side-nav-item flex-align-center">
                        <div className="side-nav-item-holder">
                            
                            {/* <span className="side-nav-text">Show User</span> */}
                            <Link to={"/showalluser"} className="nav-link"><span className="side-nav-text" style={{fontSize:"large"}}><FontAwesomeIcon icon={faUser} size=""/>&nbsp;&nbsp;Show User</span></Link>
                        </div>
                    </li>
                    <li className="side-nav-item flex-align-center">
                        <div className="side-nav-item-holder">
                            
                            {/* <span className="side-nav-text">All Tweet</span> */}
                            <Link to={"/getalltweet"} className="nav-link"><span className="side-nav-text" style={{fontSize:"large"}}><FontAwesomeIcon icon={faCommentDots} size=""/>&nbsp;&nbsp;All Tweet</span></Link>

                        </div>
                    </li>
                    </ul>
                    </div>

        </div>
    )
}
export default AdminSidebar;