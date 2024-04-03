import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import logo from './assets/TMU-rgb.png';
import Home from './pages/Home';
import RegisterAcc from './pages/register_acc';
import SignIn from './pages/sign_in';
import PostAd from './pages/post_ad';
import ItemsWanted from './pages/items_wanted';
import ItemsSale from './pages/items_sale';
import Services from './pages/services';
import UserProfile from './pages/user_profile';
import SearchResults from './pages/search_results';
import AdminDashboard from './pages/admin_dashboard';

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
              <Route path="/admin_dashboard" element={<AdminDashboard />} />
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