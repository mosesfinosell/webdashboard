import styled from "styled-components";

export const TableRow = styled.tr`
  height: 8rem;
  color: var(--finosellBluePrimary);
  font-weight: 700;
  font-size: 1.4rem;
  img {
    width: 4.4rem;
    height: 4.4rem;
    border-radius: var(--smallBorderRadius);
  }
  .name {
    div {
      display: flex;
      align-items: center;
      height: 100%;
      gap: 1rem;
    }
  }
  svg {
    font-size: 1.2rem;
  }
`;

export const Status = styled.td`
  color: ${({ available }) =>
    available ? "var(--finosellYellowPrimary)" : "#B6546C"};
`;
