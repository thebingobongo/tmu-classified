import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css';
import './items.css';
import logo from './../assets/TMU-rgb.png';
import pc_pic from './../assets/pc.jpeg';
import { Header } from './Home';
import { Services_adder } from './Home';


function Services() {
  return (
    <div>

        <Header />

        <br></br>
        <hr></hr>
        <br></br>

        <div className='services_container'>
            <div className='services_available_title'>Services</div>
            <Services_adder />
            <Services_adder />
            <Services_adder />
            <Services_adder />
            <Services_adder />
        </div>

    </div>
  );
}

export default Services;