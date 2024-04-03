import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register_signin.css';
import './post_ad.css';
import logo from './images/TMU-rgb.png';
import pc_pic from './images/pc.jpeg';

function FileUploadBox() {
    const [imageSrc, setImageSrc] = useState(null);
    const [fileName, setFileName] = useState('No file chosen');
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setImageSrc(reader.result);
        };
        reader.readAsDataURL(file);
        setFileName(file.name);
      } else {
        setImageSrc(null);
        setFileName('No file chosen');
      }
    };
  
    return (
      <div className="photo_container">
        <div className="file_preview">
          {imageSrc && <img src={imageSrc} alt="Uploaded Image" />}
        </div>
        <input type="file" className="file_upload_input" onChange={handleFileChange} />
      </div>
    );
}

function Post_ad() {
    const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value.replace(/^\$/, ''));
    }

    return (
        <div>

            <div className="grid-container1-register">
    
                <Link className="tmulogo_register" to='/'>
                    <img src={logo} alt='logo' />
                </Link>
    
                {/* <Link className='home' to="/">Home</Link> <span> </span> */}
    
                <Link className='link2 user_profile' to="/user_profile">Profile</Link> <span> </span>
                {/* <Link className='search_results' to="/search_results">Search</Link> <span> </span> */}
                
            </div>

            <hr></hr>
            <br></br>
    
            <form className='post_ad_form'>

                <h1 className='post_ad_title'>Ad details</h1>

                <div className='ad_type_container'>
                    <p className='ad_post_type'>Ad Type</p>

                    <div className='ad_type_options'>
                        <label className='option_row1' id='label_ad_buy' for="ad_post_buy">
                            <input type="radio" id="ad_post_buy" name="options" value="Buy"/>
                            <span className='radio_label0'></span>
                            <span className='option_text'>I'm looking for</span>
                        </label>

                        <label className='option_row1' id='label_ad_sell' for="ad_post_sell">
                            <input type="radio" id="ad_post_sell" name="options" value="Sell"/>
                            <span className='radio_label0'></span>
                            <span className='option_text'>I'd like to sell</span>
                        </label>

                        <label className='option_row1' id='label_ad_service' for="ad_post_service">
                            <input type="radio" id="ad_post_service" name="options" value="Sell"/>
                            <span className='radio_label0'></span>
                            <span className='option_text'>I'd like to offer a service</span>
                        </label>
                    </div>

                </div>

                <div className='condition_container'>
                    <p className='condition'>Condition</p>
                    <div className='condition_options'>
                        <label className='option_row2' id='label_condition1' for="condition1">
                            <input type="radio" id="condition1" name="conditions" value="Condition1"/>
                            <span className='radio_label'></span>
                            <span className='option_text'>Brand New</span>
                        </label>

                        <label className='option_row2' id='label_condition2' for="condition2">
                            <input type="radio" id="condition2" name="conditions" value="Condition2"/>
                            <span className='radio_label'></span>
                            <span className='option_text'>Used - Like New</span>
                        </label>

                        <label className='option_row2' id='label_condition3' for="condition3">
                            <input type="radio" id="condition3" name="conditions" value="Condition3"/>
                            <span className='radio_label'></span>
                            <span className='option_text'>Used - Good</span>
                        </label>
                        
                        <label className='option_row2' id='label_condition4' for="condition4">
                            <input type="radio" id="condition4" name="conditions" value="Condition4"/>
                            <span className='radio_label'></span>
                            <span className='option_text'>Used - Fair</span>
                        </label>
                    </div>
                </div>

                <div className='ad_title_container'>
                        <p className='ad_title_text'>Ad Title</p>
                        <input type="text" id="ad_title" name="ad_title" required autocomplete="off"/>
                </div>

                <div className='ad_description_container'>
                        <p className='ad_description_text'>Description</p>
                        <textarea id="ad_description" name="ad_description" autocomplete="off"/>
                </div>


                <div className='ad_price_container'>
                    <p className='ad_price_text'>Price</p>
                    <input type="text" id="ad_price" name="ad_price" value={'$' + text} onChange={handleChange} required autocomplete="off"/>
                </div>

                <div className='ad_location_container'>
                    <p className='ad_location_text'>Location</p>
                <   input type="text" id="ad_location" name="ad_location" placeholder='city' autocomplete="off"/>
                </div>
    
                <div className='contact_info_container'>
                    <p className='contact_info_text'>Contact Information</p>
                    <input type="text" id="ad_contact_info" name="ad_contact_info" placeholder='email' required autocomplete="off"/>
                    <input type="text" id="ad_contact_info" name="ad_contact_info" placeholder='phone' required autocomplete="off"/>
                </div>
                
                <div className='ad_photos_container'>
                    <p className='ad_photos_text'>Photos (Optional)</p>
                    <div className='photos_container'>
                        <FileUploadBox />
                        <FileUploadBox />
                        <FileUploadBox />
                        <FileUploadBox />
                    </div>
                </div>
                <button id='post_ad' type="submit">Post Ad</button>
            </form>
            
        <br></br>
        <br></br>

        </div>

    );
}

export default Post_ad;