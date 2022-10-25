import styled from "styled-components";


export const TabsContainer = styled.div`
  margin-bottom: 5rem;
`;

export const Tab = styled.button`
  border-radius: var(--smallBorderRadius);
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ clicked }) => (clicked ? "#fff" : "var(--finosellBluePrimary)")};
  background: ${({ clicked }) =>
    clicked ? "var(--finosellYellowPrimary)" : "none"};

  &.active {
  }
`;

