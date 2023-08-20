import React from 'react'
// import '../CSS/forgotpassword.css'
import logo2 from '../Images/logo2.png'

export default function ForgotPassword() {
  return (
    <div>
        <h3>Forgot Password?</h3>
        <h5>No Worries!</h5>

        <div className="container">
        <div className="form-container">
        <label id="email" for="email">Email address</label>
        <input  type="email" className="email_in" id="text" name="text"/>
        </div>

        <div className="button-container">

        <button type="button" className="centered-button">Send Mail</button>
        </div>

        <p className="pragh">Enter the email address you opened the account<br/>
            with to receive instructions to reset your password.</p>
        </div>

    </div>
  )
}
