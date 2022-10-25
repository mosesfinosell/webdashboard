import React from "react";
import { Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
import { margin, marginMobile } from "../../Styles";

const Footer = () => {
  return (
    <footer>
      <FooterContent>
        <div className="foot-1">
          <Logo src={Logomark} alt="logo" />
          <Apps>
            <div className="infos">
              <a
                href="https://play.google.com/store/apps/details?id=com.finosell.www.finosell"
                target="_blank"
              >
                <Image src={applestore} alt="logo" />
              </a>
            </div>

            <div className="infos">
              <a
                target="_blank"
                href="https://apps.apple.com/us/app/finosell/id1562120098"
              >
                <Image src={googlesmall} alt="logo" />
              </a>
            </div>

            <div className="infos webapp">
              <Image src={webapp} alt="logo" />
            </div>
          </Apps>
        </div>
        <Columns>
          <div className="foot-2">
            <Text className="column-title">Company</Text>
            <Link className="abt" to="/about">
              <Text className="abt">About</Text>
            </Link>
            <Link className="abt" to="/blog">
              <Text className="abt">Blog</Text>
            </Link>
            <Link to="/faqs">
              <Text className="abt">FAQ</Text>
            </Link>
            <Link to="/account">
              <Text className="abt">Account</Text>
            </Link>
          </div>
          <div className="foot-2">
            <Text className="column-title">Products</Text>
            <Link className="abt" to="/paysecure">
              <Text className="abt">Paysecure</Text>
            </Link>

            <Text className="abt">Handles</Text>
          </div>

          <div className="foot-2">
            <Text className="column-title">Legal</Text>
            <Link className="abt" to="/terms">
              <Text className="abt">Terms and Conditions</Text>
            </Link>

            <Link className="abt" to="/privacy">
              <Text className="abt">Privacy Policy</Text>
            </Link>
          </div>

          <div className="foot-2">
            <div className="footer-social">
              <a
                href="https://www.facebook.com/Finosell-112251447209343/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{
                    background: "#FDF9ED",
                    borderRadius: "0px 11px 11px 11px",
                  }}
                />
              </a>
              <a
                href="https://instagram.com/finosellapp?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{
                    background: "#FDF9ED",
                    borderRadius: "0px 11px 11px 11px",
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/finosell-global-ltd/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{
                    background: "#FDF9ED",
                    borderRadius: "0px 11px 11px 11px",
                  }}
                />
              </a>
              <a
                href="https://twitter.com/finosell?t=6GZOF07oTPgFpRr_9yxSSg&s=09"
                target="_blank"
                rel="noreferrer"
              >
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
          </div>
        </Columns>
      </FooterContent>

      <Text className="copyright-text">
        &copy;2022 Finosell Limited. All rights reserved
      </Text>
    </footer>
  );
};

export default Footer;

const Apps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  .infos {
    margin: 1.5rem;
  }
  .webapp {
    display: none;
  }
  @media only screen and (min-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    .webapp {
      display: block;
    }
    .infos {
      margin-left: 0;
    }
  }
`;
const Logo = styled.img`
  margin: 0 auto;
  margin-bottom: 2.4rem;
  @media only screen and (min-width: 800px) {
    margin: 0;
    margin-bottom: 3rem;
  }
`;
const Columns = styled.div`
  display: grid;
  grid-template: auto / 1fr 1fr;
  gap: 1rem;
  flex-grow: 1;
  .footer-social {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1.5rem;
    color: #273b4a;
    font-size: 1.4rem;

    @media only screen and (min-width: 800px) {
      font-size: 2rem;
    }
  }

  .foot-2 {
  }
  .column-title {
    color: #273b4a;
    font-weight: 700;
  }
  .abt {
    color: #8c8c8c;
    font-weight: 500;
  }
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8rem;
    font-size: 1.4rem;
  }
  @media only screen and (min-width: 768px) {
    display: flex;

    justify-content: space-evenly;
    p {
      margin-bottom: 2rem;
      line-height: 2.4rem;
      font-size: 1.8rem;
    }
  }
`;
const FooterContent = styled.div`
  max-width: 150rem;
  width: 95%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 6.2rem;
  font-family: "DM sans", sans-serif;
  @media only screen and (min-width: 800px) {
    flex-direction: row;

    margin-top: 6.2rem;
    align-items: flex-start;
    justify-content: space-between;
  }

  .foot-1 {
    a {
      padding: 0;
    }
  }
`;
