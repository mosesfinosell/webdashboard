import styled from "styled-components"
import {smallBorderRadius} from "../../Styles"


export const Options = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: ${20 * 0.063}rem;
    
`

export const Option = styled.div`
    border-radius: ${smallBorderRadius};
    border: 0.063rem solid #d9d9d9;
    width: ${325 * 0.063}rem;
    padding: ${34 * 0.063}rem ${34 * 0.063}rem ${36 * 0.063}rem;
    margin: ${5 * 0.063}rem;

    h3{
        color: #273B4A;
        margin-bottom: ${11 * 0.063}rem;
        font-weight: 700;
        line-height: ${21 * 0.063}rem;
        font-size: ${21 * 0.063}rem;
    }

    p{
        color: #8C8C8C;
        font-size: ${14 * 0.063}rem;
        line-height: ${17 * 0.063}rem;
    }
`

export const Image = styled.img`
    margin-bottom: ${36 * 0.063}rem;
    height: ${79 * 0.063}rem;
`


export const Login = styled.p`
    color: #273B4A;
    font-weight: ${18 * 0.063}rem;
    line-height: ${23 * 0.063}rem;
    text-align: center;
    span{
        color: #D6AA1B;
    }
`