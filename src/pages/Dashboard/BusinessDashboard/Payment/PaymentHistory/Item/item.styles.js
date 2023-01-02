import styled from "styled-components";

export const ItemContainer = styled.div`
  padding: 2rem 2.5rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid var(--finosellGraySecondaryThree);
  cursor: pointer;

  .status,
  .type {
    font-weight: 450;
    font-size: 1.2rem;
    color: var(--finosellGraySecondaryTwo);
  }
`;

export const Info = styled.div`
  display: flex;

  .icon {
    padding: 1rem;
    background: var(--finosellYellowSecondary);
    border-radius: var(--smallBorderRadius);
  }

  .name-container {
    margin-left: 1.3rem;
  }

  .name {
    font-weight: 700;
    font-size: 1.4rem;
    color: var(--finosellBluePrimary);
  }
`;

export const Price = styled.div`
  .type {
    font-weight: 700;
    font-size: 1.4rem;
  }
  .paid {
    color: #72ae1e;
    padding-left: 0;
  }
  .debt {
    color: #b6546c;
  }
`;