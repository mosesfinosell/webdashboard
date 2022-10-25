import styled from "styled-components";

export const MetricsContainer = styled.div`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  gap: 0.12rem 0.22rem;
  width: 65rem;
  max-height: 65rem;

  border: 0.1rem solid var(--finosellGraySecondaryTwo);
  border-radius: var(--smallBorderRadius);
  overflow: hidden;

  p {
    background: #fff;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    .title {
      font-size: 1.5rem;
      color: var(--finosellGrayPrimary);
    }
    .info {
      color: var(--finosellBluePrimary);
      font-size: 3rem;
      font-weight: 700;
    }
  }
`;
