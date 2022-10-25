import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled(NavLink)`
  display: flex;
  align-items: center;
  color: var(--finosellGraySecondary);
  font-size: 1.6rem;
  margin-bottom: 3.5rem;
  font-weight: 600;
  transition: 0.3s ease;

  &.active,
  &:hover,
  &:active {
    color: var(--finosellBluePrimary);

    transform: scale(1.05);
  }

  .icon {
    margin-right: 2rem;
    font-size: 2.5rem;
  }
`;
