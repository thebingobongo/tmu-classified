import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './AdFocus.css';

const AdFocus = ({ ad }) => {
    const navigate = useNavigate();  // Initialize useNavigate
    const { ad_id, image, title, description, location, price, category, subCategory, username } = ad;

    // Determine if the username of the ad poster is the same as the username stored in session storage
    const isCurrentUserOwner = sessionStorage.getItem('username') === username;
    const token = sessionStorage.getItem('token');

    const handleDelete = () => {    // Delete the ad using backend endpoint 
        fetch('http://127.0.0.1:8000/delete_ad/', {
            method: 'DELETE',
            headers: {
                'Authorization': `Token ${token}`,
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "ad_id": ad_id,
                "username": username
            })
        }).then(response => {
            if (response.ok) {
                // If the ad was successfully deleted, navigate back to the home page
                navigate('/');
            } else {
                console.error('Failed to delete ad');
            }
        });
    };

    const imageUrl = image ? `http://localhost:8000${image}` : "/image_missing.jpg";

    return (
        <div className='adfocus-section'>
            <div className="adfocus-container">
                <div className="adfocus-left">
                    <h2 className="adfocus-title">{title}</h2>
                    <img src={imageUrl} alt={title} className="adfocus-image" />
                    <p className="adfocus-category">{category}: {subCategory}</p>
                    <p className="adfocus-description">{description}</p>
                </div>
                <div className="adfocus-right">
                    <p className="adfocus-username">Posted by: {username}</p> 
                    <p className="adfocus-location">{location}</p>
                    <p className="adfocus-price">{price}</p>
                    
                    {isCurrentUserOwner ? (
                        <button className="adfocus-button" onClick={handleDelete}>Delete Ad</button>
                    ) : (
                        <>
                            <button className="adfocus-button">Contact</button>
                            <button className="adfocus-button">Email</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdFocus;
