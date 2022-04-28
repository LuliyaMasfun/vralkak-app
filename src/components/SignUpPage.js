import React from 'react'
import './SignUp.css'
import './Body.css'

export default function SignUp() {
  return (
    <div className="login"> 
    <span className="loginHeading">
        Skapa ett konto
    </span>
    <div className="loginForm" id="loginForm">
        
      
        <p className="firstNameNote">Förnamn*</p>
        <input className="firstName" type="text" id="firstName"/>
        
        <p className="lastNameNote">Efternamn*</p>
        <input className="lastName" type="text" id="lastName"/>
      

      <p className="emailNote">Email*</p>
      <input className="emailForm" type="text" id="emailForm"/>
      <p id="errorCheckEmail"></p>
      <p className="passwordNote">Lösenord*</p>
      <input className="passwordForm" type="password" id="passwordForm"/>
      <span id="errorCheckPassword"></span>
      <p className="confirmPasswordNote">Bekräfta lösenord*</p>
      <input className="confirmPasswordForm" type="password" id="confirmPasswordForm"/>
      <p id="errorCheckConfirmedPassword"></p>
      <button className="signUpSubmitButton1" type="button" onclick="fullvalidation()">Skapa ett konto</button>
    </div>
    </div>
  )
}
