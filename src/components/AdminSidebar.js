import React from 'react';

import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import { Link } from 'react-router-dom';

export const AdminSidebar = () => {
    return (
        <div>
            <div className="side-nav-header">
            </div>
            <div className="side-nav-items">

                <ul className="p-0">
                    <li className="side-nav-item flex-align-center">
                        <div className="side-nav-item-holder">
                            <PeopleIcon />
                            {/* <span className="side-nav-text">Show User</span> */}
                            <Link to={"/showalluser"} className="nav-link"><span calssName="side-nav-text">Show USer</span></Link>
                        </div>
                    </li>
                    <li className="side-nav-item flex-align-center">
                        <div className="side-nav-item-holder">
                            <ChatIcon />
                            {/* <span className="side-nav-text">All Tweet</span> */}
                            <Link to={"/getalltweet"} className="nav-link"><span calssName="side-nav-text">All Tweet</span></Link>

                        </div>
                    </li>
                    </ul>
                    </div>

        </div>
    )
}
export default AdminSidebar;