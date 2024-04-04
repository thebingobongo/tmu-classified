import React from 'react'
import Header from '../components/Header/Header'
import AdvancedSearch from '../components/AdvancedSearch/AdvancedSearch'
import FlatAdSection from '../components/FlatAdSection/FlatAdSection'
import Footer from '../components/Footer/Footer'

const SearchResults = () => {
  return (
    <div>
        
        <Header />
        <AdvancedSearch />
        <FlatAdSection title={"Results"} />
        <Footer />


    </div>
  )
}

export default SearchResults