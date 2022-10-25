import styled from "styled-components";
import { PrimaryParagraph, PrimarySection } from "./index";

export const YellowParagraph = styled(PrimaryParagraph)`
  font-weight: 700;
  color: #d6aa1b;
  line-height: 2.3rem;
  font-size: 1.8rem;
  margin-bottom: 2rem;

  @medi only screen and (min-width: 800px) {
    line-height: 3.3rem;
    font-size: 2.5rem;
  }
`;
export const List = styled.ul`
  color: #8c8c8c;
  padding-left: 1.2rem;
  font-size: 1.4rem;
  line-height: 1.8rem;
  margin-bottom: 2rem;
  font-weight: 500;

  @media only and (min-width: 768px) {
  }
`;
export const ProductSectionImg = styled.div`
  margin-bottom: 6rem;
`;
export const ProductSectionContent = styled.div`
  @media only screen and (min-width: 768px) {
    width: 73.6rem;
  }
`;

export const ProductSection = styled(PrimarySection)`
  margin-bottom: 10rem;
  @media only screen and (min-width: 800px) {
    margin-bottom: 17.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${ProductSectionContent} {
      margin: 0;
      margin-left: 9rem;
    }

    &.reverse {
      flex-direction: row-reverse;
      ${ProductSectionContent} {
        margin: 0;
        margin-right: 9rem;
      }
    }
  }
`;
export const TopSection = styled(ProductSection)`
  @media only screen and (min-width: 800px) {
    margin-bottom: 10rem;
  }
`;
