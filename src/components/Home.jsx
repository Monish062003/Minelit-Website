import React from "react";
import Nav2 from "./Nav2";
import Nav1 from "./Nav1";
import Footer from "./Footer";
import "../CSS/Home.css";

const Home = () => {
    return (
        <>
            <Nav2 />
            <div className="hero-section">
                <div className="hero-sec">
                    <div className="hero-content">
                        <p className="hero-title">Generate And Sell</p>
                        <p className="hero-text">Minelit is a Marketplace for AI Generated Images and Prompts</p>
                        <a className="hero-btn" href="#">Lets Get Started</a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Home;