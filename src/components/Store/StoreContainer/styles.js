import styled from "styled-components"



export const Container = styled.main`
    max-width: 121.2rem;
    min-height: 90vh
    /* font-family: 'Circular Std', sans-serif; */
    padding: 4.3rem 2.5rem 0;
    justify-content: center;
    gap: 0.8rem; 
    margin: 1rem auto;
    
`;

export const SpinnerContainer = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Error = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        font-weight: 700;
        font-size: 2rem;
        color: #8C8C8C;
        text-align: center;
    }
`




