import React from 'react';
import './Header.css'
import logo from '../../Images/images.png'

const Header = () => {
    return (
        <nav className='hedar'>
            <img src={logo} alt="" srcset="" />
            <h1 className='nav-title'>Boy's Club</h1>
            <div>
                <a href="/gym">GYM</a>
                <a href="/location">Location</a>
                <a href="/plan">Plan</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;