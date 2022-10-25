import React from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
import {PrimaryTitle, PrimaryParagraph} from "../Styles"
import CarouselImg from "../assets/carousel-img.png"

const BlogCard = ({ blog }) => {
  const { image, title, author, _id } = blog;
  return (
    <Card>
      <Link to={`/blog/${_id ? _id : "id"}`}>
        <img src={image ? image : CarouselImg} alt="Blog thumbnail" />
        <PrimaryTitle title={title}>{title}</PrimaryTitle>
        <PrimaryParagraph title={`written by ${author}`}>
          by {author}
        </PrimaryParagraph>
      </Link>
    </Card>
  );
};

export default BlogCard;

const Card = styled.div`
  width: 100%;
  max-width: 35rem;
  margin: 0 auto;
  margin-bottom: 5rem;
  font-weight: 500;
  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    margin-bottom: 2rem;
  }
  ${PrimaryTitle} {
    margin-bottom: 0.5rem;
    font-size: 2rem;
    line-height: 2.4rem;
    color: #273b4a;
    max-height: 10rem;
    overflow: hidden;
    text-align: left;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    @media only screen and (min-width: 800px) {
      font-size: 2.5rem;
      line-height: 3rem;

      margin-bottom: 1.5rem;
    }
  }
  ${PrimaryParagraph} {
    color: #bfbfbf;
    font-size: 1.2rem;
    line-height: 1.6rem;
    @media only screen and (min-width: 800px) {
      font-size: 1.4rem;
      line-height: 1.8rem;
    }
  }
  @media only screen and (min-width: 1050px) {
    margin: 0;
    ${PrimaryTitle} {
      font-size: 3rem;
      line-height: 3.2rem;
    }
  }
`;