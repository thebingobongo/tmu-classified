import React from 'react';
import './AdFocus.css'; // Importing the CSS file

const AdFocus = ({ ad }) => {
    const { image, title, description, location, price } = ad; // Destructuring the ad object

    return (
        <div className='adfocus-section'>
            <div className="adfocus-container">
                <div className="adfocus-left">
                    <h2 className="adfocus-title">{title}</h2>
                    <img src={image} alt={title} className="adfocus-image" />
                    <p className="adfocus-description">{description}</p>
                </div>
                <div className="adfocus-right">
                    <p className="adfocus-location">{location}</p>
                    <p className="adfocus-price">{price}</p>
                    <button className="adfocus-button">Contact</button>
                
                </div>
            </div>
        </div>
    );
};

export default AdFocus;
