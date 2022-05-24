import React,{useState} from 'react'
import Navbar from '../../Navbar/Navbar'
import {Progressbar} from '../../Progressbar/Progressbar';
import sweFlag from '../../../public/assets/sweflag.png'
import Image from 'next/image';
import Select from 'react-select';






export const Leverans = ({formData, setForm, navigation}) => {
  
 const [selectedDate, setSelectedDate] = useState(null);
 
 const {firstNameDelivery,lastNameDelivery, address, city,zip, phone,deliveryWay,} = formData;



 const customStyles = {
  option: (provided, state) => ({
    ...provided,
    
    color: state.isSelected ? 'red' : 'black',
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    
    width: "326px",
    height: "48px",
    border: "solid 1px black",
    boxSizing: "border-box",
    backgroundColor: "white"
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

const options = [
  { value: 'PostNord', label: 'PostNord' },
  { value: 'Hemleverans', label: 'Hemleverans' },
  { value: 'InstaBox', label: 'InstaBox' }
]
 
const [result, value] =useState(options.label);
const handler = e => {
  value(e.label)
  
}



  return (
    <>
    <Navbar />
    <Progressbar img="/assets/checkMark.png" color1="none" color2="none" color3="#FBA497" color4="#C4C4C4"
                 number1="" number2="" number3="3" number4="4"
                 lineColor1="2px solid #FBA497" lineColor2="2px solid #FBA497" lineColor3="2px solid #C4C4C4" 
                 display1="block" display2="block" display3="none" display4="none"
                 textColor1="#FBA497" textColor2="#FBA497" textColor3="#FBA497" textColor4="#C4C4C4"
                 borderColor1="2px solid #FBA497" borderColor2="2px solid #FBA497" borderColor3="2px solid #FBA497" borderColor4="2px solid #C4C4C4" navigation={navigation}/>
    
    <form style={{  //Form
      backgroundColor: "#F4F4F4",
      display: "grid",
      position: "absolute",
      top: "163px",
      height: "1162px",
      width: "390px"
    }}> 
    <span style={{ //Title
      position: "absolute",
      top:"40px",
      left: "32px",
      fontSize: "36px",
      fontWeight: "600"
    }} >Dina Uppgifter</span>
   
        <p style={{ 
          position: "absolute",
          top:"112px",
          left: "32px",
        }} >Förnamn*</p>

        <input 
        name="firstNameDelivery"
        value={firstNameDelivery}
        onChange={setForm}
        style={{
          width: "326px",
          height: "48px",
          position: "absolute",
          top: "152px",
          left: "32px",
          paddingLeft: "8px",
          boxSizing: "border-box",
          border: "1px solid black",

        }} />

        <p style={{
          position: "absolute",
          top:"200px",
          left: "32px"
        }} >Efternamn*</p>

        <input 
        name="lastNameDelivery"
        value={lastNameDelivery}
        onChange={setForm}
        style={{
          width: "326px",
          height: "48px",
          position: "absolute",
          top: "240px",
          left: "32px",
          paddingLeft: "8px",
          boxSizing: "border-box",
          border: "1px solid black",
        }}/>
      

      <p style={{
        position: "absolute",
        top:"288px",
        left: "32px"
      }}>Gatuaddress*</p>

      <input 
      name="address"
      value={address}
      onChange={setForm}
      style={{
        width: "326px",
        height: "48px",
        position: "absolute",
        top: "328px",
        left: "32px",
        paddingLeft: "8px",
        boxSizing: "border-box",
        border: "1px solid black",
      }} />
      

      <p style={{
        position: "absolute",
        top:"376px",
        left: "32px"
      }}>Postnummer*</p>

      <input 
      name="zip" 
      value={zip}
      onChange={setForm}
      style={{
        width: "155px",
        height: "48px",
        position: "absolute",
        top: "416px",
        left: "32px",
        paddingLeft: "8px",
        boxSizing: "border-box",
        border: "1px solid black",
      }}/>
      

      <p style={{
        position: "absolute",
        top:"376px",
        left: "203px",
      }}>Ort*</p>

      <input 
      name="city" 
      value={city}
      onChange={setForm}
      style={{
        width: "155px",
        height: "48px",
        position: "absolute",
        top: "416px",
        left: "203px",
        paddingLeft: "8px",
        boxSizing: "border-box",
        border: "1px solid black",
      }}/>
      

      <p style={{
        position: "absolute",
        top: "464px",
        left: "32px",
      }} >Mobilnummer</p>
      <Image  layout = "raw" 
       src={sweFlag} 
       className="sweFlag"
       style={{
         position: "absolute",
         top: "504px",
         left: "28px"
       }}/>
      <input 
      name="phone"
      value={phone}
      onChange={setForm}
      type="number" 
      style={{
        width: "277px",
        height: "48px",
        position: "absolute",
        top: "504px",
        left: "81px",
        paddingLeft: "8px",
        border: "solid 1px black",
        boxSizing: "border-box",
      }}/>

      <p style={{
        position: "absolute",
        top:"550px",
        left: "32px",
        fontSize: "36px",
        fontWeight: "600"
      }}>Välj leverans</p>

      

    <div style={{
    position: "absolute",
    top:"763px",
    left: "32px",
    }}>

    
    <Select styles={customStyles} options={options} onChange={handler} value={deliveryWay} name="deliveryWay">
    
    </Select>

    </div>
    

    <p style={{
      fontWeight: "normal",
      fontSize: "16px",
      position: "absolute",
      top: "839px",
      left: "32px",
    }}>Övrig information till chauförren(frivilligt)</p>
      
    <textarea type="text" 
    placeholder='Övrig information' 
    style={{
      width: "326px",
      height: "112px",
      position: "absolute",
      top: "891px",
      left: "32px",
      boxSizing: "border-box",
      border: "1px solid black",
      fontFamily: "'Outfit'",
      paddingTop:"10px",
      paddingLeft:"10px"
    }} />

    <button 
    onClick={()=>navigation.next()}
    style={{
      width:"326px",
      height:"50px",
      position: "absolute",
      top: "1031px",
      left: "32px",
      boxSizing:"border-box",
      border: "1px solid #1F1E1F",
      backgroundColor: "#1F1E1F",
      color: "white",
      fontWeight: "500",
      fontSize: "20px"
    }} >Fortsätt</button>
    </form>
    </>
  )
}
