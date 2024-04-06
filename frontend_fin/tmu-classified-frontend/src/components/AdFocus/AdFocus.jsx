import React from 'react';
import './AdFocus.css';

const AdFocus = ({ ad, currentUser, onDelete }) => {
    const { image, title, description, location, price, category, subCategory, username } = ad;
    const isCurrentUserOwner = currentUser === username;

    const handleDelete = () => {    // deleting the ad
        onDelete(ad.id);
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
                    <p className="adfocus-location">{location}</p>
                    <p className="adfocus-price">{price}</p>
                    <p className="adfocus-username">Posted by:</p><p className='adfocus-username1'>{username}</p> 
                    
                    {isCurrentUserOwner ? (
                        <button className="adfocus-button" onClick={handleDelete}>Delete Ad</button>
                    ) : (
                        <>
                            <button className="adfocus-button ad-btn1">Contact</button>
                            <button className="adfocus-button ad-btn2">Email</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdFocus;
