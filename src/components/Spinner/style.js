import styled from "styled-components"



export const Spinner = styled.div`
    position: relative;
    width:${props=>props.size * 0.063}rem;
    height: ${props=>props.size * 0.063}rem;
    &:after{
        content:"";
        position: absolute;
        right:0;
        top:0;
        width: 100%;
        height: 100%;
        border: ${props=>props.border * 0.063}rem solid #dddddd;
        border-bottom-color: ${props=>props.color};
        border-radius: 50%;
        animation: spin 1s ease both infinite;
    }

    @keyframes spin {
        from{
            transform: rotate(0turn)
        }
        to{
            transform: rotate(1turn)
        }
    }
`

export const SpinnerContainer = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
`