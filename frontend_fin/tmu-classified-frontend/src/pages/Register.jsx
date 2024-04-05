import React from 'react';
import './SignIn.css'; // Reusing the same CSS file
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header'

const Register = () => {
    return (
        <div className='signin-page'>
            <Header />
        <div className='signin-body'>
            <div className="signin-container">
                <h2 className="signin-title">Register</h2>
                <form className="signin-form">
                    <input type="text" placeholder="Email" className="signin-input" />
                    <input type="text" placeholder="Username" className="signin-input" />
                    <input type="password" placeholder="Password" className="signin-input" />
                    <input type="password" placeholder="Confirm Password" className="signin-input" />
                    <button type="submit" className="signin-button">Create Account</button>
                </form>
                <p className="signin-text">Already have an account? <a href="/signin" className="my-link">Sign in</a></p>
            </div>
        </div>
        </div>
    );
};

export default Register;
