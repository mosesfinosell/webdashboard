import styled from "styled-components"
import {smallBorderRadius} from "../../../Styles"

export const Container =  styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 768px){
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
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

export const Image = styled.img`
    border-radius: ${smallBorderRadius};
    width: 100%;
    height: ${0.063 * 324}rem;
    object-fit: cover;
    margin-bottom: ${25 * 0.063}rem;

    @media only screen and (min-width: 768px){
        width: ${571 * 0.063}rem;
        height: ${571 * 0.063}rem;
        margin: 0;
        margin-right: ${0.063 * 115}rem;
        margin-bottom: ${0.063 * 95}rem;
    }

`

export const Content = styled.div`
    width: 100%;
    font-size: ${12 * 0.063}rem;
    line-height: ${15 * 0.063}rem;
    color: #273B4A;

    .name{
        font-size: ${21 * 0.063}rem;
        line-height: ${26 * 0.063}rem;
        margin-bottom: ${7 * 0.063}rem;
    }
    .price{
        font-size: ${14 * 0.063}rem;
        line-height: ${17 * 0.063}rem;
        font-weight: 700;
        margin-bottom: ${22 * 0.063}rem;
    }
    .quantity{
        margin-bottom: ${10 * 0.063}rem;
    }
    .quantity-controller{
        margin-bottom: ${25 * 0.063}rem;
    }

    .desc{
        color: #8C8C8C;
        margin-bottom: ${25 * 0.063}rem;
    }

    @media only screen and (min-width: 768px){
        width: ${374 * 0.063}rem;
        .name{
            font-size: ${36 * 0.063}rem;
            line-height: ${45 * 0.063}rem;
            margin-bottom: ${10 * 0.063}rem;
            color: #8C8C8C;
        }
        .price{
            font-size: ${36 * 0.063}rem;
            line-height: ${45 * 0.063}rem;
            margin-bottom: ${35 * 0.063}rem;
        }
        .quantity-controller{
            margin-bottom: ${35 * 0.063}rem;
        }
        .desc{
            font-size: ${14 * 0.063}rem;
            line-height: ${17 * 0.063}rem;
            margin-bottom: ${35 * 0.063}rem;
        }
    }

`

export const Button = styled.button`
    outline: none;
    border: none;
    border-radius: ${smallBorderRadius};
    width: 100%;
    height: ${72 * 0.063}rem;
    font-size: ${14 * 0.063}rem;
    line-height: ${17 * 0.063}rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #D6AA1B;
    color: #fff;
    margin-bottom: ${15 * 0.063}rem;
    

    &.color{
        background: #FDF9ED;
        color: #273B4A;
        border: solid ${1 * 0.063}rem #D6AA1B
    }
`

