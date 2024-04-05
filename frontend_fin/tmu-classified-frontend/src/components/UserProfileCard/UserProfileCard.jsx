import React, { useEffect, useState } from 'react';
import './UserProfileCard.css'; 
import FlatAdSection from '../FlatAdSection/FlatAdSection';

const UserProfileCard = ( ) => {
    const [userAds, setUserAds] = useState([]);
    const [user, setUser] = useState(null);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false); 

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError('New password and confirm password do not match.');
            setIsSuccess(false); 
            return;
        }
        const token = sessionStorage.getItem('token');
        fetch('http://127.0.0.1:8000/change_password/', {
            method: 'POST',
            headers: {
                'Authorization': `Token ${token}`,
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                old_password: oldPassword,
                new_password: newPassword
            })
        })
        .then(response => {
            if (response.ok) {
                setError('Password change was successful.');
                setIsSuccess(true); 
            } else {
                setError('Password change failed.');
                setIsSuccess(false); 
            }
        });
    };

    return (
        <div className='user-profile-page'>
            <div className='user-profile-card1'>
                <div className="username-text">Username: {user?.username}</div>
                <div className="email-text">Email: {user?.email}</div>
                <p className='num-ads'>Posted Ads: {userAds.length}</p>
            </div>
            <br/>
            <div className='user-profile-card2'>
                <form className="password-form" onSubmit={handleSubmit}>
                    {error && <div className={isSuccess ? 'success-text' : 'error-text'}>{error}</div>}
                    <input type="password" placeholder="Old Password" className="password-input" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                    <input type="password" placeholder="New Password" className="password-input" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    <input type="password" placeholder="Confirm New Password" className="password-input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <button type="submit" className="password-button">Change Password</button>
                </form>
             </div>
            <FlatAdSection title={"My Ads"} data={userAds} />
        </div>
    );
};

export default UserProfileCard;
