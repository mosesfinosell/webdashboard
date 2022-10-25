import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
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

import styled from "styled-components";
import {
  PrimaryTitle,
  PrimaryButton,
  PrimaryParagraph,
  PrimarySection,
  borderRadius,
  marginMobile,
  smallBorderRadius,
} from "../Styles";

import ArrowUpRight from "../components/SVG/ArrowUpRight";
import { collectEmail } from "../network/utils";

function Home() {
  const emailValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email required"),
  });
  const yellowbtn = useColorModeValue("yellow.500");
  const navigate = useNavigate();

  return (
    <>
      <Banner>
        <div className="banner-1">
          <div className="banner-holder">
            <DarkHeader>
              Manage all your
              <br />
              finance and business
              <br />
              in one place
            </DarkHeader>
            <PrimaryParagraph>
              A financial and business management App for
              <br />
              business owners and individuals.
            </PrimaryParagraph>
          </div>

          <PrimaryButton onClick={() => navigate("/business-signup")}>
            <span>Try Finosell for free</span>
          </PrimaryButton>
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
              <a
                href="https://play.google.com/store/apps/details?id=com.finosell.www.finosell"
                target="_blank"
              >
                <Image src={google} alt="google" />
              </a>
            </div>
            <div className="download__btn">
              <a
                target="_blank"
                href="https://apps.apple.com/us/app/finosell/id1562120098"
              >
                <Image src={apple} alt="apple" className="apps" />
              </a>
            </div>
          </div>
        </div>
        <div className="banner-2">
          <Image src={Buffer} alt="buffer" />
        </div>
      </Banner>
      <Section2>
        <Image src={woman} alt="woman" className="business-pic" />
        <div className="business">
          <PrimaryTitle>Run and grow a business you’re proud of</PrimaryTitle>
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
                Virtual card to pay for shipping and ads promotion
              </Text>
            </div>
            <div className="business-div">
              <Image src={notification} alt="notification" />
              <Text className="invoice">
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
          <PrimaryButton onClick={() => navigate("/business-signup")}>
            Increase sales with Finosell
          </PrimaryButton>
        </div>
      </Section2>
      <UniqueLink>
        <div className="unique-div">
          <PrimaryTitle>
            One unique payment link, multiple payment options.
          </PrimaryTitle>
          <PrimaryButton
            className="desktop"
            onClick={() => navigate("/business-signup")}
          >
            Create a payment link
          </PrimaryButton>
        </div>

        <Image src={hanger} alt="hanger" />

        <PrimaryButton className="mobile">Create a payment link</PrimaryButton>
      </UniqueLink>
      <SellOnline>
        <div className="section-5-hanger">
          <PrimaryTitle className="header">
            Sell more online with a free website
          </PrimaryTitle>
          <ul className="points">
            <li className="point">
              <Image src={clock} alt="clock" className="icon" />
              <p className="website">Set up your own website in 5 minutes.</p>
            </li>
            <li className="point">
              <Image src={produp} alt="upload" className="icon" />
              <p className="website">Upload products to store</p>
            </li>
            <li className="point">
              <Image src={payment} alt="payment" className="icon" />
              <p className="website">
                Receive orders & payments easily from website
              </p>
            </li>

            <PrimaryButton onClick={() => navigate("/business-signup")}>
              Create website
            </PrimaryButton>
          </ul>
        </div>
        <Image src={mac} alt="mac" className="mac" />
      </SellOnline>
      <FindSeller>
        <PrimaryTitle>Find trusted sellers in your area.</PrimaryTitle>
        <div className="locate">
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
              Guaranteed payment and refund with Paysecure
            </Text>
          </div>
          <div className="locator">
            <div className="rec">
              <Image src={lock} alt="rec" />
            </div>

            <Text className="locate">Lock payment securely till delivery</Text>
          </div>

          <div className="locator">
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
        <PrimaryButton onClick={() => navigate("/business-signup")}>
          Create a free account in a minute
        </PrimaryButton>
      </FindSeller>
      <CollectEmail>
        <div className="customers">
          <Text className="love">
            You will love us the same way our customers do
          </Text>
          <Text className="updates">
            Be the first to get our financial and business updates
          </Text>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={emailValidationSchema}
            onSubmit={(value, { resetForm }) => {
              collectEmail(value);
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
                {errors.email && touched.email ? (
                  <p className="form-error">{errors.email}</p>
                ) : null}
                <PrimaryButton type="submit">Subscribe</PrimaryButton>
              </Form>
            )}
          </Formik>
          {/* <form>
            <input type="email" placeholder="Enter your email" />
            <PrimaryButton type="submit">Subscribe</PrimaryButton>
          </form> */}
        </div>
        <div className="case-div">
          <Image src={cases} alt="case" />
        </div>
      </CollectEmail>
      <Questions>
        <Text className="sellers" style={{ paddingTop: "5rem" }}>
          Questions?
        </Text>
        <Text className="faq" style={{ paddingTop: "1rem" }}>
          <Link to="/faqs">
            Check out our FAQ page <ArrowUpRight />
          </Link>
        </Text>
      </Questions>
    </>
  );
}

