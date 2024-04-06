import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import SearchResults from './pages/SearchResults'
import SignIn from './pages/SignIn'
import PostAd from './pages/PostAd'
import AdView from './pages/AdView'
import Profile from './pages/Profile';

import { AuthProvider } from './components/AuthContext';

function App() {

  return (
    <>
    <AuthProvider>
    <BrowserRouter >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/PostAd" element={<PostAd />} />
              <Route path="/AdView/:ad_id" element={<AdView />} />
              <Route path='/SearchResults' element={<SearchResults />} />
              <Route path='/Profile' element={<Profile />} />
            </Routes>
    </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
