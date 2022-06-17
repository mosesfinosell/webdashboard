import React from 'react'
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleRight} from "@fortawesome/free-solid-svg-icons"
import {PrimaryParagraph, PrimaryTitle, PrimarySection, AppContainer} from "../Styles"
import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer"
import BlogCard from "../components/BlogCard"

import CarouselImg from "../assets/carousel-img.png"
import purse from "../assets/purse.png"
import whiteBoard from "../assets/whiteboard.png"
import grayShirt from "../assets/gray-shirt.png"

const blogs = [
    {
        img: purse,
        title:"How to deposit money to your business account",
        author: "Omotola Omolade"
    },
    {
        img: whiteBoard,
        title: "How to review roles of team mates on your business account",
        author: "Omotola Omolade"
    },
    {
        img: grayShirt,
        title: "How to add fingerprint on personal accounts",
        author: "Omotola Omolade"
    }
]


const Blog = () => {
  return (
    <>
        <Header />
        <AppContainer>
            <CarouselSection>
                <PrimaryTitle>Freshly curated for your growth</PrimaryTitle>
                <PrimaryParagraph>No spams, just freshly curated business and finance pointers to help you scale.</PrimaryParagraph>
                <Carousel>
                    <img src={CarouselImg} alt="man operating a laptop" />
                    <p className="tags"><span className="tag">Product Tutorial</span></p>
                    <CarouselContent>
                        <PrimaryTitle>How to integrate finosell into your business</PrimaryTitle>
                        <PrimaryParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque diam elit tempor risus. Pulvinar non vitae elementum scelerisque nascetur id nibh diam odio... </PrimaryParagraph>
                        <a className="read-more">
                            <span>Read more</span>
                            <FontAwesomeIcon icon={faAngleRight} style={{margin:"0 0.2rem"}} />
                            <FontAwesomeIcon icon={faAngleRight} />
                        </a>
                    </CarouselContent>
                </Carousel>
            </CarouselSection>
            <ArticleSection>
                <PrimaryTitle>Product Tutorials</PrimaryTitle>
                <Articles>
                    {blogs.map((blog, i)=><BlogCard key={i} blog={blog} />)}
                </Articles>
            </ArticleSection>
            <ArticleSection>
                <PrimaryTitle>Build with Finosell</PrimaryTitle>
                <Articles>
                    {blogs.map((blog, i)=><BlogCard key={i} blog={blog} />)}
                </Articles>
            </ArticleSection>
            <ArticleSection>
                <PrimaryTitle>Fresh and Notable</PrimaryTitle>
                <Articles>
                    {blogs.map((blog, i)=><BlogCard key={i} blog={blog} />)}
                </Articles>
            </ArticleSection>
            <Subscribe></Subscribe>
        </AppContainer>
        <Footer />
    </>
  )
}

export default Blog

const CarouselSection = styled(PrimarySection)`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    margin-bottom: ${0.063*100}rem;
    ${PrimaryTitle}{
        color: #273B4A;
        margin-bottom: ${20*0.063}rem
    }
    ${PrimaryParagraph} {
        margin-bottom: ${60*0.063}rem;
        height: ${72*0.063}rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    img{
        height: ${400*0.063}rem;
        object-fit: cover;
    }
    @media only screen and (min-width: 768px){
        ${PrimaryParagraph} {
            margin-bottom: ${93*0.063}rem
        }
    }
`
const Carousel = styled.div`
    .tags{
        margin: ${10*0.063}rem 0;
    }
    .tag{
        background: #F5F5F5;
        padding: ${10*0.063}rem ${25*0.063}rem;
        margin: 0 ${10*0.063}rem;
        color: #273B4A;
        font-size: ${12*0.063}rem;
        font-weight: 500;
        border-radius: ${100*0.063}rem;
    }
`
const CarouselContent = styled.div`
    
    ${PrimaryTitle}{
        text-align: left;
    }
    ${PrimaryParagraph}{
        margin-bottom: ${10*0.063}rem;
    }
    .read-more{
        color: #D6AA1B;
        font-weight: 700;
        font-size: ${14*0.063}rem;
        line-height: ${18*0.063}rem;
        display: flex;
        align-items: center;
    }
`
const ArticleSection = styled(PrimarySection)`
    display: flex;
    flex-direction: column;
    margin-bottom: ${50*0.063}rem;

    ${PrimaryTitle}{
        font-size: ${30*0.063}rem;
        line-height: ${32*0.063}rem;
        margin-bottom: ${25*0.063}rem;
        color: #273B4A;
    }
`
const Articles = styled.div`
    display: flex;
    flex-direction: column;
`
const Subscribe = styled(PrimarySection)`
    
`
