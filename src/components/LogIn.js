import React from 'react'
import './Login.css'
import './Body.css'
import { Link } from 'react-router-dom'

export default function LogIn() {
  return (
    <div className="login"> 
    <span className="loginHeading">
        Logga in
    </span>
    <div className="loginForm" id="loginForm">
        <input className="emailForm1" type="text" placeholder="  E-post" id="formEmail"/>
        <input className="passwordForm1" type="password" placeholder="  Lösenord" id="formPassword"/>
        <p className="forgetPassword"> Glömt lösenord? </p>
        <button className="loginSubmitButton" type="button" onclick="location.href='success.html'">Logga in</button>
        <div className="option">
        <div className="border1"></div>
        <p className="orText">eller</p>
        <div className="border2"></div>
    </div>
    <Link to ="/signup" className="signUpSubmitButton">Skapa ett konto</Link>
    <p className="continueGuest"> Fortsätt som gäst </p>

      </div>
</div>
  )
}
