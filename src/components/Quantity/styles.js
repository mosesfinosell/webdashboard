import styled from "styled-components"
import {smallBorderRadius} from "../../Styles"

const common = `
    flex-grow: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${21 * 0.063}rem;
    line-height: ${26 * 0.063}rem;
`

export const Container = styled.div`
    display: flex;
    border-radius: ${smallBorderRadius};
    border: solid ${1 * 0.063}rem #D9D9D9;
    background: #FAFAFA;
    width: ${prop=>prop.width * 0.063}rem;
    height: ${prop=>prop.height * 0.063}rem;
    overflow: hidden;
`

export const Minus = styled.button`
    ${common}
    &:active{
        background: #D9D9D9;
    }
`

export const Count = styled.p`
   ${common}
   border-right: solid ${1 * 0.063}rem #D9D9D9;
   border-left: solid ${1 * 0.063}rem #D9D9D9;
`

export const Add = styled.button`
    ${common}
    &:active{
        background: #D9D9D9;
    }
`