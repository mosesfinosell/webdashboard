import React from 'react'
import {Image, Text} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
    faBars,
    faCaretUp,
    faCaretDown,
  } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import webapp from "../../assets/webapp.svg";
import googlesmall from "../../assets/googlesmall.svg";
import applestore from "../../assets/applestore.svg";
import Logomark from "../../assets/Logomark.svg";




const Footer = () => {
  return (
    <footer>
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
              <Link to="/terms">
                <Text className="abt">Terms and Conditions</Text>
              </Link>
              <Text className="abt">Privacy Policy</Text>
            </div>
          </div>

          <div class="foot-2">
            <div class="box">
              <div className="footer-social">
                <a href="https://facebook.com">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{
                    background: "#FDF9ED",
                    borderRadius: "0px 11px 11px 11px",
                  }}
                />
                </a>
                <a href="https://instagram.com">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{
                    background: "#FDF9ED",
                    borderRadius: "0px 11px 11px 11px",
                  }}
                />
                </a>
                <a href="https://linkedin.com">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{
                    background: "#FDF9ED",
                    borderRadius: "0px 11px 11px 11px",
                  }}
                />
                </a>
                <a href="https://twitter.com">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{
                      background: "#FDF9ED",
                      borderRadius: "0px 11px 11px 11px",
                    }}
                  />
                </a>
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
    </footer>
  )
}

export default Footer