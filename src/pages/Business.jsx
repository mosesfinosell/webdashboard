import "./home.css";
import styled from "styled-components"

import greenSpring from "../assets/green-spring.svg";
import atm from "../assets/atm.svg";

import jummy from "../assets/jummy.svg";
import charge from "../assets/charge.svg";
import bless from "../assets/bless.svg";

import { Text, Image, Button } from "@chakra-ui/react";
import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer"
import {AppContainer, PrimarySection, PrimaryTitle, PrimaryParagraph, PrimaryButton} from "../Styles"


function Business() {
    
  return (
    <>
      <Header />
      <AppContainer>
        <BusinessTop>
          <PrimaryTitle>Finosell for Business</PrimaryTitle>
        </BusinessTop>
        <ManageSection>
          <div className="atm-div">
            <Image src={greenSpring} alt="swing" />
          </div>
          <div className="manage__content">
            <PrimaryTitle>
              Manage and track your transactions on the go
            </PrimaryTitle>
            <YellowParagraph>
              We provide sales management solutions that help you manage sales,
              expenses, debts, and invoices seamlessly.
            </YellowParagraph>
            <ul className="list">
              <li className="easily">
                Easily manage products, customer orders, and track deliveries
              </li>
              <li className="easily">
                Record business transactions on a daily, weekly and monthly basis
              </li>
              <li className="easily"> Send invoices and get paid</li>
              <li className="easily"> Sell more online with a free website.</li>
            </ul>
            
              <PrimaryButton>Sign up and track</PrimaryButton>
            
          </div>
          
        </ManageSection>
        <DigitalCard>
          <div className="atm-div">
            <Image src={atm} alt="atm" />
          </div>
          <div className="atm-right">
            <PrimaryTitle>
              A digital card for online payments at your fingertips
            </PrimaryTitle>
            <YellowParagraph>
              Make payment online without a physical debit or credit card. Our
              virtual dollar card provides secure and flexible payments on all
              your favorite channels such as online shopping, subscriptions, and
              bill payments across borders.
            </YellowParagraph>
            <ul className="list">
              <li className="easily">Easily create a virtual card</li>
              <li className="easily"> Pay subscriptions and bills in seconds</li>
              <li className="easily"> Place thousands of Ads</li>
              <li className="easily"> No hidden transaction fees</li>
            </ul>
            
              <PrimaryButton>Create an account</PrimaryButton>
            
          </div>
        </DigitalCard>
        <RiskFree>
          <div className="atm-right">
            <PrimaryTitle>
              Enjoy risk-free transactions with Escrow
            </PrimaryTitle>
            <YellowParagraph>
              Escrow protects buyers and sellers by temporarily holding money in a
              trusted account and allows payment to be made after goods and
              services have been received in good condition.
            </YellowParagraph>
            <ul className="list">
              <li className="easily">Buyer and seller agree on terms</li>
              <li className="easily">The buyer makes payment to escrow</li>
              <li className="easily">Buyer approves purchase</li>
              <li className="easily"> Escrow makes payment to the seller</li>
            </ul>
            
              <PrimaryButton>Get started</PrimaryButton>
            
          </div>
          <div className="atm-div">
            <Image src={jummy} alt="atm" />
          </div>
        </RiskFree>
        <PrimarySection>
          <div className="atm-div">
            <Image src={charge} alt="hanger" />
          </div>
          <div className="atm-right">
            <PrimaryTitle>
              One unique payment link, multiple payment options
            </PrimaryTitle>
            <Text className="debit">
              Accept payments, make transfers, and accelerate your business with
              Finosell
            </Text>
            <ul className="list">
              <li className="easily">Generate a unique payment link</li>
              <li className="easily">
                Provide multiple payment options for your customers
              </li>
              <li className="easily">
                Streamlined one page checkout for seamless shopping experience.
              </li>
            </ul>
            <div id="saleDiv">
              <PrimaryButton>Create an account</PrimaryButton>
            </div>
          </div>
        </PrimarySection>
        <PrimarySection>
          <div>
            <PrimaryTitle>Bring your team members on board</PrimaryTitle>
            <YellowParagraph>
              Team members can receive payment notifications and manage the
              business account and perform all sales operations.
            </YellowParagraph>
            <ul className="list">
              <li className="easily">
                Real time payment notification for team members
              </li>
            </ul>
            
              <PrimaryButton>Get on board</PrimaryButton>
            
          </div>
          <div className="atm-div">
            <Image src={bless} alt="names" />
          </div>
        </PrimarySection>
      </AppContainer>
      <Footer />
    </>
  );
}

export default Business;

const BusinessTop = styled(PrimarySection)`
  margin-bottom: ${100 * 0.063}rem;
  @media only screen and (min-width: 768px){
    margin-bottom: ${178 * 0.063}rem;
  }
`
const ManageSection = styled(PrimarySection)`
  
  ul{
    margin-bottom: ${0.063 * 20}rem;
  }
  .atm-div{
    margin-bottom: ${60 * 0.063}rem
  }
  @media only screen and (min-width: 768px){
    display: flex;
    flex-direction: row-reverse;

    .atm-div{
      flex-grow: 1;
    }
    .manage__content{
      width: ${736 * 0.063}rem;
    }
  }
`
const DigitalCard = styled(PrimarySection)`
  margin-bottom:${0.063 * 100}rem;

  @media only screen and (min-width: 768px){
    margin-bottom:${0.063 * 200}rem;
  }
`

const RiskFree = styled(PrimarySection)`
  margin-bottom: ${100 * 0.063}rem;

  @media only screen and (min-width:768){
    margin-bottom: ${0.063 * 257}rem;
  }
`
const unique = styled(PrimarySection)`

`
const YellowParagraph = styled(PrimaryParagraph)`
  font-weight: 700;
  color: #D6AA1B;
  line-height: ${23 * 0.063}rem;
  font-size: ${18 * 0.063}rem;
`