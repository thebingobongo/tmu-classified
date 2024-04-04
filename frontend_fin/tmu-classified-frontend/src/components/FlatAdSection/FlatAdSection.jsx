import React from 'react'
import FlatAdCard from '../FlatAdCard/FlatAdCard'
import "./FlatAdSection.css"

const FlatAdSection = ({ title }) => {
  
    // Create an array with numCards elements and map over it to create the AdCards
    const cards = [...Array(4)].map((_, i) => (
        <FlatAdCard
        key={i}
        image='/pc.jpeg'
        title={`Item ${i+1}`}
        category={"Items for Sale"}
        subcategory={"Car"}
        price={`$${(i+1)*10}`}
        location="Toronto"
        />
    ));

    return (
        <div className='flat-ad-section'>
            <div className='flat-ad-container'>
                <h1 className='flat-ad-section-title'> {title} </h1>
                <div className='flat-ad-title-container'>
                    {cards}
                </div>
            </div>
        </div>
    )
}


export default FlatAdSection