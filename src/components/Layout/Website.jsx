import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Website = () => {
  return (
    <>
      <Header />
      <AppContainer>
        <Outlet />
      </AppContainer>
      <Footer />
    </>
  );
};

export default Website;

export const AppContainer = styled.div`
  max-width: 150rem;
  width: 95%;
  margin: 0 auto;
  margin-top: 3.1rem;
  position: relative;

  @media only screen and (min-width: 800px) {
    margin-top: 5rem;
  }
  @media only screen and (min-width: 1250px) {
    margin-top: 5rem;
  }
`;
