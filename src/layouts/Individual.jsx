import React from "react";
import "./home.css";
import swing from "../assets/swing.svg";
import atm from "../assets/atm.svg";
import jummy from "../assets/jummy.svg";
import finance from "../assets/finance.svg";

import { Text, Image } from "@chakra-ui/react";

function Individual() {
    
  return (
    <>
     
      <section className="ind">
        <Text className="fin-ind">Finosell for Individuals</Text>
      </section>
      <section className="card-sec">
        <div className="atm-div">
          <Image src={atm} alt="atm" />
        </div>
        <div className="atm-right">
          <Text className="digits">
            A digital card for online payments at your fingertips
          </Text>
          <Text className="debit">
            Make payment online without a physical debit or credit card. Our
            virtual dollar card provides secure and flexible payments on all
            your favorite channels such as online shopping, subscriptions, and
            bill payments across borders.
          </Text>
          <ul className="list">
            <li className="easily">Easily create a virtual card</li>
            <li className="easily"> Pay subscriptions and bills in seconds</li>
            <li className="easily"> Place thousands of Ads</li>
            <li className="easily"> No hidden transaction fees</li>
          </ul>
          <div id="saleDiv">
            <Text className="sales">Create an account</Text>
          </div>
        </div>
      </section>
      <section className="card-sec">
        <div>
          <Text className="digits">
            Get connected to verified businesses around you
          </Text>
          <Text className="debit">
            Shop from verified businesses around you and get access to the best
            deals in town.
          </Text>
          <ul className="list">
            <li className="easily">
              Securely locate and patronise your favourite social media business
              via their business handles
            </li>
            <li className="easily">
              {" "}
              Search for specific brands, product offerings and discounted
              prices
            </li>
            <li className="easily"> Find trusted sellers in your area.</li>
          </ul>
          <div className="shop-now">
            <Text className="sales">Shop now</Text>
          </div>
        </div>
        <div className="atm-div">
          <Image src={swing} alt="swing" />
        </div>
      </section>
      <section className="card-sec">
        <div className="atm-div">
          <Image src={jummy} alt="atm" />
        </div>
        <div className="atm-right">
          <Text className="digits">
            Enjoy risk-free transactions with Escrow
          </Text>
          <Text className="debit">
            Escrow protects buyers and sellers by temporarily holding money in a
            trusted account and allows payment to be made after goods and
            services have been received in good condition.
          </Text>
          <ul className="list">
            <li className="easily">Buyer and seller agree on terms</li>
            <li className="easily">The buyer makes payment to escrow</li>
            <li className="easily">Buyer approves purchase</li>
            <li className="easily"> Escrow makes payment to the seller</li>
          </ul>
          <div id="saleDiv" style={{marginTop:'1.5rem'}}>
            <Text className="sales">Get started</Text>
          </div>
        </div>
      </section>
      <section className="card-sec">
        <div>
          <Text className="digits">Manage your finances all in one place</Text>
          <Text className="debit">
            Our management tools allow you to keep track of all your income,
            expenses, debts, and budget according to your needs.
          </Text>
          <ul className="list">
            <li className="easily">
              A complete and up-to-date view of your finances at any time
            </li>
            <li className="easily"> Learn to spend smarter and save more</li>
            <li className="easily">
              Keep your spending habits on track with custom goals.
            </li>
          </ul>
          <div id="saleDiv" style={{marginTop:'1.5rem'}}>
            <Text className="sales">Get Finosell</Text>
          </div>
        </div>
        <div className="atm-div">
          <Image src={finance} alt="finance" />
        </div>
      </section>
     
    </>
  );
}

export default Individual;
