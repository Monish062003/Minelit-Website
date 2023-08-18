import React from "react";
import '../CSS/Login-Signup.css';
import img4 from '../Images/logo-crop.png';

import { NavLink } from "react-router-dom";

const Signup3 = () => {

    const data = [
        'option1', 'option2', 'option3', 'option4', 'option5', 'option6'
    ];

    return (
        <>
            <div className="home_logo"><NavLink to='/' className="home_logo_img1" ><img src={img4} className="home_logo_img" /></NavLink></div>

            <div className='login_container'>
                <div class="left_container">
                    <form method="post" action="/" className="container_login container_signup3">
                        <h3 className="h3 become">Become a Creator</h3>
                        <div className="create_account">
                            <p className="creator">Sell Your AI Generated Images and Prompts</p>
                        </div>
                        <div className="input_box input_box_3">
                            <label for="industry" className="email_label">Industry</label>
                            <input type="text" autocomplete="off" className="email_input" id="industry" name="industry" />
                        </div>
                        <div className="input_box input_box_3">
                            <label for="purpose" className="email_label">Purpose</label>
                            <input type="text"
                                id="purpose"
                                name="purpose"
                                list="data"
                                className="email_input"
                                autoComplete="off"
                            />
                            <i class="fa-solid fa-chevron-down eye"></i>
                            <datalist id="data" className="datalist" >
                                {data.map((op) => <option className="optionlist">{op}</option>)}
                            </datalist>
                        </div>
                        <div className="buttons_signup3">
                            <button type="button" className="submit_btn skip_btn">Skip</button>
                            <button type="button" id="login_btn3" className="submit_btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Signup3;