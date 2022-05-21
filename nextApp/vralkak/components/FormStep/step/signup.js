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
    
    
    
    

    function validation(){
      
      emailValidation(email);
      passwordValidation(password);
      nameValidation(firstName, lastName)
      confirmPasswordValidation(password, confirmPassword);
    
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

    function passwordValidation(password) {
     
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
    <Progressbar />
    
    <form className={styles.login} id={styles.signup}> 
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
      <input className={styles.passwordForm} name='password'value={password} onChange={setForm} type="password"  id="passwordForm"  required/>
      <span id={styles.errorCheckPassword}>{passwordError}</span>

      <Image layout="raw" className={styles.signUpInfo} src={logo} alt="" />
      <p className={styles.infoText}>Ange minst 6 tecken</p>

      <p className={styles.confirmPasswordNote}>Bekräfta lösenord*</p>
      <input className={styles.confirmPasswordForm} type="password" name="confirmPassword" value={confirmPassword}  />
      <p id={styles.errorCheckConfirmedPassword}>{confirmPasswordError}</p>

      <button className={styles.signUpSubmitButton1} type="button" onClick={validation} >Skapa ett konto</button>
    
    </form>
    </>
  )
}

