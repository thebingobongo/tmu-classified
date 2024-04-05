import React, { useEffect, useState } from 'react'
import AdCard from '../AdCard/AdCard'
import './AdSection.css';

const AdSection = ({ numCards, title }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/search?category=${title}&limit=${numCards}`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [numCards, title]);

    const cards = data.map((item, i) => (
        <AdCard
        key={item.ad_id}
        ad_id={item.ad_id}
        image={item.image || '/image_missing.jpg'} // Use the image from the data if it exists, otherwise use a default image
        title={item.title}
        price={`$${item.price}`}
        location={item.city}
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
