import React from "react";
import '../CSS/footer.css';
import img1 from '../Images/ai.png'
import img2 from '../Images/logo.png'


const Footer = () => {
    return (
        <>
            <div className="footerclass">
                <div className="footer_left">
                    <div className="left_foot1"><img src={img2} className="logo_foot" /></div>
                    <div className="left_foot2">
                        <div className="left_foot_left">
                            <p className="left_foot_left_p">Generate</p>
                            <a className="foot_link" href="#">Midjourney</a>
                            <a className="foot_link" href="#">Dall E</a>
                        </div>
                        <div className="left_foot_right">
                            <a className="foot_link1" href="#">Pricing</a>
                        </div>
                    </div>
                    <div className="left_foot3">
                        <p className="left_foot_left_p">Support</p>
                        <a className="foot_link" href="#">Help & FAQs</a>
                        <a className="foot_link" href="#">Contact Us</a>
                        <a className="foot_link" href="#">Refunds</a>
                    </div>
                    <div className="right_foot_bottom1">
                        <a className="foot_link foot_link2" href="#">Privacy Policy</a>
                        <a className="foot_link foot_link2" href="#">Terms and Conditions</a>
                    </div>
                    <div className="credit_right1">
                        <a href="#" className="foot_link1"><i class="fa-brands footer_social fa-linkedin"></i></a>
                        <a href="#" className="foot_link1"><i class="fa-brands footer_social fa-square-facebook"></i></a>
                        <a href="#" className="foot_link1"><i class="fa-brands footer_social fa-square-twitter"></i></a>
                        <a href="#" className="foot_link1"><i class="fa-brands footer_social fa-square-instagram"></i></a>
                    </div>
                </div>
                <div className="footer_right">
                    <img className="join" src={img1} />
                    <div className="right_foot_bottom">
                        <a className="foot_link" href="#">Privacy Policy</a>
                        <a className="foot_link" href="#">Terms and Conditions</a>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="footer_bottom_credit">
                    <div className="credit_left"><i class="fa-regular fa-copyright"></i> Minelit 2023</div>
                    <div className="credit_right">
                        <a href="#" className="foot_link1"><i class="fa-brands footer_social fa-linkedin"></i></a>
                        <a href="#" className="foot_link1"><i class="fa-brands footer_social fa-square-facebook"></i></a>
                        <a href="#" className="foot_link1"><i class="fa-brands footer_social fa-square-twitter"></i></a>
                        <a href="#" className="foot_link1"><i class="fa-brands footer_social fa-square-instagram"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;