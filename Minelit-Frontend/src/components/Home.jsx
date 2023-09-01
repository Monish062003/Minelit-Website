import React from "react";
import Nav1 from "./Nav1";
import Footer from "./Footer";
import '../CSS/Home.css';
import img from '../Images/dog.png'

const Home = () => {
    return (
        <>
            <Nav1 />
            <div className="img_div_container">
                <div className="home_search_div">
                    <input type="text" className="home_search" />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="image-gallery">
                    <img src={img} className="gallery_img" alt="" />
                    <img src={img} className="gallery_img" alt="" />
                    <img src={img} className="gallery_img" alt="" />
                    <img src={img} className="gallery_img" alt="" />
                    <img src={img} className="gallery_img" alt="" />
                    <img src={img} className="gallery_img" alt="" />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Home;