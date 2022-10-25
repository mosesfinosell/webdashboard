import styled from "styled-components"
import {smallBorderRadius} from "../../../Styles"

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 15.8rem;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: 768px) {
    width: 19.7rem;
    margin-bottom: 3rem;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 13.8rem;
  border-radius: ${smallBorderRadius};
  object-fit: cover;
  margin-bottom: 1.3rem;
`;

export const Product = styled.p`
  font-size: 1.2rem;
  line-height: 1.6rem;
  margin-bottom: 0.5rem;
  color: #8c8c8c;
`;

export const Price = styled.p`
  color: #273b4a;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.6rem;
`;