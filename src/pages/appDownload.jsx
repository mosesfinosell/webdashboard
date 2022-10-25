import React from 'react'
import { borderRadius, PrimarySection, PrimaryTitle } from '../Styles';
import { Image, Link} from '@chakra-ui/react';
import styled from 'styled-components';
import google from '../assets/google.svg';
import apple from '../assets/apple.svg';
import './home.css';

export default function AppDownload() {
  return (
    <AppSection>
      <div>
        <PrimaryTitle>
          Account created successfully, please proceed to download our app.
        </PrimaryTitle>
      </div>
      <div className="download">
        <div className="download__btn">
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.finosell.www.finosell"
          >
            <Image src={google} alt="google" />
          </a>
        </div>
        <div className="download__btn">
          <a
            target="_blank"
            href="https://apps.apple.com/us/app/finosell/id1562120098"
          >
            <Image src={apple} alt="apple" className="apps" />
          </a>
        </div>
      </div>
    </AppSection>
  );
}

const AppSection = styled(PrimarySection)`
  ${borderRadius};
  text-align: center;
  border: solid 0.1rem #d6aa1b;
  margin: auto;
  width: 100%;
  display: flex;
  padding: 3rem 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;
  ${PrimaryTitle} {
    font-size: 1.8rem;

    @media only screen and (min-width: 800px) {
      font-size: 2rem;
    }
  }
  .download {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
  section {
    margin-bottom: 3rem;
  }
`;
