import React from 'react';
import { Link } from 'react-router-dom';
import './admin_dashboard.css'; 
import './user_profile.css';
import logo from './images/TMU-rgb.png';
import { Header } from './Home';
import { Items_sale_adder, Items_wanted_adder, Services_adder } from './Home';
import { UserInfo } from './admin_dashboard_users';


function UserProfile() {


  return (

    <div className='userprofile_page'>
        
        <Header />

        <br></br>
        <hr></hr>
        <br></br>

        <div className='user_profile_container'>
                <div className='user_profile_topbar'>
                    <Link className='topbar_section topbar_section1' to='/user_profile'>My Profile</Link> <span> </span>
                    <Link className='topbar_section topbar_section2' to='/my_ads'>My Ads</Link> <span> </span>
                    <Link className='topbar_section topbar_section3' to='/my_orders'>My Orders</Link> <span> </span>
                    <Link className='topbar_section topbar_section4' to='/user_chat'>My Messages</Link> <span> </span>
                </div>
                <div className='profile_content'>
                   <UserInfo />
                   <form className='edit_profile'>
                        <input type="text" id="edit_email" name="edit_email" placeholder='E-mail' required autocomplete="off"/>
                        <input type="password" id="edit_password" name="register_password1" placeholder='Password' required autocomplete="off"/>
                        <button id='edit_submit' type="submit">Save Changes</button>
                    </form>
                </div>
        </div>

    </div>
    
  );
}

export default UserProfile;