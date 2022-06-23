import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
  faInstagram,
faFacebook,
faLinkedin,
faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import {AppContainer, borderRadius, PrimarySection, PrimaryTitle} from "../Styles"
import Subscribe from "../components/Layout/Subscribe"

const ComingSoon = () => {
  return (
    <>
        <Header />
        <AppContainer>
            <ComingSoonSection>
              <Info>
                <PrimaryTitle>Coming soon.</PrimaryTitle>
              </Info>
              <Socials>
                <SocialsHeading>Visit our pages.</SocialsHeading>
                <div className="icons">
                <a href="https://instagram.com/finosellapp?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "0px 11px 11px 11px",
                    }}
                  />
                </a>
                    <a href="https://twitter.com/finosell?t=6GZOF07oTPgFpRr_9yxSSg&s=09" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon
                        icon={faTwitter}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "0px 11px 11px 11px",
                        }}
                        />
                    </a>
                    <a href="https://www.facebook.com/Finosell-112251447209343/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon
                            icon={faFacebook}
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "0px 11px 11px 11px",
                            }}
                            />
                    </a>
                    <a href="https://www.linkedin.com/company/finosell-global-ltd/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "0px 11px 11px 11px",
                        }}
                        />
                    </a>
                </div>
            
              </Socials>
              <Subscribe header="Join the waitlist!" />
              
            </ComingSoonSection>
        </AppContainer>
        <Footer />
    </>
  )
}

export default ComingSoon

const ComingSoonSection = styled(PrimarySection)`
  ${borderRadius};
  border: solid 0.4rem #d6aa1b;
  margin: auto;
  width: 100%;
  display: flex;
  padding: 3rem 1rem;
  flex-direction: column;
  align-items: center;
  section{
    margin-bottom: 3rem;
  }

`

const Info = styled.div`

`
const SocialsHeading = styled.h1`
    margin-bottom: ${0.063 * 21}rem;
    font-size: ${0.063 * 30}rem;
    line-height: ${0.063 * 18}rem;
    color: #8C8C8C;
    text-align: center;
    font-weight: 500;
`
const Socials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem auto;

  
  svg{
    margin: 0.4rem;
  }

  @media only screen and (min-width: 768px){
    margin: 5rem auto;
  }
`