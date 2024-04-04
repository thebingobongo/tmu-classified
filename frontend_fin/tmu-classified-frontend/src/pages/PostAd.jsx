import React from 'react';
import './SignIn.css'; // Reusing the same CSS file
import logo from '../assets/TMU-rgb.png'; // Import the logo file
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header'

const PostAd = () => {
    return (
        <div className='post-ad-page'>
            < Header />
            <div className="post-ad-container">
                <h2 className="signin-title">Post an Ad</h2>
                <form className="signin-form">
                    <input type="text" placeholder="Title" className="signin-input" />
                    <textarea placeholder="Description" className="signin-input" />
                    
                    <div className="signin-input">
                        <label>
                            <input type="radio" name="category" value="Items for Sale" />
                            <span className='radio_label0'></span>
                            <span className='option_text'>Items for Sale</span>
                        </label>

                        <label>
                            <input type="radio" name="category" value="Items Wanted" />
                            <span className='radio_label0'></span>
                            <span className='option_text'>Items Wanted</span>
                        </label>
                        
                        <label>
                            <input type="radio" name="category" value="Academic Services" />
                            <span className='radio_label0'></span>
                            <span className='option_text'>Academic Services</span>
                        </label>
                    </div>
                    <select className="signin-input">
                        <option value="">Select Category</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Car">Car</option>
                        <option value="Cellphone">Cellphone</option>
                        <option value="Textbook">Textbook</option>
                        <option value="Other">Other</option>
                        {/* <!-- Add more options as needed --> */}
                    </select>
                    <input type="number" placeholder="Price" className="signin-input" />
                    <select className="signin-input">
                        <option value="">Select City</option>
                        <option value="Toronto">Toronto</option>
                        <option value="Scarborough">Scarborough</option>
                        <option value="North York">North York</option>
                        <option value="Mississauga">Mississauga</option>
                        {/* <!-- Add more options as needed --> */}
                    </select>
                    <input type="file" className="signin-input" />
                    <button type="submit" className="signin-button">Post Ad</button>
                </form>
            </div>

        </div>
    );
};

export default PostAd;
