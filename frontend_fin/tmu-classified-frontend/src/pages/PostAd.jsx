import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';
import Header from '../components/Header/Header';

const PostAd = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [price, setPrice] = useState('');
    const [city, setCity] = useState('');
    const [error, setError] = useState('');
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description || !category || !subCategory || !price || !city) {
            setError('All fields are required.');
            return;
        }
        if (file) {
            formData.append('image', file);
        }
        if (category === '') {
            setError('Please select a category.');
            return;
        }
        if (isNaN(price)) {
            setError('Price must be a number.');
            return;
        }
        const token = sessionStorage.getItem('token');
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('sub_category', subCategory);
        formData.append('price', price);
        formData.append('city', city);
        // Assuming you have a state for the file input
        formData.append('image', file); // 'file' is the state for the file input
    
        fetch('http://127.0.0.1:8000/post_ad/', {
            method: 'POST',
            headers: {
                'Authorization': `Token ${token}`,
                'accept': 'application/json',
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.ad_id) {
                navigate(`/AdView/${data.ad_id}`);
            } else {
                setError('Failed to post ad.');
            }
        });
    };
    

    return (
        <div className='post-ad-page'>
            <Header />
            <div className="post-ad-container">
                <h2 className="signin-title">Post an Ad</h2>
                {error && <div className='error-text'>{error}</div>}
                <form className="signin-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Title" className="signin-input" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea placeholder="Description" className="signin-input" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <div className="signin-input">
                        <label>
                            <input type="radio" name="category" value="Items for Sale" onChange={(e) => setCategory(e.target.value)} />
                            <span className='radio_label0'></span>
                            <span className='option_text'>Items for Sale</span>
                        </label>

                        <label>
                            <input type="radio" name="category" value="Items Wanted" onChange={(e) => setCategory(e.target.value)} />
                            <span className='radio_label0'></span>
                            <span className='option_text'>Items Wanted</span>
                        </label>
                        
                        <label>
                            <input type="radio" name="category" value="Academic Services" onChange={(e) => setCategory(e.target.value)} />
                            <span className='radio_label0'></span>
                            <span className='option_text'>Academic Services</span>
                        </label>
                    </div>
                    <select className="signin-input" value={subCategory} onChange={(e) => setSubCategory(e.target.value)}>
                        <option value="">Select Category</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Car">Car</option>
                        <option value="Cellphone">Cellphone</option>
                        <option value="Textbook">Textbook</option>
                        <option value="Other">Other</option>
                    </select>
                    <input type="number" placeholder="Price ($)" className="signin-input" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <select className="signin-input" value={city} onChange={(e) => setCity(e.target.value)}>
                        <option value="">Select City</option>
                        <option value="Toronto">Toronto</option>
                        <option value="Scarborough">Scarborough</option>
                        <option value="North York">North York</option>
                        <option value="Mississauga">Mississauga</option>
                    </select>
                    <input type="file" className="signin-input" onChange={handleFileChange} />
                    <button type="submit" className="signin-button">Post Ad</button>
                </form>
            </div>
        </div>
    );
};

export default PostAd;
