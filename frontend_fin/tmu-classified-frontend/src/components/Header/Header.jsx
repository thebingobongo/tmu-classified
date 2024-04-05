import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/TMU-rgb.png'; // Import the logo file
import { Link } from 'react-router-dom';

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true); // change to false to see how it looks when logged out

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="header-container">
            <Link className='header-logo-link' to='/'>
                <img className="header-logo" src={logo} alt="Logo" />
            </div>
            <div className="header-button-group">
                {!isLoggedIn && <Link className='link header-button' to='/Register' >Sign Up</Link>}
                {!isLoggedIn && <Link className='link header-button' to='/Signin'>Login</Link>}
                {isLoggedIn && <Link className='link header-button-profile' to='/Profile'>Profile</Link>}
                {isLoggedIn && <button className='link header-button' onClick={handleLogout}>Logout</button>}
                <span></span>
                <Link className='link big-button header-button' to='/PostAd'>Post Ad!</Link> <span></span>
            </div>
        </div>
    );
};

export default Header;
