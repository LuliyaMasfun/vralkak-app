import React,{Component, useState} from 'react'
import '../css/SignUp.css'
import '../../Body.css'
import Navbar from '../../Navbar/Navbar';
import Progressbar from '../../Progressbar/Progressbar';
import logo from '../../assets/VectorSignUpInfo.png';







export const Signup = ({formData, setForm, navigation}) => {

    const {firstName, lastName, email, password} = formData;
    
    
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    
    const pattern = /^\S+@\S+\.\S+$/;
    
    
    
    

    function validation(){
      emailValidation(email);
      passwordValidation(password);
      nameValidation(firstName, lastName)
      

      if(nameValidation){
        navigation.next();
      }
      
    }

    function nameValidation(firstName, lastName){
      if(firstName===""){
        setFirstNameError("Name must be provided")
        return false;
      }
      if(lastName===""){
        setLastNameError("Name must be provided")
        return false;
      }
      else{
        setFirstNameError("")
        setLastNameError("")
        return true;
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

    
    
    
  

  return (
    <>
    <Navbar />
    <Progressbar />
    
    <form className="login" id="signup"> 
    <span className="loginHeading">
        Skapa ett konto
    </span>
   
        
      
        <p className="firstNameNote">Förnamn*</p>
        <input className="firstName" type="text" name='firstName' value={firstName} onChange={setForm}  id="firstName" required />
        <p id="errorFirstName">{firstNameError}</p>
        <p className="lastNameNote">Efternamn*</p>
        <input className="lastName" name='lastName'value={lastName} onChange={setForm} type="text" id="lastName" required/>
        <p id="errorLastName">{lastNameError}</p>

      <p className="emailNote">Email*</p>
      <input className="emailForm" name='email'value={email} onChange={setForm} type="email" id="email"  required/>
      <p id="errorCheckEmail">{emailError}</p>

      <p className="passwordNote">Lösenord*</p>
      <input className="passwordForm" name='password'value={password} onChange={setForm} type="password"  id="passwordForm"  required/>
      <span id="errorCheckPassword">{passwordError}</span>

      <img className="signUpInfo" src={logo} alt="" />
      <p className="infoText">Ange minst 6 tecken</p>

      <p className="confirmPasswordNote">Bekräfta lösenord*</p>
      <input className="confirmPasswordForm" type="password"  />
      <p id="errorCheckConfirmedPassword">{confirmPasswordError}</p>

      <button className="signUpSubmitButton1" type="button" onClick={validation} >Skapa ett konto</button>
    
    </form>
    </>
  )
}

