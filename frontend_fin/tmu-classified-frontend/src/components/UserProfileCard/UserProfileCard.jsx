import React from 'react';
import './UserProfileCard.css'; 
import FlatAdSection from '../FlatAdSection/FlatAdSection';
// Importing the CSS file

const UserProfileCard = ( ) => {

    return (
        <div className='user-profile-page'>
            <div className='user-profile-card1'>
                <div className="username-text">Username: username</div>
                <div className="email-text">Email: email@email.com</div>
                <p className='num-ads'>Posted Ads: </p>
            </div>
            <br/>
            <div className='user-profile-card2'>
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