import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import { Link } from 'react-router-dom';
import './admin_dashboard.css'; 
import logo from './images/TMU-rgb.png';

function Chat() {
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

            <ChatEngine
                projectID='c329160d-ee95-4a9f-bfcd-a7f4f3d93eac'
                userName='Admin'
                userSecret='admin'
            />
    </div>
    );
}

export default Chat ;