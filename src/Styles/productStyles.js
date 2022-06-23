import styled from "styled-components"
import {PrimaryParagraph, PrimarySection} from "./index"

export const YellowParagraph = styled(PrimaryParagraph)`
  font-weight: 700;
  color: #D6AA1B;
  line-height: ${23 * 0.063}rem;
  font-size: ${18 * 0.063}rem;
  margin-bottom: ${0.063 * 20}rem;

  @medi only screen and (min-width: 768px){
    line-height: ${33 * 0.063}rem;
    font-size: ${25 * 0.063}rem;
  }
`
export const List = styled.ul`
  color: #8C8C8C;
  padding-left: 1.2rem;
  font-size: ${0.063 * 14}rem;
  line-height: ${0.063 * 18}rem;
  margin-bottom: ${0.063 * 20}rem;
  font-weight: 500;
  

  @media only and (min-width: 768px){

  }
`
export const ProductSectionImg = styled.div`
  margin-bottom: ${0.063 * 60}rem;
  
`
export const ProductSectionContent = styled.div`
  
  @media only screen and (min-width: 768px){
      width: ${736 * 0.063}rem;
  }
`

export const ProductSection = styled(PrimarySection)`
  
  margin-bottom: ${100 * 0.063}rem;
  @media only screen and (min-width: 768px){
    margin-bottom: ${178 * 0.063}rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${ProductSectionContent}{
      margin: 0;
      margin-left: ${90 * 0.063}rem;
    }

    &.reverse{
      flex-direction: row-reverse;
      ${ProductSectionContent}{
        margin: 0;
        margin-right: ${90 * 0.063}rem;
      }
    }
  }
`
export const TopSection = styled(ProductSection)`
  @media only screen and (min-width: 768px){
    margin-bottom: ${100 * 0.063}rem;
  }
`
