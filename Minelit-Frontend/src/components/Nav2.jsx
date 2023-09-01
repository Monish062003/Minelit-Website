import React, { useState } from "react";
import '../CSS/Nav2.css';
import { NavLink } from 'react-router-dom';
import logo from '../Images/logo-crop.png'

const Nav2 = () => {
    const [showNav, setNav] = useState(false);
    return (
        <>
            <nav>
                <div className="navigation">
                    <div className="left_nav">
                        <a href="/home"> <img src={logo} className="logo_img" /></a>
                        <ul className="list list1">
                            <li><NavLink className='nav-link' to='/home'>Home</NavLink></li>
                            <li><NavLink className='nav-link' to='/generate'>Generate</NavLink></li>
                            <li><NavLink className='nav-link' to='/pricing'>Pricing</NavLink></li>
                        </ul>
                    </div>
                    <div className="right_nav1">
                        <ul className="list list2">
                            <li><NavLink className='nav-link' to='/login'>Login</NavLink></li>
                            <li><NavLink className='nav-link signup' to='/signup1'>SignUp</NavLink></li>
                        </ul>
                        <div className='menu-bar' onClick={() => { setNav(!showNav) }}>{!showNav ? <i class="fa-solid fa-bars nav-menu"></i> : <i class="fa-solid fa-bars-staggered nav-menu" style={{ color: '#214ea6' }}></i>}</div>
                    </div>
                </div>
                <div className="menu-display" style={{ display: showNav ? 'flex' : 'none' }}>
                    <ul className="menu-list">
                        <li><NavLink className='nav-link' onClick={() => { setNav(false) }} to='/home'>Home</NavLink></li>
                        <li><NavLink className='nav-link' onClick={() => { setNav(false) }} to='/generate'>Generate</NavLink></li>
                        <li><NavLink className='nav-link' onClick={() => { setNav(false) }} to='/pricing'>Pricing</NavLink></li>
                        <li><NavLink className='nav-link' onClick={() => { setNav(false) }} to='/login'>Login</NavLink></li>
                        <li><NavLink className='nav-link signup' onClick={() => { setNav(false) }} to='/signup1'>SignUp</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Nav2;