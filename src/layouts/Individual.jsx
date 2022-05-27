import React,{useState} from "react";
import "./home.css";
import Logomark from "../assets/Logomark.svg";
import swing from "../assets/swing.svg";
import atm from "../assets/atm.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import webapp from "../assets/webapp.svg";
import googlesmall from "../assets/googlesmall.svg";
import applestore from "../assets/applestore.svg";
import jummy from "../assets/jummy.svg";
import finance from "../assets/finance.svg";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
    faBars,
    faCaretUp,
    faCaretDown,
  } from "@fortawesome/free-solid-svg-icons";
import { Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Individual() {
    const [products, setProducts] = useState(false)
  return (
    <React.Fragment>
     <header>
        <Link to="/home" className="logos">
          <Image src={Logomark} alt="logo" />
        </Link>
        <input id="menu-bar" type="checkbox" />

        <label for="menu-bar" class="checkbtn">
          <FontAwesomeIcon icon={faBars} className="socials" />
        </label>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/terms">About</Link>
            </li>
            <li onClick={() => setProducts(!products)}>
              <a href="#!">
                Products{" "}
                <FontAwesomeIcon
                  icon={products ? faCaretUp : faCaretDown}
                  style={{ paddingLeft: "3px", paddingTop: "3px" }}
                />
              </a>
              <ul className={products ? "navbar-dropdown" : "navbar-none"}>
                <li className="dropdown-list">
                  <Link to="/individual">Individual</Link>
                </li>
                <li className="dropdown-list">
                  <Link to="business-home">Business</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <a href="#!">Help</a>
            </li>
            <li>
              <a href="#!">Login</a>
            </li>
            <li>
              <Link to="/account" id="register">
                Create Account
              </Link>
            </li>
          </ul>
        </nav>
      </header> 
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

export default Individual;
