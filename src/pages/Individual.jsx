import React from "react";
import "./home.css";
import swing from "../assets/swing.svg";
import atm from "../assets/atm.svg";
import jummy from "../assets/jummy.svg";
import finance from "../assets/finance.svg";

import { Text, Image } from "@chakra-ui/react";
import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer"

import {AppContainer, PrimaryTitle, PrimaryButton} from "../Styles"
import {TopSection, ProductSection, ProductSectionImg, ProductSectionContent, YellowParagraph, List} from "../Styles/productStyles"

function Individual() {
    
  return (
    <>
      <Header />
      <AppContainer>
      <TopSection>
        <PrimaryTitle>Finosell for Individuals</PrimaryTitle>
      </TopSection>
      <ProductSection className="reverse">
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
      </ProductSection>
      <ProductSection>
        <ProductSectionImg>
          <Image src={swing} alt="swing" />
        </ProductSectionImg>
        <ProductSectionContent>
          <PrimaryTitle>
            Get connected to verified businesses around you
          </PrimaryTitle>
          <YellowParagraph>
            Shop from verified businesses around you and get access to the best
            deals in town.
          </YellowParagraph>
          <List>
            <li className="easily">
              Securely locate and patronise your favourite social media business
              via their business handles
            </li>
            <li className="easily">
              Search for specific brands, product offerings and discounted
              prices
            </li>
            <li className="easily"> Find trusted sellers in your area.</li>
          </List>
          
            <PrimaryButton>Shop now</PrimaryButton>
          
        </ProductSectionContent>
      </ProductSection>
      <ProductSection className="reverse">
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
      </ProductSection>
      <ProductSection>
        <ProductSectionImg>
          <Image src={finance} alt="finance" />
        </ProductSectionImg>
        <ProductSectionContent>
          <PrimaryTitle>Manage your finances all in one place</PrimaryTitle>
          <YellowParagraph>
            Our management tools allow you to keep track of all your income,
            expenses, debts, and budget according to your needs.
          </YellowParagraph>
          <List>
            <li className="easily">
              A complete and up-to-date view of your finances at any time
            </li>
            <li className="easily"> Learn to spend smarter and save more</li>
            <li className="easily">
              Keep your spending habits on track with custom goals.
            </li>
          </List>
          
          <PrimaryButton>Get Finosell</PrimaryButton>
          
        </ProductSectionContent>
      </ProductSection>
     </AppContainer>
     <Footer />
    </>
  );
}

export default Individual;
