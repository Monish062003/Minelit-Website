import React from "react";
import '../CSS/generationspage.css'
import img1 from '../Images/down (1).png'
import img2 from '../Images/logo2.png'
import img3 from '../Images/football.jpg'



const GenerationsPage = () => {

    return (
        <>
        <nav>
        <div class="navigation">
            <div class="logo"><img src={img2}/></div>

            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Genrate</a></li>
                <li><a href="#">Pricing</a></li>
            </ul>

            <div class="circle"></div>

            <div class="input-container">
            <input id="inputpromptbox" type="text" required placeholder="Write Your Prompt"/>

            <button id="dallebtn" class="dall_e">Dall E</button>
            <div class="down"><img src={img1}/></div>

            <div class="promp">Prompt: A Football with Pink Background in the Space</div>

            <div class="images"/>

            <div id="div1" class="image1"><img src={img3} id="image1"/></div>
            <div id="div2" class="image2"><img src={img3} id="image2"/></div>
            <div id="div3" class="image3"><img src={img3} id="image3"/></div>
            <div id="div4" class="image4"><img src={img3} id="image4"/></div>


            <button class="box1">Sell Prompt and Images</button>
            <button class="box2">Sell Images Only</button>

        </div>
        </div>
    </nav>
        </>
    )
}
export default GenerationsPage;