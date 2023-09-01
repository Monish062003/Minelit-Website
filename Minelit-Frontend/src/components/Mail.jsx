import React from "react";
import '../CSS/forgot.css';
import img4 from '../Images/logo-crop.png';
import { NavLink } from "react-router-dom";

const Mail = () => {
    return (
        <>
            <div className="forgot_div">
                <div className="forgot_center">
                    <div className="forgot_logo"><NavLink to='/' className="forgot_logo_img" ><img src={img4} className="home_logo_img" /></NavLink></div>
                    <h3 className="h3 forgot_title">Check your mail</h3>
                    <h5>A mail has been sent to your account with a link to reset your password.</h5>
                    <h6>Did not receive the email? Check your Spam Filter
                        or <a className="email_link" href="#">try another email address</a>
                    </h6>
                </div>
            </div>

        </>
    )
}

export default Mail;