export default Home;

const DarkHeader = styled(PrimaryTitle)`
  color: #273b4a;
  width: 100%;
  margin-bottom: 1rem;
  @media only screen and (min-width: 768px) {
    width: 55.4rem;
    margin-bottom: 2rem;
  }
`;
const Banner = styled.section`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  margin-bottom: 14.2rem;

  .banner-1 {
    margin-bottom: 6.3rem;
  }
  .banner-2 {
    img {
      height: 100%;
    }
  }
  .download {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2.2rem;
  }
  .download__btn {
    margin: 0.8rem;
  }
  ${PrimaryParagraph} {
    margin-bottom: 3.2rem;
  }
  .socially {
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    gap: 2rem;
    margin-top: 3rem;

    div {
      margin: auto 0;
    }
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 9rem;
    .banner-1 {
      margin: 0;
    }
    .download {
      justify-content: flex-start;
      margin-top: 4.4rem;
    }
  }
`;
const Section2 = styled(PrimarySection)`
  display: flex;
  flex-direction: column;
  background-color: #273b4a;
  justify-content: space-between;
  margin-bottom: 8rem;
  padding: 0 0 4.8rem;
  position: relative;

  ${PrimaryTitle} {
    color: #ffffff;
    margin: 2.4rem auto 1.8rem;
  }
  .business-cover {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .invoice {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
  .business {
    margin: 0 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .business-cover {
  }
  .business-div {
    border-radius: ${borderRadius};
    background: #ffffff;
    display: flex;
    align-items: center;
    padding: 2.3rem 1.8rem;
    margin-bottom: 1.5rem;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 20rem;
    .business-pic {
      width: 50%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      right: 0;
      top: 0;
    }
    .business {
      align-items: flex-start;
      margin-left: 7.5rem;
      justify-content: center;
      width: 45%;
    }
  }
`;
const Try = styled(PrimaryButton)`
  padding: 1.2rem 2.4rem;

  @media only screen and (min-width: 768px) {
    padding: 1.8rem 2.8rem;
  }
`;
const UniqueLink = styled(PrimarySection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4.5rem;

  ${PrimaryTitle}{
    width: 100%
    margin-bottom: 5rem;
  }
  img{
    margin-bottom: 3.4rem;
  }
  .desktop{
    display: none;
  }
  @media only screen and (min-width: 1050px){
    margin-bottom: 17.5rem;
    flex-direction: row-reverse;
    align-items: center;
    .desktop{
      display: flex;
    }
    .mobile{
      display: none;
    }
    .unique-div{
      margin-left: 4.4rem;
      margin-bottom: 2rem;
    }
  }
`;
const SellOnline = styled(PrimarySection)`
  border-radius: ${smallBorderRadius};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #273b4a;
  position: relative;
  padding: 5rem 7% 0;
  margin-bottom: 4.6rem;

  .section-5-hanger {
    width: 100%;

    @media only screen and (min-width: 1050px) {
      width: 50%;
    }
  }

  ${PrimaryTitle} {
    color: #ffffff;
    margin-bottom: 2rem;

    @media only screen and (min-width: 800px) {
      margin-bottom: 3.4rem;
    }
  }
  .points {
    width: 100%;
    margin-bottom: 2.3rem;
    list-style: none;

    button {
      margin: auto;

      @media only screen and (min-width: 500px) {
        margin: 0;
      }
    }
  }
  .point {
    display: flex;
    margin-bottom: 2rem;
    align-items: center;
  }
  .icon {
    width: 3rem;
    height: 3rem;

    @media only screen and (min-width: 800px) {
      width: 5rem;
      height: 5rem;
    }
  }
  .website {
    margin-left: 0.5rem;
    font-size: 1.4rem;
    color: #fff;
    font-weight: 500;

    @media only screen and (min-width: 800px) {
      margin-left: 2.4rem;
      font-size: 1.8rem;
      line-height: 2.2rem;
    }
  }
  .mac {
    position: relative;
    bottom: 0.4rem;
    right: 0.7rem;
  }
  @media only screen and (min-width: 1050px) {
    padding: 6.8rem 9rem;
    margin: 0;
    margin-bottom: 13rem;
    flex-direction: row;

    .points {
      margin-bottom: 2.3rem;
    }

    .mac {
      position: absolute;
      right: 0rem;
      bottom: 0;
      height: 70%;
      width: 60%;
    }
  }
`;
const FindSeller = styled(PrimarySection)`
  margin-bottom: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .locate {
    display: flex;
    gap: 4rem;
    margin: auto;
    width: 100%;
    max-width: 100rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .locator {
    border-radius: ${borderRadius};
    border: solid #e0e0e0 0.35rem;
    width: 100%;
    max-width: 30rem;
    padding: 1rem 1.2rem 0.6rem 1.2rem;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media only screen and (min-width: 800px) {
      padding: 3.7rem 3.8rem 4.8rem;
    }
  }

  .locate {
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2rem;
    text-align: center;
    color: var(--finosellBluePrimary);
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 10rem;

    .locate-bottom {
      margin-bottom: 7.8rem;
    }
    .locator {
      padding: 3.7rem 3.8rem 4.8rem;
    }
  }
`;
const CollectEmail = styled(PrimarySection)`
  background: #d6aa1b;
  border-radius: ${smallBorderRadius};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 13rem;
  padding: 3.1rem 1.7rem;
  align-items: center;
  .customers {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .love {
    font-size: 3.5rem;
    line-height: 3.8rem;
    margin-bottom: 0.9rem;
    font-weight: 500;
    color: #fff;
  }
  .updates {
    color: #f5f5f5;
    font-size: 1.4rem;
    line-height: 1.8rem;
    margin-bottom: 3.3rem;
  }
  form {
    position: relative;
    width: 100%;
    height: 5.5rem;

    .form-error {
      color: red;
    }
  }
  input {
    border-radius: ${smallBorderRadius};
    width: 100%;
    height: 100%;
    padding: 1.3rem 11.5rem 1.3rem 1.8rem;

    outline: none;
    &::placeholder {
      color: #505050;
    }

    @media only screen and (min-width: 800px) {
      padding: 2.3rem 16.5rem 2.3rem 2.8rem;
    }
  }

  ${PrimaryButton} {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0.7rem;
    margin: auto;
    padding: 1.2rem 1.8rem;
    height: 4.5rem;
    width: 9.8rem;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    margin: 0;
    padding: 9rem 6rem;

    .love {
      font-size: 5rem;
      line-height: 5.4rem;
      margin-bottom: 2rem;
    }
    .updates {
      font-size: 2rem;
      line-height: 2.6rem;
      margin-bottom: 4.7rem;
      color: #f7e8b5;
    }
    form {
      width: 48.3rem;
      height: 7rem;
      margin: 0;
    }
    ${PrimaryButton} {
      height: 5.9rem;
      width: 14.2rem;
    }
  }
`;
const Questions = styled(PrimarySection)`
  margin-bottom: 10rem;
`;
