import React, {} from 'react';
import {Link} from 'react-router-dom';

const Navbar = ({loggedIn, logout}) => {

    const links = loggedIn ? 
        <div>
            <button onClick={() => logout()}>Logout</button>
        </div> : 
        <div>
            <Link to={'/signup'}>Signup</Link>
            <Link to={'/login'}>Login</Link>
        </div>
    return(
        <div>
            {links}
        </div>
    )
};

export default Navbar;