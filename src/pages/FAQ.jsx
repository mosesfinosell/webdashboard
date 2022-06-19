import styled from "styled-components"
import {Accordion} from "@chakra-ui/react"
import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer"
import {AppContainer, PrimarySection, PrimaryTitle} from "../Styles"
import AccordionItem from "../components/AccordionItem"

import webapp from "../assets/webapp.svg";
import googlesmall from "../assets/googlesmall.svg";
import applestore from "../assets/applestore.svg";

const faqs = [
  {
    title:"What can I do on Finosell?",
    content:"Finosell helps businesses and individuals manage their finances, business operations and make payments easier. Get a free website for your business. Record sales and expenses on our accounts. Generate invoices and set up payment options for your business."
  },
  {
    title:"How does Finosell help my business?",
    content:""
  },
  {
    title:"What tools are on Finosell?",
    content:""
  },
  {
    title:"How do I get started?",
    content:"Download the iOS or Android app on www.finosell.com and Sign Up."
  },
  {
    title:"Can I sign up on the website?",
    content:""
  },
  {
    title:"What payment methods can I use?",
    content:""
  },
  {
    title:"Who pays service charges?",
    content:""
  },
  {
    title:"How do I get in touch with Finosell?",
    content:""
  },
  {
    title:"Is Finosell secure?",
    content:""
  },
  {
    title:"How can I add products?",
    content:""
  },
  {
    title:"How can I record sales?",
    content:""
  },
  {
    title:"How do I receive notifications?",
    content:""
  },
  {
    title:"Reset my password",
    content:""
  },
  {
    title:"How do I access premium services?",
    content:""
  },
  {
    title:"Am I eligible for a virtual dollar card?",
    content:""
  }
]

const FAQ = () => {
  return (
    <>
      <Header />
      <AppContainer>
        <FaqSection>
          <PrimaryTitle>Frequently Asked Questions</PrimaryTitle>
          <Accordion
            allowMultiple={true}
            allowToggle

          >
            {faqs.map((faq, i)=><AccordionItem key={i} faq={faq} />)}
          </Accordion>
        </FaqSection>
        <GetSection>
          <PrimaryTitle>Get Finosell now</PrimaryTitle>
          <div className="download">
            <img src={googlesmall} alt="Google playstore" />
            <img src={applestore} alt="Apple app store" />
            <img src={webapp} alt="Continue on web app" />
          </div>
        </GetSection>
      </AppContainer>
      <Footer />
    </>
  )
}

export default FAQ

const GetSection = styled(PrimarySection)`
  display: none;
  ${PrimaryTitle}{
    text-align: center;
    margin-bottom: ${31 * 0.063}rem;
  }
  .download{
    display: flex;
    justify-content: center;
    
  }
  img{
    width: ${0.063 * 226}rem;
    height: ${0.063 * 86}rem;
    margin: ${5 * 0.063}rem;
  }
  @media only screen and (min-width: 768px){
    display: block;
  }

`
const FaqSection = styled(PrimarySection)`
  margin-bottom: ${0.063 * 160}rem;
  ${PrimaryTitle}{
    margin-bottom: ${0.063 * 40}rem
  }

  @media only screen and (min-width: 768px){
    margin-bottom: ${0.063 * 208}rem;
    ${PrimaryTitle}{
      margin-bottom: ${0.063 * 88}rem
    }
  }
`