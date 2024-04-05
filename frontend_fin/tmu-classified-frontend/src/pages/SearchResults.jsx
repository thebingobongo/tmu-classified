import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import AdvancedSearch from '../components/AdvancedSearch/AdvancedSearch';
import FlatAdSection from '../components/FlatAdSection/FlatAdSection';
import Footer from '../components/Footer/Footer';

const SearchResults = () => {
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const search = searchParams.get('search');
        const category = searchParams.get('category');

        // Fetch data from the API based on the search and category
        fetch(`http://127.0.0.1:8000/search?search=${search}&category=${category}`)
            .then((response) => response.json())
            .then((data) => console.log(data));
    }, [searchParams]);

    return (
        <div className='search-results-page'>
            <Header />
            <AdvancedSearch />
            <FlatAdSection title={"Results"} />
            <Footer />
        </div>
    );
};

export default SearchResults;
