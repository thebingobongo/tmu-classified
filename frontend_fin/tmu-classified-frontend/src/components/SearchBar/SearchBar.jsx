import React from 'react';
import './SearchBar.css';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    return (
            <div className="search-bar">
                <input type="text" placeholder="Search..." className="search-input" />
                <select className="category-select">
                    <option value="">All Categories</option>
                    {/* Add more categories as needed */}
                    <option value="items-wanted">Items Wanted</option>
                    <option value="items-for-sale">Items for Sale</option>
                    <option value="academic-services">Academic Services</option>
                </select>
                {/* <button className="search-button">Search</button> */}
                
                <Link className='search-button' to='/SearchResults'>Search</Link> <span></span>
            </div>
    );
};

export default SearchBar;