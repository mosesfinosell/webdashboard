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

export const Download = styled.a`
  cursor: pointer;
  color: #fff;
  background: var(--finosellYellowPrimary);
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0.1rem 0.1rem 1.5rem rgba(0, 0, 0, 0.2);
  transition: 0.5s ease;

  &:hover,
  &:active {
    box-shadow: none;
  }
`;
