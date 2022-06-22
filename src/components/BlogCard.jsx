import React from 'react'
import styled from "styled-components"
import {PrimaryTitle, PrimaryParagraph} from "../Styles"

const BlogCard = ({blog}) => {
    const {img, title, author} = blog
  return (
    <Card>
        <img src={img} alt="Blog thumbnail" />
        <PrimaryTitle title={title} >{title}</PrimaryTitle>
        <PrimaryParagraph title={`written by ${author}`}>by {author}</PrimaryParagraph>
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
        height: 4rem;
        overflow: hidden;
        text-align: left;
        

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    ${PrimaryParagraph}{
        color: #BFBFBF;
        font-size: ${14 * 0.063}rem;
        line-height: ${18 * 0.063}rem;
    }
    @media only screen and (min-width: 768px){
        width: ${337 * 0.063}rem;

        ${PrimaryTitle}{
            font-size: ${30 * 0.063}rem;
            line-height: ${32 * 0.063}rem;
        }

        ${PrimaryParagraph}{
            font-size: ${20 * 0.063}rem;
            line-height: ${26 * 0.063}rem;
        }
    }
`