import styled from "styled-components";
import { smallBorderRadius } from "../../../Styles";

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 55rem;
  margin: 0 auto 2rem;
  transition: all 3s ease;

  .error-message {
    color: var(--finosellRedPrimary);
    font-weight: 500;
    font-size: 1rem;
    padding: 0 0.1rem;
    text-transform: lowercase;

    @media only screen and (min-width: 800px) {
      font-size: 1.4rem;
    }
  }
  p {
    font-size: 1.2rem;
    line-height: 1.6rem;
    text-transform: capitalize;

    @media only screen and (min-width: 800px) {
      font-size: 1.4rem;
      line-height: 1.8rem;
    }
  }
`;

export const SelectButton = styled.button`
  border-radius: 0px 11px 11px 11px;
  outline: none;
  width: 100%;
  height: 6rem;
  border: solid 0.1rem #d9d9d9;
  background: #fafafa;
  padding: 0 1.5rem 0 4.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  text-align: left;

  &:hover,
  &:focus,
  &:active {
    background: #fdf9ed;
    border-color: #f7e8b5;
    box-shadow: none;
    outline: none;
    & + div {
      color: #d6aa1b;
      transition: 0.3s ease;
    }
    transition: 0.5s ease;
  }
  @media only screen and (min-width: 800px) {
    height: 6.3rem;
  }

  svg {
    transform: rotateZ(${({ open }) => (open ? "180deg" : "0deg")});
  }
  p {
    color: #000;
    background: none;
  }
  select {
    display: none;
  }
`;

export const SelectOptions = styled.div`
  position: absolute;
  top: 90%;
  left: 0;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;

  background: #fff;
  border: solid 0.1rem #d9d9d9;
  width: 90%;
  z-index: 3;

  max-height: ${({ height }) => height ?? "20rem"};

  box-shadow: 0.1rem 1rem 5rem -2rem rgba(0, 0, 0, 0.2);
  min-height: 7rem;

  p {
    padding: 1rem;
    cursor: pointer;
    color: var(--finosellBluePrimary);
    font-weight: 500;
    &:hover {
      background: var(--finosellGraySecondaryThree);
      font-weight: 600;
      transition: all 0.1s ease;
    }
  }

  ul {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    list-style: none;
    flex-grow: 1;
  }
`;
