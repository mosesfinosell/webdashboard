import React from "react";
import ReactDOM from "react-dom";
// import { AuthContext } from "./routes";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// import Join from "./Join.js";
// import Login from "./Signin.js";
// import Header from "./header.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,NavLink,Container,Row,Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

import { Button } from 'react-bootstrap';
// import Routes from "./routes.js";
import { Link } from 'react-router-dom'
import  { useState, useContext } from "react";
// import Logindash from "../dashboard/dashboard.js";
// import * as firebase from "firebase";
// import check from './check.jpg'
// import back23 from './back23.jpg'
// import firebaseConfig from "../../firebase.config";




function Home() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
    {/* <Header /> */}
    {/* </header>  */}
    <div style={{height:'500px', backgroundPosition: `bottom right`, backgroundSize:'cover', width: '100%'}}>
    
    <Container>
  
  <Row>
    <Col md={6}>
  <h1 className="grow" style={{}}>
SHOP SAFELY & GROW YOUR BUSINESS
</h1>
  <p className="grow1" style={{}}><i>Online shopping security app</i></p>
  
  </Col>
    <Col md={6}> <a href="/getstarted" ><Button className="float-right btn-lg getstarted" style={{}}>Get started</Button></a>
   </Col>
  </Row>
</Container>
    {/* <Button className="float-right" style={{marginRight:`170px`}}>Get started</Button> */}
   
    </div>
<div className="bg5" style={{}}>
  <h1 className="head" style={{}}>WE PROTECT YOU FROM FAKE ONLINE RETAILERS</h1>
  <Container   >
  
  <Row>
    <Col md={4}>
    <div style={{padding:`10px`,marginBottom:`30px`,borderRadius:`10px`,height:`300px`,width:`300px`,backgroundColor:`#ffffff`}}>
<p style={{fontSize:`20px`,width:`280px`}}>Lock Your Purchase Funds Away</p>
<p style={{fontSize:`15px`}}><b>Join our growing community of smart online shoppers who use FINOSELL to ensure they only pay for exactly what they order for.</b></p>

<a href="https://t.me/finosell"><Button className=" " style={{backgroundColor:`#2D4252` ,borderColor:`#2D4252`,marginTop:`0px`}}>Join community</Button></a>
 
    </div>

  </Col>
  <Col md={4}>
  <div style={{padding:`10px`,marginBottom:`30px`,borderRadius:`10px`,height:`300px`,width:`300px`,backgroundColor:`#ffffff`,}}>
<p style={{fontSize:`20px`,width:`280px`}}>Grow Your Business With Us</p>
<p style={{fontSize:`15px`}}><b>Increase your business credibility when you use FINOSELL. Also invite your customers to FINOSELL and enjoy free recharge coupons.</b></p>
<a href="https://t.me/finosell"><Button className=" " style={{backgroundColor:`#2D4252` ,borderColor:`#2D4252`,marginTop:`20px`}}>Join community </Button></a>
  
</div>
  </Col>
  <Col md={4}>
    <div style={{padding:`10px`,marginBottom:`30px`,borderRadius:`10px`,height:`300px`,width:`300px`,backgroundColor:`#ffffff`,}}>
<p style={{fontSize:`20px`,width:`280px`}}>Buy Cheap Airtime, Data & Cable TV Subscription</p>
<p style={{fontSize:`15px`}}><b>Enjoy our cheap offers on Airtime purchases, as well as Data . It’s fast, reliable and easy.</b></p>
<a href="https://t.me/finosell"><Button className=" " style={{backgroundColor:`#2D4252` ,borderColor:`#2D4252`,marginTop:`20px`}}>Learn more </Button></a>
 
    </div> 

   </Col>
  </Row>
</Container>


  {/* hee */}

</div>

<div style={{paddingTop:`50px`,paddingBottom:`50px`,
height:`500px`}}>
<div  className="bg3" style={{ padding:`30px`}}>
<h1 style={{}}>PCI complaince</h1>
<h5>How safe is your money?</h5>
<p>Finosell uses renowned payment processing company paystack to securely charge cards <br/> paystack PCI compliances is the highest level security certified and accredited by Central Bank of Nigeria</p>
</div>
</div>

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
     <li><a href="https://play.google.com/store/apps/details?id=com.finosell.www.finosell" target="_blank" >Download <b>Android app</b> </a></li>
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

export default Home;
