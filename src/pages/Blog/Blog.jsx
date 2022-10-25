import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import styled from "styled-components";

import Spinner from "../../components/Spinner";

import { useQuery } from "react-query";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as CarouselSlider } from "react-responsive-carousel";

import {
  PrimaryParagraph,
  PrimaryTitle,
  PrimaryButton,
  PrimarySection,
} from "../../Styles";

import Subscribe from "../../components/Layout/Subscribe";
import BlogCard from "../../components/BlogCard";

import purse from "../../assets/purse.png";
import whiteBoard from "../../assets/whiteboard.png";
import grayShirt from "../../assets/gray-shirt.png";

import { blogPage } from "../../network/blog";

const blogs = [
  {
    img: purse,
    title: "How to deposit money to your business account",
    author: "Omotola Omolade",
  },
  {
    img: whiteBoard,
    title: "How to review roles of team mates on your business account",
    author: "Omotola Omolade",
  },
  {
    img: grayShirt,
    title: "How to add fingerprint on personal accounts",
    author: "Omotola Omolade",
  },
];

const BlogPage = () => {
  const navigate = useNavigate();
  const { isLoading, isError, error, data } = useQuery("blogPage", blogPage);

  useEffect(() => {
    if (error) {
      toast.error("Could not load blog posts");
    }
  }, [error]);

  return (
    <>
      {!isLoading && !isError ? (
        <>
          {/* <CarouselSection>
            <PrimaryTitle>Freshly curated for your growth</PrimaryTitle>
            <PrimaryParagraph>
              No spams, just freshly curated business and finance pointers to
              help you scale.
            </PrimaryParagraph>
            <CarouselSlider
              showThumbs={false}
              showArrows={false}
              showStatus={false}
            >
              <Carousel>
                <img src={CarouselImg} alt="man operating a laptop" />
                <p className="tags">
                  <span className="tag">Product Tutorial</span>
                </p>
                <CarouselContent>
                  <PrimaryTitle>
                    How to integrate finosell into your business
                  </PrimaryTitle>
                  <PrimaryParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Natoque diam elit tempor risus. Pulvinar non vitae elementum
                    scelerisque nascetur id nibh diam odio...{" "}
                  </PrimaryParagraph>
                  <Link to="/blog/id" className="read-more">
                    <span>Read more</span>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      style={{ margin: "0 0.2rem" }}
                    />
                    <FontAwesomeIcon icon={faAngleRight} />
                  </Link>
                </CarouselContent>
              </Carousel>
              {/* 
							<Carousel>
								<img src={CarouselImg} alt='man operating a laptop' />
								<p className='tags'>
									<span className='tag'>Product Tutorial</span>
								</p>
								<CarouselContent>
									<PrimaryTitle>
										How to integrate finosell into your business
									</PrimaryTitle>
									<PrimaryParagraph>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Natoque diam elit tempor risus. Pulvinar non vitae elementum
										scelerisque nascetur id nibh diam odio...{' '}
									</PrimaryParagraph>
									<a className='read-more'>
										<span>Read more</span>
										<FontAwesomeIcon
											icon={faAngleRight}
											style={{ margin: '0 0.2rem' }}
										/>
										<FontAwesomeIcon icon={faAngleRight} />
									</a>
								</CarouselContent>
							</Carousel> 
            </CarouselSlider>
          </CarouselSection> */}
          <PrimaryTitle>Blog Posts</PrimaryTitle>
          <ArticleSection>
            {/* <PrimaryTitle>Product Tutorials</PrimaryTitle> */}
            <Articles>
              {data.data.posts.map((blog, i) => (
                <BlogCard key={i} blog={blog} />
              ))}
            </Articles>
          </ArticleSection>

          <Subscribe header="Like what you see? Subscribe now!" />
          <TakeControl>
            <PrimaryTitle>
              Ready to take control of your finances and business?
            </PrimaryTitle>
            <PrimaryButton onClick={() => navigate("/business-signup")}>
              Take control
            </PrimaryButton>
          </TakeControl>
        </>
      ) : (
        <LoaderContainer>
          <Spinner />
        </LoaderContainer>
      )}
    </>
  );
};

export default BlogPage;

const CarouselSection = styled(PrimarySection)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-bottom: 16rem;

  ${PrimaryTitle} {
    color: #273b4a;
    margin-bottom: 2rem;
    text-align: left;
  }
  ${PrimaryParagraph} {
    margin-bottom: 2rem;
    height: 7.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }
  img {
    height: 40rem;
    object-fit: cover;
    width: 100%;
  }
  .carousel.carousel-slider {
    overflow: visible;
  }
  .slider {
    background: none;
  }
  .control-dots {
    bottom: -5rem;
  }
  .control-dots .dot {
    width: 1rem;
    height: 1rem;
    background: #d9d9d9;
    box-shadow: none;
  }
  .dot.selected {
    background: #d6aa1b;
  }
  @media only screen and (min-width: 800px) {
    padding-bottom: 23rem;
    ${PrimaryParagraph} {
      margin-bottom: 3.3rem;
    }
    .control-dots {
      bottom: -8rem;
    }
    .control-dots .dot {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;
const Carousel = styled.div`
  .tags {
    margin: 1rem 0;
    text-align: left;
  }
  .tag {
    background: #f5f5f5;
    padding: 1rem 2.5rem;
    margin: 0 1rem;
    color: #273b4a;
    font-size: 1.2rem;
    font-weight: 500;
    border-radius: 10rem;
  }
`;
const CarouselContent = styled.div`
  ${PrimaryTitle} {
    text-align: left;
  }
  ${PrimaryParagraph} {
    margin-bottom: 1rem;
  }
  .read-more {
    color: #d6aa1b;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.8rem;
    display: flex;
    align-items: center;
  }
`;
const ArticleSection = styled(PrimarySection)`
  display: flex;
  flex-direction: column;
  margin: 15rem auto 5rem;

  ${PrimaryTitle} {
    font-size: 3rem;
    line-height: 3.2rem;
    margin-bottom: 2.5rem;
    color: #273b4a;
  }
`;
const Articles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;

  /* @media only screen and (min-width: 800px) {
    flex-direction: row;
  } */
`;
const TakeControl = styled(PrimarySection)`
  margin-bottom: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${PrimaryTitle} {
    font-weight: 500;
    text-align: center;
    font-size: 3.5rem;
    line-height: 3.8rem;
    color: #273b4a;
    margin-bottom: 2rem;
  }
  /* ${PrimaryButton}{
        font-size: ${12 * 0.063}rem;
        line-height: ${16 * 0.063}rem;
        padding: ${12 * 0.063}rem ${29 * 0.063}rem;
    } */
  @media only screen and (min-width: 768px) {
    ${PrimaryTitle} {
      font-size: 6rem;
      line-height: 6.5rem;
    }
    /* ${PrimaryButton}{
            font-size: ${28 * 0.063}rem;
            line-height: ${36 * 0.063}rem;
            padding: ${32 * 0.063}rem ${67 * 0.063}rem;
        } */
  }
`;
const LoaderContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
