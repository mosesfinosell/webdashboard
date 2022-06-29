import styled from "styled-components"

export const CartContainer = styled.div`
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    right: ${prop=>prop.visible ? 0 : "100vw"};
    width: 100%;
    height: 100vh;
    transition: 0.3s ease;
    display: flex;
    justify-content: flex-end;

`

export const Cart = styled.div`
    background: #FAFAFA;
    width: 100%;
    height: 100%;
    padding: ${38 * 0.063}rem ${41 * 0.063}rem;
    position: relative;

    @media only screen and (min-width: 768px){
        width: ${768 * 0.063}rem;
        padding: ${78 * 0.063}rem ${81 * 0.063}rem;
    }
`

export const Content = styled.div`


    @media only screen and (min-width: 768px){
    
    }
`