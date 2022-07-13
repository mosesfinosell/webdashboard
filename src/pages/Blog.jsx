import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleRight} from "@fortawesome/free-solid-svg-icons"
import Spinner from "../components/Spinner"

import {useQuery} from "react-query"
import axios from "axios"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as CarouselSlider } from 'react-responsive-carousel';

import {
    PrimaryParagraph, 
    PrimaryTitle, 
    PrimaryButton,
    PrimarySection, 
    
} from "../Styles"

import Subscribe from "../components/Layout/Subscribe"
import BlogCard from "../components/BlogCard"
import BlogLogo from "../components/SVG/BlogLogo" 

import CarouselImg from "../assets/carousel-img.png"
import purse from "../assets/purse.png"
import whiteBoard from "../assets/whiteboard.png"
import grayShirt from "../assets/gray-shirt.png"

import {Blog, handleError} from "../utils/API"


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


const BlogPage = () => {

    const finosellBlog = new Blog();
    const {isLoading, isError, error, data} = useQuery('blogPage', finosellBlog.blogPage)
    
    useEffect(()=>{
        if(error){
            handleError(error)
        }
    }, [error])

    

  return (
    <>
    {!isLoading && !isError ? <>
        <CarouselSection>
            <PrimaryTitle>Freshly curated for your growth</PrimaryTitle>
            <PrimaryParagraph>No spams, just freshly curated business and finance pointers to help you scale.</PrimaryParagraph>
            <CarouselSlider
                showThumbs={false}
                showArrows={false}
                showStatus={false}
            >
            <Carousel>
                <img src={CarouselImg} alt="man operating a laptop" />
                <p className="tags"><span className="tag">Product Tutorial</span></p>
                <CarouselContent>
                    <PrimaryTitle>How to integrate finosell into your business</PrimaryTitle>
                    <PrimaryParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque diam elit tempor risus. Pulvinar non vitae elementum scelerisque nascetur id nibh diam odio... </PrimaryParagraph>
                    <Link to="/blog/id" className="read-more">
                        <span>Read more</span>
                        <FontAwesomeIcon icon={faAngleRight} style={{margin:"0 0.2rem"}} />
                        <FontAwesomeIcon icon={faAngleRight} />
                    </Link>
                </CarouselContent>
            </Carousel>

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
            </CarouselSlider>
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
        <ArticleSection>
            <PrimaryTitle>Fresh and Notable</PrimaryTitle>
            <Articles>
                {data.data.posts.map((blog, i)=><BlogCard key={i} blog={blog} />)}
            </Articles>
        </ArticleSection>
        <Subscribe header="Like what you see? Subscribe now!" />
        <TakeControl>
            <PrimaryTitle>Ready to take control of your finances and business?</PrimaryTitle>
            <PrimaryButton>Take control</PrimaryButton>
        </TakeControl>
    </> 
    : 
    <LoaderContainer>
        <Spinner />
    </LoaderContainer>}
        
    </>
  )
}

export default BlogPage

const CarouselSection = styled(PrimarySection)`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding-bottom: ${0.063*160}rem;
    
    
    ${PrimaryTitle}{
        color: #273B4A;
        margin-bottom: ${20*0.063}rem;
        text-align: left;
    }
    ${PrimaryParagraph} {
        margin-bottom: ${20*0.063}rem;
        height: ${72*0.063}rem;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left;
    }
    img{
        height: ${400*0.063}rem;
        object-fit: cover;
        width: 100%;
    }
    .carousel.carousel-slider{
        overflow: visible;
    }
    .slider{
        background: none;
    }
    .control-dots{
        bottom: -${50 * 0.063}rem;
    }
    .control-dots .dot{
        width: ${10 * 0.063}rem;
        height: ${10 * 0.063}rem;
        background: #D9D9D9;
        box-shadow: none;
        
    }
    .dot.selected{
        background: #D6AA1B;
    }
    @media only screen and (min-width: 768px){
       
        padding-bottom: ${0.063 * 230}rem;
        ${PrimaryParagraph} {
            margin-bottom: ${33*0.063}rem
        }
        .control-dots{
            bottom: -${80 * 0.063}rem;
        }
        .control-dots .dot{
            width: ${15 * 0.063}rem;
            height: ${15 * 0.063}rem;
        }
    }
`
const Carousel = styled.div`
    .tags{
        margin: ${10*0.063}rem 0;
        text-align: left;
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
    justify-content: space-between;

    @media only screen and (min-width: 768px){
        flex-direction: row;
    }
`
const TakeControl = styled(PrimarySection)`
    margin-bottom: ${160 * 0.063}rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${PrimaryTitle}{
        font-weight: 500;
        text-align: center;
        font-size: ${35 * 0.063}rem;
        line-height: ${38 * 0.063}rem;
        color: #273B4A;
        margin-bottom: ${20 * 0.063}rem;
    }
    /* ${PrimaryButton}{
        font-size: ${12 * 0.063}rem;
        line-height: ${16 * 0.063}rem;
        padding: ${12 * 0.063}rem ${29 * 0.063}rem;
    } */
    @media only screen and (min-width: 768px){
        ${PrimaryTitle}{
            font-size: ${60 * 0.063}rem;
            line-height: ${65 * 0.063}rem;
        }
        /* ${PrimaryButton}{
            font-size: ${28 * 0.063}rem;
            line-height: ${36 * 0.063}rem;
            padding: ${32 * 0.063}rem ${67 * 0.063}rem;
        } */
    }
`
const LoaderContainer = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
