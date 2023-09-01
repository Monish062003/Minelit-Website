import React, { useState } from "react";
import '../CSS/Nav1.css';
import { NavLink } from 'react-router-dom';
import logo from '../Images/logo-crop.png'

const Nav1 = () => {
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
                    <div className="right_nav">
                        <div className="circle"></div>
                        <div className='menu-bar' onClick={() => { setNav(!showNav) }}>{!showNav ? <i class="fa-solid fa-bars nav-menu"></i> : <i class="fa-solid fa-bars-staggered nav-menu" style={{ color: '#214ea6' }}></i>}</div>
                    </div>
                </div>
                <div className="menu-display" style={{display:showNav?'flex':'none'}}>
                    <ul className="menu-list">
                        <li><NavLink className='nav-link' onClick={()=>{setNav(false)}} to='/home'>Home</NavLink></li>
                        <li><NavLink className='nav-link' onClick={()=>{setNav(false)}} to='/generate'>Generate</NavLink></li>
                        <li><NavLink className='nav-link' onClick={()=>{setNav(false)}} to='/pricing'>Pricing</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Nav1;