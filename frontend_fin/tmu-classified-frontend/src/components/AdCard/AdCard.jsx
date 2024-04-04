import React from 'react';
import './AdCard.css';

const AdCard = ({ image, title, price, location }) => {
    return (
        <div className="ad-card">
            <img src={image} alt={title} className="ad-image" />
            <h2 className="ad-title">{title}</h2>
            <p className="ad-price">{price}</p>
            <p className="ad-location">{location}</p>
        </div>
    );
};

export default AdCard;
