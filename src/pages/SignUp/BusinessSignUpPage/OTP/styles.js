import styled from "styled-components"
import {smallBorderRadius} from "../../../../Styles"

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${90 * 0.063}rem auto ${25 * 0.063}rem;

    
`

export const Hidden = styled.input`
    position: absolute;
    z-index: -1;
    opacity: 0;
`

export const Input = styled.div` 
    border-radius: ${smallBorderRadius};
    padding: ${20 * 0.063}rem;
    border: #D9D9D9 0.063rem solid;
    background: #FAFAFA;
    width: ${93 * 0.063}rem;
    height: ${90 * 0.063}rem;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin: ${6 * 0.063}rem;

    input{
        border: none;
        width: 100%;
        height: 100%;
        border-radius: 0;
        border-bottom: solid #000000 0.063rem;
        outline: none;
        background: none;
        text-align: center;
        font-size: ${28 * 0.063}rem;
        font-weight: 700;
        margin: 0;
    }
`

export const Resend = styled.p`
    color: ${prop => prop.resend ? "#D6AA1B" : '#8C8C8C'};
    font-weight: 700;
    font-size: ${18 * 0.063}rem;
    line-height: ${23 * 0.063}rem;
    text-align: center;
`