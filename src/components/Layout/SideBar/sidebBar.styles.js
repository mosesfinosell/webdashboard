import styled from "styled-components";

export const SideBarContainer = styled.div`
  height: 100%;
  background-color: #fff;
  width: 280px;
  z-index: 5;
  padding-top: 4%;
  //padding-left: 6rem;
  overflow: hidden;
  border-right: 1px solid var(--finosellGraySecondaryTwo);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  box-shadow: #adadad;

  .logo {
    padding: 1rem 0 7rem;
    cursor: pointer;
  }
`;

export const Navigation = styled.div``;

export const Logout = styled.button`
  display: flex;
  align-items: center;
  color: var(--finosellGraySecondary);
  font-size: 1.8rem;
  margin-bottom: 3.5rem;
  font-weight: 500;
  transition: 0.3s ease;

  &.active,
  &:hover,
  &:active {
    color: var(--finosellBluePrimary);
  }

  .icon {
    margin-right: 2rem;
    font-size: 2.5rem;
  }
`;
