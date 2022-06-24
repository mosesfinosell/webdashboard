import "./home.css";
import styled from "styled-components"

import greenSpring from "../assets/green-spring.svg";
import atm from "../assets/atm.svg";

import jummy from "../assets/jummy.svg";
import charge from "../assets/charge.svg";
import bless from "../assets/bless.svg";

import { Text, Image, Button } from "@chakra-ui/react";
import {PrimaryTitle, PrimaryButton} from "../Styles"
import {TopSection, ProductSection, ProductSectionImg, ProductSectionContent, YellowParagraph, List} from "../Styles/productStyles"


function Business() {
    
  return (
    <>
        <TopSection>
          <PrimaryTitle>Finosell for Business</PrimaryTitle>
        </TopSection>
        <ManageSection className="reverse">
          <ProductSectionImg>
            <Image src={greenSpring} alt="swing" />
          </ProductSectionImg>
          <ProductSectionContent>
            <PrimaryTitle>
              Manage and track your transactions on the go
            </PrimaryTitle>
            <YellowParagraph>
              We provide sales management solutions that help you manage sales,
              expenses, debts, and invoices seamlessly.
            </YellowParagraph>
            <List>
              <li className="easily">
                Easily manage products, customer orders, and track deliveries
              </li>
              <li className="easily">
                Record business transactions on a daily, weekly and monthly basis
              </li>
              <li className="easily"> Send invoices and get paid</li>
              <li className="easily"> Sell more online with a free website.</li>
            </List>
            
              <PrimaryButton>Sign up and track</PrimaryButton>
            
          </ProductSectionContent>
          
        </ManageSection>
        <DigitalCard >
          <ProductSectionImg>
            <Image src={atm} alt="atm" />
          </ProductSectionImg>
          <ProductSectionContent>
            <PrimaryTitle>
              A digital card for online payments at your fingertips
            </PrimaryTitle>
            <YellowParagraph>
              Make payment online without a physical debit or credit card. Our
              virtual dollar card provides secure and flexible payments on all
              your favorite channels such as online shopping, subscriptions, and
              bill payments across borders.
            </YellowParagraph>
            <List>
              <li className="easily">Easily create a virtual card</li>
              <li className="easily"> Pay subscriptions and bills in seconds</li>
              <li className="easily"> Place thousands of Ads</li>
              <li className="easily"> No hidden transaction fees</li>
            </List>
            
              <PrimaryButton>Create an account</PrimaryButton>
            
          </ProductSectionContent>
        </DigitalCard>
        <RiskFree className="reverse">
          <ProductSectionImg>
            <Image src={jummy} alt="atm" />
          </ProductSectionImg>
          <ProductSectionContent>
            <PrimaryTitle>
              Enjoy risk-free transactions with Escrow
            </PrimaryTitle>
            <YellowParagraph>
              Escrow protects buyers and sellers by temporarily holding money in a
              trusted account and allows payment to be made after goods and
              services have been received in good condition.
            </YellowParagraph>
            <List>
              <li className="easily">Buyer and seller agree on terms</li>
              <li className="easily">The buyer makes payment to escrow</li>
              <li className="easily">Buyer approves purchase</li>
              <li className="easily"> Escrow makes payment to the seller</li>
            </List>
            
              <PrimaryButton>Get started</PrimaryButton>
            
          </ProductSectionContent>
          
        </RiskFree>
        <Unique >
          <ProductSectionImg>
            <Image src={charge} alt="hanger" />
          </ProductSectionImg>
          <ProductSectionContent>
            <PrimaryTitle>
              One unique payment link, multiple payment options
            </PrimaryTitle>
            <Text className="debit">
              Accept payments, make transfers, and accelerate your business with
              Finosell
            </Text>
            <List>
              <li className="easily">Generate a unique payment link</li>
              <li className="easily">
                Provide multiple payment options for your customers
              </li>
              <li className="easily">
                Streamlined one page checkout for seamless shopping experience.
              </li>
            </List>
            
            <PrimaryButton>Create an account</PrimaryButton>
          </ProductSectionContent>
        </Unique>
        <TeamSection className="reverse">
          <ProductSectionImg>
            <Image src={bless} alt="names" />
          </ProductSectionImg>
          <ProductSectionContent>
            <PrimaryTitle>Bring your team members on board</PrimaryTitle>
            <YellowParagraph>
              Team members can receive payment notifications and manage the
              business account and perform all sales operations.
            </YellowParagraph>
            <List>
              <li className="easily">
                Real time payment notification for team members
              </li>
            </List>
            
              <PrimaryButton>Get on board</PrimaryButton>
            
          </ProductSectionContent>
        </TeamSection>
    </>
  );
}

export default Business;




const ManageSection = styled(ProductSection)`
   
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
    
  }
`
const DigitalCard = styled(ProductSection)`
  margin-bottom:${0.063 * 100}rem;

  @media only screen and (min-width: 768px){
    margin-bottom:${0.063 * 200}rem;
  }
`

const RiskFree = styled(ProductSection)`
  

  @media only screen and (min-width:768){
    margin-bottom: ${0.063 * 257}rem;
  }
`
const Unique = styled(ProductSection)`

  @media only screen and (min-width: 768px){

  }
`
const TeamSection = styled(ProductSection)`

`
