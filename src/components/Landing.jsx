import React from "react";
import "../CSS/Home.css";
import { NavLink } from 'react-router-dom';

const Landing = () => {
    return (
        <>
            <div className="hero-section">
                <div className="hero-sec">
                    <div className="hero-content">
                        <p className="hero-title">Generate And Sell</p>
                        <p className="hero-text">Minelit is a Marketplace for AI Generated Images and Prompts</p>
                        <NavLink className='nav-link hero-btn' to='/home'>Lets Get Started</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Landing;