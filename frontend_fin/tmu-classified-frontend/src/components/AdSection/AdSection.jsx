import React from 'react'
import AdCard from '../AdCard/AdCard'
import './AdSection.css';

const AdSection = ({ numCards, title }) => {
  
    // Create an array with numCards elements and map over it to create the AdCards
    const cards = [...Array(numCards)].map((_, i) => (
        <AdCard
        key={i}
        image='/pc.jpeg'
        title={`Item ${i+1}`}
        price={`$${(i+1)*10}`}
        location="Location"
        />
    ));

    return (
        <div className='ad-section'>
            <div className='ad-container'>
                <h1 className='ad-section-title'> {title} </h1>
                <div className='ad-title-container'>
                    {cards}
                </div>
            </div>
        </div>
    )
}

export default AdSection
