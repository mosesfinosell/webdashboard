import React from "react";
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
import webapp from "../assets/webapp.svg";
import googlesmall from "../assets/googlesmall.svg";
import applestore from "../assets/applestore.svg";
import cases from "../assets/case.svg";
import clock from "../assets/clock.svg";
import produp from "../assets/produp.svg";
import payment from "../assets/payment.svg";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Home() {
  const yellowbtn = useColorModeValue("yellow.500");
  return (
    <React.Fragment>
      <header>
        <a href="#" className="logos">
          <Image src={Logomark} alt="logo" />
        </a>
        <input id="menu-bar" type="checkbox" />

        <label for="menu-bar" class="checkbtn">
          <FontAwesomeIcon icon={faBars} className="socials" />
        </label>
        <nav className="navcheck">
          <a href="#features">About</a>
          <a href="#latest">Products</a>
          <a href="#review">Pricing</a>
          <a href="#contact">Help</a>
          <a href="#contact">Blog</a>
          <a id="login" href="#login">
            Log in
          </a>
          <a id="register" href="#register">
            Create Account
          </a>
        </nav>
      </header>

      <section className="banner">
        <div className="inner-bckground">
          <div class="banner-1">
              <div className="banner-holder">
              <Text className="bold-desc">
              Manage all your <br />
              finance and business in one place
            </Text>
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
                {" "}
                <Image src={flutter} alt="flutter" />
              </div>

              <div className="paystack">
                <Image src={paystack} alt="paystack" />
              </div>
              <div className="mono">
                <Image src={mono} alt="mono" />
              </div>
            </div>
            <div className="downloads">
              <div>
                <Image src={google} alt="google" />
              </div>
              <div>
                <Image src={apple} alt="apple" className="apps" />
              </div>
            </div>
          </div>
          <div className="banner-2">
            <Image src={Buffer} alt="buffer" />
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="business">
          <div>
            {" "}
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
      </section>
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
      <div class="foot">
        <div class="foot-divider">
          <div class="foot-1">
            <Image src={Logomark} alt="logo" />
            <div class="infos">
              <div class="icon-desc">
                <Image src={applestore} alt="logo" />
              </div>
            </div>
            <div class="infos">
              <div class="icon-desc">
                <Image src={googlesmall} alt="logo" />
              </div>
            </div>
            <div class="infos">
              <div class="icon-desc">
                <Image src={webapp} alt="logo" />
              </div>
            </div>
          </div>
          <div class="foot-2">
            <div class="box">
              <Text className="company">Company</Text>
              <Text className="abt">About</Text>
              <Text className="abt">Blog</Text>
              <Text className="abt">FAQ</Text>
              <Text className="abt">Help</Text>
              <Text className="abt">Handles</Text>
            </div>
          </div>
          <div class="foot-2">
            <div class="box">
              <Text className="company">Products</Text>
              <Text className="abt">Business Management</Text>
              <Text className="abt">Payments</Text>
              <Text className="abt">Escrow</Text>
            </div>
          </div>

          <div class="foot-2">
            <div class="box">
              <Text className="company">Legal</Text>
              <Text className="abt">Terms and Conditions</Text>
              <Text className="abt">Privacy Policy</Text>
            </div>
          </div>

          <div class="foot-2">
            <div class="box">
              <div className="footer-social">
                {" "}
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{
                    background: "#FDF9ED",
                    borderRadius: "0px 11px 11px 11px",
                  }}
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{
                    background: "#FDF9ED",
                    borderRadius: "0px 11px 11px 11px",
                  }}
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{
                    background: "#FDF9ED",
                    borderRadius: "0px 11px 11px 11px",
                  }}
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{
                    background: "#FDF9ED",
                    borderRadius: "0px 11px 11px 11px",
                  }}
                />
              </div>
              <Text className="abt">support@finosell.com</Text>
              <Text className="abt">+234 - XXXX - XXXX</Text>
            </div>
          </div>
        </div>
      </div>
      <Text className="copyright-text">
        &copy;2022 Finosell Limited. All rights reserved
      </Text>
    </React.Fragment>
  );
}

export default Home;
