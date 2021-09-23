import axios from 'axios';
import React from 'react';
import AdminSidebar from './components/AdminSidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminShowAllUsers from './Component/AdminShowAllUsers';
import AdminGetAllTweet from './Component/AdminGetAllTweet';

class AdminHomePage extends React.Component {

    render(){
        return(
            <div>
                <Router >

                <div className="App">
                <div className="side-nav">
                    <AdminSidebar />
                    </div>
                    <div className="main">
                        <Switch>
                        <Route path="/showalluser" component={AdminShowAllUsers}></Route>
                        <Route path="/getalltweet" component={AdminGetAllTweet}></Route>


                        </Switch>

                    </div>

                </div>
</Router>
            </div>
        )
    }

}
export default AdminHomePage;