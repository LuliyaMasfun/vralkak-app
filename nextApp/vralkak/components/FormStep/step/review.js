import React from 'react'
import Navbar from '../../Navbar/Navbar'
import { Progressbar } from '../../Progressbar/Progressbar'
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import  ListItemText  from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { withStyles } from '@material-ui/core/styles';




export const Review = ({formData, navigation}) => {
  const {go} = navigation;
  const {
    firstNameDelivery,
    lastNameDelivery,
    address,
    city,
    zip,
    phone,
    deliveryWay,
    infoToDriver,
    cardName,
    cardNumber,
    cardExpireDate,
    cardCVV
  } = formData;


  const muiAccordionSummary = withStyles({
    root: {
      backgroundColor: '#21CFFF',
      borderBottom: '1px solid #12738E',
      marginBottom: -1,
      color: '#666666',
      borderRadius: '30px 0px 30px 0',
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(AccordionSummary);

  return (
    <>
    <Navbar />
    <Progressbar img="/assets/checkMark.png" color1="none" color2="none" color3="none" color4="#none"
                 number1="" number2="" number3="" number4=""
                 lineColor1="2px solid #FBA497" lineColor2="2px solid #FBA497" lineColor3="2px solid #FBA497" 
                 display1="block" display2="block" display3="block" display4="block"
                 textColor1="#FBA497" textColor2="#FBA497" textColor3="#FBA497" textColor4="#FBA497"
                 borderColor1="2px solid #FBA497" borderColor2="2px solid #FBA497" borderColor3="2px solid #FBA497" borderColor4="2px solid #FBA497" navigation={navigation}/>

    <div style={{
      height: "1415px",
      width: "390px",
      position: "absolute",
      top: "163px",
      backgroundColor: "#F4F4F4",
    }}>

    <span style={{
      position: "absolute",
      top: "40px",
      left: "32px",
      fontSize: "36px",
      fontWeight: "600",
    }}>Varukorg</span>


    <span style={{
      position: "absolute",
      top: "48px",
      left: "311px",
      fontSize: "16px",
      borderBottom: "1px solid black",
    }}>Ändra</span>

    <div style={{
      height: "88px",
      width: "326px",
      backgroundColor: "#3EA962",
      position: "absolute",
      top: "113px",
      left: "32px",
      color:"white",
    }}></div>
    <div style={{
      height: "140px",
      width: "326px",
      backgroundColor: "#3EA346",
      position: "absolute",
      top: "201px",
      left: "32px",
      color:"white",
    }}></div>

    <span style={{
      position: "absolute",
      top: "397px",
      left: "35px",
      fontSize: "20px",
      fontWeight: "700",
    }}>Att betala</span>


    <span style={{
      position: "absolute",
      top: "397px",
      left: "295px",
      fontSize: "20px",
      fontWeight: "700",
    }}>399kr</span>

    
    <span style={{
      position: "absolute",
      top: "468px",
      left: "32px",
      fontSize: "36px",
      fontWeight: "600",
    }}>Bekräfta uppgifter</span>

      <div style={{
        position: "absolute",
        top: "535px",
        left: "32px",
        width: "306px",
        height: "200px"
      }}>
    
    <div style={{
      position: "relative",
      left:"8px"
       
    }}>
    <RenderAccordion 
    summary= "Signup" go={go} details={[
      {'Förnamn': firstName},
      {'Efternamn': lastName},
      {'Email': email},
      {'Lösenord': password}
    ]}
    sx={{
      
    }} />

    <RenderAccordion
    summary= "Delivery" go={go} details={[
      {'Förnamn': firstNameDelivery},
      {'Efternamn': lastNameDelivery},
      {'Address': address},
      {'Stad': city},
      {'Postnummer': zip},
      {'Nummer': phone},
      {'Leveranssätt': deliveryWay},
      {'Information till chafförren': infoToDriver},
    ]} />

    <RenderAccordion
    summary= "Payment" go={go} details={[
      {'Kort namn' : cardName},
      {'Kortnummer': cardNumber},
      {'MM/ÅÅ' : cardExpireDate},
      {'CVV/CVC' : cardCVV}
    ]} />

</div>

<button 
        onClick={()=>navigation.next()}
        style={{
      width:"326px",
      height:"50px",
      position: "relative",
      top: "50px",
      boxSizing:"border-box",
      left:"0px",
      backgroundColor: "#1F1E1F",
      color: "white",
      fontWeight: "500",
      fontSize: "20px",
      
    }} >Beställ</button>
    
   
   </div>

   
   
   



</div>


    </>
  )
}

export const RenderAccordion = ({summary, details, go}) => (
  <Accordion>
      <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      >{summary}</AccordionSummary>
      <AccordionDetail>
          <div>
              {details.map((data, index) => {
                  const objKey = Object.keys(data)[0];
                  const objValue = data[Object.keys(data)[0]];

                  return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
              }) }
              <IconButton
              color="primary"
              components="span"
              onClick={() => go(`${summary.toLowerCase()}`)}
              ><EditIcon/></IconButton>

          </div>
      </AccordionDetail>
  </Accordion>
)
