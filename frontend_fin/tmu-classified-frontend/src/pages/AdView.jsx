import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import AdFocus from '../components/AdFocus/AdFocus'
import Footer from '../components/Footer/Footer'

const AdView = () => {
  const { ad_id } = useParams();
  const [ad, setAd] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/ads/${ad_id}`)
      .then((response) => response.json())
      .then((data) => setAd(data));
  }, [ad_id]);

  return (
    <div>
        <Header />
        <SearchBar />
        {ad && <AdFocus ad={{
            image: ad.image || "/image_missing.jpg", 
            title: ad.title,
            description: ad.description,
            location: ad.city,
            price: `$${ad.price}`,
            category: ad.category, 
            subCategory: ad.sub_category 
        }} />}
        <Footer />
    </div>
  )
}

export default AdView
