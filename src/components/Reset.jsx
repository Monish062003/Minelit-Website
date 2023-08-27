import React from "react";
import '../CSS/forgot.css';
import img4 from '../Images/logo-crop.png';
import { NavLink } from "react-router-dom";

const Reset = () => {
    return (
        <>
            <div className="forgot_div">
                <div className="forgot_center">
                    <div className="reset_logo"><NavLink to='/' className="reset_logo_img" ><img src={img4} className="home_logo_img" /></NavLink></div>
                    <h3 className="h3 forgot_title">Reset Password</h3>
                    <div className="reset_div">
                        <div>
                            <div className="input_box input_box_3">
                                <label for="password" className="email_label">New Password</label>
                                <input type="text" autocomplete="off" className="email_input" id="industry" name="industry" />
                            </div>
                            <div className="input_box input_box_3">
                                <label for="password" className="email_label">Confirm Password</label>
                                <input type="text" autocomplete="off" className="email_input" id="industry" name="industry" />
                            </div>
                        </div>
                        <NavLink to='/' className="create_link1"><button type="button" className="login_btn">Reset Password</button></NavLink>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Reset;