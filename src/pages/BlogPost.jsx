import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faWhatsapp,
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import BlogLogo from '../components/SVG/BlogLogo'
import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer"
import Subscribe from "../components/Layout/BlogSubscribe"
import BlogCard from "../components/BlogCard"
import {AppContainer, PrimaryTitle, PrimaryParagraph, PrimarySection} from "../Styles"

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

const BlogPost = () => {
  return (
    <>
        <Header LogoImg={BlogLogo} />
        <AppContainer>
            <BlogSection>
                <img src={CarouselImg} alt="man operating a laptop" />
                <PrimaryTitle>
                    How to integrate finosell into your business
                </PrimaryTitle>
                <PostInfo>
                    <PrimaryParagraph>by Omotola Omolade</PrimaryParagraph>
                    <PrimaryParagraph>May 19, 2022. 06:05pm</PrimaryParagraph>
                </PostInfo>
            </BlogSection>
            <BlogSection>
                <PrimaryParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, nullam massa in commodo. Tortor mauris eu aliquam ultricies. Ornare eu elementum vivamus mauris dictum pellentesque suspendisse diam. Faucibus sed tellus malesuada enim, lacus vitae. Risus at quisque volutpat odio quisque leo sed. Volutpat nunc arcu vitae dignissim est mauris enim. Euismod placerat in vitae ut elementum. Volutpat venenatis ipsum eget sit rhoncus aliquam ut sit. A, nulla vitae urna vulputate aliquet. In sit quam elit ipsum ac placerat tellus purus mauris. Quam eget habitant id ipsum, quis metus dui in massa.
                </PrimaryParagraph>
            </BlogSection>
            <BlogSection>
                <PrimaryTitle>
                    How to do it
                </PrimaryTitle>
                <PrimaryParagraph>
                    Consequat fermentum risus, congue felis fames sollicitudin. Et amet consectetur arcu, integer lobortis ipsum morbi laoreet. Adipiscing vehicula lacus odio scelerisque. Mollis fermentum a cursus molestie lacus nascetur sem est tincidunt. Tellus sit felis, scelerisque quis ante sit. Egestas mauris, libero, eu neque. Velit nunc, suscipit risus at ut fringilla bibendum eget. Hendrerit dui quisque tellus lorem quis congue.
                </PrimaryParagraph>
                <PrimaryParagraph>
                    Velit, adipiscing congue convallis sit bibendum auctor sociis. Ut vivamus in placerat molestie. Et dis augue velit nibh lorem placerat. Proin aliquam nunc ac dui eget. Congue mi id a, morbi dolor tristique. Purus pharetra justo at ut arcu non a orci. Vel amet pellentesque ultrices orci nunc ut. Leo odio egestas faucibus congue ut. Sed eget nisl non gravida dignissim quam. Tincidunt egestas id arcu, adipiscing ultricies.
                </PrimaryParagraph>
                <PrimaryParagraph>
                    Velit habitant morbi ac donec arcu. Massa pellentesque dui, nunc eleifend eget enim. Pellentesque dictumst nunc egestas massa non nibh. Urna, et, feugiat ut volutpat rhoncus. Dolor in suspendisse tincidunt quisque ultricies sagittis donec magna. Aliquet mi volutpat eget vel et sem eu pulvinar nulla. Nunc quam duis quis porta at nibh.
                </PrimaryParagraph>
            </BlogSection>
            <BlogSection>
                <PrimaryTitle>Why you should do it</PrimaryTitle>
                <PrimaryParagraph>
                Posuere sed in risus eget facilisi vitae. Senectus ut erat sociis tortor. Duis leo sollicitudin in habitant nec tincidunt cras ut pharetra. Praesent quis morbi nullam turpis dolor magna. Auctor eget nisl morbi quis at at pellentesque mattis pulvinar. Elementum lorem in viverra dui vitae semper. Porttitor netus pretium gravida lobortis tortor at viverra. Enim nulla aliquam lacus tellus eu feugiat. Sed mi, laoreet orci turpis imperdiet blandit. Mattis id purus sit pharetra est amet. Rutrum morbi velit sollicitudin pellentesque proin sed vitae risus quis. Lacus, id penatibus non consequat sed ornare dignissim platea. Nisl, sit tristique ut vel tempor.
                </PrimaryParagraph>
                <PrimaryParagraph>
                Lacinia sem nisi, dui in ac. Augue ut tellus sit diam eget. Morbi gravida tellus, diam dolor non lectus in. Risus at dui proin eros, elementum vitae. Nulla condimentum adipiscing condimentum tincidunt habitasse.
                </PrimaryParagraph>
                <PrimaryParagraph>
                Arcu neque, hendrerit mauris ac. Enim, adipiscing mattis ipsum vulputate. Sem vitae viverra ut elementum orci. Elit cras hendrerit proin cras sit. Sed feugiat purus duis odio tellus eu consequat. Nibh eget volutpat eget eleifend. Dictum dignissim vulputate lectus montes, volutpat in et ut. Neque est nibh ac mattis. Pellentesque interdum turpis ultricies ac risus elit. Eu augue purus convallis posuere a senectus auctor scelerisque. Magna vitae at velit, lorem adipiscing sit sagittis facilisis. Ligula et viverra duis tristique gravida in sodales sit. Pretium enim id auctor egestas placerat praesent. Vestibulum nunc egestas cras sit sed.
                </PrimaryParagraph>
                <PrimaryParagraph>
                Sit commodo elementum eget sapien amet odio condimentum aenean feugiat. Nibh laoreet amet, tellus praesent. Ridiculus id vestibulum mi, lobortis. Ac quisque quis commodo, egestas feugiat faucibus iaculis hac. Proin lectus lorem massa ac amet. Enim ac nisi aliquam pellentesque sed vitae. Cras eu ut id aliquam at molestie lectus. Est sagittis volutpat sit sed ultricies. Ornare vel enim augue amet eget viverra facilisis aliquet vitae. At tellus dictum amet at vel diam.
                </PrimaryParagraph>
            </BlogSection>
            <BlogSection>
                <PrimaryTitle>Conclusion</PrimaryTitle>
                <PrimaryParagraph>
                Massa odio arcu metus, scelerisque maecenas accumsan. Morbi venenatis eu, parturient a lectus tincidunt. Fusce eu enim tempor, urna ornare. Egestas pharetra fermentum tempor in ut sit. Sit ultricies et leo mattis mattis. Eu ultrices hendrerit quam turpis.
                </PrimaryParagraph>
                <PrimaryParagraph>
                At diam ac at semper venenatis. Eget nunc euismod egestas porttitor adipiscing ut id sollicitudin arcu. Eget sed diam tortor eget aliquet. Feugiat faucibus euismod eu ut et arcu, non ut condimentum. Tempor condimentum dictum nam augue sed nunc a. Lorem varius congue enim est orci blandit quis amet senectus. Porttitor enim dignissim placerat felis magna euismod. Elit, non volutpat turpis viverra aliquet senectus sed id. Ornare sagittis, nec vitae et. Nullam cursus porttitor fermentum dignissim.
                </PrimaryParagraph>
                <PrimaryParagraph>
                Sit odio mi volutpat nunc vitae. Morbi sit senectus pharetra, arcu venenatis consequat. Ut ut aenean nibh dictum feugiat tellus. Tempus commodo sit neque a ante. Risus, mauris id pharetra leo. Est consequat donec id dapibus. Aenean nunc pellentesque urna viverra sit orci. Dolor fringilla auctor dictumst nec sed. Quis nibh egestas tortor sed. Vulputate egestas tempor arcu quisque amet arcu. Varius accumsan nisl vel, imperdiet scelerisque commodo.
                </PrimaryParagraph>
            </BlogSection>
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
                    <a href="https://twitter.com/finosell?t=6GZOF07oTPgFpRr_9yxSSg&s=09" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon
                        icon={faTwitter}
                        style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "0px 11px 11px 11px",
                        }}
                        />
                    </a>
                    <a href="https://www.facebook.com/Finosell-112251447209343/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon
                            icon={faFacebook}
                            style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "0px 11px 11px 11px",
                            }}
                            />
                    </a>
                    <a href="https://www.linkedin.com/company/finosell-global-ltd/" target="_blank" rel="noreferrer">
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
            <Subscribe />
            <ArticleSection>
                <PrimaryTitle>You may also like</PrimaryTitle>
                <Articles>
                    {blogs.map((blog, i)=><BlogCard key={i} blog={blog} />)}
                </Articles>
            </ArticleSection>
        </AppContainer>
        <Footer />
    </>
  )
}

export default BlogPost

const BlogSection = styled(PrimarySection)`
    margin-bottom: ${0.063 * 50}rem;

    
    img{
        height: ${400*0.063}rem;
        object-fit: cover;
        width: 100%
        margin-bottom : ${0.063 * 20}rem;
    }
    ${PrimaryTitle}{
        color: #273B4A;
        margin-bottom: ${0.063 * 20}rem;
    }
    ${PrimaryParagraph}{
        margin-bottom: 1.5rem;
    }
`
const SocialsHeading = styled.h1`
    margin-bottom: ${0.063 * 21}rem;
    font-size: ${0.063 * 14}rem;
    line-height: ${0.063 * 18}rem;
    color: #8C8C8C;
    text-align: center;
    font-weight: 500;
`
const Socials = styled(PrimarySection)`
    margin-bottom: ${106 * 0.063}rem;
    .icons{
        display: flex;
        justify-content: center;
        color: #D6AA1B;
    }
   

    svg{
        margin: 1rem;
    }

`

const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: ${0.063 * 10}rem;

    ${PrimaryParagraph}{
        color: #BFBFBF;
        font-size: ${0.063 * 14}rem;
        line-height: ${0.063 * 18}rem;
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
        text-align: center;
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