import styled from "styled-components";

export const DashBoardContainer = styled.main`
  display: flex;
  height: 100vh;
  min-width: 150rem;
  width: 100%;
`;

export const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 4% 2% 2% 4%;
  height: 100%;
  overflow-y: auto;
  background: var(--finosellGraySecondaryThree);
  h1 {
    color: var(--finosellBluePrimary);
    font-size: 3rem;
    font-weight: 700;
  }
`;

export const Content = styled.div`
  padding: 4% 2% 2% 4%;
  height: 100%;
  overflow-y: auto;
  h1 {
    color: var(--finosellBluePrimary);
    font-size: 3rem;
    font-weight: 700;
  }
`;
