import React from 'react';
import { Link } from 'react-router-dom';
import './register_signin.css';
import logo from './images/TMU-rgb.png';
import pc_pic from './images/pc.jpeg';

function register() {
    return (
        <div>

            <div className="grid-container1-register">
    
                <Link className="tmulogo_register" to='/'>
                    <img src={logo} alt='logo' />
                </Link>
    
                {/* <Link className='home' to="/">Home</Link> <span> </span> */}

                <Link className='link2 sign_in2' to="/sign_in">Sign in</Link> <span> </span>
    
                {/* <Link className='user_profile' to="/user_profile">Profile</Link> <span> </span> */}
                {/* <Link className='search_results' to="/search_results">Search</Link> <span> </span> */}
                
            </div>

            <hr></hr>
            <br></br>
    
            <form className='register_form'>

                <h1 id='register_create_account'>Create an Account!</h1>
                <input type="text" id="register_first_name" name="register_first_name" placeholder='First name' required autocomplete="off"/>
                <input type="text" id="register_last_name" name="register_last_name" placeholder='Last name' required autocomplete="off"/>

                <input type="text" id="register_email" name="register_email" placeholder='E-mail' required autocomplete="off"/>
                <input type="password" id="register_password1" name="register_password1" placeholder='Password' required autocomplete="off"/>
                <input type="password" id="register_password2" name="register_password2" placeholder='Confirm Password' required autocomplete="off"/>

                <button id='register_submit' type="submit">Create Account</button>
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

        </div>

    );
}

export default register;