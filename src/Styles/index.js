import styled, {createGlobalStyle} from "styled-components";

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
`
export const marginMobile = `${25 * 0.063}rem`;
export const margin = `${75 * 0.063}rem`;
export const headerHeightMobile = `${60 * 0.063}rem`
export const borderRadius = `border-radius: ${0.063 * 20}rem ${0.063 * 50}rem ${0.063 * 50}rem ${0.063 * 50}rem`


export const PrimaryTitle = styled.h1`
    font-size:${35 * 0.062}rem;
    line-height:${38*0.063}rem;
    font-weight: 500;
    @media only screen and (min-width: 768px){
        font-size: ${60 * 0.062}rem;
        line-height: ${64*0.063}rem;
    }
`

export const PrimaryButton = styled.button`
    color: #ffffff;
    padding: 0.9rem 0.8rem;
    background: #d6aa1b;
    border-radius: 3.5px 10px 10px 10px;
    margin-top: 0.2rem;
    font-size: ${12*0.063}rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 768px){
        font-size: ${18*0.063}rem;
    }
`
export const PrimaryParagraph = styled.p`
    color:#8C8C8C;
    line-height: ${18*0.063}rem;
    font-size:${14*0.063}rem;
    font-weight: 500;
    font-family: "DM sans", sans-serif;
    @media only screen and (min-width: 768px){
        line-height: ${24*0.063}rem;
        font-size:${20*0.063}rem;
    }
`
export const PrimarySection = styled.section`
    padding: 0 ${25*0.063}rem;
    @media only screen and (min-width: 768px){
        /* padding: 0 ${75*0.063}rem; */
        padding: 0;
    }
`

export const AppContainer = styled.div`
    max-width: ${1512*0.063}rem;
    /* margin: 0 ${marginMobile}; */
    margin-top: ${81*0.063}rem;
    
    @media only screen and (min-width: 768px){
        margin: 0 ${margin};
        margin-top: ${90*0.063}rem;
        
    }
    @media only screen and (min-width: 1800px){
        margin: 0 auto;
        margin-top: ${90*0.063}rem;
    }
`
export const baseLayout = `

`

export const headerHeight = `${75 * 0.063}rem`

export const Section = styled.section`

`
