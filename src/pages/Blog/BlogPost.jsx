import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import Spinner from "../../components/Spinner";
import {
  faWhatsapp,
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Subscribe from "../../components/Layout/Subscribe";
import BlogCard from "../../components/BlogCard";
import { PrimaryTitle, PrimaryParagraph, PrimarySection } from "../../Styles";
import { singleBlogPage } from "../../network/blog";

import CarouselImg from "../../assets/carousel-img.png";
import purse from "../../assets/purse.png";
import whiteBoard from "../../assets/whiteboard.png";
import grayShirt from "../../assets/gray-shirt.png";

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
const idPost = `
<div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, nullam massa in commodo. Tortor mauris eu aliquam ultricies. Ornare eu elementum vivamus mauris dictum pellentesque suspendisse diam. Faucibus sed tellus malesuada enim, lacus vitae. Risus at quisque volutpat odio quisque leo sed. Volutpat nunc arcu vitae dignissim est mauris enim. Euismod placerat in vitae ut elementum. Volutpat venenatis ipsum eget sit rhoncus aliquam ut sit. A, nulla vitae urna vulputate aliquet. In sit quam elit ipsum ac placerat tellus purus mauris. Quam eget habitant id ipsum, quis metus dui in massa.
                </p>
            </div>
            <div>
                <h1>
                    How to do it
                </h1>
                <p>
                    Consequat fermentum risus, congue felis fames sollicitudin. Et amet consectetur arcu, integer lobortis ipsum morbi laoreet. Adipiscing vehicula lacus odio scelerisque. Mollis fermentum a cursus molestie lacus nascetur sem est tincidunt. Tellus sit felis, scelerisque quis ante sit. Egestas mauris, libero, eu neque. Velit nunc, suscipit risus at ut fringilla bibendum eget. Hendrerit dui quisque tellus lorem quis congue.
                </p>
                <p>
                    Velit, adipiscing congue convallis sit bibendum auctor sociis. Ut vivamus in placerat molestie. Et dis augue velit nibh lorem placerat. Proin aliquam nunc ac dui eget. Congue mi id a, morbi dolor tristique. Purus pharetra justo at ut arcu non a orci. Vel amet pellentesque ultrices orci nunc ut. Leo odio egestas faucibus congue ut. Sed eget nisl non gravida dignissim quam. Tincidunt egestas id arcu, adipiscing ultricies.
                </p>
                <p>
                    Velit habitant morbi ac donec arcu. Massa pellentesque dui, nunc eleifend eget enim. Pellentesque dictumst nunc egestas massa non nibh. Urna, et, feugiat ut volutpat rhoncus. Dolor in suspendisse tincidunt quisque ultricies sagittis donec magna. Aliquet mi volutpat eget vel et sem eu pulvinar nulla. Nunc quam duis quis porta at nibh.
                </p>
            </div>
            <div>
                <h1>Why you should do it</h1>
                <p>
                Posuere sed in risus eget facilisi vitae. Senectus ut erat sociis tortor. Duis leo sollicitudin in habitant nec tincidunt cras ut pharetra. Praesent quis morbi nullam turpis dolor magna. Auctor eget nisl morbi quis at at pellentesque mattis pulvinar. Elementum lorem in viverra dui vitae semper. Porttitor netus pretium gravida lobortis tortor at viverra. Enim nulla aliquam lacus tellus eu feugiat. Sed mi, laoreet orci turpis imperdiet blandit. Mattis id purus sit pharetra est amet. Rutrum morbi velit sollicitudin pellentesque proin sed vitae risus quis. Lacus, id penatibus non consequat sed ornare dignissim platea. Nisl, sit tristique ut vel tempor.
                </p>
                <p>
                Lacinia sem nisi, dui in ac. Augue ut tellus sit diam eget. Morbi gravida tellus, diam dolor non lectus in. Risus at dui proin eros, elementum vitae. Nulla condimentum adipiscing condimentum tincidunt habitasse.
                </p>
                <p>
                Arcu neque, hendrerit mauris ac. Enim, adipiscing mattis ipsum vulputate. Sem vitae viverra ut elementum orci. Elit cras hendrerit proin cras sit. Sed feugiat purus duis odio tellus eu consequat. Nibh eget volutpat eget eleifend. Dictum dignissim vulputate lectus montes, volutpat in et ut. Neque est nibh ac mattis. Pellentesque interdum turpis ultricies ac risus elit. Eu augue purus convallis posuere a senectus auctor scelerisque. Magna vitae at velit, lorem adipiscing sit sagittis facilisis. Ligula et viverra duis tristique gravida in sodales sit. Pretium enim id auctor egestas placerat praesent. Vestibulum nunc egestas cras sit sed.
                </p>
                <p>
                Sit commodo elementum eget sapien amet odio condimentum aenean feugiat. Nibh laoreet amet, tellus praesent. Ridiculus id vestibulum mi, lobortis. Ac quisque quis commodo, egestas feugiat faucibus iaculis hac. Proin lectus lorem massa ac amet. Enim ac nisi aliquam pellentesque sed vitae. Cras eu ut id aliquam at molestie lectus. Est sagittis volutpat sit sed ultricies. Ornare vel enim augue amet eget viverra facilisis aliquet vitae. At tellus dictum amet at vel diam.
                </p>
            </div>
            <div>
                <h1>Conclusion</h1>
                <p>
                Massa odio arcu metus, scelerisque maecenas accumsan. Morbi venenatis eu, parturient a lectus tincidunt. Fusce eu enim tempor, urna ornare. Egestas pharetra fermentum tempor in ut sit. Sit ultricies et leo mattis mattis. Eu ultrices hendrerit quam turpis.
                </p>
                <p>
                At diam ac at semper venenatis. Eget nunc euismod egestas porttitor adipiscing ut id sollicitudin arcu. Eget sed diam tortor eget aliquet. Feugiat faucibus euismod eu ut et arcu, non ut condimentum. Tempor condimentum dictum nam augue sed nunc a. Lorem varius congue enim est orci blandit quis amet senectus. Porttitor enim dignissim placerat felis magna euismod. Elit, non volutpat turpis viverra aliquet senectus sed id. Ornare sagittis, nec vitae et. Nullam cursus porttitor fermentum dignissim.
                </p>
                <p>
                Sit odio mi volutpat nunc vitae. Morbi sit senectus pharetra, arcu venenatis consequat. Ut ut aenean nibh dictum feugiat tellus. Tempus commodo sit neque a ante. Risus, mauris id pharetra leo. Est consequat donec id dapibus. Aenean nunc pellentesque urna viverra sit orci. Dolor fringilla auctor dictumst nec sed. Quis nibh egestas tortor sed. Vulputate egestas tempor arcu quisque amet arcu. Varius accumsan nisl vel, imperdiet scelerisque commodo.
                </p>
            </div>
`;
const defaultBlog = {
  title: "How to integrate finosell into your business",
  author: "Omotola Omolade",
  body: idPost,
};

const BlogPost = () => {
  const { id } = useParams();
  const { isLoading, data, isError, error } = useQuery(
    ["blogPost", id],
    async () => singleBlogPage(id)
  );

  const blog = data ? data?.data?.post : defaultBlog;

  if (error) {
    return (
      <Error>
        <p>Couldn't load blog post</p>
      </Error>
    );
  }

  return (
    <>
      {!isLoading ? (
        <>
          <BlogSection>
            <img src={blog?.image} alt="blog image" />
            <PrimaryTitle>{blog?.title}</PrimaryTitle>
            <PostInfo>
              <PrimaryParagraph>by {blog?.author}</PrimaryParagraph>
              {/* <PrimaryParagraph>May 19, 2022. 06:05pm</PrimaryParagraph> */}
            </PostInfo>
          </BlogSection>

          <Post>
            {blog?.body.map((block, i) => {
              if (Array.isArray(block)) {
                if (block[0].type === "unordered-list-item")
                  return (
                    <ul key={i}>
                      {block.map((item) => (
                        <li key={item.key}>{item.text}</li>
                      ))}
                    </ul>
                  );
                else if (block[0].type === "ordered-list-item")
                  return (
                    <ol key={i}>
                      {block.map((item) => (
                        <li key={item.key}>{item.text}</li>
                      ))}
                    </ol>
                  );
              } else if (block.type === "unstyled") {
                return <p key={block.key}>{block.text}</p>;
              }
            })}
          </Post>
          <Socials>
            <SocialsHeading>Share</SocialsHeading>
            <div className="icons">
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "0px 11px 11px 11px",
                }}
              />
              <a
                href="https://twitter.com/finosell?t=6GZOF07oTPgFpRr_9yxSSg&s=09"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "0px 11px 11px 11px",
                  }}
                />
              </a>
              <a
                href="https://www.facebook.com/Finosell-112251447209343/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "0px 11px 11px 11px",
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/finosell-global-ltd/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{
                    width: "30px",
                    height: "30px",
                    background: "#FDF9ED",
                    borderRadius: "0px 11px 11px 11px",
                  }}
                />
              </a>
            </div>
          </Socials>
        </>
      ) : (
        <SpinnerConatainer>
          <Spinner />
        </SpinnerConatainer>
      )}

      <Subscribe header="Like what you see? Subscribe now!" />
    </>
  );
};

