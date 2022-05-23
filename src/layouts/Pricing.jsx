import React from "react";
import Logomark from "../assets/Logomark.svg";
import "./home.css";
import webapp from "../assets/webapp.svg";
import googlesmall from "../assets/googlesmall.svg";
import applestore from "../assets/applestore.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Text, Image } from "@chakra-ui/react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Pricing() {
  return (
    <React.Fragment>
      <header>
        <a href="#" className="logos">
          <Image src={Logomark} alt="logo" />
        </a>
        <input id="menu-bar" type="checkbox" />

        <label for="menu-bar" class="checkbtn">
        <FontAwesomeIcon
            icon={faBars}
            className="socials"
          />
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
      <section className="terms">
        <div className="">
          {" "}
          <Text className="terms-text">Pricing</Text>
          <Text className="terms-para">
            We follow a transparent fee structure that allows us to provide the
            best service to our customers. When your monthly revenue is above
            100,000 Naira, we charge you the following fee:
          </Text>
        </div>
      </section>
      <table>
        <thead>
          <tr>
            <th scope="col">MONTHLY TURNOVER</th>
            <th scope="col">SERVICE CHARGE</th>
            <th scope="col">PERCENTAGE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Account" className="col-one">
              100k
            </td>
            <td data-label="Due Date" className="col-two">
              0
            </td>
            <td data-label="Amount" className="col-two">
              0%
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Account" className="col-one">
              100k - 500k
            </td>
            <td data-label="Due Date" className="col-two">
              3000 fixed
            </td>
            <td data-label="Amount" className="col-two">
              0.1 %
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Account" className="col-one">
              500k - 5m
            </td>
            <td data-label="Due Date" className="col-two">
              5000 fixed
            </td>
            <td data-label="Amount" className="col-two">
              0.1% (5m)
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Acount" className="col-one">
              5m - 10m
            </td>
            <td data-label="Due Date" className="col-two">
              10000
            </td>
            <td data-label="Amount" className="col-two">
              0.1% (10m)
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Acount" className="col-one">
              10m - 20m
            </td>
            <td data-label="Due Date" className="col-two">
              20000
            </td>
            <td data-label="Amount" className="col-two">
              0.1% (20m)
            </td>
          </tr>
        </tbody>
      </table>
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

export default Pricing;
