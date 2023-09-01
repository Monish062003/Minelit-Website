import React, { useState } from "react";
import '../CSS/Login-Signup.css';
import img4 from '../Images/logo-crop.png';

import { NavLink } from "react-router-dom";

const Signup3 = () => {

    const [data,inputdata]=useState({
        industry:"",
        purpose:""
    })

    const textChanged=(event)=>{
        let name=event.target.name;        
        let value=event.target.value;
        
        inputdata({...data,[name]:value});
    }

    const Save=async()=>{        
        let alldata=[localStorage.getItem('email'),localStorage.getItem('password'),localStorage.getItem('firstname'),
        localStorage.getItem('lastname'),localStorage.getItem('dob'),localStorage.getItem('country'),data.industry,data.purpose];
        const[email,password,firstname,lastname,dob,country,industry,purpose]=[...alldata];

        const res= await fetch("/save",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:email,
                password:password,
                firstname:firstname,
                lastname:lastname,
                dob:dob,
                country:country,
                industry:industry,
                purpose:purpose
            }),
        });

        alert(res.status)
        if (res.status==200) {
            window.location.href="http://localhost:3000/login";
            localStorage.clear();
        }
     }  

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
                            <input type="text" autocomplete="off" className="email_input" id="industry" name="industry" value={data.industry} onChange={textChanged}/>
                        </div>
                        <div className="input_box input_box_3">
                            <label for="purpose" className="email_label">Purpose</label>
                            <input type="text"
                                id="purpose"
                                value={data.purpose}
                                name="purpose"
                                list="data"
                                className="email_input"
                                autoComplete="off"
                                onChange={textChanged}
                            />
                            <i class="fa-solid fa-chevron-down eye"></i>
                            {/* <datalist id="data" className="datalist" >
                                {data.map((op) => <option className="optionlist">{op}</option>)}
                            </datalist> */}
                        </div>
                        <NavLink to="/signup3">
                            <div className="buttons_signup3">
                                <button type="button" className="submit_btn skip_btn" onClick={Save}>Skip</button>
                                <button type="button" id="login_btn3" className="submit_btn" onClick={Save}>Submit</button>
                            </div>
                        </NavLink>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Signup3;