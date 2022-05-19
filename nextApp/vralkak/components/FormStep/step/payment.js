import React,{useState} from 'react'
import Navbar from '../../Navbar/Navbar';
import {Progressbar} from '../../Progressbar/Progressbar';
import klarnaLogo from '../../../public/assets/klarnalogos.svg';
import cardLogos from '../../../public/assets/cardpayment.svg';
import swishLogo from '../../../public/assets/Swish.svg';
import Image from 'next/image';


export const Payment = ({formData,setForm,navigation}) => {
  const [show, setShow] = useState(true);

  const {cardName, cardNumber, cardExpireDate, cardCVV} = formData;


  return (
    <>
    <Navbar />
    <Progressbar />
    <div style={{
      backgroundColor: "#F4F4F4",
      display: "grid",
      position: "absolute",
      top: "163px",
      height: "993px",
      width: "390px"
    }}>

      <span className="paymentsHeading" style={{
        position: "absolute",
        top:"40px",
        left: "32px",
        fontSize: "36px",
        fontWeight: "600"
      }}>
        Välj betalsätt
      </span>
      <div className="klarnaContainer" style={{
        width : "326px",
        height : "88px",
        position : "absolute",
        left : "32px",
        top : "112px",
        border : "0.6px solid",
        borderBoxSize : "border-box",
        fontSize : "20px",
        fontweight: "500px",
        font: "Outfit"
          }}>

          <span style={{
            position: "absolute",
            top: "32px",
            left: "95.96px"
          }}> Klarna </span>
          <Image layout="raw" className="klarnaPic" src={klarnaLogo}  style={{
            position: "absolute",
            top: "27.5px",
            left: "166.96px"
          }}/>
          
          </div>
        
          <div className="cardContainer" 
            onClick={() => setShow((s) => !s)}
            style={{
            width : "326px",
            height : "88px",
            position : "absolute",
            left : "32px",
            top : "216px",
            border : "0.6px solid",
            fontSize : "20px",
            fontweight: "500px",
            font: "Outfit",
            
            


          }}>
          <div className="card"
          style={{
            marginLeft : "51px",
            marginTop : "32px"
          }}> Kortbetalning </div>
          <Image layout="raw" className="cardPic" src={cardLogos}  alt=""
          style={{
            position: "absolute",
            marginTop : "-30px",
            marginLeft : "185px"
          
          }}/>
          
             </div>

            <div style={{
              display: show? "none" : "block"
            }}>

          <span style={{
            fontSize: "16px",
            position: "absolute",
            top: "328px",
            left: "32px"
            
          }}>Namn på kortet*</span>

          <input 
          name="cardName"
          value={cardName}
          onChange={setForm}
          type="text" style={{
            width: "326px",
            height: "48px",
            position : "absolute",
            top : "360px",
            left : "32px",
            boxSizing: "border-box",
            border: "1px solid black",
          }} />

      <span style={{
            fontSize: "16px",
            fontweight: "normal",
            position: "absolute",
            top: "416px",
            left: "32px"
          
          }}>Kortnummer*</span>

        <input 
        name="cardNumber"
        value={cardNumber}
        onChange={setForm}
        type="text" style={{
            width: "326px",
            height: "48px",
            position : "absolute",
            top : "448px",
            left : "32px",
            boxSizing: "border-box",
            border: "1px solid black",
          }} />

          <span style={{
            position : "absolute",
            top : "504px",
            left : "32px",
            fontSize: "16px",
          }}>MM/ÅÅ*</span>

          <input 
          name="cardExpireDate"
          value={cardExpireDate}
          onChange={setForm}
          type="text"
          style={{
            width : "150px",
            height : "48px",
            border : "1px solid black",
            boxSizing: "border-box",
            position : "absolute",
            top : "536px",
            left : "32px",
          }} />

<span style={{
            position : "absolute",
            top : "504px",
            left : "208px",
            fontSize: "16px",
          }}>CVV/CVC*</span>

          <input 
          name="cardCVV"
          value={cardCVV}
          onChange={setForm}
          type="text"
          style={{
            width : "150px",
            height : "48px",
            border : "1px solid black",
            boxSizing: "border-box",
            position : "absolute",
            top : "536px",
            left : "208px",
            
          }} />
          
        </div>
          
        
       

        <div className="swishContainer" style={{
          width : "326px",
          height : "88px",
          position : "absolute",
          left : "32px",
          top : show? "320px":"615px",
          border : "0.6px solid",
          borderBoxSize : "border-box",
          fontSize : "20px",
          fontweight: "500px",
          font: "Outfit",
          
          }}>
          <div className="swish"
          style={{
            marginTop: "32px",
            marginLeft: "81.5px"
          }}> 
           Swish </div>
          <div className="swishImg"
          style={{
            marginTop: "-30px",
            marginLeft: "142.5px"
           }} >
            <Image layout="raw" className="swishPic" src={swishLogo} alt=""/>
        </div>
        </div>

        <button 
        onClick={()=>navigation.next()}
        style={{
      width:"326px",
      height:"50px",
      position: "absolute",
      top: show? "423px" : "730px",
      left: "32px",
      boxSizing:"border-box",
      border: "1px solid #1F1E1F",
      backgroundColor: "#1F1E1F",
      color: "white",
      fontWeight: "500",
      fontSize: "20px",
      
    }} >Fortsätt</button>

      </div>
    </>
  )
}
