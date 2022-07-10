import styled from "styled-components"

export const SpinnerContainer = styled.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

export const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1.5rem;
  min-height: 60vh;
`

export const LoadMore = styled.div`
  width: 100%;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;  

`

export const Error = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;

  p{
    color: #8C8C8C;
    font-weight: 700;
    text-align: center;
    font-size: 2rem;
  }
`