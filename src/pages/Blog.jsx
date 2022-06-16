import React from 'react'
import styled from "styled-components"
import {PrimaryParagraph, PrimaryTitle, PrimarySection} from "../utils/styles"

const Blog = () => {
  return (
    <>
        <Carousel>
            <PrimaryTitle>Freshly curated for your growth</PrimaryTitle>
            <PrimaryParagraph>No spams, just freshly curated business and finance pointers to help you scale.</PrimaryParagraph>
        </Carousel>
    </>
  )
}

export default Blog

const Carousel = styled(PrimarySection)`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${PrimaryTitle}{
        color: #273B4A;
        margin-bottom: ${20*0.063}rem
    }
    ${PrimaryParagraph} {
        margin-bottom: ${60*0.063}rem
    }
    @media only screen and (min-width: 768px){
        ${PrimaryParagraph} {
            margin-bottom: ${93*0.063}rem
        }
    }
`