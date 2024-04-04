import React from 'react';
import './UserProfileCard.css'; 
import FlatAdSection from '../FlatAdSection/FlatAdSection';
// Importing the CSS file

const UserProfileCard = ( ) => {

    return (
        <div>
            <div className='user-profile-card'>
                <div className="username-text">Username: username</div>
                <div className="email-text">Email: email@email.com</div>
            </div>
            <br/>
            <div className='user-profile-card'>
                <form className="password-form">
                    <input type="password" placeholder="Old Password" className="password-input" />
                    <input type="password" placeholder="New Password" className="password-input" />
                    <input type="password" placeholder="Confirm New Password" className="password-input" />
                    <button type="submit" className="password-button">Change Password</button>
                </form>
             </div>
            <FlatAdSection title={"My Ads"} />
        </div>
    );
};

export default UserProfileCard;
