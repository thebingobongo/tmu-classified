import React from 'react';
import './Header.css';
import logo from '../../assets/TMU-rgb.png'; // Import the logo file

const Header = () => {
    return (
      <div className='header-section'>
        <div className="header-container">
            <div>
                <img className="header-logo" src={logo} alt="Logo" />
            </div>
            <div className="header-button-group">
                <button className='header-button'>Login</button>
                <button className='header-button'>Sign Up</button>
                <button className='big-button header-button'>Post Ad!</button>
            </div>
        </div>
      </div>
    );
};

export default Header;
