import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css';
import './items.css';
import logo from './../assets/TMU-rgb.png';
import pc_pic from './../assets/pc.jpeg';
import { Header } from './Home';
import { Items_wanted_adder } from './Home';


function ItemsWanted() {
  return (
    <div>

        <Header />

        <br></br>
        <hr></hr>
        <br></br>

        <div className='items_wanted_container'>
            <div className='wanted_items_title'>Items Wanted</div>
            <Items_wanted_adder />
            <Items_wanted_adder />
            <Items_wanted_adder />
            <Items_wanted_adder />
            <Items_wanted_adder />
        </div>

    </div>
  );
}

export default ItemsWanted;