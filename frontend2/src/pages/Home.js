import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css';
import logo from './../assets/TMU-rgb.png';
import pc_pic from './../assets/pc.jpeg';


export function Items_wanted_adder() {


    return (
        <div className='item_wanted'>
                <img className='item_wanted_image' src={logo} alt='pc' />
                <p className='item_wanted_title' >PC</p>
                <p className='item_wanted_price'>$800 - $1200</p>
        </div>
    );
}

export function Items_sale_adder() {


    return (
        <div className='item_sale'>
                <img className='item_sale_image' src={logo} alt='pc' />
                <p className='item_sale_title' >PC</p>
                <p className='item_sale_price'>$800 - $1200</p>
        </div>
    );
}

export function Services_adder() {


    return (
        <div className='service'>
                <img className='service_image' src={logo} alt='pc' />
                <p className='service_title' >PC</p>
                <p className='service_price'>$800 - $1200</p>
        </div>
    );
}


export function Header() {
    return (
        <div className="grid-container1">

            <Link className="tmulogo" to='/'>
                <img src={logo} alt='logo' />
            </Link>

            <div className='login2'>
                <Link className='link register_acc' to="/register_acc">Register</Link> <span> </span>
                <Link className='link sign_in' to="/sign_in">Sign in</Link> <span> </span>
                <Link className='link admin' to="/admin_dashboard">Admin</Link> <span> </span>
            </div>

            {/* <Link className='home' to="/">Home</Link> <span> </span> */}

            <form id='search_form'>

                <input type="text" id="search_text" name="searching_text" placeholder='Search'/>

                <select id="search_category" name="search_category">
                    <option value="all_categories">All Cagetories</option>
                    <option value="clothing">Clothing</option>
                    <option value="books">Books</option>
                </select>

                <select id="search_location" name="search_location">
                    <option value="all_locations">Any Location</option>
                    <option value="clothing">Clothing</option>
                    <option value="books">Books</option>
                </select>

                <button id='search_submit' type="submit">Search</button> {/* this form is submitted to the server which then changes the url to /search_results */}
            </form>

            <div className='login'>
                <Link className='link register_acc' to="/register_acc">Register</Link> <span> </span>
                <Link className='link sign_in' to="/sign_in">Sign in</Link> <span> </span>
                <Link className='link admin' to="/admin_dashboard">Admin</Link> <span> </span>
            </div>

            {/* <Link className='user_profile' to="/user_profile">Profile</Link> <span> </span> */}
            {/* <Link className='search_results' to="/search_results">Search</Link> <span> </span> */}
            
            <Link className='link items_wanted' to="/items_wanted">Items Wanted</Link> <span> </span>
            <Link className='link items_sale' to="/items_sale">Items For Sale</Link> <span> </span>
            <Link className='link services' to="/services">Services</Link> <span> </span>

            <Link className='link post_ad_btn' to="/post_ad">Post Ad</Link> <span> </span>
        </div>
    );
}

function Home() {
  return (
    <div>

        <Header />

        <br></br>
        <hr></hr>

        <div className='grid-container2'>
            <div className='ad wanted_items_title'>Most Recent Items Wanted</div>
            <Items_wanted_adder />
            <Items_wanted_adder />
            <Items_wanted_adder />
            <Items_wanted_adder />
            <Items_wanted_adder />
            <Items_wanted_adder />
            <Items_wanted_adder />
            <Items_wanted_adder />
            <Items_wanted_adder />
            <Items_wanted_adder />
            <div className='ad onsale_items_title'>Most Recent Items On Sale</div>
            <Items_sale_adder />
            <Items_sale_adder />
            <Items_sale_adder />
            <Items_sale_adder />
            <Items_sale_adder />
            <Items_sale_adder />
            <Items_sale_adder />
            <Items_sale_adder />
            <Items_sale_adder />
            <Items_sale_adder />
            <div className='ad services_available_title'>Services Available</div>
            <Services_adder />
            <Services_adder />
            <Services_adder />
            <Services_adder />
            <Services_adder />
        </div>

    </div>
  );
}

export default Home;