import React from 'react'
import styled from "styled-components"
import AboutImg from "../assets/about.png"


const Section1 = styled.section`
    display: flex;
    flex-direction: column;
    text-align: left;
    h3{
        color: #273B4A;
        font-weight: 500;
        font-size: ${35*0.063}rem;
        line-height: ${38*0.063}rem;  
    }
    p{
        color:#8C8C8C;
        line-height: ${18*0.063}rem;
        font-size:${14*0.063}rem;
        font-weight: 500;
    }
`

const Section2 = styled.section`
    
`

const About = () => {
  return (
    <>
        <Section1>
            <img  src={AboutImg} alt="Exchange of product and payment" />
            <div>
                <h3>Here's everything you need to know about Finosell</h3>
                <p>Finosell is a technology company designed to provide business and financial management solutions to individuals and businesses in Africa. Finosell offers a complete solution of high quality, low-cost alternative business, and financial tools that are easy to use, reliable, and able to enhance business growth.</p>
            </div>
        </Section1>
        <Section2>
            <h3>The Finance and Business Control Centre</h3>
            <div>
                <h3>Our vision</h3>
            </div>
        </Section2>
    </>
  )
}

export default About

