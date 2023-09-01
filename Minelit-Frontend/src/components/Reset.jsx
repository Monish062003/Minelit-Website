import React,{useState} from "react";
import '../CSS/forgot.css';
import img4 from '../Images/logo-crop.png';
import { NavLink } from "react-router-dom";

const Reset = () => {

    const[password,setpassword]=useState({
        firstinput:"",
        secondinput:"",
    });

    const handlePasswordChange=((event)=>{
        let name=event.target.name;
        let value=event.target.value;
        setpassword({...password,[name]:value})
    });

    let UpdatePassword=(async(event)=>{
        event.preventDefault();
        
        if (password.firstinput==password.secondinput) {
            const queryString = window.location.search;
            const params = new URLSearchParams(queryString);
            const email = params.get('email');
            let sendchanges=await fetch("/updatepassword",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    email:email,
                    password:`${password.secondinput}`
                })
            });
            
            if (sendchanges.status==200) {
                alert("Password Resetted Successfully")
                window.location.href="http://localhost:3000/";
            }
        }
        else{
            alert("Password MisMatched")
        }
    });

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
                                <input type="text" autocomplete="off" className="email_input" id="industry" name="firstinput" value={password.firstinput} onChange={handlePasswordChange} />
                            </div>
                            <div className="input_box input_box_3">
                                <label for="password" className="email_label">Confirm Password</label>
                                <input type="text" autocomplete="off" className="email_input" id="industry" name="secondinput" value={password.secondinput} onChange={handlePasswordChange} />
                            </div>
                        </div>
                        <NavLink to='/' className="create_link1"><button type="button" className="login_btn" onClick={UpdatePassword}>Reset Password</button></NavLink>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Reset;