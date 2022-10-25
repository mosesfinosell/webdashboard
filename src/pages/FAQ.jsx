import styled from "styled-components"
import {Accordion} from "@chakra-ui/react"
import {PrimarySection, PrimaryTitle} from "../Styles"
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
    content:"Finosell brings your business closer to your ideal customers with our business development tools and Escrow services."
  },
  {
    title:"What tools are on Finosell?",
    content:"Business and sales management tools are available on the app. Also, make payments and manage your finances on the app. Tools for managing an online store are also available for use."
  },
  {
    title:"How do I get started?",
    content:`Download the iOS or Android app on <a href="https://www.finosell.com" target="_blank" rel="noreferrer">www.finosell.com</a> and Sign Up.`
  },
  {
    title:"Can I sign up on the website?",
    content:`Yes. Visit <a href="https://www.finosell.com" target="_blank" rel="noreferrer">www.finosell.com</a> to register.`
  },
  {
    title:"What payment methods can I use?",
    content:" We offer the following payment methods:"
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
    content:"Finosell ensures the security of your accounts and funds. "
  },
  {
    title:"How can I add products?",
    content:""
  },
  {
    title:"How can I record sales?",
    content:"Keeping track of your business helps you monitor your business finances properly. You can record sales and expenses using this feature. Get access to detailed information and analysis for your business on a regular basis. "
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
  },
  {
    title:"What is an escrow?",
    content:`An escrow is an agreement between a buyer and a seller where a third party, in this case, Finosell holds the payments for the goods and services offered until both sides of the parties involved complete the agreement. 
            This ensures funds are secure for the buyer and seller. Funds are monitored and ensure both parties reach a fair trade. This is a secure way to make payments for goods and services.
            `
  }
]

const FAQ = () => {
  return (
    <>
      <FaqSection>
        <PrimaryTitle>Frequently Asked Questions</PrimaryTitle>
        <Accordion allowMultiple={false} allowToggle>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} faq={faq} />
          ))}
        </Accordion>
      </FaqSection>
      <GetSection>
        <PrimaryTitle>Get Finosell now</PrimaryTitle>
        <div className="download">
          <a
            target="_blank"
            href="https://apps.apple.com/us/app/finosell/id1562120098"
          >
            <img src={googlesmall} alt="Google playstore" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.finosell.www.finosell"
            target="_blank"
          >
            <img src={applestore} alt="Apple app store" />
          </a>

          <img src={webapp} alt="Continue on web app" />
        </div>
      </GetSection>
    </>
  );
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
    margin-bottom: ${122 * 0.063}rem;
    padding; 0;
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