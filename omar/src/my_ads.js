import React from 'react';
import { Link } from 'react-router-dom';
import './admin_dashboard.css'; 
import './user_profile.css';
import logo from './images/TMU-rgb.png';
import { Header } from './Home';
import { Items_sale_adder, Items_wanted_adder, Services_adder } from './Home';
import { UserInfo } from './admin_dashboard_users';


function MyAds() {


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
                    <Link className='topbar_section topbar_section4' to='/my_messages'>My Messages</Link> <span> </span>
                </div>
                <div className='profile_content'>
                    <Items_sale_adder />
                    <Items_wanted_adder />
                    <Items_sale_adder />
                    <Items_wanted_adder />
                    <Items_sale_adder />
                    <Items_wanted_adder />
                    <Items_sale_adder />
                    <Items_wanted_adder />
                    <Items_sale_adder />
                    <Items_wanted_adder />
                </div>
        </div>

    </div>
    
  );
}

export default MyAds;