import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  position: relative;
  padding: 5rem 4rem;
  border-radius: var(--smallBorderRadius);
  width: 60rem;

  & > svg {
    position: absolute;
    top: 3rem;
    right: 3rem;
    font-size: 3rem;
    cursor: pointer;
  }
  & > h2 {
    color: var(--finosellBluePrimary);
    font-weight: 700;
    text-align: center;
    font-size: 3rem;
    margin-bottom: 5rem;
  }

  .copy {
    color: var(--finosellYellowPrimary);
    font-size: 1.8rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    margin: auto;
    margin-bottom: 3rem;
  }
`;
