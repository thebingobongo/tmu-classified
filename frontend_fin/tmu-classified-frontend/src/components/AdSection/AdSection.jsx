import React, { useEffect, useState } from 'react';
import AdCard from '../AdCard/AdCard';
import './AdSection.css';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';

const AdSection = ({ numCards, title }) => {
    const [data, setData] = useState([]);
    const [slidesPerView, setSlidesPerView] = useState(4);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/search?category=${title}&limit=${numCards}`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [numCards, title]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 500) {
                setSlidesPerView(3);
            } else {
                setSlidesPerView(4);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='ad-section'>
            <div className='ad-container'>
                <h1 className='ad-section-title'>{title}</h1>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={slidesPerView}
                    loop
                >
                    {data.map((item, i) => (
                        <SwiperSlide className='swipe-tag' key={item.ad_id}>
                            <AdCard
                                ad_id={item.ad_id}
                                image={item.image || '/image_missing.jpg'}
                                title={item.title}
                                price={`$${item.price}`}
                                location={item.city}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default AdSection;
