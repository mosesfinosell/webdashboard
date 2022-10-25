import styled from "styled-components";

export const Tabs = styled.div`
  margin-bottom: 8rem;
  height: 13rem;
  .buttons {
    margin-bottom: 3rem;
  }
  button {
    border-radius: var(--smallBorderRadius);
    padding: 1rem 2rem;
    color: var(--finosellBluePrimary);
    font-size: 1.6rem;
    font-weight: 600;
  }
  .active {
    color: #fff;
    background: var(--finosellYellowPrimary);
  }

  p {
    text-align: left;
    color: var(--finosellGrayPrimary);
    font-size: 3rem;
    font-weight: 500;

    span {
      color: var(--finosellBluePrimary);
      font-size: 4rem;
      font-weight: 700;
    }
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  button {
    background: #fff;
    padding: 2rem 5rem;
    border-radius: var(--smallBorderRadius);
    border: solid 0.1rem var(--finosellGraySecondaryTwo);
    display: flex;
    align-items: center;
    gap: 2.5rem;
    svg {
      color: var(--finosellYellowPrimary);
      font-size: 5rem;
    }

    p {
      color: var(--finosellBluePrimary);
      font-size: 1.8rem;
      font-weight: 700;
    }
  }
`;
