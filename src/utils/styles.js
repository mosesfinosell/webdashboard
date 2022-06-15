import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin:0;
        padding:0;
    }
`
export const marginMobile = `${25 * 0.063}rem`;
export const headerHeightMobile = `${60 * 0.063}rem`


export const primaryTitle = styled.h1`
    font-size:${35 * 0.062}rem;
    line-height:${64*0.063}rem;
    font-weight: 500;
    @media only screen and (min-width: 768px){
        font-size: ${60 * 0.062}rem;
    }
`

export const PrimaryButton = styled.button`
     color: #ffffff;
    padding: 0.9rem 0.8rem;
    background: #d6aa1b;
    border-radius: 3.5px 10px 10px 10px;
    font-size: 20px;
    margin-top: 0.2rem;
`

export const headerHeight = `${75 * 0.063}rem`
