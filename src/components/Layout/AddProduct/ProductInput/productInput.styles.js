import styled from "styled-components";

export const ProductSection = styled.div`
  margin: 2rem auto;
  border-bottom: solid 0.1rem var(--finosellGraySecondaryTwo);

  .flex-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

export const SmallButton = styled.button`
  color: #ffffff;
  padding: 1rem 1.4rem;
  background: var(--finosellYellowPrimary);
  border-radius: 0rem 1rem 1rem 1rem;
  margin: auto;
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 1.4rem;
`;
