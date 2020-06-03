import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

// This class renders the NavBar on the page. 
// Clicking the NavLink, it takes us to the 
// Route defined by "to".

class NavBar extends Component{
    render(){
        return(
            <nav className="black">
                <div className="nav-wrapper">
                    <NavLink exact to="/" className="brand-logo">AirBnB</NavLink>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/host">Become a host</NavLink></li>
                        <li><NavLink to="/help">Help</NavLink></li>
                        <li><NavLink to="/signup">Sign up</NavLink></li>
                        <li><NavLink to="/login">Log in</NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar; 