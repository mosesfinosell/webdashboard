import styled from "styled-components"

export const Content = styled.div`
    background: #ffffff;
    border: 0.5px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 0px 21px 21px 21px;
    margin: 0 ${15 * 0.063}rem;
    width: 90%;

    @media only screen and (min-width: 768px){
        margin: ${15 * 0.063}rem;
        width: ${813 * 0.063}rem;
    }
`
export const Page = styled.div`
    display: flex;
    flex-direction: column;
    background: #e5e5e5;
    min-height: 100vh;
    align-items: center;
    justify-content: center;

    padding: 0.1rem;

    /* font-family: 'Circular Std', sans-serif; */
    .logo{
        margin-bottom: ${42 * 0.063}rem;
    }

    @media only screen and (min-width: 768px){
        padding: 3rem;
    }
`