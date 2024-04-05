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
        const subCategory = searchParams.get('sub_category');
        const city = searchParams.get('city');
        const minPrice = searchParams.get('min_price');
        const maxPrice = searchParams.get('max_price');

        let queryParams = new URLSearchParams();
        if (search) queryParams.append('search', search);
        if (category) queryParams.append('category', category);
        if (subCategory) queryParams.append('sub_category', subCategory);
        if (city) queryParams.append('city', city);
        if (minPrice) queryParams.append('min_price', minPrice);
        if (maxPrice) queryParams.append('max_price', maxPrice);

        // Fetch data from the API based on the search parameters
        fetch(`http://127.0.0.1:8000/search?${queryParams.toString()}`)
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
