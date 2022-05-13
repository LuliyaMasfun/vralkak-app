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


export const Review = ({formData, navigation}) => {
  const {go} = navigation;
  const {
    firstName,
    lastName,
    email,
    password,
    firstNameDelivery,
    lastNameDelivery,
    address,
    city,
    zip,
    phone,
    cardName,
    cardNumber,
    cardExpireDate,
    cardCVV
  } = formData;

  return (
    <>
    <Navbar />
    <Progressbar />

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
    
    <RenderAccordion 
    summary= "Signup" go={go} details={[
      {'Förnamn': firstName},
      {'Efternamn': lastName},
      {'Email': email},
      {'Lösenord': password}
    ]} />

    <RenderAccordion
    summary= "Delivery" go={go} details={[
      {'Förnamn': firstNameDelivery},
      {'Efternamn': lastNameDelivery},
      {'Address': address},
      {'Stad': city},
      {'Postnummer': zip},
      {'Nummer': phone},
    ]} />

    <RenderAccordion
    summary= "Payment" go={go} details={[
      {'Kort namn' : cardName},
      {'Kortnummer': cardNumber},
      {'MM/ÅÅ' : cardExpireDate},
      {'CVV/CVC' : cardCVV}
    ]} />
   
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
