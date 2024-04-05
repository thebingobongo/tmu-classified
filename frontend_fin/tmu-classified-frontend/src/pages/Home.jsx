import React from 'react'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import AdSection from '../components/AdSection/AdSection'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home-page-container'>
        <Header />
        <SearchBar />
        <AdSection numCards={3} title={"Items for Sale"}/>
        <AdSection numCards={3} title={"Items Wanted"}/>
        <AdSection numCards={3} title={"Academic Services"}/>
        <Footer />
    </div>
  )
}

export default Home