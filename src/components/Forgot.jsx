import React from "react";
import img4 from '../Images/logo-crop.png';
import { NavLink } from "react-router-dom";
import '../CSS/Login-Signup.css';

const Forgot = () => {
    return (
        <>
            <div className="home_logo"><NavLink to='/' className="home_logo_img1" ><img src={img4} className="home_logo_img" /></NavLink></div>

            <div className='login_container'>
                <div class="left_container">
                    <form method="post" action="/" className="container_login container_forgot">
                        <h3 className="h3 forgot_title">Forgot Password?</h3>
                        <div className="create_account1">
                            <p className="creator1">No Worries!</p>
                        </div>
                        <div className="input_box input_box3">
                            <label for="email" className="email_label">Email address</label>
                            <input type="text" autocomplete="off" className="email_input" id="email" name="email" />
                        </div>
                        <div className="buttons_signup_forgot">
                            <button type="button" id="send_mail" className="submit_btn send_mail">Send Mail</button>
                        </div>
                        <p className="create_account1 forgot_text">Enter the email address you opened the account with to receive instructions to reset your password.</p>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Forgot;