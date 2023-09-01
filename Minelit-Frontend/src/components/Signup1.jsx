import React, { useState ,useEffect } from "react";
import '../CSS/Login-Signup.css';
import {auth,provider} from "../backend/googleauthentication/config";
import {signInWithPopup} from "firebase/auth";
import img1 from '../Images/right_img.png';
import img2 from '../Images/Minelit.png';
import img3 from '../Images/google1.png';
import img4 from '../Images/logo-crop.png';

import { NavLink } from "react-router-dom";

const Signup1 = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const [googlevalue,setgogglevalue]=useState("");
    const[signupdata,acceptdata]=useState("");
    
    const handlePasswordChange = (event) => {
        setPasswordInput(event.target.value);
    }

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const GoogleAuth=(()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setgogglevalue(data.user.email);
        })
    });

    const emailinput=((event)=>
    {
        acceptdata(event.target.value);
    })

    useEffect(()=>{
        localStorage.clear();
    },[])

    const MinelitSign=(async()=>{
        localStorage.setItem('email',signupdata);
        localStorage.setItem('password',passwordInput);
    });

    return (
        <>
                    <div className="home_logo"><NavLink to='/' className="home_logo_img1" ><img src={img4} className="home_logo_img" /></NavLink></div>

            <div className='login_container'>
                <div class="col-sm left_container">
                    <form method="post" action="/" className="container_login container_login1">
                        <h3>Sign Up</h3>
                        <div className="create_account">
                            <p className="new_user new_user1">Already a User?</p>
                            <NavLink to='/login' className="create_link"><a className="create">Login</a></NavLink>
                        </div>
                        <div className="input_box">
                            <label for="email" className="email_label">Email address</label>
                            <input type="text" autocomplete="off" className="email_input" id="email" name="email" onChange={emailinput}/>
                        </div>
                        <div className="input_box1">
                            <label for="password" className="email_label">Password</label>
                            <input type={passwordType} autocomplete="off" className="email_input" id="password" onChange={handlePasswordChange} name="password" value={passwordInput} />
                            {passwordType === "password" ? <i class="fa-regular fa-eye-slash eye" onClick={togglePassword}></i> : <i class="fa-solid fa-eye eye" onClick={togglePassword}></i>}
                        </div>
                        <NavLink to='/signup2' className="create_link1"><button type="button" id="login_btn1" className="login_btn" onClick={MinelitSign}>Continue</button></NavLink>
                        <div className="or_container">
                            <span className="line"></span>
                            <p className="or_text">Or</p>
                            <span className="line"></span>
                        </div>
                        <a type="button" id="google_login" className="google_btn" onClick={GoogleAuth}><img className="google_img" src={img3} />Continue With Google</a>
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
export default Signup1;