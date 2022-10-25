import styled from "styled-components";

export const Form = styled.form`
  padding: 5rem 4rem;
  background: #fff;
  width: 80rem;
  border-radius: var(--smallBorderRadius);
  .row {
    display: flex;
    gap: 9rem;
    margin-bottom: 4rem;
    /* align-items: center;

    justify-content: space-between; */
  }
  .info {
    color: var(--finosellBluePrimary);
    font-size: 1.8rem;
    font-weight: 700;
    width: 20rem;
  }
  .fields {
    width: 50%;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
  img {
    width: 100%;
    height: 100%;
  }

  .img {
    overflow: hidden;
    border-radius: var(--smallBorderRadius);
    width: 100%;
    height: 100%;
    border: solid 0.1rem var(--finosellGraySecondary);
  }

  label {
    background: var(--finosellYellowPrimary);
    width: 5rem;
    height: 5rem;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--smallBorderRadius);
    position: absolute;
    right: -2rem;
    bottom: -2rem;
    cursor: pointer;
  }

  input {
    display: none;
  }
`;
