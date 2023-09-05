import React,{useState} from "react";
import '../CSS/generationspage.css'
import img1 from '../Images/down (1).png'
import img3 from '../Images/football.jpg'
import Nav1 from "./Nav1";

const GenerationsPage = () => {
    // const backend=require("../backend/ImageGenerationAPI's/dalle");
    const backend=require("../backend/ImageGenerationAPI's/stable");
    const[input,newinput]=useState("");
    let redirect_dalle=(()=>{
        let imagecount=document.querySelector('input[type="radio"]:checked').value;

        try {
            backend(input,parseInt(imagecount));
        } catch (error) {
            alert("Please select atleast 1 checkbox")
        }
    });

    let changeinput=((e)=>{
        newinput(e.target.value);
    });
    return (
        <>
            <Nav1 />
            <div className="generation_container">

                <div class="input-container">
                    <div className="searchbar">
                        <input className="inputpromptbox" type="text" required placeholder="Write Your Prompt" value={input} onChange={changeinput}/>
                        <div className="selector">
                            <button className="dallebtn">Dall E</button>
                            <i class="fa-solid fa-chevron-down down"></i>
                        </div>
                    </div>
                </div>

                <div className="display_images">
                    <div className="gen_btn">
                        <div className="gen_btn_sub">
                            <div className="number_select">
                                <p className="inp_text">Number of images to generate</p>
                                <ul className="select-inputs">
                                    <li className="list_checkbox_li">1 <input type="radio" name="Radio" value="1" className="inp_check" /></li>
                                    <li className="list_checkbox_li">2 <input type="radio" name="Radio" value="2" className="inp_check" /></li>
                                    <li className="list_checkbox_li">3 <input type="radio" name="Radio" value="3" className="inp_check" /></li>
                                    <li className="list_checkbox_li">4 <input type="radio" name="Radio" value="4" className="inp_check" /></li>
                                </ul>
                            </div>
                            <button className="generate_btn" onClick={redirect_dalle}>Generate</button>
                        </div>
                    </div>
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