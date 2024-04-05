import React, {useState} from 'react';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        navigate(`/SearchResults?search=${search}&category=${category}`);
    };

    return (
            <div className="search-bar">
                <input type="text" placeholder="Search..." className="search-input" value={search} onChange={(e) => setSearch(e.target.value)} />
                <select className="category-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    {/* Add more categories as needed */}
                    <option value="Items Wanted">Items Wanted</option>
                    <option value="Items for Sale">Items for Sale</option>
                    <option value="Academic Services">Academic Services</option>
                </select>
                <button type="submit" className="search-button" onClick={handleSearch}>Search</button>
            </div>
    );
};

export default SearchBar;