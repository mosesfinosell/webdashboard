import styled from "styled-components";
import { smallBorderRadius } from "../../Styles";

export const Option = styled.div`
  border-radius: ${smallBorderRadius};
  border: 0.063rem solid #d9d9d9;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2.4rem 2.4rem 2.6rem;

  @media only screen and (min-width: 800px) {
    text-align: left;
    align-items: flex-start;
  }
  h3 {
    color: #273b4a;
    margin-bottom: 1.1rem;
    font-weight: 700;
    line-height: 2.1rem;
    font-size: 2.1rem;
  }

  p {
    color: #8c8c8c;
    font-size: 1.4rem;
    line-height: 1.7rem;
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  a {
    width: 80%;
    max-width: 32.5rem;
    height: 20rem;

    &:hover ${Option}, &:active ${Option}, &:focus ${Option} {
      background: var(--finosellYellowSecondary);
      transition: 0.5s background ease;
    }

    @media only screen and (min-width: 1050px) {
      width: 50%;
    }
  }
`;

export const Image = styled.img`
  margin-bottom: 3.6rem;
  height: 5rem;

  @media only screen and (min-width: 500px) {
    height: 6rem;
  }
`;

export const Login = styled.p`
  color: #273b4a;
  font-weight: 1.8rem;
  line-height: 2.3rem;
  text-align: center;
  a {
    color: var(--finosellYellowPrimary);
  }
`;