export default BlogPost;

const Post = styled.article`
  margin-bottom: 3rem;
  font-size: 1.2rem;
  color: var(--finosellGrayPrimary);
  div {
    margin-bottom: 5rem;
  }
  h1 {
    color: #273b4a;
    font-size: 3.3rem;
    line-height: 3.8rem;
    margin-bottom: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
  p {
    color: #8c8c8c;
    line-height: 1.8rem;
    font-size: 1.4rem;
    font-weight: 500;
    font-family: "DM sans", sans-serif;
    margin-bottom: 1.5rem;
  }
  li {
  }

  @media only screen and (min-width: 768px) {
    padding: 0;
    margin-bottom: 4rem;
    font-size: 1.4rem;

    h1 {
      font-size: 5rem;
      line-height: 6.4rem;
    }
    p {
      line-height: 2.4rem;
      font-size: 2rem;
    }
  }
`;

const BlogSection = styled(PrimarySection)`
  margin-bottom: 5rem;

  img {
    width: 100%;
    height: 50rem;
    object-fit: cover;
  }

  ${PrimaryTitle} {
    color: #273b4a;
    margin-bottom: 2rem;
  }
  ${PrimaryParagraph} {
    margin-bottom: 1.5rem;
  }
`;
const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;

  ${PrimaryParagraph} {
    color: #bfbfbf;
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-weight: 500;
  }
  @media only screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;

    ${PrimaryParagraph} {
      color: #bfbfbf;
      font-size: 2rem;
      line-height: 2.6rem;
    }
  }
`;
const SocialsHeading = styled.h1`
  margin-bottom: 2.1rem;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #8c8c8c;
  text-align: center;
  font-weight: 500;
`;
const Socials = styled(PrimarySection)`
    margin-bottom: 10.6rem;
    .icons{
        display: flex;
        justify-content: center;
        color: #D6AA1B;
    }
   

    svg{
        margin: 1rem;
    }
    @media only screen and (min-width: 1700px){
        
        position: absolute;
        left: -7rem;
        top: 35rem;
        .icons{
            flex-direction: column;
            align-items; center;
        }
    }
`;
const ArticleSection = styled(PrimarySection)`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;

  ${PrimaryTitle} {
    font-size: 3rem;
    line-height: 3.2rem;
    margin-bottom: 2.5rem;
    color: #273b4a;
    text-align: center;
  }
`;
const Articles = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem @media only screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;
const SpinnerConatainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Error = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;

  p {
    text-align: center;
  }
`;
