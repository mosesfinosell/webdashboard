import React, { useState } from "react";
import "./home.css";
import Logomark from "../assets/Logomark.svg";
import { Text, Image, Button } from "@chakra-ui/react";
import Buffer from "../assets/Buffer.svg";
import flutter from "../assets/flutter.svg";
import paystack from "../assets/paystack.svg";
import mono from "../assets/monu.svg";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import woman from "../assets/smilingwoman.svg";
import invoices from "../assets/invoices.svg";
import record from "../assets/record.svg";
import track from "../assets/track.svg";
import notification from "../assets/notification.svg";
import virtual from "../assets/virtual.svg";
import hanger from "../assets/hanger.svg";
import locator from "../assets/locator.svg";
import tick from "../assets/tick.svg";
import lock from "../assets/lock.svg";
import circ from "../assets/circ.svg";
import trash from "../assets/trash.svg";
import mac from "../assets/mac.svg";

import cases from "../assets/case.svg";
import clock from "../assets/clock.svg";
import produp from "../assets/produp.svg";
import payment from "../assets/payment.svg";
import { useColorModeValue } from "@chakra-ui/color-mode";

import styled from "styled-components"
import {primaryTitle} from '../utils/styles'

// import { faBars } from "@fortawesome/free-regular-svg-icons";
function Home() {
  
  const yellowbtn = useColorModeValue("yellow.500");
  return (
    <React.Fragment>
      <Banner>
        
          <div className="banner-1">
            <div className="banner-holder">
              <DarkHeader>
                Manage all your
                finance and business in one place
              </DarkHeader>
              <Text className="abt-fin">
                A financial and business management App for business owners and
                individuals.
              </Text>
            </div>

            <div class="save">
              <Text id="free">Try Finosell for free</Text>
            </div>
            <div className="socially">
              <div className="flutter">
                <Image src={flutter} alt="flutter" />
              </div>
              <div className="paystack">
                <Image src={paystack} alt="paystack" />
              </div>
              <div className="mono">
                <Image src={mono} alt="mono" />
              </div>
            </div>
            <div className="download">
              <div className="download__btn">
                <Image src={google} alt="google" />
              </div>
              <div className="download__btn">
                <Image src={apple} alt="apple" className="apps" />
              </div>
            </div>
          </div>
          <div className="banner-2">
            <Image src={Buffer} alt="buffer" />
          </div>
        
      </Banner>
      <Section2 className="section-2">
        <div className="business">
          <div>
            <Text className="business-text">
              Run and grow a business you’re proud of
            </Text>
          </div>
          <div className="business-cover">
            <div className="business-div">
              <Image src={invoices} alt="invoice" />
              <Text className="invoice">
                Send invoices on the go and get paid
              </Text>
            </div>
            <div className="business-div">
              <Image src={virtual} alt="virtual" />
              <Text className="invoice">
                {" "}
                Virtual card to pay for shipping and ads promotion
              </Text>
            </div>
            <div className="business-div">
              <Image src={notification} alt="notification" />
              <Text className="invoice">
                {" "}
                Real time payment notification for team members
              </Text>
            </div>
            <div className="business-div">
              <Image src={track} alt="track" />
              <Text className="invoice">
                Easily manage products, customer orders, and track deliveries
              </Text>
            </div>
            <div className="business-div">
              <Image src={record} alt="record" />
              <Text className="invoice">
                Record business transactions on a daily, weekly and monthly
                basis.
              </Text>
            </div>
          </div>
          <div id="saleDiv">
            <Text className="sales">Increase sales with Finosell</Text>
          </div>
        </div>
        <div className="business-pic">
          <Image src={woman} alt="woman" className="woman" />
        </div>
      </Section2>
      <section className="section-3">
        <div className="hanger">
          <Image src={hanger} alt="hanger" />
        </div>

        <div className="unique-div">
          <Text className="unique">
            One unique payment link, multiple payment options.
          </Text>
          <div className="paylink-div">
            <Text className="paylink">Create a payment link</Text>
          </div>
        </div>
      </section>
      <section className="section-5">
        <div className="section-5-hanger">
          <div className="sell-holder">
            <Text className="sell-more">
              Sell more online with a free website
            </Text>
          </div>
          <div>
            <div className="clock">
              {" "}
              <Image src={clock} alt="clock" />
              <Text className="website">
                Set up your own website in 5 minutes.
              </Text>
            </div>
            <div className="produp">
              <Image src={produp} alt="upload" />
              <Text className="website">Upload products to store</Text>
            </div>
            <div className="produps">
              <Image src={payment} alt="payment" />
              <Text className="website">
                Receive orders & payments easily from website
              </Text>
            </div>
            <div className="create-web">
              <Text className="sales">Create website</Text>
            </div>
          </div>
        </div>

        <div className="section5-right">
          <Image src={mac} alt="mac" className="mac" />
        </div>
      </section>
      <section className="section-4">
        <Text className="sellers">Find trusted sellers in your area.</Text>
        <div className="locate-top">
          <div className="locator">
            <div className="rec">
              <Image src={locator} alt="rec" />
            </div>

            <Text className="locate">
              Securely locate and patronise your favourite social media business
              via their business handles
            </Text>
          </div>
          <div className="locator">
            <div className="rec">
              <Image src={tick} alt="rec" />
            </div>

            <Text className="locate">
              Guaranteed payment and refund with Escrow
            </Text>
          </div>
          <div className="locator">
            <div className="rec">
              <Image src={lock} alt="rec" />
            </div>

            <Text className="locate">Lock payment securely till delivery</Text>
          </div>
        </div>
        <div className="locate-bottom">
          <div className="locator" style={{ marginRight: "3rem" }}>
            <div className="rec">
              <Image src={circ} alt="rec" />
            </div>

            <Text className="locate">
              Search for specific brands, product offerings and discounted
              prices
            </Text>
          </div>
          <div className="locator">
            <div className="rec">
              <Image src={trash} alt="rec" />
            </div>

            <Text className="locate">
              Streamlined one page checkout for seamless shopping experience
            </Text>
          </div>
        </div>
        <div className="locator-btn">
          <Button
            className="add-store"
            mt={4}
            bg={yellowbtn}
            width="40%"
            h="60px"
            borderRadius="0px 11px 11px 11px"
            type="submit"
            color="white"
            _hover={{ bg: "#1A202C" }}
          >
            Create a free account in a minute
          </Button>
        </div>
      </section>
      <section className="section-6">
        <div className="customers">
          <Text className="love">
            You will love us the same way our customers do
          </Text>
          <Text className="updates">
            Be the first to get our financial and business updates
          </Text>
          <div>
            <form>
              <input type="email" placeholder="Enter your email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
        {/* <div></div> */}
        <div className="case-div">
          <Image src={cases} alt="case" />
        </div>
      </section>
      <Text className="sellers" style={{ paddingTop: "5rem" }}>
        Questions?
      </Text>
      <Text className="faq" style={{ paddingTop: "1rem" }}>
        Check out our FAQ page
      </Text>
      
    </React.Fragment>
  );
}

export default Home;

const DarkHeader = styled(primaryTitle)`
  color: #273B4A;
  width: 100%;
  margin-bottom: ${10*0.063}rem;
  @media only screen and (min-width: 768px){
    width: ${554 * 0.063}rem;
    margin-bottom: ${20*0.063}rem
  }
`

const Banner = styled.section`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  .download{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${22*0.063}rem;
  }
  .download__btn{
    margin: ${8*0.063}rem;
  }
  @media only screen and (min-width: 768px){
    flex-direction: row;
    justify-content: space-between;
    .download{
      flex-direction: row;
      justify-content: flex-start;
      margin-top: ${44*0.063}rem;
    }
  }
`

const Section2 = styled(Banner)`
  flex-direction: column-reverse;
  background-color: #273b4a;
  justify-content: space-between;
  margin-top: ${0.063*91}rem;
  @media only screen and (min-width: 768px){
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${0.063*142}rem;
  }
`