import React from 'react'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import AdFocus from '../components/AdFocus/AdFocus'
import Footer from '../components/Footer/Footer'

const AdView = () => {
  return (
    <div>
        <Header />
        <SearchBar />
        <AdFocus ad={{
            image: "/pc.jpeg", // Replace with your image URL
            title: "Ad Title",
            description: "This is a description of the ad.",
            location: "Toronto",
            price: "$100"
        }} />
        <Footer />
    </div>
  )
}

export default AdView