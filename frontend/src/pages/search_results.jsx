import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css';
import './items.css';
import logo from './../assets/TMU-rgb.png';
import pc_pic from './../assets/pc.jpeg';
import { Header } from './Home';


function Results_adder() {


    return (
        <div className='results_item'>
                <img className='pc' src={logo} alt='pc' />
                <h3 className='title' >PC</h3>
                <h3>$800 - $1200</h3>
        </div>
    );
}


function SearchResults() {
  return (
    <div>
        <Header />

        <br></br>
        <hr></hr>
        <br></br>

        <div className='results_container'>
            <div className='results_title'>Search Results</div>
            <Results_adder />
            <Results_adder />
            <Results_adder />
            <Results_adder />
            <Results_adder />
        </div>

    </div>
  );
}

export default SearchResults;