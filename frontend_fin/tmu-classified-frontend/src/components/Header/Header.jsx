import React from 'react';
import './Header.css';
import logo from '../../assets/TMU-rgb.png'; // Import the logo file
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import useAuth hook

const Header = () => {
    const { isLoggedIn, handleLogout } = useAuth();

    return (
        <div className="header-container">
            <Link className='header-logo-link' to='/'>
                <img className="header-logo" src={logo} alt="Logo" />
            </Link>
            <div className="header-button-group">
                {!isLoggedIn && <Link className='link header-button' to='/Register' >Sign Up</Link>}
                {!isLoggedIn && <Link className='link header-button' to='/Signin'>Login</Link>}
                {isLoggedIn && <Link className='link header-button-profile' to='/Profile'>Profile</Link>}
                {isLoggedIn && <Link className='link header-button' to='/' onClick={handleLogout}>Logout</Link>}
                <span></span>
                {isLoggedIn ? (<Link className='link big-button header-button' to='/PostAd'>Post Ad!</Link>)
                : (<Link className='link big-button header-button' to='/Signin'>Post Ad!</Link>)}
            </div>
        </div>
    );
};

export default Header;
