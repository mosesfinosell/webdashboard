import React from 'react'
import styled from "styled-components"
import AboutImg from "../assets/about.png"
import {PrimaryButton, PrimaryTitle, PrimaryParagraph, marginMobile, margin, AppContainer} from "../Styles"
import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer"


const About = () => {
  return (
    <>
    <Header />
    <AppContainer>
        <Section1>
            <img  src={AboutImg} alt="Exchange of product and payment" />
            <div>
                <Heading>Here's everything you need to know about Finosell</Heading>
                <Paragraph>Finosell is a technology company designed to provide business and financial management solutions to individuals and businesses in Africa. Finosell offers a complete solution of high quality, low-cost alternative business, and financial tools that are easy to use, reliable, and able to enhance business growth.</Paragraph>
            </div>
        </Section1>
        <Section2>
            <Heading className="section-header">The Finance and Business Control Centre</Heading>
            <DarkBg>
                <Heading>Our vision</Heading>
                <Paragraph className="para-1">As a company, we aim to create financial inclusion through enhanced & secured e-commerce & payment transactions in Africa.</Paragraph>

                <Heading>Our Solution</Heading>
                <Paragraph >
                    With the advancements in technology, business owners and individuals should not be faced with several infrastructural challenges of running a business, getting their products or services seen by more of their target market, making payments for goods and services rendered, and so on.
                </Paragraph>
                <Paragraph>
                    Finosell provides individuals, small businesses, and large businesses a platform in which they can run their businesses, increase business efficiency, and handle their finances smoothly. 
                </Paragraph>
                <Paragraph>
                    Our solutions include:
                </Paragraph>
                <ul>
                    <li>Securing commerce through secured escrow transaction</li>
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
            <PrimaryButton>Get Finosell</PrimaryButton>
        </Section>
    </AppContainer>
    <Footer />
    </>
  )
}

export default About

const Heading = styled(PrimaryTitle)`
    color: #273B4A;
    text-align: center;
    margin-bottom: ${20*0.063}rem;
    @media only screen and (min-width: 768px){
        margin-bottom: ${20*0.063}rem;
    }
    
`
const Paragraph = styled(PrimaryParagraph)`
    margin-bottom: ${10*0.063}rem;
`
const Section1 = styled.section`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: ${100*0.063}rem;
    padding: 0 ${marginMobile};
    img{
        margin-bottom: ${50*0.063}rem;
    }
    ${Heading}{
        text-align: left;
    }
    p{
        margin-bottom: ${20*0.063}rem;
    }
    @media only screen and (min-width: 768px){
        flex-direction: row-reverse;
        align-items: flex-start;
        padding: 0;
        img{
            margin-left: ${50*0.063}rem;
        }
        div{
            width: 65%;
        }
    }
`
const Section2 = styled.section`
    margin-bottom: ${100*0.063}rem;
    .section-header{
        margin-bottom: ${50*0.063}rem;
        padding: 0 ${marginMobile};
    }
    @media only screen and (min-width: 768px){
        .section-header{
            padding: 0 ${margin};
        }
    }
`
const DarkBg = styled.div`
    color: #ffffff;
    background: #273B4A;
    padding: ${60*0.063}rem ${22*0.063}rem;
    ${Heading}{
        color: #fff;
        text-align: left;
        margin-bottom: ${20*0.063}rem;
    }
    ${Paragraph}.para-1{
        margin-bottom: ${50*0.063}rem;
    }
    ${Paragraph}{
        margin-bottom: ${10*0.063}rem;
        color: #D1DBE3;
    }
    ul{
        position: relative;
        left: 1rem;
    }
    li{
        color:#D1DBE3;
        font-family: "DM sans", sans-serif;
        font-size: ${14*0.063}rem;
        line-height: ${18*0.063}rem;
    }
    @media only screen and (min-width: 768px){
        padding: ${100*0.063}rem ${75*0.063}rem;
        li{
            font-size: ${20*0.063}rem;
            line-height: ${26*0.063}rem;
        }
        ${Paragraph}.para-1{
            margin-bottom: ${100*0.063}rem;
        }
        ${Paragraph}{
            margin-bottom: ${20*0.063}rem;
        }
    }
`
const Section = styled.section`
    margin-bottom: ${100*0.063}rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${marginMobile};
    ${PrimaryButton}{
        padding: ${12*0.063}rem ${30*0.063}rem;
    }
    .section-header{
        margin-bottom: ${50*0.063}rem;
        padding: 0 ${marginMobile};
    }
    
    @media only screen and (min-width: 768px){
        padding: 0 ${margin};
        margin-bottom: ${183*0.063}rem;
        ${PrimaryButton}{
            font-size: ${28*0.063}rem;
        }
        .section-header{
            
        }
    }
`
