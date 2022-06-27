import styled from "styled-components"
import {Outlet} from "react-router-dom"
import {borderRadius} from "../../Styles"

const AuthContainer = () => {
  return (
    <>
    <Main>
    <Container>
        <Outlet />
    </Container>
    </Main>
    </>
    
  )
}

export default AuthContainer

const Main  = styled.main`
    background: #fafafa;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
    ${borderRadius};
    width: ${0.063 * 813}rem;
    margin: ${0.063 * 106}rem auto;
    /* height: 90%; */
    background: #ffffff;
    border: 0.5px solid #d9d9d9;
    box-sizing: border-box;
    padding: ${0.063 * 49}rem 0;
`