import React from "react";
import '../CSS/Login-Signup.css';
import img1 from '../Images/right_img.png';
import img2 from '../Images/Minelit.png';
import { NavLink } from "react-router-dom";

const Signup2 = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className="row">
                    <div class="col-sm left_container">
                        <form method="post" action="/" className="container_login">
                            <h3>Sign Up</h3>
                            <div className="create_account">
                                <p className="new_user">Already a User?</p>
                                <NavLink to='/login' className="create_link"><a className="create">Login</a></NavLink>
                            </div>
                            <div className="FLname">
                                <div className="input_box input_box_h">
                                    <label for="firstname" className="email_label">First Name</label>
                                    <input type="text" autocomplete="off" className="email_input half_input" id="fname" name="fname" />
                                </div>
                                <div className="input_box input_box_h">
                                    <label for="lastname" className="email_label">Last Name</label>
                                    <input type="text" autocomplete="off" className="email_input half_input" id="lname" name="lname" />
                                </div>
                            </div>
                            <div className="input_box1">
                                <label for="dob" className="email_label">Date of Birth</label>
                                <input type="text" onFocus={
                                    (e) => {
                                        e.currentTarget.type = "date";
                                        e.currentTarget.focus();
                                    }
                                } autocomplete="off" className="email_input" id="dob" name="dob" placeholder="DD/MM/YY" />
                            </div>
                            <div className="input_box1">
                                <label for="country" className="email_label">Country</label>
                                <input type="text" autocomplete="off" className="email_input" id="country" name="country" />
                            </div>
                            <NavLink to='/signup3' className="create_link"><button type="button" id="login_btn2" className="login_btn signup_btn">Sign Up</button></NavLink>
                        </form>
                    </div>
                    <div class="col-sm right_container">
                        <img className="bg_img" src={img1} alt="backround" />
                        <img className="logo_img" src={img2} alt="logo" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup2;