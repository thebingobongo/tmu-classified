import React from 'react';
import './FlatAdCard.css';
import { Link } from 'react-router-dom';

const FlatAdCard = ({ad_id, image, title, category, subcategory, price, location }) => {
    return (
        <div className="flat-ad-card">

            <div className='flat-ad-section1'>
            <Link to={`/AdView/${ad_id}`}>
                <img src={image} alt={title} className="flat-ad-image" />
            </Link>
            </div>

            <div className='flat-ad-section2'>
                <h2 className="flat-ad-title">{title}</h2>
                <h2 className="flat-ad-category">{category}</h2>
                <h2 className="flat-ad-subcategory">{subcategory}</h2>
            </div>

            <div className='flat-ad-section3'>
                <p className="flat-ad-price">{price}</p>
                <p className="flat-ad-location">{location}</p>
            </div>

        </div>
    );
};

export default FlatAdCard;