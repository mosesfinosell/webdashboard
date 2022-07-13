import styled from "styled-components"
import {borderRadius, smallBorderRadius} from "../../Styles"

export const FormTitleContainer = styled.div`
    margin: 0 auto;
    margin-bottom: ${35 * 0.063}rem;
    width: ${0.063 * 453}rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        margin-bottom: ${0.063 * 28}rem;
    }
    h3{
        margin-bottom: ${0.063 * 10}rem;
        font-size: ${36 * 0.063}rem;
        line-height: ${36 * 0.063}rem;
        color: #273B4A;
        font-weight: 700;
    }
    p{
        color: #8C8C8C;
        font-size: ${18 * 0.063}rem;
        line-height: ${23 * 0.063}rem;
    }
`

export const Container = styled.div`
    width: ${prop=>typeof prop.width === 'number' ? `${prop.width * 0.063}rem` : prop.width};
    margin: 0 auto ${0.063 * 20}rem;
    transition: all 3s ease;

    .error-message{
        color: red;
        font-weight: 500;
        font-size: 0.8rem;
        padding:0 0.1rem;
    }
`

export const FieldContainer = styled.div`
    width: 100%;
    height: ${70 * 0.063}rem;
    position: relative;
    
    @media only screen and (min-width: 768px){
        height: ${90 * 0.063}rem;
    }
`

export const Field = styled.input`
    border-radius: 0px 11px 11px 11px;
    width: 100%;
    height: 100%;
    border: solid ${0.063 * 1}rem #D9D9D9;
    background: #FAFAFA;
    padding: ${0.063 * 34}rem ${0.063 * 34}rem ${0.063 * 34}rem ${0.063 * 54}rem;
    font-size: ${0.063 * 18}rem;
    line-height: ${0.063 * 22}rem;
        &:focus{
        background: #FDF9ED;
        border-color: #F7E8B5;
        box-shadow: none;
        outline: none;

        & + div{
            color: #D6AA1B;
        }
    }

    @media only screen and (min-width: 768px){
        padding: ${0.063 * 34}rem ${0.063 * 34}rem ${0.063 * 34}rem ${0.063 * 74}rem;
    }
`

export const Label = styled.label`
    margin-bottom: ${11 * 0.063}rem;
    font-size: ${15 * 0.063}rem;
    line-height: ${19 * 0.063}rem;
    font-weight: 400;
`

export const InputLeft = styled.div`
    height: 100%;
    position: absolute;
    left: 1.5rem;
    bottom: 0;
    top: 0;
    margin: auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8C8C8C;
    font-size: ${25 * 0.063}rem;
`

export const Submit = styled.button`
    border-radius: ${smallBorderRadius};
    background: #D6AA1B;
    border: none;
    outline: none;
    width: ${0.063 * 650}rem;
    height: ${0.063 * 90}rem;
    display:flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    color: #fff;
    font-size: ${0.063 * 18}rem;
    line-height: ${0.063 * 22}rem;
    margin: 0 auto ${0.063 * 20}rem;
`