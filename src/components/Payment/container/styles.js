import styled from "styled-components"

export const Content = styled.div`
  background: #ffffff;
  border: 0.5px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 0px 21px 21px 21px;
  padding-bottom: 3rem;
  /* margin: 0 1.5rem; */

  margin: 1.5rem;
  width: 90%;
  max-width: 71.3rem;
`;
export const Page = styled.div`
  display: flex;
  flex-direction: column;
  background: #e5e5e5;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 0.1rem;

  /* font-family: 'Circular Std', sans-serif; */
  .logo {
    margin-bottom: 4.2rem;
  }

  @media only screen and (min-width: 768px) {
    padding: 3rem;
  }
`;