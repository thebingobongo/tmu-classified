import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './items.css';
import logo from './images/TMU-rgb.png';
import pc_pic from './images/pc.jpeg';
import { Header } from './Home';
import { Items_sale_adder } from './Home';


function ItemsSale() {
  return (
    <div>

        <Header />

        <br></br>
        <hr></hr>
        <br></br>

        <div className='items_sale_container'>
            <div className='onsale_items_title'>Items On Sale</div>
            <Items_sale_adder />
            <Items_sale_adder />
            <Items_sale_adder />
            <Items_sale_adder />
            <Items_sale_adder />
        </div>

    </div>
  );
}

export default ItemsSale;