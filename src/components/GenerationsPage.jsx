import React from "react";
import '../CSS/generationspage.css'
import img1 from '../Images/down (1).png'
import img3 from '../Images/football.jpg'
import Nav1 from "./Nav1";

const GenerationsPage = () => {

    return (
        <>
            <Nav1 />
            <div className="generation_container">

                <div class="input-container">
                    <div className="searchbar">
                        <input className="inputpromptbox" type="text" required placeholder="Write Your Prompt" />
                        <div className="selector">
                            <button className="dallebtn">Dall E</button>
                            <i class="fa-solid fa-chevron-down down"></i>
                        </div>
                    </div>
                </div>

                <div className="display_images">
                    <div className="gen_btn"><button className="generate_btn">Generate</button></div>
                    <div className="promp">Prompt: A Football with Pink Background in the Space</div>

                    <div class="row images">
                        <div class="col-sm-6 col-md-4 col-lg-3 img_cont" id="div1">
                            <img id="image1" className="img-thumbnail" src={img3} />
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 img_cont" id="div2">
                            <img id="image2" className="img-thumbnail" src={img3} />
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 img_cont" id="div3">
                            <img id="image3" className="img-thumbnail" src={img3} />
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 img_cont" id="div4">
                            <img id="image4" className="img-thumbnail" src={img3} />
                        </div>

                    </div>

                    <div className="buttons_gen">
                        <button className="box1">Sell Prompt and Images</button>
                        <button className="box2">Sell Images Only</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GenerationsPage;