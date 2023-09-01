import React,{useState} from "react";
import '../CSS/Login-Signup.css';
import img1 from '../Images/right_img.png';
import img2 from '../Images/Minelit.png';
import img4 from '../Images/logo-crop.png';

import { NavLink } from "react-router-dom";

const Signup2 = () => {
    const[data,inputdata]=useState({
        firstname:"",
        lastname:"",
        dob:"",
        country:"",
    })

    const textchange=(event)=>{
        let name=event.target.name;
        let value=event.target.value;

        inputdata({...data,[name]:value});
    }

    const Next=()=>{
        localStorage.setItem('firstname',data.firstname)
        localStorage.setItem('lastname',data.lastname)
        localStorage.setItem('dob',data.dob)
        localStorage.setItem('country',data.country)
    }

    return (
        <>
            <div className="home_logo"><NavLink to='/' className="home_logo_img1" ><img src={img4} className="home_logo_img" /></NavLink></div>

            <div className='login_container'>
                <div class="col-sm left_container">
                    <form method="post" action="/" className="container_login container_signup2">
                        <h3>Sign Up</h3>
                        <div className="create_account">
                            <p className="new_user new_user1">Already a User?</p>
                            <NavLink to='/login' className="create_link"><a className="create">Login</a></NavLink>
                        </div>
                        <div className="FLname">
                            <div className="input_box input_box_h">
                                <label for="firstname" className="email_label">First Name</label>
                                <input type="text" autocomplete="off" className="email_input half_input" id="fname" name="firstname" value={data.firstname} onChange={textchange}/>
                            </div>
                            <div className="input_box input_box_h">
                                <label for="lastname" className="email_label">Last Name</label>
                                <input type="text" autocomplete="off" className="email_input half_input" id="lname" name="lastname" value={data.lastname} onChange={textchange}/>
                            </div>
                        </div>
                        <div className="input_box1">
                            <label for="dob" className="email_label">Date of Birth</label>
                            <input type="text" onFocus={
                                (e) => {
                                    e.currentTarget.type = "date";
                                    e.currentTarget.focus();
                                }
                            } autocomplete="off" className="email_input" id="dob" name="dob" placeholder="DD/MM/YY" value={data.dob} onChange={textchange}/>
                        </div>
                        <div className="input_box1">
                            <label for="country" className="email_label">Country</label>
                            <input type="text" autocomplete="off" className="email_input" id="country" name="country" value={data.country} onChange={textchange}/>
                        </div>
                        <NavLink to='/signup3' className="create_link1"><button type="button" id="login_btn2" className="login_btn signup_btn" onClick={Next}>Sign Up</button></NavLink>
                    </form>
                </div>
                <div class="col-sm right_container">
                    <img className="bg_img" src={img1} alt="backround" />
                    <img className="logo_img_login" src={img2} alt="logo" />
                </div>
            </div>
        </>
    )
}
export default Signup2;