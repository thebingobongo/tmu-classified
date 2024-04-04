import React from 'react';
import './Header.css';
import logo from '../../assets/TMU-rgb.png'; // Import the logo file
import { Link } from 'react-router-dom';


const Header = () => {
    return (
      <div className='header-section'>
        <div className="header-container">
            <Link to='/'>
                <img className="header-logo" src={logo} alt="Logo" />
            </Link>
            <div className="header-button-group">
                <Link className='header-button' to='/Signin'>Login</Link> <span></span>
                <Link className='header-button' to='/Register' >Sign Up</Link> <span></span>
                <Link className='big-button header-button' to='/PostAd'>Post Ad!</Link> <span></span>
                <Link className='header-button-profile' to='/Profile'>Profile</Link> <span></span>
            </div>
        </div>
      </div>
    );
};

export default Header;
