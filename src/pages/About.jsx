import React from 'react'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AboutImg from "../assets/about.png";
import {
  PrimaryButton,
  PrimaryTitle,
  PrimaryParagraph,
  marginMobile,
  margin,
} from "../Styles";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <Section1>
        <img src={AboutImg} alt="Exchange of product and payment" />
        <div>
          <Heading>Here's everything you need to know about Finosell</Heading>
          <Paragraph>
            Finosell is a technology company designed to provide business and
            financial management solutions to individuals and businesses in
            Africa. Finosell offers a complete solution of high quality,
            low-cost alternative business, and financial tools that are easy to
            use, reliable, and able to enhance business growth.
          </Paragraph>
        </div>
      </Section1>
      <Section2>
        <Heading className="section-header">
          The Finance and Business Control Centre
        </Heading>
        <DarkBg>
          <Heading>Our vision</Heading>
          <Paragraph className="para-1">
            As a company, we aim to create financial inclusion through enhanced
            & secured e-commerce & payment transactions in Africa.
          </Paragraph>

          <Heading>Our Solution</Heading>
          <Paragraph>
            With the advancements in technology, business owners and individuals
            should not be faced with several infrastructural challenges of
            running a business, getting their products or services seen by more
            of their target market, making payments for goods and services
            rendered, and so on.
          </Paragraph>
          <Paragraph>
            Finosell provides individuals, small businesses, and large
            businesses a platform in which they can run their businesses,
            increase business efficiency, and handle their finances smoothly.
          </Paragraph>
          <Paragraph>Our solutions include:</Paragraph>
          <ul>
            <li>Securing commerce through secured Paysecure transaction</li>
            <li>Ease with processing payment and cross border transactions</li>
            <li>Enhancing commerce through e-commerce tools</li>
            <li>Providing cross-border trading activities.</li>
          </ul>
        </DarkBg>
      </Section2>
      <Section>
        <Heading className="section-header">
          Become a member of our team
        </Heading>
        <PrimaryButton>See all open roles</PrimaryButton>
      </Section>
      <Section>
        <Heading className="section-header">
          Ready to take control of your finances and business?
        </Heading>
        <PrimaryButton onClick={() => navigate("/business-signup")}>
          Get Finosell
        </PrimaryButton>
      </Section>
    </>
  );
};

export default About

const Heading = styled(PrimaryTitle)`
  color: #273b4a;
  text-align: center;
  margin-bottom: 2rem;
  @media only screen and (min-width: 800px) {
    margin-bottom: 2rem;
  }
`;
const Paragraph = styled(PrimaryParagraph)`
  margin-bottom: 1rem;
`;
const Section1 = styled.section`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 10rem;
  padding: 0 ${marginMobile};
  img {
    margin-bottom: 5rem;
  }
  ${Heading} {
    text-align: left;
  }
  p {
    margin-bottom: 2rem;
  }
  @media only screen and (min-width: 800px) {
    flex-direction: row-reverse;
    align-items: flex-start;
    padding: 0;
    img {
      margin-left: 5rem;
    }
    div {
      width: 65%;
    }
  }
`;
const Section2 = styled.section`
  margin-bottom: 10rem;
  .section-header {
    margin-bottom: 5rem;
    padding: 0 ${marginMobile};
  }
  @media only screen and (min-width: 768px) {
    .section-header {
      padding: 0 ${margin};
    }
  }
`;
const DarkBg = styled.div`
  color: #ffffff;
  background: #273b4a;
  padding: 6rem 2.2rem;
  ${Heading} {
    color: #fff;
    text-align: left;
    margin-bottom: 2rem;
  }
  ${Paragraph}.para-1 {
    margin-bottom: 5rem;
  }
  ${Paragraph} {
    margin-bottom: 1rem;
    color: #d1dbe3;
  }
  ul {
    position: relative;
    left: 1rem;
  }
  li {
    color: #d1dbe3;
    font-family: "DM sans", sans-serif;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
  @media only screen and (min-width: 800px) {
    padding: 10rem 7.5rem;
    li {
      font-size: 2rem;
      line-height: 2.6rem;
    }
    ${Paragraph}.para-1 {
      margin-bottom: 10rem;
    }
    ${Paragraph} {
      margin-bottom: 2rem;
    }
  }
`;
const Section = styled.section`
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${marginMobile};

  .section-header {
    margin-bottom: 5rem;
    padding: 0 ${marginMobile};
  }

  @media only screen and (min-width: 800px) {
    padding: 0 ${margin};
    margin-bottom: 18.3rem;

    .section-header {
    }
  }
`;
