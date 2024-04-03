import React from 'react';
import { Link } from 'react-router-dom';
import './register_signin.css';
import logo from './images/TMU-rgb.png';
import pc_pic from './images/pc.jpeg';

function sign_in() {
    return (
        <div>

            <div className="grid-container1-register">
    
                <Link className="tmulogo_register" to='/'>
                    <img src={logo} alt='logo' />
                </Link>
    
                {/* <Link className='home' to="/">Home</Link> <span> </span> */}

                <Link className='link2 register_acc' to="/register_acc">Register</Link> <span> </span>
    
                {/* <Link className='user_profile' to="/user_profile">Profile</Link> <span> </span> */}
                {/* <Link className='search_results' to="/search_results">Search</Link> <span> </span> */}
                
            </div>

            <hr></hr>
            <br></br>
    
            <form className='signin_form'>

                <h1 id='signin_title'>Sign In</h1>

                <input type="text" id="signin_email" name="signin_email" placeholder='E-mail' required autocomplete="off"/>
                <input type="password" id="signin_password" name="signin_password" placeholder='Password' required autocomplete="off"/>

                <button id='signin_submit' type="submit">Sign In</button>
            </form>
            
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>

    );
}

export default sign_in;