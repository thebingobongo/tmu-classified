import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import logo from './images/TMU-rgb.png';
import Home from './Home';
import RegisterAcc from './register_acc';
import SignIn from './sign_in';
import PostAd from './post_ad';
import ItemsWanted from './items_wanted';
import ItemsSale from './items_sale';
import Services from './services';
import UserProfile from './user_profile';
import SearchResults from './search_results';

function App() {
  return (
    <div className="entire_page">
      <hr className='top_bar_decoration'/>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register_acc" element={<RegisterAcc />} />
              <Route path="/sign_in" element={<SignIn />} />
              <Route path="/post_ad" element={<PostAd />} />
              <Route path="/items_wanted" element={<ItemsWanted />} />
              <Route path="/items_sale" element={<ItemsSale />} />
              <Route path="/services" element={<Services />} />
              <Route path="/user_profile" element={<UserProfile />} />
              <Route path="/search_results" element={<SearchResults />} />
            </Routes>
        </BrowserRouter>
        <br></br>
        <hr className='bottom_bar_decoration'/>
        <p className='contact_us'>Contact us at @tmuaddwebsite@gmail.com</p>
        <br></br>
    </div>
  );
}
export default App;