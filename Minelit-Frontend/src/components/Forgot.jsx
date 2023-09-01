import React,{useState} from "react";
import img4 from '../Images/logo-crop.png';
import { NavLink } from "react-router-dom";
import '../CSS/Login-Signup.css';

const Forgot = () => {

    const [email,emailInput]=useState("");
    let onChangefields=((event)=>{
        emailInput(event.target.value);
    });
    
    let sendEmail=(async()=>{

        let server=await fetch("/mail",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email
            }),
        });

        if (server.status==400) {
            alert("Email not Found")
        }
        else{

            let sendmail=await fetch("https://api.emailjs.com/api/v1.0/email/send",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        service_id: "service_hrqzf85",
                        template_id: "template_mrtuvxj",
                        user_id: "FuNRKdsAl4GFe-x8y",
                        template_params: {
                            receiversname:"Customer",
                            receiversemail:`${email}`,
                            name: "Minelit Team",
                            message: `http://localhost:3000/reset?email=${email}`
                        }
                    }),
                });

                if (sendmail.status==200) {
                    window.location.href="/email"; 
                }
            }

    });
    


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
                            <input type="text" value={email} autocomplete="off" className="email_input" id="email" name="email" onChange={onChangefields} />
                        </div>
                        <div className="buttons_signup_forgot">
                            <button type="button" id="send_mail" className="submit_btn send_mail" onClick={sendEmail}>Send Mail</button>
                        </div>
                        <p className="create_account1 forgot_text">Enter the email address you opened the account with to receive instructions to reset your password.</p>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Forgot;