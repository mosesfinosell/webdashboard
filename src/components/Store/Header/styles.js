import styled from "styled-components"
import { smallBorderRadius } from "../../../Styles"

export const Head = styled.header`
    font-family: 'Circular Std', sans-serif;
    padding: ${43 * 0.063}rem ${25 * 0.063}rem 0;
    margin-bottom: ${25 * 0.063}rem;
`
export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${19 * 0.063}rem;

    svg{
        width: ${18 * 0.063}rem;
        height: ${18 * 0.063}rem;
    }

    @media only screen and (min-width: 768px){
        svg{
            display: none;
        }
    }
`
export const Logo = styled.div`
    display: flex;
    justify-content: flex-start;

    img{
        margin-right: ${10 * 0.063}rem;
        object-fit: contain;
        width: ${35 * 0.063}rem;
        height: ${35 * 0.063}rem;
    }
    .info{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .info__name{
        color: #273B4A;
        font-weight: 700;
        font-size: ${21 * 0.063}rem;
        line-height: ${21 * 0.063}rem;
    }
    .info__location{
        font-size: ${10 * 0.063}rem;
        line-height: ${12 * 0.063}rem;
        color: #8C8C8C;
    }
`

export const Search = styled.div`
    position: relative;
    height: ${72 * 0.063}rem;

    svg{
        position: absolute;
        left: 2rem;
        bottom: 0;
        top: 0;
        margin: auto;
    }
`
export const SearchIcon = styled.div`
    
`

export const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    border: ${1 * 0.063}rem solid #D9D9D9;
    background: #FAFAFA;
    border-radius: ${smallBorderRadius};
    padding: ${27 * 0.063}rem ${41 * 0.063}rem ${27 * 0.063}rem ${60 * 0.063}rem;
    outline: none;
`

export const Socials = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: ${0.063 * 25}rem;
`
export const Social = styled.a`
    background: #FDF9ED;
    outline: none;
    border: none;
    width: ${0.063 * 35}rem;
    height: ${0.063 * 35}rem;
    margin: ${5 * 0.063}rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${smallBorderRadius};
    
    svg{
        width: ${20 * 0.063}rem;
        height: ${20 * 0.063}rem;
    }
    
`
export const FlexContainer = styled.div`

`