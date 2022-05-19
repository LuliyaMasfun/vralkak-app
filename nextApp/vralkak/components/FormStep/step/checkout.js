import React,{useState} from 'react'
import Navbar from '../../Navbar/Navbar'
import Arrow from '../../../public/assets/arrowCheckOut.png'
import Veganen from '../../../public/assets/veganenCheckOut.png'
import {Progressbar} from '../../Progressbar/Progressbar'
import innehall from '../../../public/assets/innehall.png'
import Greta from '../../../public/assets/gretaDish.png'
import Ekonomen from '../../../public/assets/ekonomenDish.png'
import dish1 from '../../../public/assets/dish1.png'
import dish2 from '../../../public/assets/dish2.png'
import Image from 'next/image'

export const Checkout = ({navigation}) => {

  
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show1help, setShow1help] = useState(true);

 function both () {
   setShow1((s) => !s)
   setShow1help((s) => !s)
  
 }

  return (
    <>
    <Navbar />
    <Progressbar />
    <form  
    style={{
      backgroundColor: "#F4F4F4",
      display: "grid",
      position: "absolute",
      top: "163px",
      height: "1062px",
      width: "390px"
      }}>
        <span style={{
          position: "absolute",
          top: "40px",
          left: "32px",
          fontSize: "36px",
          fontWeight:"600",
        }} >Välj kasse</span>
        <div 
        onClick={()=>both()}
        style={{
          height: "88px",
          width: "326px",
          backgroundColor: "#AB3C3C",
          position: "relative",
          top: "120px", 
          left: "32px",
          color:"white",
        }}>
          <Image  layout = "raw" src={Veganen}  style={{
            position: "absolute",
            top: "16px",
            left: "16px",
          }} />

          <span style={{
            fontSize: "20px",
            fontWeight: "500",
            position: "absolute",
            top: "32px",
            left: "84px",
          }}>Veganen</span>

          <Image  layout = "raw" src={Arrow} 
          
          style={{
            position: "absolute",
            top: "35.29px",
            left: "295.96px"
          }}/>
            
            <div style={{
              position: "relative",
              backgroundColor: "#B85959",
              marginTop:"88px",
              width: "326px",
              height: "446px",
              display: show1 ? "none" : "block"
            }}>
              




            </div>
            </div>
        




            <div 
        
        style={{
          height: "88px",
          width: "326px",
          backgroundColor: "#006740",
          position: "absolute",
          top: show1?  "232px":"678px", 
          left: "32px",
          color:"white",
          
        }}>
          <Image  layout = "raw"src={Greta} style={{
            position: "absolute",
            top: "16px",
            left: "16px",
          }} />

          <span style={{
            fontSize: "20px",
            fontWeight: "500",
            position: "absolute",
            top: "32px",
            left: "84px",
          }}>Greta</span>

          <Image  layout = "raw"src={Arrow} 
          onClick={()=>setShow2((s) => !s)}
          style={{
            position: "absolute",
            top: "35.29px",
            left: "295.96px",
          }}/>
            
            <div style={{
              position: "relative",
              backgroundColor: "#267E5D",
              marginTop:"88px",
              width: "326px",
              height: "446px",
              display: show2 ? "none" : "block",
            }}>
              <span style={{
                fontSize:"20px",
                fontWeight:"500",
                position: "absolute",
                top: "16px",
                left: "16px",
              }}>Välj antal portioner</span>

              <div style={{
                width:"294px",
                height:"45px",
                position: "absolute",
                left: "16px",
                top:"64px",
                display: "flex",
                flexDirection:"row",

              }}>
                <div style={{ 
                height:"45px",
                width:"73.95px",
              background: "black",
              border: "2px solid black",
              color:"white",
              textAlign: "center",
              lineHeight: "45px",
              
              }}>8
              </div>
              <div style={{ 
                height:"45px",
                width:"73.95px",
              
              border: "2px solid black",
              color:"black",
              textAlign: "center",
              lineHeight: "45px",
              }}>12
              </div>
              <div style={{ 
                height:"45px",
                width:"73.95px",
              
              border: "2px solid black",
              color:"black",
              textAlign: "center",
              lineHeight: "45px",
              }}>16
              </div>
              <div style={{ 
                height:"45px",
                width:"73.95px",
              
              border: "2px solid black",
              color:"black",
              textAlign: "center",
              lineHeight: "45px",
              }}>20
              </div>
              </div>

              <div style={{
                borderBottom: "2px solid white",
                position: "absolute",
                top: "133px",
                left: "16px",
                width: "294px",

              }}></div>

              <Image  layout = "raw"src={innehall} style={{
                position: "absolute",
                left: "16px",
                top: "161px",
              }} />

              <span style={{
                fontSize: "20px",
                fontWeight: "500",
                position: "absolute",
                top: "161px",
                left: "58px",

              }}>Innehåll</span>

              <div style={{
                width: "34px",
                height: "45px",
                backgroundColor: "#3EA962",
                textAlign: "center",
                lineHeight: "45px",
                position: "absolute",
                top: "207.5px",
                left: "16px"
              }}>4x</div>

            <div style={{
                width: "34px",
                height: "45px",
                backgroundColor: "#3EA962",
                textAlign: "center",
                lineHeight: "45px",
                position: "absolute",
                top: "265.5px",
                left: "16px"
              }}>4x</div>

              <Image  layout = "raw" src={dish1} style={{
                position: "absolute",
                left: "60px",
                top: "206px",
              }} />

<Image  layout = "raw" src={dish2} style={{
                position: "absolute",
                left: "60px",
                top: "264px",
              }} />


              <span style={{
                fontSize: "16px",
                fontWeight: "normal",
                position: "absolute",
                left: "118px",
                top: "218px",
              }}>Sonjas Sojastroganoff</span>

<span style={{
                fontSize: "16px",
                fontWeight: "normal",
                position: "absolute",
                left: "118px",
                top: "276px",
              }}>Het vegansk chili</span>


            <div 
            onClick={()=> navigation.next()}
            style={{
              width: "259px",
              height: "45px",
              backgroundColor: "black",
              position: "absolute",
              top: "369px",
              left: "33px",
              textAlign: "center",
              lineHeight: "45px",
              fontSize: "20px",
              fontWeight: "500",
            }}>Lägg till (399,00 SEK)</div>

            </div>
            </div>

            


            <div 
        onClick={()=>setShow3((s) => !s)}
        style={{
          height: "88px",
          width: "326px",
          backgroundColor: "#0939BB",
          position: "absolute",
          //top: show1help? "334px":"790px",
          top: show2?  "334px":"790px", 
          
          left: "32px",
          color:"white",
          
        }}>
          <Image  layout = "raw"src={Ekonomen} style={{
            position: "absolute",
            top: "16px",
            left: "16px",
          }} />

          <span style={{
            fontSize: "20px",
            fontWeight: "500",
            position: "absolute",
            top: "32px",
            left: "84px",
          }}>Veganen</span>

          <Image  layout = "raw" src={Arrow} 
          
          style={{
            position: "absolute",
            top: "35.29px",
            left: "295.96px"
          }}/>
            
            <div style={{
              position: "relative",
              backgroundColor: "#2E57C5",
              marginTop:"88px",
              width: "326px",
              height: "446px",
              display: show3 ? "none" : "block",
            }}>

<span style={{
                fontSize:"20px",
                fontWeight:"500",
                position: "absolute",
                top: "16px",
                left: "16px",
              }}>Välj antal portioner</span>

              <div style={{
                width:"294px",
                height:"45px",
                position: "absolute",
                left: "16px",
                top:"64px",
                display: "flex",
                flexDirection:"row",

              }}>
                <div style={{ 
                height:"45px",
                width:"73.95px",
              background: "black",
              border: "2px solid black",
              color:"white",
              textAlign: "center",
              lineHeight: "45px",
              
              }}>8
              </div>
              <div style={{ 
                height:"45px",
                width:"73.95px",
              
              border: "2px solid black",
              color:"black",
              textAlign: "center",
              lineHeight: "45px",
              }}>12
              </div>
              <div style={{ 
                height:"45px",
                width:"73.95px",
              
              border: "2px solid black",
              color:"black",
              textAlign: "center",
              lineHeight: "45px",
              }}>16
              </div>
              <div style={{ 
                height:"45px",
                width:"73.95px",
              
              border: "2px solid black",
              color:"black",
              textAlign: "center",
              lineHeight: "45px",
              }}>20
              </div>
              </div>

              <div style={{
                borderBottom: "2px solid white",
                position: "absolute",
                top: "133px",
                left: "16px",
                width: "294px",

              }}></div>

              <Image  layout = "raw" src={innehall} style={{
                position: "absolute",
                left: "16px",
                top: "161px",
              }} />

              <span style={{
                fontSize: "20px",
                fontWeight: "500",
                position: "absolute",
                top: "161px",
                left: "58px",

              }}>Innehåll</span>

              <div style={{
                width: "34px",
                height: "45px",
                backgroundColor: "#0939BB",
                textAlign: "center",
                lineHeight: "45px",
                position: "absolute",
                top: "207.5px",
                left: "16px"
              }}>4x</div>

            <div style={{
                width: "34px",
                height: "45px",
                backgroundColor: "#0939BB",
                textAlign: "center",
                lineHeight: "45px",
                position: "absolute",
                top: "265.5px",
                left: "16px"
              }}>4x</div>

              <Image  layout = "raw" src={dish1} style={{
                position: "absolute",
                left: "60px",
                top: "206px",
              }} />

<Image  layout = "raw" src={dish2} style={{
                position: "absolute",
                left: "60px",
                top: "264px",
              }} />


              <span style={{
                fontSize: "16px",
                fontWeight: "normal",
                position: "absolute",
                left: "118px",
                top: "218px",
              }}>Sonjas Sojastroganoff</span>

<span style={{
                fontSize: "16px",
                fontWeight: "normal",
                position: "absolute",
                left: "118px",
                top: "276px",
              }}>Het vegansk chili</span>


            <div style={{
              width: "259px",
              height: "45px",
              backgroundColor: "black",
              position: "absolute",
              top: "369px",
              left: "33px",
              textAlign: "center",
              lineHeight: "45px",
              fontSize: "20px",
              fontWeight: "500",
            }}>Lägg till (399,00 SEK)</div>



            </div>
            </div>






      </form>
    </>
    
  )
}
