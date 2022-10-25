import styled from "styled-components";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  borderRadius,
  smallBorderRadius,
  PrimarySection,
  PrimaryTitle,
  marginMobile,
} from "../Styles";
import Subscribe from "../components/Layout/Subscribe";

const ComingSoon = () => {
  return (
    <>
      <ComingSoonSection>
        <Info>
          <PrimaryTitle>Coming soon.</PrimaryTitle>
        </Info>
        <Socials>
          <SocialsHeading>Visit our pages.</SocialsHeading>
          <div className="icons">
            <a
              href="https://instagram.com/finosellapp?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/finosell?t=6GZOF07oTPgFpRr_9yxSSg&s=09"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/Finosell-112251447209343/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/company/finosell-global-ltd/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </Socials>
        <Subscribe header="Join the waitlist." />
      </ComingSoonSection>
    </>
  );
};

export default ComingSoon;

const ComingSoonSection = styled(PrimarySection)`
  border-radius: 1rem;
  border: solid 0.2rem #d6aa1b;
  margin: auto;
  margin-bottom: 2rem;
  width: 90%;
  display: flex;
  padding: 3rem 1rem;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 800px) {
    margin-bottom: 4rem;
  }
  section {
    margin-bottom: 3rem;
  }
`;

const Info = styled.div``;
const SocialsHeading = styled.h1`
  margin-bottom: 2.1rem;
  font-size: 3rem;
  line-height: 1.8rem;
  color: #8c8c8c;
  text-align: center;
  font-weight: 500;
`;
const Socials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem auto;

  svg {
    margin: 0.4rem;
    width: 2rem;
    height: 2rem;
    color: #d6aa1b;

    @media only screen and (min-width: 800px) {
      width: 4rem;
      height: 4rem;
    }
  }

  .icons {
    display: flex;
    gap: 1.5rem;
  }

  @media only screen and (min-width: 768px) {
    margin: 5rem auto;
  }
`;
