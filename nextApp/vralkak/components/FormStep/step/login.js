import React,{useState} from 'react'
import styles from '../css/Login.module.css'
import Navbar from '../../Navbar/Navbar';
import {Progressbar} from '../../Progressbar/Progressbar';
import EmailIcon from '../../../public/assets/mailIcon.png';
import PasswordIcon from '../../../public/assets/passwordIcon.png';
import Image from 'next/image'

export const Login = ({formData, setForm, navigation}) => {
  
  

  return (
    <>
    <Navbar />
    <Progressbar img="/assets/checkMark.png" color1="none" color2="#FBA497" color3="#C4C4C4" color4="#C4C4C4"
                 number1="" number2="2" number3="3" number4="4"
                 lineColor1="2px solid #FBA497" lineColor2="2px solid #C4C4C4" lineColor3="2px solid #C4C4C4" 
                 display1="block" display2="none" display3="none" display4="none"
                 textColor1="#FBA497" textColor2="#FBA497" textColor3="#C4C4C4" textColor4="#C4C4C4"
                 borderColor1="2px solid #FBA497" borderColor2="2px solid #FBA497" borderColor3="2px solid #C4C4C4" borderColor4="2px solid #C4C4C4" navigation={navigation}/>
    <div className={styles.login}> 
    <span className={styles.loginHeading}>
        Logga in
    </span>
    
    
        <input className={styles.emailForm1} type="text" placeholder="E-post" id="formEmail"/>

<Image layout="raw" style={{
        position:"absolute",
        top:"126px",
        left: "48px"
      }} src={EmailIcon} />
        <input className={styles.passwordForm1} type="password" placeholder="Lösenord" id="formPassword"/>

        <Image layout="raw" style={{
        position:"absolute",
        top:"193.69px",
        left: "50px"
      }} src={PasswordIcon} />

        <p className={styles.forgetPassword}> Glömt lösenord? </p>
        <button className={styles.loginSubmitButton} type="button" >Logga in</button>
        <div className={styles.option}>
        <div className={styles.border1}></div>
        <p className={styles.orText}>eller</p>
        <div className={styles.border2}></div>
    </div>
    <button className={styles.signUpSubmitButton} onClick={()=> navigation.next()}>Skapa ett konto</button>
    <p className={styles.continueGuest}> Fortsätt som gäst </p>

      </div>

</>
  )
}
