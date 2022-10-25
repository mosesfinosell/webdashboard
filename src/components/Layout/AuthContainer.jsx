import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { smallBorderRadius } from "../../Styles";

const AuthContainer = () => {
  return (
    <>
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </>
  );
};

export default AuthContainer;

const Main = styled.main`
  background: #fafafa;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3%;
`;
const Container = styled.div`
  border-radius: ${smallBorderRadius};
  width: 95%;
  max-width: 81.3rem;

  margin: auto;
  /* height: 90%; */
  background: #ffffff;
  border: 0.05rem solid #d9d9d9;
  box-sizing: border-box;
  padding: 3rem;

  @media only screen and (min-width: 800px) {
    padding: 4rem;
  }
`;
