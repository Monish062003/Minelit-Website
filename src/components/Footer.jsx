import React from "react";
import '../CSS/footer.css'
import img1 from '../Images/ai.png'
import img2 from '../Images/logo.png'


const Footer = () => {
    return (
        <>
        <div className="footerclass">
            <footer>
            <div className="logo"><img src={img2}/></div>
            <div className="join"><img src={img1}/></div>
                <p className="gen">Generate</p>
                <p className="mid">Midjourney<br/>Dall E </p>
                <p className="sup">Support</p>
                <p className="help">Help & FAQs <br/>Contact Us <br/>Refunds </p>
                <p className="pric">Pricing</p>
                <p className="priv"> Privacy Policy <br/>Terms and Conditions </p>
                <hr/>
                <p className="min"><i className="fa fa-copyright" aria-hidden="true"></i>
                    Minelit 2023</p>

                <div class="social">
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                    <i className="fa fa-twitter-square" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                </div>
            </footer>
        </div>
        </>
        )
    }
export default Footer;