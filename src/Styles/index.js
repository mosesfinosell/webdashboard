import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin:0;
        padding:0;
    }
    ::placeholder{
        color: black
    }
    ::-webkit-input-placeholder{
        color: green
    }
    .form-error{
        color: rgb(245, 79, 79);
        font-weight: 500;
        font-size: 0.3rem;
    }
`;
export const marginMobile = `2.5rem`;
export const margin = "16.5rem";
export const headerHeightMobile = `6rem`;
export const borderRadius = `1rem 3rem 3rem 3rem`;
export const smallBorderRadius = `0.3rem 1.1rem 1.1rem 1.1rem`;

export const PrimaryTitle = styled.h1`
  font-size: 2.5rem;
  line-height: 3rem;
  margin-bottom: 2rem;
  font-weight: 600;
  color: #273b4a;
  @media only screen and (min-width: 768px) {
    font-size: 3.5rem;
    line-height: 4rem;
  }
`;

export const PrimaryButton = styled.button`
  color: #ffffff;
  padding: 1rem 1.8rem;
  background: #d6aa1b;
  border-radius: ${smallBorderRadius};
  margin-top: 0.2rem;
  font-size: 1.4rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  .form-error {
    color: red;
    font-weight: 500;
  }

  @media only screen and (min-width: 768px) {
    font-size: 1.8rem;
    height: 5rem;
    padding: 1rem 2.8rem;
  }
`;
export const PrimaryParagraph = styled.p`
  color: #8c8c8c;
  line-height: 1.8rem;
  font-size: 1.4rem;
  font-weight: 500;
  font-family: "DM sans", sans-serif;
  @media only screen and (min-width: 768px) {
    line-height: 2.4rem;
    font-size: 1.8rem;
  }
`;
export const PrimarySection = styled.section``;

export const baseLayout = `

`;
export const headerHeight = `7.5rem`;

export const Section = styled.section``;
