import React,{ useState,useEffect } from "react";
import {auth,provider} from "../backend/googleauthentication/config";
import {signInWithPopup} from "firebase/auth"; 
import '../CSS/Login-Signup.css';
import img1 from '../Images/right_img.png';
import img2 from '../Images/Minelit.png';
import img3 from '../Images/google1.png';
import img4 from '../Images/logo-crop.png';
import { NavLink } from "react-router-dom";
import Generation from '../components/GenerationsPage'


const Login = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const [emailInput,setgogglevalue]=useState("");

    const handlePasswordChange = (evnt) => {
        setPasswordInput(evnt.target.value);
    }
    const handleEmailChange = (evnt) => {
        setgogglevalue(evnt.target.value);
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

    const Check=(async()=>{
        const [email,password]=[emailInput,passwordInput];

        const res=await fetch("/check",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                email:email,
                password:password
            }),
        });

        if (res.status==200) {
            window.location.href="http://localhost:3000/";
        }
    })

    return (
        <>
            <div className="home_logo"><NavLink to='/' className="home_logo_img1" ><img src={img4} className="home_logo_img" /></NavLink></div>
            <div className='login_container'>
                <div class="left_container">
                    <form method="post" action="/" className="container_login">
                        <h3>Login</h3>
                        <div className="create_account">
                            <p className="new_user">New User?</p>
                            <NavLink to='/signup1' className="create_link"><a className="create">Create An Account</a></NavLink>
                        </div>
                        <div className="input_box">
                            <label for="email" className="email_label">Email address</label>
                            <input type="text" autocomplete="off" className="email_input" id="email" name="email" value={emailInput} onChange={handleEmailChange} />
                        </div>
                        <div className="input_box1">
                            <label for="password" className="email_label">Password</label>
                            <input type={passwordType} autocomplete="off" className="email_input" id="password" onChange={handlePasswordChange} name="password" value={passwordInput} />
                            {passwordType === "password" ? <i class="fa-regular fa-eye-slash eye" onClick={togglePassword}></i> : <i class="fa-solid fa-eye eye" onClick={togglePassword}></i>}
                        </div>
                        <div className="remember">
                            <p className="remember_me"><input type="checkbox" className="checkmark" /> Remember Me</p>
                            <NavLink to='/forgot' className="forgot">Forgot Password?</NavLink>
                        </div>
                        <NavLink to='/signup1' className="create_link1"><button type="button" className="login_btn" onClick={Check}>Login</button></NavLink>
                        <div className="or_container">
                            <span className="line"></span>
                            <p className="or_text">Or</p>
                            <span className="line"></span>
                        </div>
                        <a type="button" className="google_btn" onClick={GoogleAuth}><img className="google_img" src={img3}/>Continue With Google</a>
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

export default Login;