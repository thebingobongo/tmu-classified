import React from 'react';
import './SignIn.css'; // Importing the CSS file
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className='signin-body'>
            <div className="signin-container">
                <h2 className="signin-title">Login to TMU Classified</h2>
                <form className="signin-form">
                    <input type="text" placeholder="Username" className="signin-input" />
                    <input type="password" placeholder="Password" className="signin-input" />
                    <button type="submit" className="signin-button">Sign In</button>
                </form>
                <p className="signin-text">Don't have an account? <Link to="/Register" >Create one</Link></p>
            </div>
        </div>
    );
};

export default SignIn;
