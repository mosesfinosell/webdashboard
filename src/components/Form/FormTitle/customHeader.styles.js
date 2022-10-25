import styled from "styled-components";

export const CustomHeaderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 3.5rem;
  width: 100%;
  max-width: 45.3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 800px) {
    margin-bottom: 6rem;
  }
  img {
    margin-bottom: 2.8rem;
  }
  h3 {
    margin-bottom: 1rem;
    font-size: 2rem;
    line-height: 2.6rem;
    color: #273b4a;
    font-weight: 700;

    @media only screen and (min-width: 800px) {
      font-size: 3.6rem;
      line-height: 4rem;
    }
  }
  p {
    color: #8c8c8c;
    font-size: 1.4rem;
    line-height: 1.8rem;

    @media only screen and (min-width: 800px) {
      font-size: 1.8rem;
      line-height: 2.3rem;
    }
  }
`;
