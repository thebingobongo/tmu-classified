import React, { useEffect, useState } from 'react';
import './UserProfileCard.css'; 
import FlatAdSection from '../FlatAdSection/FlatAdSection';

const UserProfileCard = ( ) => {
    const [userAds, setUserAds] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        fetch('http://127.0.0.1:8000/user_ads/', {
            headers: {
                'Authorization': `Token ${token}`,
                'accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            setUserAds(data.map(item => item.ad));
            setUser(data[0]?.user);
        });
    }, []);

    return (
        <div className='user-profile-page'>
            <div className='user-profile-card1'>
                <div className="username-text">Username: {user?.username}</div>
                <div className="email-text">Email: {user?.email}</div>
                <p className='num-ads'>Posted Ads: {userAds.length}</p>
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
            <FlatAdSection title={"My Ads"} data={userAds} />
        </div>
    );
};

export default UserProfileCard;
