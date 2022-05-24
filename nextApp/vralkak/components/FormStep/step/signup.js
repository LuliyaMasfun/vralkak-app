import React,{Component, useState} from 'react'
import styles from '../css/SignUp.module.css' 

import Navbar from '../../Navbar/Navbar';
import {Progressbar} from '../../Progressbar/Progressbar';
import logo from '../../../public/assets/VectorSignUpInfo.png';
import Image from 'next/image'






export const Signup = ({formData, setForm, navigation}) => {

    const {firstName, lastName, email, password} = formData;
    
    
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
   
    
    const pattern = /^\S+@\S+\.\S+$/;
    
    function go (){
      if(firstNameError == "" && lastNameError == "" && confirmPasswordError == ""
      && passwordError == "" && emailError == ""){
        navigation.next()
      }
    }
    
    

    function validation(){
      
      emailValidation(email);
      passwordValidation(password);
      nameValidation(firstName, lastName)
      
      confirmPasswordValidation(password, confirmPassword);
      setForm;
    }

    function nameValidation(firstName, lastName){
      if(firstName===""){
        setFirstNameError("Name must be provided")
        
      }
      if(lastName===""){
        setLastNameError("Name must be provided")
        
      }
      else{
        setFirstNameError("")
        setLastNameError("")
        
      }
    }
    
    function emailValidation(email) {
      if (email === ""){
        setEmailError("Email must be provided")
      }
      else if(!email.match(pattern)){
        setEmailError("Invalid email")
      }
      else {
        setEmailError("")
      }
      
    }

    function passwordValidation(password,confirmPassword) {
     
      if (password === ""){
        setPasswordError("Password must be provided")
      }
      else if(password.length < 5){
        setPasswordError("Password to short")
      }
      else {
        setPasswordError("")
      }

      
    }

    function confirmPasswordValidation(confirmPassword, password) {
      if(confirmPassword != password){
        setConfirmPasswordError("Password does not match")
      }
      else {
        setConfirmPasswordError("")
      }
    }

    
    
    
  

  return (
    <>
    <Navbar />
    <Progressbar img="/assets/checkMark.png" color1="none" color2="#FBA497" color3="none" color4="none"
                  numberColor1="" numberColor2="#FFFFFF" numberColor3="#C4C4C4" numberColor4="#C4C4C4"
                 number1="" number2="2" number3="3" number4="4" number5="5"
                 lineColor1="2px solid #FBA497" lineColor2="2px solid #C4C4C4" lineColor3="2px solid #C4C4C4" 
                 display1="block" display2="none" display3="none" display4="none"
                 textColor1="#FBA497" textColor2="#FBA497" textColor3="#C4C4C4" textColor4="#C4C4C4"
                 borderColor1="2px solid #FBA497" borderColor2="2px solid #FBA497" borderColor3="2px solid #C4C4C4" borderColor4="2px solid #C4C4C4" navigation={navigation}/>


    <form onChange={()=>validation()}
    className={styles.login} id={styles.signup}> 
    <span className={styles.loginHeading}>
        Skapa ett konto
    </span>
   
        
      
        <p className={styles.firstNameNote}>Förnamn*</p>
        <input className={styles.firstName} type="text" name='firstName' value={firstName} onChange={setForm}  id="firstName" required />
        <p id={styles.errorFirstName}>{firstNameError}</p>
        <p className={styles.lastNameNote}>Efternamn*</p>
        <input className={styles.lastName} name='lastName'value={lastName} onChange={setForm} type="text" id="lastName" required/>
        <p id={styles.errorLastName}>{lastNameError}</p>

      <p className={styles.emailNote}>Email*</p>
      <input className={styles.emailForm} name='email'value={email} onChange={setForm} type="email" id="email"  required/>
      <p id={styles.errorCheckEmail}>{emailError}</p>

      <p className={styles.passwordNote}>Lösenord*</p>
      <input className={styles.passwordForm} name='password'value={password} onChange={setForm}  type="text"  id="passwordForm"  required/>
      <span id={styles.errorCheckPassword}>{passwordError}</span>

      <Image layout="raw" className={styles.signUpInfo} src={logo} alt="" />
      <p className={styles.infoText}>Ange minst 6 tecken</p>

      <p className={styles.confirmPasswordNote}>Bekräfta lösenord*</p>
      <input className={styles.confirmPasswordForm} type="text" name='confirmPassword' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}  />
      <p id={styles.errorCheckConfirmedPassword}>{confirmPasswordError}</p>

      <button className={styles.signUpSubmitButton1} type="button" onClick={()=> go()} >Skapa ett konto</button>
    
    </form>
    </>
  )
}

