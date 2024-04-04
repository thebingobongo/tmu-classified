import React from 'react';
import './AdCard.css';
import { Link } from 'react-router-dom';

const AdCard = ({ image, title, price, location }) => {
    return (
        <div className="ad-card">
            <Link className='ad-image-link' to='/AdView'>
                <img src={image} alt={title} className="ad-image" />
            </Link>
            <h2 className="ad-title">{title}</h2>
            <p className="ad-price">{price}</p>
            <p className="ad-location">{location}</p>
        </div>
    );
};

export default AdCard;
