import React from 'react'
import FlatAdCard from '../FlatAdCard/FlatAdCard'
import "./FlatAdSection.css"

const FlatAdSection = ({ title, data }) => {
  
    // Map over the data array to create the AdCards
    console.log(data);
    const cards = data ? data.map((item, i) => (
        <FlatAdCard
        key={item.ad_id}
        image={item.image || '/image_missing.jpg'} // Use the image from the data if it exists, otherwise use a default image
        title={item.title}
        category={item.category}
        subcategory={item.sub_category}
        price={`$${item.price}`}
        location={item.city}
        />
    )) : null;

    return (
        <div className='flat-ad-section'>
            <div className='flat-ad-container'>
                <h1 className='flat-ad-section-title'> {title} </h1>
                <div className='flat-ad-title-container'>
                    {cards}
                </div>
                {data && data.length === 0 && <div className='flat-ad-error-text'>No results found.</div>}
            </div>
        </div>
    )
}

export default FlatAdSection
