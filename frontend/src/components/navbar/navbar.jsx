import React, {} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'
const Navbar = ({loggedIn, logout, currentUser}) => {
    const links = loggedIn ? 
        <div className='session-btns'>
            <p id="username">user: {currentUser.username}</p>
            <button id="session-btn" onClick={() => logout()}>Logout</button>
        </div> : 
        <div className="session-btns">
            <Link id="session-btn" to={'/signup'}>Signup</Link>
            <Link id="session-btn" to={'/login'}>Login</Link>
        </div>

    return(
        <div className="navbar">
            <Link id="home" to={"/"}>Home</Link>
            <Link to={"/game"}>Play</Link>
            <h3 id="header">Five Card Draw</h3>
            {links}
        </div>
    )
};

export default Navbar;