import React from 'react';
import './AdvancedSearch.css';

const AdvancedSearch = () => {
    return (
        <div className='advanced-search-section'>
        <div className='advanced-search-container'>
            <div className="advanced-search-bar">
                <div className='advanced-search-bar-wrapper'>
                    <input type="text" placeholder="Search..." className="advanced-search-input" />
                </div>
                <div className="advanced-dropdowns">
                    <select className="advanced-category-select">
                        <option value="">All Categories</option>
                        <option value="items-wanted">Items Wanted</option>
                        <option value="items-for-sale">Items for Sale</option>
                        <option value="academic-services">Academic Services</option>
                    </select>
                    <select className="advanced-subcategory-select">
                        <option value="">All Subcategories</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Car">Car</option>
                        <option value="Cellphone">Cellphone</option>
                        <option value="Textbook">Textbook</option>
                        <option value="Other">Other</option>
                    </select>
                    <select className="advanced-location-select">
                        <option value="">All Locations</option>
                        <option value="Toronto">Toronto</option>
                        <option value="Scarborough">Scarborough</option>
                        <option value="North York">North York</option>
                        <option value="Mississauga">Mississauga</option>
                    </select>
                </div>
                <div className="advanced-prices">
                    <input type="number" placeholder="Price Lower Than" className="advanced-price-input input1" />
                    <input type="number" placeholder="Price Greater Than" className="advanced-price-input input2" />
                </div>
                <button className="advanced-search-button">Search</button>
            </div>
        </div>
        </div>
    );
};

export default AdvancedSearch;
