import React from 'react'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import AdSection from '../components/AdSection/AdSection'

const Home = () => {
  return (
    <div>
        <Header />
        <SearchBar />
        <AdSection numCards={3} title={"Items for Sale"}/>
    </div>
  )
}

export default Home