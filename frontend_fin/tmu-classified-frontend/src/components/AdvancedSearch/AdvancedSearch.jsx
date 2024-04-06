import React, { useState } from 'react';
import './AdvancedSearch.css';
import { useNavigate } from 'react-router-dom';

const AdvancedSearch = () => {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [location, setLocation] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();

        let queryParams = new URLSearchParams();
        if (search) queryParams.append('search', search);
        if (category) queryParams.append('category', category);
        if (subCategory) queryParams.append('sub_category', subCategory);
        if (location) queryParams.append('city', location);
        if (minPrice) queryParams.append('min_price', minPrice);
        if (maxPrice) queryParams.append('max_price', maxPrice);

        navigate(`/SearchResults?${queryParams.toString()}`);
    };

    return (
        <div className='advanced-search-section'>
            <div className='advanced-search-container'>
                <div className="advanced-search-bar">
                    <div className='advanced-search-bar-wrapper'>
                        <input type="text" placeholder="Search..." className="advanced-search-input" value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    <div className="advanced-dropdowns">
                        <select className="advanced-category-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">All Categories</option>
                            <option value="Items Wanted">Items Wanted</option>
                            <option value="Items for Sale">Items for Sale</option>
                            <option value="Academic Services">Academic Services</option>
                        </select>
                        <select className="advanced-subcategory-select" value={subCategory} onChange={(e) => setSubCategory(e.target.value)}>
                            <option value="">All Subcategories</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Car">Car</option>
                            <option value="Cellphone">Cellphone</option>
                            <option value="Textbook">Textbook</option>
                            <option value="Other">Other</option>
                        </select>
                        <select className="advanced-location-select" value={location} onChange={(e) => setLocation(e.target.value)}>
                            <option value="">All Locations</option>
                            <option value="Toronto">Toronto</option>
                            <option value="Scarborough">Scarborough</option>
                            <option value="North York">North York</option>
                            <option value="Mississauga">Mississauga</option>
                            <option value="Brampton">Brampton</option>
                            <option value="Waterloo">Waterloo</option>
                            <option value="Oshawa">Oshawa</option>
                            <option value="Oakville">Oakville</option>
                            <option value="Etobicoke">Etobicoke</option>

                        </select>
                    </div>
                    <div className="advanced-prices">
                        <input type="number" placeholder="Price Greater Than" className="advanced-price-input input1" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                        <input type="number" placeholder="Price Lower Than" className="advanced-price-input input2" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                    </div>
                    <button className="advanced-search-button" onClick={handleSearch}>Search</button>
                </div>
            </div>
        </div>
    );
};

export default AdvancedSearch;
