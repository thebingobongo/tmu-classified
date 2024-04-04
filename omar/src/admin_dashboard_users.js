import React from 'react';
import { Link } from 'react-router-dom';
import './admin_dashboard.css'; 
import logo from './images/TMU-rgb.png';
import { Header } from './Home';
import { Items_sale_adder, Items_wanted_adder, Services_adder } from './Home';



export function UserInfo() {
    return (
        <div className='user_info_box'>
            <img className='user_profile_pic' src={logo} alt='pc' />
            <p className='user_full_name' >omar shakir</p>
            <p className='user_email'>omar.shakir@torontomu.ca</p>
            <form className='form_delete_user'>
                <button className='btn_delete_user' type="submit">Delete User</button>
            </form>
        </div>
    );
}

function AdminDashboardUsers() {


  return (

    <div>

        <div className="grid-container1-register">
    
            <Link className="tmulogo_register" to='/'>
                <img src={logo} alt='logo' />
            </Link>

            {/* <Link className='home' to="/">Home</Link> <span> </span> */}

            <Link className='link2 user_profile' to="/user_profile">Profile</Link> <span> </span>
            {/* <Link className='search_results' to="/search_results">Search</Link> <span> </span> */}
            
        </div>

        <hr></hr>
        <br></br>

        <div className='admin_dashboard_container'>
            <div className='admin_dashboard_title'>Admin Dashboard</div>
            <div className='admin_dashboard_content_box'>
                <div className='admin_dashboard_sidebar'>
                    <Link className='sidebar_section' to='/admin_dashboard'>Manage Ads</Link> <span> </span>
                    <Link className='sidebar_section' to='/admin_dashboard_users'>Manage Users</Link> <span> </span>
                </div>
                <div className='sidebar_line'></div>
                <div className='admin_dashboard_content'>
                    <UserInfo/>
                    <UserInfo/>
                    <UserInfo/>
                    <UserInfo/>
                </div>
            </div>

        </div>

    </div>
    
  );
}

export default AdminDashboardUsers;