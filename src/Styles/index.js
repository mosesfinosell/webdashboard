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
    .form-error{
        color: rgb(245, 79, 79);
        font-weight: 500;
        font-size: 0.3rem;
    }
`
export const marginMobile = `${25 * 0.063}rem`;
export const margin = `${165 * 0.063}rem`;
export const headerHeightMobile = `${60 * 0.063}rem`
export const borderRadius = `border-radius: ${0.063 * 20}rem ${0.063 * 50}rem ${0.063 * 50}rem ${0.063 * 50}rem`


export const PrimaryTitle = styled.h1`
    font-size:${33 * 0.062}rem;
    line-height:${38*0.063}rem;
    margin-bottom: ${20 * 0.063}rem;
    font-weight: 500;
    color: #273B4A;
    @media only screen and (min-width: 768px){
        font-size: ${50 * 0.062}rem;
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

    .form-error{
    color: red;
    font-weight: 500;

  }

    @media only screen and (min-width: 768px){
        font-size: ${18*0.063}rem;
    }
`
export const PrimaryParagraph = styled.p`
    color: #8C8C8C;
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
    max-width: ${1212*0.063}rem;
    /* margin: 0 ${marginMobile}; */
    margin-top: ${31*0.063}rem;
    position: relative;
    
    @media only screen and (min-width: 768px){
        margin: 0 ${margin};
        margin-top: ${50*0.063}rem;
        
    }
    @media only screen and (min-width: 1200px){
        margin: 0 auto;
        margin-top: ${50*0.063}rem;
    }
`
export const baseLayout = `

`
export const headerHeight = `${75 * 0.063}rem`

export const Section = styled.section`

`
