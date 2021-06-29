import React from 'react';
import { Logo, HomeIcon, ExploreIcon, NotificationIcon, MessageIcon, BookmarkIcon, ListsIcon, MoreIcon } from '../images/svg/svgs';
import { SmallAvatar } from '../images/avatars';
import { Link } from 'react-router-dom';
import profile from '../LoginComponent/profile.component';
import { Route } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
export const Sidebar = () => {
    const profImageurl = 'https://pbs.twimg.com/profile_images/1247964769669136385/KVCROk2D_bigger.jpg';
    return (
        <div>
            <div className="side-nav-header">
                
            </div>
            <div className="side-nav-items">

                <ul className="p-0">
                    <li className="side-nav-item flex-align-center">
                        <div className="side-nav-item-holder">
                        <Link to={"/mainhome"} className="nav-link">
                            <FontAwesomeIcon icon={faHome} style={{fontSize:"large", color:"white", padding: "0rem", verticalAlign: "top"}}/>
                            <span className="side-nav-text">Home</span></Link>
                        </div>
                    </li>
                    {/* <li className="side-nav-item flex-align-center">
                        <div className="side-nav-item-holder">
                            <ExploreIcon />
                            <span className="side-nav-text">Explore</span>
                        </div>
                    </li> */}
                    {/* <li className="side-nav-item flex-align-center">
                        <div className="side-nav-item-holder">
                            <NotificationIcon />
                            <span className="side-nav-text">Notification</span>
                        </div>
                    </li> */}
                    {/* <li className="side-nav-item flex-align-center">
                        <div className="side-nav-item-holder">
                            <MessageIcon />
                            <span className="side-nav-text">Messages</span>
                        </div>
                    </li> */}
                    {/* <li className="side-nav-item flex-align-center">
                        <div className="side-nav-item-holder">
                            <BookmarkIcon />
                            <span className="side-nav-text">Bookmarks</span>
                        </div>
                    </li> */}
                    {/* <li className="side-nav-item flex-align-center">
                        <div className="side-nav-item-holder">
                            <ListsIcon />
                            <span className="side-nav-text">Profile</span>
                        </div>
                    </li> */}
                    <li className="side-nav-item flex-align-center">
                        <div className="side-nav-item-holder">

                            {/* <SmallAvatar width="22" image={profImageurl} /> */}
                            {/* <span className="side-nav-text">Profile</span> */}
                
                            <Link to={"/profile"} className="nav-link"  style={{marginLeft:"2px"}}><FontAwesomeIcon icon={faUser} size="10x" style={{fontSize:"large", color:"white", padding: "0rem", verticalAlign: "top"}}/><span className="side-nav-text">Profile</span></Link>
                        </div>
                    </li>
                    <li className="side-nav-item flex-align-center">
                        <div className="side-nav-item-holder">
                            <Link to={"/search"} style={{verticalAlign:"middle", marginLeft:"7px"}}>
                            <FontAwesomeIcon icon={faSearch} style={{fontSize:"large", color:"white", padding: "0rem", verticalAlign: "top"}}/>
                            <span className="side-nav-text">Search</span></Link>
                        </div>
                    </li>
                </ul>
            </div>



        </div>
    )
}
