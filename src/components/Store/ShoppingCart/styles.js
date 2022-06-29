import styled from "styled-components"
import {smallBorderRadius} from "../../../Styles"

export const CartContainer = styled.div`
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    left: ${prop=>prop.visible ? 0 : "100vw"};
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
    padding: ${58 * 0.063}rem ${41 * 0.063}rem ${38 * 0.063}rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .title{
        font-weight: 700;
        color: #273B4A;
        font-size: ${26 * 0.063}rem;
        line-height: ${26 * 0.063}rem;
        text-align: center;
    }
    svg{
        position: absolute;
        right: 2rem;
        top: 2rem;
        font-size: 2rem;
    }
    @media only screen and (min-width: 768px){
        width: ${768 * 0.063}rem;
        padding: ${78 * 0.063}rem ${81 * 0.063}rem;

        .title{
            font-size: ${36 * 0.063}rem;
            line-height: ${36 * 0.063}rem;
        }
    }
`
export const Path = styled.p`
    color: #A9BAC7;
    font-size: ${12 * 0.063}rem;
    line-height: ${15 * 0.063}rem;
    margin-bottom: ${19 * 0.063}rem;

    @media only screen and (min-width: 768px){
        font-size: ${14 * 0.063}rem;
        line-height: ${17 * 0.063}rem;  
    }
`
export const CartItems = styled.div`
    border-radius: ${smallBorderRadius};
    height: ${410 * 0.063}rem;
    overflow-x: hidden;
    overflow-y: scroll;

    margin-bottom: ${22 * 0.063}rem;

`
export const BreakDown = styled.div`
    
    font-size: ${18 * 0.063}rem;
    line-height: ${22 * 0.063}rem;
    flex-grow: 1;
    

    p{
        display: flex;
        justify-content: space-between;
        margin-bottom: ${18 * 0.063}rem;
    }
`

export const Content = styled.div`


    @media only screen and (min-width: 768px){
    
    }
`
export const Button = styled.button`
    width: 100%;
    border-radius: ${smallBorderRadius};
    background: #D6AA1B;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${70 * 0.063}rem;
    font-size: ${14  * 0.063}rem;
    line-height: ${18 * 0.063}rem;
    color: #fff;

    @media only screen and (min-width: 768px){
        height: ${90 * 0.063}rem;
        font-size: ${18  * 0.063}rem;
    line-height: ${22 * 0.063}rem;
    }

`