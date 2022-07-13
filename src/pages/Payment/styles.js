import styled from "styled-components"
import { smallBorderRadius } from "../../Styles"



export const Title = styled.h1`
    color: #273B4A;
    font-size: ${36 * 0.063}rem;
    line-height: ${36 * 0.063}rem;
    font-weight: 700;
    margin-bottom: ${40 * 0.063}rem;
    text-align: center;
    padding-top: ${90 * 0.063}rem;
`

export const Method = styled.p`
    color: #D6AA1B;
    font-size: ${18 * 0.063}rem;
    line-height: ${18 * 0.063}rem;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    padding: 0 1rem;
    margin-bottom: ${16 * 0.063}rem;

    @media only screen and (min-width: 768px){
        flex-direction: row;
        justify-content: space-evenly;
    }
`

export const Info = styled.p`
    margin: auto;
    border-radius: ${smallBorderRadius};
    border: solid 0.063rem #D9D9D9;
    padding: ${18 * 0.063}rem ${10 * 0.063}rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1rem;
    font-size: ${18 * 0.063}rem;
    line-height: ${18 * 0.063}rem;

    .info-title{
        color: #8C8C8C;
    }
    .info-content{
        color: #273B4A;
    }

    @media only screen and (min-width: 768px){
        padding: ${26 * 0.063}rem ${15 * 0.063}rem;
        width: ${309 * 0.063}rem;
    }

` 

export const OptionsContainer = styled.div`
    margin-bottom: ${40 * 0.063}rem;
    width: 100%;
    border-bottom: solid 0.063rem #D9D9D9;
`

export const Option = styled.div`
    border-top: solid 0.063rem #D9D9D9;
    height: ${125 * 0.063}rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${25 * 0.063}rem;
    font-size: ${18 * 0.063}rem;
    cursor: pointer;

    .left{
        display: flex;
        align-items: center;
        height: 100%;
        color: #273B4A;
    }
    svg{
        display: block;
        color: #8C8C8C;
        width: ${7 * 0.063}rem;
        font-size: ${15 * 0.063}rem;
    }

    @media only screen and (min-width: 768px){
        padding: 0 ${75 * 0.063}rem;
    }
`
export const Left = styled.p`
    color: #8C8C8C;
    font-size: ${14 * 0.063}rem;
    line-height: ${14 * 0.063}rem;

`

export const Right = styled.p`
    color: #273B4A;
    font-size: ${18 * 0.063}rem;
    line-height: ${18 * 0.063}rem;
`
export const Error = styled.div`
    width: 100%;
    height: 100%;
    padding: 4rem 0;

    p{
        color: #8C8C8C;
        text-align: center;
        font-weight: 700;
        font-size: 1.4rem;
    }
`