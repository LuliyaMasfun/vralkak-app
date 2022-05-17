import React from 'react'
import '../css/Login.module.css'
import Navbar from '../../Navbar/Navbar';
import {Progressbar} from '../../Progressbar/Progressbar';
import EmailIcon from '../../../public/assets/mailIcon.png';
import PasswordIcon from '../../../public/assets/passwordIcon.png';

export const Login = ({formData, setForm, navigation}) => {
  return (
    <>
    <Navbar />
    <Progressbar />
    <div className="login"> 
    <span className="loginHeading">
        Logga in
    </span>
    
    
        <input className="emailForm1" type="text" placeholder="E-post" id="formEmail"/>

<img style={{
        position:"absolute",
        top:"126px",
        left: "48px"
      }} src={EmailIcon} />
        <input className="passwordForm1" type="password" placeholder="Lösenord" id="formPassword"/>

        <img style={{
        position:"absolute",
        top:"193.69px",
        left: "50px"
      }} src={PasswordIcon} />

        <p className="forgetPassword"> Glömt lösenord? </p>
        <button className="loginSubmitButton" type="button" >Logga in</button>
        <div className="option">
        <div className="border1"></div>
        <p className="orText">eller</p>
        <div className="border2"></div>
    </div>
    <button className="signUpSubmitButton" onClick={()=> navigation.next()}>Skapa ett konto</button>
    <p className="continueGuest"> Fortsätt som gäst </p>

      </div>

</>
  )
}
