import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';

class Home extends Component {
    
    render() {
        if (!localStorage.getItem('user')) return <Redirect to='/login' />
        return (
            <Fragment>
                <ul>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                </ul>
            </Fragment>
        )
    }
}

export default Home;
