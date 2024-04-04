import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import PostAd from './pages/PostAd'
import AdView from './pages/AdView'

function App() {

  return (
    <>
    <BrowserRouter >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/PostAd" element={<PostAd />} />
              <Route path="/AdView" element={<AdView />} />
            </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
