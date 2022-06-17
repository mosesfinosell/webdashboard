import React from 'react'
import styled from "styled-components"
import {PrimaryTitle, PrimaryParagraph} from "../Styles"

const BlogCard = ({blog}) => {
    const {img, title, author} = blog
  return (
    <Card>
        <img src={img} alt="Blog thumbnail" />
        <PrimaryTitle>{title}</PrimaryTitle>
        <PrimaryParagraph>by {author}</PrimaryParagraph>
    </Card>
  )
}

export default BlogCard;

const Card = styled.div`
    /* width: ${324*0.063}rem; */
    margin-bottom: ${50*0.063}rem;
    font-weight: 500;
    img{
        width: 100%;
        object-fit: cover;
        margin-bottom: ${20*0.063}rem;
    }
    ${PrimaryTitle}{
        margin-bottom: ${10*0.063}rem;
        font-size: ${25*0.063}rem;
        line-height: ${27*0.063}rem;
        color: #273B4A;
    }
`