import React from "react";
import ReactDOM from "react-dom";
// import { AuthContext } from "./routes";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// import Join from "./Join.js";
// import Login from "./Signin.js";
// import Header from "./header.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLock} from '@fortawesome/free-brands-svg-icons'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,NavLink,Container,Row,Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

import { Button } from 'react-bootstrap';
// import Routes from "./routes.js";
import { Link } from 'react-router-dom'
import  { useState, useContext } from "react";
// import Logindash from "../dashboard/dashboard.js";
// import * as firebase from "firebase";
// import moile from './moile.jpg'
// import checker from './checker.jpg'
// import firebaseConfig from "../../firebase.config";


class About extends React.Component{
  documentData;
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  componentDidMount() {
    document.title = "How finosell works"
  }
render(){
  return (
    <div className="App">
      <header className="App-header">
    {/* <Header /> */}
    </header>
    <div style={{}} className="ng1">
      <h4 style={{color:`#2D4252`,textAlign:`center`}} className="headab">HOW FINOSELL WORKS.</h4>
     
      <p  className="rowr" style={{marginTop:`30px`}}> 
     
<Container  fluid>
<Row>
  
  <Col md={6} style={{}}>
  <div style={{fontSize:`30px`,fontWeight:`bolder`}}>Our responsibility at Finosell is to protect you 
     against scams when buying or selling online.</div>
  </Col>
  
  
  <Col style={{padding:'0px'}}md={6}>

  {/* <FontAwesomeIcon className ='font-awesome' icon={faLock} color="gray" size="2x"/> */}
    </Col>
    </Row>
    </Container>
     

  A twitter user with the username @billionaireebb tweeted recently, she said:
 
The fear of engaging in online transactions is apparent as the level of scam continues to increase. With Finosell, you can help us keep the online marketplace safe and free of scammers. No one else has to be a victim of fake retailers or bad customers. Here is how Finosell works:
1.	Finosell allows buyers to safely lock away their purchase funds pending the safe delivery of the goods they ordered.
To secure your purchase funds on Finosell; click on Add Fund on your Dashboard. It will then take you the page where you can Fund your wallet. Add card and Enter your desired Amount. 
 





 
Note that you can also use the funds in your wallet to buy airtime and data at a cheaper rate.
2.	After adding funds to your Finosell wallet, you are ready to initiate a transaction. When you click on Orderunder services on your dashboard, it will take you to a page where you enter the details of your transaction. The information required are:
i.	The phone number of your seller. 
ii.	The details of the transaction (e.g. the name of the product)
If your seller is not yet registered, the application will generate a link you can copy and send to the other person.
Onceyour seller is registered, you can continue the transaction by providing the required information which are:
i.	The Amount, 
ii.	product name
iii.	delivery fee. (If delivery is free, enter ‘0’)
 
 


A notification will be sent to the seller to accept the trade or reject the trade. 
 
To monitor the process of the transaction, click on the “Deals icon” at the bottom of the page:
 
 
After the seller Accepts the trade, the seller is required to click on the DELIVER button only when the delivery is made.
 
To confirm the delivery is made, the application generates a unique 6-digit delivery code for the buyer. The seller should request for this code upon delivery so as to verify that the product indeed has been delivered.
 

After the seller has verified delivery, the buyer gets to Accept the product or reject the product. 
 

If you are satisfied with the delivery, click on Accept and Received. You are then prompted to leave a review about the seller. This is to boost the seller’s credibility.
 
If what you ordered for is not what was delivered, you can reject the delivery. And upload the picture of what you ordered and what was delivered as proof.
 


When you return the product to the seller, request for the return code from the seller to get your money back.
 
It’s Easy, Fast, Safe, and Secured. 
With Finosell, no buyer will ever lose money to a fake online retailer
And no seller will ever lose money to unserious buyers.
The Seller gets paid immediately the buyer confirms the package has been received. 
For all these, Finosell deductsa 5% charge per transaction. Your security is important to us, and we will keep ensuring the online marketplace is safe.
You can watch our explainer video here or send a message to support@finosell.com
Join our growing community of online shoppers who use Finosell here.

</p>
      </div>
      {/* <div className="ng2">
    {/* <p style={{color:`#2D4252`,textAlign:`center`}}> Mobile First</p> */}
    {/* <a href="https://play.google.com/store/apps/details?id=org.blessedmedia.www.maxpay&hl=en" target="_blank" >  <Button className="float-right btn-lg" style={{marginRight:`470px`,backgroundColor:`#2D4252` ,borderColor:`#2D4252`,marginTop:`170px`}}>Download on Playstore</Button></a>
   
   
    </div> */}
    {/* <div className="ng2">
    <p style={{color:`white`,textAlign:`right`,paddingLeft:`450px`,paddingTop:`200px`,paddingRight:`250px`}}>

How does it work?
FINOSELL allows buyers to safely lock away their payment on the app. Locking away your money shows the seller you are a serious buyer. And the money is sent to your seller only when you have confirmed safe delivery of the product you ordered.
</p>
    
    
    </div> */}
{/* <p style={{color:`#2D4252`,textAlign:`center`,padding:`100px`,height:`300px`,margin:`50px`}}>
FINOSELL supports payment with MASTERCARD and VISA CARD. It is available on Android and can be accessed through Web application. 
FINOSELL provides fast, easy and secured online transactions.
Additional Services
Other services we offer include; buying of airtime and data, utility service payment such as GoTV subscription. There will be more services added soon, and the services are aimed at helping SMEs.
</p> */}

 
<div style={{}} className="bg1">


<Container>
  
  <Row>
  <Col md={4}>
    <h5>About us</h5>
   <ul style={{listStyleType:`square`}}>
     <li><a href="/about">About</a></li>
     
   </ul>
  </Col>
  <Col md={4}>
    
    <h5>Resources</h5>
   <ul style={{listStyleType:`square`}}>
     <li><a href="/faq">FAQ</a></li>
     <li><a href="/about">How it works</a></li>
     <li><a href="https://play.google.com/store/apps/details?id=org.blessedmedia.www.maxpay&hl=en" target="_blank" >Download <b>Android app</b> </a></li>
   </ul>
      </Col>
      <Col md={4}> 
    
    <h5>Contact us</h5>
   <ul style={{listStyleType:`square`}}>
     <li>support@finosell.com</li>
   </ul>
   
      </Col>
  </Row>
</Container>


 </div>

</div>
);
}
}

export default About;
