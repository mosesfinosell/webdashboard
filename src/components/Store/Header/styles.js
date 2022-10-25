import styled from "styled-components"
import { smallBorderRadius } from "../../../Styles"

export const Head = styled.header`
  max-width: 121.2rem;
  width: 100%;
  /* font-family: 'Circular Std', sans-serif; */
  padding: 4.3rem 2.5rem 2.5rem;
  margin: 0 auto;
  margin-bottom: ;
  background: #fff;

  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    padding-bottom: 2.6rem;
  }
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.9rem;

  svg {
    width: 1.8rem;
    height: 1.8rem;
  }

  @media only screen and (min-width: 768px) {
    svg {
      display: none;
    }

    flex-grow: 1;
  }
`;
export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;

  img {
    margin-right: 1rem;
    object-fit: contain;
    width: 3.5rem;
    height: 3.5rem;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .info__name {
    color: #273b4a;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;
    text-transform: capitalize;
  }
  .info__location {
    font-size: 1rem;
    line-height: 1.4rem;
    color: #8c8c8c;
  }
`;

export const Search = styled.div`
  position: relative;
  height: 7.2rem;

  svg {
    position: absolute;
    left: 2rem;
    bottom: 0;
    top: 0;
    margin: auto;
  }

  @media only screen and (min-width: 768px) {
    width: 42.6rem;
  }
`;
export const SearchIcon = styled.div``;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: 0.1rem solid #d9d9d9;
  background: #fafafa;
  border-radius: ${smallBorderRadius};
  padding: 2.7rem 4rem 2.7rem 6rem;
  outline: none;
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.5rem;

  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`;
export const Social = styled.a`
  background: #fdf9ed;
  outline: none;
  border: none;
  width: 3.5rem;
  height: 3.5rem;
  margin: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${smallBorderRadius};

  svg {
    width: 2rem;
    height: 2rem;
  }

  @media only screen and (min-width: 768px) {
    width: 4.4rem;
    height: 4.4rem;
    margin: 0;
    margin-right: 1.5rem;
  }
`;
export const FlexContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    flex-grow: 1.2;
    justify-content: space-between;
  }
`;

export const Cart = styled.button`
  display: none;
  background: #d6aa1b;
  color: #fff;
  border-radius: ${smallBorderRadius};
  width: 8.4rem;
  height: 4.4rem;

  svg {
    margin-right: 1rem;
  }
  path {
    fill: #fff;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;