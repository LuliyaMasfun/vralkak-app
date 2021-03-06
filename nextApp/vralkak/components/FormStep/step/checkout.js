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
import { useRouter } from 'next/router'
import { useEffect } from 'react'



export const Checkout = ({navigation}) => {
  
  const router = useRouter();
  

  const [degree1, setDegree1] = useState("rotate(0deg)")
  const [degree2, setDegree2] = useState("rotate(0deg)")
  const [degree3, setDegree3] = useState("rotate(0deg)")

  useEffect(() => {
    if(router.query.card == "ekonomen"){
    drop1();
    }
    if(router.query.card == "veganen"){
    drop3();

    }
    if(router.query.card == "greta"){
    drop2();
      }

  }, []);
  
  //Kort förflyttning
  const [dropDown1, setDropDown1] = useState({
    position: "relative",
    backgroundColor: "#2E57C5",
    marginTop:"88px",
    width: "326px",
    height: "446px",
    display: "none",
    
  });
  const [dropDown2, setDropDown2] = useState({
    position: "relative",
    backgroundColor: "#267E5D",
    marginTop:"88px",
    width: "326px",
    height: "446px",
    display: "none",
  });
  const [dropDown3, setDropDown3] = useState({
    position: "relative",
    backgroundColor: "#AB3C3C",
    marginTop:"88px",
    width: "326px",
    height: "446px",
    display: "none",
  });




  const [move1, setMove1] = useState({
    height: "88px",
    width: "326px",
    backgroundColor: "#006740",
    position: "absolute",
    top: "232px",
    left: "32px",
    color:"white",
    
  })

  const [move2, setMove2] = useState({
    height: "88px",
    width: "326px",
    backgroundColor: "#AB3C3C",
    position: "absolute",
    top: "344px", 
    left: "32px",
    color:"white",
  })

  function drop1(){
    if(dropDown1.display == "none"){
      setDropDown1({
      position: "relative",
      backgroundColor: "#2E57C5",
      marginTop:"88px",
      width: "326px",
      height: "446px",
      display: "" 
      })

      setMove1({
        height: "88px",
      width: "326px",
      backgroundColor: "#006740",
      position: "absolute",
      top: "678px", 
      left: "32px",
      color:"white",
      })

      setMove2({
        height: "88px",
      width: "326px",
        backgroundColor: "#AB3C3C",
      position: "absolute",
      top: "790px", 
      left: "32px",
      color:"white",
      })
      setDegree1("rotate(180deg)")
    }
      else {
        setDropDown1({position: "relative",
      backgroundColor: "#2E57C5",
      marginTop:"88px",
      width: "326px",
      height: "446px",
      display: "none" 
      })

      setMove1({
        height: "88px",
      width: "326px",
      backgroundColor: "#006740",
      position: "absolute",
      top: "232px", 
      left: "32px",
      color:"white",
      })

      setMove2({
        height: "88px",
      width: "326px",
        backgroundColor: "#AB3C3C",
      position: "absolute",
      top: "344px", 
      left: "32px",
      color:"white",
      })

      setDegree1("rotate(0deg)")

      }
      

    }

    function drop2(){
      if(dropDown2.display == "none"){
        setDropDown2({
        position: "relative",
        backgroundColor: "#267E5D",
        marginTop:"88px",
        width: "326px",
        height: "446px",
        display: "" 
        })
  
        
  
        setMove2({
          height: "88px",
        width: "326px",
        backgroundColor: "#AB3C3C",
        position: "absolute",
        top: "790px", 
        left: "32px",
        color:"white",
        })

        setDegree2("rotate(180deg)")
      }
        else {
          setDropDown2({position: "relative",
        backgroundColor: "#B85959",
        marginTop:"88px",
        width: "326px",
        height: "446px",
        display: "none" 
        })
  
        
  
        setMove2({
          height: "88px",
        width: "326px",
        backgroundColor: "#AB3C3C",
        position: "absolute",
        top: "344px", 
        left: "32px",
        color:"white",
        })

        setDegree2("rotate(0deg)")
  
        }
        
  
      }

      function drop3(){
        if(dropDown3.display == "none"){
          setDropDown3({
          position: "relative",
          backgroundColor: "#B85959",
          marginTop:"88px",
          width: "326px",
          height: "446px",
          display: "" 
          })

          setDegree3("rotate(180deg)")
    
          
        }
          else {
            setDropDown3({position: "relative",
          backgroundColor: "#B85959",
          marginTop:"88px",
          width: "326px",
          height: "446px",
          display: "none" 
          })

          setDegree3("rotate(0deg)")
    
         
    
          }
          
    
        }
  


//CheckOut Meny

  const [checkOut, setCheckOut] = useState({
    position: "fixed",
    bottom: "0px",
    width:"390px",
    height:"80px",
    color: "white",
    border: "1px solid black",
    backgroundColor: "black",
    fontSize: "20px",
    fontWeight: "500",
    textAlign: "center",
    lineHeight: "75px",
    display: "none",
  })

  const [disableAddButton, setDisableAddButton] = useState({
    width: "259px",
    height: "45px",
    backgroundColor: "black",
    color:"white",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "block",
    

  })

  const [disableAddButton2, setDisableAddButton2] = useState({
    width: "259px",
    height: "45px",
    backgroundColor: "black",
    color:"white",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "block",

  })

  const [addRemoveButton, setAddRemoveButton] = useState({
    width: "259px",
    height: "45px",
    backgroundColor: "none",
    color:"black",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "none",

  })

  const [addRemoveButton2, setAddRemoveButton2] = useState({
    width: "259px",
    height: "45px",
    backgroundColor: "none",
    color:"black",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "none",

  })

  function removeFromCart(){
    setCheckOut({
      position: "fixed",
      bottom: "0px",
      width:"390px",
      height:"80px",
      color: "white",
      border: "1px solid black",
      backgroundColor: "black",
      fontSize: "20px",
      fontWeight: "500",
      textAlign: "center",
      lineHeight: "75px",
      display: "none",
    })

    setAddRemoveButton({
      width: "259px",
  height: "45px",
  backgroundColor: "none",
  color:"black",
  position: "absolute",
  top: "369px",
  left: "33px",
  textAlign: "center",
  lineHeight: "45px",
  fontSize: "20px",
  fontWeight: "500",
  border: "2px solid black",
  display: "none",

    })

    setDisableAddButton({
      width: "259px",
  height: "45px",
  backgroundColor: "black",
  color:"white",
  position: "absolute",
  top: "369px",
  left: "33px",
  textAlign: "center",
  lineHeight: "45px",
  fontSize: "20px",
  fontWeight: "500",
  border: "2px solid black",
  display: "block",

    })
    setLastPrice((""))

  }

  function removeFromCart2(){
    setCheckOut({
      position: "fixed",
      bottom: "0px",
      width:"390px",
      height:"80px",
      color: "white",
      border: "1px solid black",
      backgroundColor: "black",
      fontSize: "20px",
      fontWeight: "500",
      textAlign: "center",
      lineHeight: "75px",
      display: "none",
    })

    setAddRemoveButton2({
      width: "259px",
  height: "45px",
  backgroundColor: "none",
  color:"black",
  position: "absolute",
  top: "369px",
  left: "33px",
  textAlign: "center",
  lineHeight: "45px",
  fontSize: "20px",
  fontWeight: "500",
  border: "2px solid black",
  display: "none",

    })

    setDisableAddButton2({
      width: "259px",
  height: "45px",
  backgroundColor: "black",
  color:"white",
  position: "absolute",
  top: "369px",
  left: "33px",
  textAlign: "center",
  lineHeight: "45px",
  fontSize: "20px",
  fontWeight: "500",
  border: "2px solid black",
  display: "block",

    })
    setLastPrice((""))

  }


  function addToCart(){

    setLastPrice(price)
    
    setCheckOut({
      position: "fixed",
      bottom: "0px",
      width:"390px",
      height:"80px",
      color: "white",
      border: "1px solid black",
      backgroundColor: "black",
      fontSize: "20px",
      fontWeight: "500",
      textAlign: "center",
      lineHeight: "75px",
      display: "",
    })

    
      setDisableAddButton({
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
        display: "none",
        border: "2px solid black",
      })

      setAddRemoveButton({
        width: "259px",
        height: "45px",
        backgroundColor: "none",
        color:"black",
        position: "absolute",
        top: "369px",
        left: "33px",
        textAlign: "center",
        lineHeight: "45px",
        fontSize: "20px",
        fontWeight: "500",
        border: "2px solid black",
        display: "block",
      })
    
  }
  
  function addToCart2(){

    setLastPrice(price2)
    
    setCheckOut({
      position: "fixed",
      bottom: "0px",
      width:"390px",
      height:"80px",
      color: "white",
      border: "1px solid black",
      backgroundColor: "black",
      fontSize: "20px",
      fontWeight: "500",
      textAlign: "center",
      lineHeight: "75px",
      display: "",
    })

    
      setDisableAddButton2({
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
        display: "none",
        border: "2px solid black",
      })

      setAddRemoveButton2({
        width: "259px",
        height: "45px",
        backgroundColor: "none",
        color:"black",
        position: "absolute",
        top: "369px",
        left: "33px",
        textAlign: "center",
        lineHeight: "45px",
        fontSize: "20px",
        fontWeight: "500",
        border: "2px solid black",
        display: "block",
      })
    
  }

  
  
  
  const [price, setPrice] = useState("(399,00SEK)")
  const [lastPrice, setLastPrice] = useState("");
  const [amount, setAmount] = useState("4x");

  const [price2, setPrice2] = useState("(399,00SEK)")
  
  const [amount2, setAmount2] = useState("4x");
  



  const [style1, setStyle1] = useState({
    height:"45px",
    width:"73.95px",
    background: "black",
    color: "white",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"
  })

  const [style2, setStyle2] = useState({
    height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"
  })

  const [style3, setStyle3] = useState({
    height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"
  })

  const [style4, setStyle4] = useState({
    height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    
  })

  //3:e kortet

  const [style12, setStyle12] = useState({
    height:"45px",
    width:"73.95px",
    background: "black",
    color: "white",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"
  })

  const [style22, setStyle22] = useState({
    height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"
  })

  const [style32, setStyle32] = useState({
    height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"
  })

  const [style42, setStyle42] = useState({
    height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    
  })

  function addAmount12(){
    setStyle12({height:"45px",
    width:"73.95px",
    background: "black",
    color: "white",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle22({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle32({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle42({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    })

    setPrice2(("(399,00SEK)"))
    setAmount2(("4x"))

    if(lastPrice != "(399,00SEK)"){
      setAddRemoveButton2({
        width: "259px",
    height: "45px",
    backgroundColor: "none",
    color:"black",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "none",

      })

      setDisableAddButton2({
        width: "259px",
    height: "45px",
    backgroundColor: "black",
    color:"white",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "block",

      })
    }
    else {

      setAddRemoveButton2({
        width: "259px",
    height: "45px",
    backgroundColor: "none",
    color:"black",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "block",

      })

      setDisableAddButton2({
        width: "259px",
    height: "45px",
    backgroundColor: "black",
    color:"white",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "none",

      })

    }
    

    
  }

  function addAmount22(){
    setStyle12({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle22({height:"45px",
    width:"73.95px",
    background: "black",
    color: "white",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle32({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle42({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    })
    setPrice2(("(899,00SEK)"))
    setAmount2(("6x"))

    if(lastPrice != "(899,00SEK)"){
      setAddRemoveButton2({
        width: "259px",
        height: "45px",
        backgroundColor: "none",
        color:"black",
        position: "absolute",
        top: "369px",
        left: "33px",
        textAlign: "center",
        lineHeight: "45px",
        fontSize: "20px",
        fontWeight: "500",
        border: "2px solid black",
        display: "none",

      })

      setDisableAddButton2({
      width: "259px",
      height: "45px",
      backgroundColor: "black",
      color:"white",
      position: "absolute",
      top: "369px",
      left: "33px",
      textAlign: "center",
      lineHeight: "45px",
      fontSize: "20px",
      fontWeight: "500",
      border: "2px solid black",
      display: "block",
      })
    }
    else {

      setAddRemoveButton2({
        width: "259px",
    height: "45px",
    backgroundColor: "none",
    color:"black",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "block",

      })

    setDisableAddButton2({
      width: "259px",
      height: "45px",
      backgroundColor: "black",
      color:"white",
      position: "absolute",
      top: "369px",
      left: "33px",
      textAlign: "center",
      lineHeight: "45px",
      fontSize: "20px",
      fontWeight: "500",
      border: "2px solid black",
      display: "none",

      })

    }
  }

  function addAmount32(){
    setStyle12({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle22({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle32({height:"45px",
    width:"73.95px",
    background: "black",
    color: "white",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle42({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    })

    setPrice2(("(1099,00SEK)"))
    setAmount2(("8x"))

    if(lastPrice != "(1099,00SEK)"){
      setAddRemoveButton2({
        width: "259px",
    height: "45px",
    backgroundColor: "none",
    color:"black",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "none",

      })

      setDisableAddButton2({
        width: "259px",
    height: "45px",
    backgroundColor: "black",
    color:"white",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "block",

      })
    }
    else {

      setAddRemoveButton2({
        width: "259px",
    height: "45px",
    backgroundColor: "none",
    color:"black",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "block",

      })

      setDisableAddButton2({
        width: "259px",
    height: "45px",
    backgroundColor: "black",
    color:"white",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "none",

      })

    }
  }

  function addAmount42(){
    setStyle12({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle22({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle32({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle42({height:"45px",
    width:"73.95px",
    background: "black",
    color: "white",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    })
    setPrice2(("(1399,00SEK)"))
    setAmount2(("10x"))

    if(lastPrice != "(1399,00SEK)"){
      setAddRemoveButton2({
        width: "259px",
    height: "45px",
    backgroundColor: "none",
    color:"black",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "none",

      })

      setDisableAddButton2({
        width: "259px",
    height: "45px",
    backgroundColor: "black",
    color:"white",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "block",

      })
    }
    else {

      setAddRemoveButton2({
        width: "259px",
    height: "45px",
    backgroundColor: "none",
    color:"black",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "block",

      })

      setDisableAddButton2({
        width: "259px",
    height: "45px",
    backgroundColor: "black",
    color:"white",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "none",

      })

    }
  }

  function addAmount1(){
    setStyle1({height:"45px",
    width:"73.95px",
    background: "black",
    color: "white",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle2({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle3({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle4({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    })

    setPrice(("(399,00SEK)"))
    setAmount(("4x"))

    if(lastPrice != "(399,00SEK)"){
      setAddRemoveButton({
        width: "259px",
    height: "45px",
    backgroundColor: "none",
    color:"black",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "none",

      })

      setDisableAddButton({
        width: "259px",
    height: "45px",
    backgroundColor: "black",
    color:"white",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "block",

      })
    }
    else {

      setAddRemoveButton({
        width: "259px",
    height: "45px",
    backgroundColor: "none",
    color:"black",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "block",

      })

      setDisableAddButton({
        width: "259px",
    height: "45px",
    backgroundColor: "black",
    color:"white",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "none",

      })

    }
    

    
  }

  function addAmount2(){
    setStyle1({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle2({height:"45px",
    width:"73.95px",
    background: "black",
    color: "white",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle3({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle4({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    })
    setPrice(("(899,00SEK)"))
    setAmount(("6x"))

    if(lastPrice != "(899,00SEK)"){
      setAddRemoveButton({
        width: "259px",
    height: "45px",
    backgroundColor: "none",
    color:"black",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "none",

      })

      setDisableAddButton({
        width: "259px",
    height: "45px",
    backgroundColor: "black",
    color:"white",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "block",

      })
    }
    else {

      setAddRemoveButton({
        width: "259px",
    height: "45px",
    backgroundColor: "none",
    color:"black",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "block",

      })

      setDisableAddButton({
        width: "259px",
    height: "45px",
    backgroundColor: "black",
    color:"white",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "none",

      })

    }
  }

  function addAmount3(){
    setStyle1({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle2({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle3({height:"45px",
    width:"73.95px",
    background: "black",
    color: "white",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle4({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    })

    setPrice(("(1099,00SEK)"))
    setAmount(("8x"))

    if(lastPrice != "(1099,00SEK)"){
      setAddRemoveButton({
        width: "259px",
    height: "45px",
    backgroundColor: "none",
    color:"black",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "none",

      })

      setDisableAddButton({
        width: "259px",
    height: "45px",
    backgroundColor: "black",
    color:"white",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "block",

      })
    }
    else {

      setAddRemoveButton({
        width: "259px",
    height: "45px",
    backgroundColor: "none",
    color:"black",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "block",

      })

      setDisableAddButton({
        width: "259px",
    height: "45px",
    backgroundColor: "black",
    color:"white",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "none",

      })

    }
  }

  function addAmount4(){
    setStyle1({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle2({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle3({height:"45px",
    width:"73.95px",
    background: "none",
    color: "black",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    borderRight:"none"})

    setStyle4({height:"45px",
    width:"73.95px",
    background: "black",
    color: "white",
    border: "2px solid black",
    value: "back",
    textAlign: "center",
    lineHeight: "45px",
    })
    setPrice(("(1399,00SEK)"))
    setAmount(("10x"))

    if(lastPrice != "(1399,00SEK)"){
      setAddRemoveButton({
        width: "259px",
    height: "45px",
    backgroundColor: "none",
    color:"black",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "none",

      })

      setDisableAddButton({
        width: "259px",
    height: "45px",
    backgroundColor: "black",
    color:"white",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "block",

      })
    }
    else {

      setAddRemoveButton({
        width: "259px",
    height: "45px",
    backgroundColor: "none",
    color:"black",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "block",

      })

      setDisableAddButton({
        width: "259px",
    height: "45px",
    backgroundColor: "black",
    color:"white",
    position: "absolute",
    top: "369px",
    left: "33px",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "20px",
    fontWeight: "500",
    border: "2px solid black",
    display: "none",

      })

    }

    
  }
  
  return (
    <>
    <Navbar />
    <Progressbar img="/assets/checkMark.png" color1="#FBA497" color2="none" color3="none" color4="none"
                 number1="1" number2="2" number3="3" number4="4"
                 numberColor1="#FFFFFF" numberColor2="#C4C4C4" numberColor3="#C4C4C4" numberColor4="#C4C4C4"
                 lineColor1="2px solid #C4C4C4" lineColor2="2px solid #C4C4C4" lineColor3="2px solid #C4C4C4" 
                 display1="none" display2="none" display3="none" display4="none"
                 textColor1="#FBA497" textColor2="#C4C4C4" textColor3="#C4C4C4" textColor4="#C4C4C4"
                 borderColor1="2px solid #FBA497" borderColor2="2px solid #C4C4C4" borderColor3="2px solid #C4C4C4" borderColor4="2px solid #C4C4C4" navigation={navigation}/>

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
        
        style={{
          height: "88px",
          width: "326px",
          backgroundColor: "#0939BB",
          position: "relative",
          top: "120px", 
          left: "32px",
          color:"white",
          
        }}>
          <Image  layout = "raw" src={Ekonomen}  style={{
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
          }}>Ekonomen</span>

          <Image  onClick={()=>drop1()}
          layout = "raw" src={Arrow} 
          
          style={{
            position: "absolute",
            top: "35.29px",
            left: "295.96px",
            transform: `${degree1}`
          }}/>
            
            <div style={dropDown1}>
            
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
                <div 
                onClick={()=> addAmount1()}
                style={style1}
                
              
              >8
              </div>
              <div onClick={()=> addAmount2()} 
              
              style={style2}>12
              </div>

              <div onClick={()=> addAmount3()} 
              
              style={style3}> 
              16
              </div>
              <div  onClick={()=> addAmount4()}
              style={style4}>20
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
                backgroundColor: "#0939BB",
                textAlign: "center",
                lineHeight: "45px",
                position: "absolute",
                top: "207.5px",
                left: "16px"
              }}>{amount}</div>

            <div style={{
                width: "34px",
                height: "45px",
                backgroundColor: "#0939BB",
                textAlign: "center",
                lineHeight: "45px",
                position: "absolute",
                top: "265.5px",
                left: "16px"
              }}>{amount}</div>

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
              }}>Sonjas korvstroganoff</span>

<span style={{
                fontSize: "16px",
                fontWeight: "normal",
                position: "absolute",
                left: "118px",
                top: "276px",
              }}>Het chili</span>


            <div 
            onClick={()=> addToCart()}
            
            style={disableAddButton}>
              Lägg till {price}
            </div>

            <div onClick={()=> removeFromCart()} 
            style={addRemoveButton}>Ta bort</div>

            </div>
            </div>

            
            
            <div 
        
        style={move1}>
          <Image layout = "raw"src={Greta} style={{
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

          <Image layout = "raw"src={Arrow} 
          onClick={()=>drop2()}
          style={{
            position: "absolute",
            top: "35.29px",
            left: "295.96px",
            transform: `${degree2}`
          }}/>
            
            <div style={dropDown2}>
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
                <div 
                onClick={()=> addAmount1()}
                style={style1}
                
              
              >8
              </div>
              <div onClick={()=> addAmount2()} 
              
              style={style2}>12
              </div>

              <div onClick={()=> addAmount3()} 
              
              style={style3}> 
              16
              </div>
              <div  onClick={()=> addAmount4()}
              style={style4}>20
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
              }}>{amount}</div>

            <div style={{
                width: "34px",
                height: "45px",
                backgroundColor: "#3EA962",
                textAlign: "center",
                lineHeight: "45px",
                position: "absolute",
                top: "265.5px",
                left: "16px"
              }}>{amount}</div>

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
            onClick={()=> addToCart()}
            
            style={disableAddButton}>
              Lägg till {price}
            </div>

            <div onClick={()=> removeFromCart()} 
            style={addRemoveButton}>Ta bort</div>

            </div>
            </div>

            


            <div 
        
        style={move2}>
          <Image  layout = "raw"src={Veganen} style={{
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

          <Image  onClick={()=> drop3()}
          layout = "raw" src={Arrow} 
          
          style={{
            position: "absolute",
            top: "35.29px",
            left: "295.96px",
            transform: `${degree3}`
          }}/>
            
            <div style={dropDown3}>

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
                <div onClick={()=> addAmount12()} 
                style={style12}>8
              </div>
              <div onClick={()=> addAmount22()} 
                style={style22}>12
              </div>
              <div onClick={()=> addAmount32()} 
                style={style32}>16
              </div>
              <div onClick={()=> addAmount42()} 
                style={style42}>20
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
                backgroundColor: "#AB3C3C",
                textAlign: "center",
                lineHeight: "45px",
                position: "absolute",
                top: "207.5px",
                left: "16px"
              }}>{amount2}</div>

            <div style={{
                width: "34px",
                height: "45px",
                backgroundColor: "#AB3C3C",
                textAlign: "center",
                lineHeight: "45px",
                position: "absolute",
                top: "265.5px",
                left: "16px"
              }}>{amount2}</div>

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
            onClick={()=> addToCart2()}
            style={disableAddButton2}>Lägg till {price2}</div>

            <div onClick={()=> removeFromCart2()} 
            style={addRemoveButton2}>Ta bort</div>



            </div>
            </div>

            





            <div onClick={()=> navigation.next()}
            style={checkOut}>Gå vidare {lastPrice}</div>
      </form>

      
    </>
    
  )
}


