import styled from "styled-components"
import {smallBorderRadius} from "../../../Styles"

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    width: ${158 *0.063}rem;
    margin-bottom: ${15 * 0.063}rem;
`

export const Img = styled.img`
    width: 100%;
    height: ${158 * 0.063}rem;
    border-radius: ${smallBorderRadius};
    object-fit: cover;
    margin-bottom: ${0.063 * 13}rem;

`

export const Product = styled.p`
    font-size: ${12 * 0.063}rem;
    line-height: ${15 * 0.063}rem;
    margin-bottom: ${5 * 0.063}rem;
    color: #8C8C8C;
`

export const Price = styled.p`
    color: #273B4A;
    font-weight: 700;
    font-size: ${12 * 0.063}rem;
    line-height: ${15 * 0.063}rem;
`