import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: ${(prop) => prop.width};
  margin: 0 auto 2rem;
  transition: all 3s ease;
  .error-message {
    color: var(--finosellRedPrimary);
    font-weight: 500;
    font-size: 1rem;
    padding: 0 0.1rem;

    @media only screen and (min-width: 800px) {
      font-size: 1.4rem;
    }
  }

  @media only screen and (min-width: 800px) {
    margin-bottom: 3rem;
  }
`;

export const FieldContainer = styled.div`
  width: 100%;
  height: 6rem;
  position: relative;

  @media only screen and (min-width: 800px) {
    height: 6.3rem;
  }
`;

export const Field = styled.input`
  border-radius: 0px 11px 11px 11px;
  width: 100%;
  height: 100%;
  border: solid 0.1rem #d9d9d9;
  background: #fafafa;
  padding-left: 4.3rem;
  font-size: 1.2rem;
  line-height: 1.6rem;
  font-weight: 500;
  &:hover,
  &:focus,
  &:active {
    background: var(--finosellYellowSecondary);
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
    padding-left: 5.4rem;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  line-height: 1.4rem;
  font-weight: 500;
  color: var(--finosellBluePrimary);

  @media only screen and (min-width: 800px) {
    font-size: 1.5rem;
    line-height: 1.9rem;
  }

  .required {
    color: var(--finosellRedPrimary);
  }
`;

export const InputLeft = styled.div`
  position: absolute;
  left: 1.5rem;
  bottom: 0;
  top: 0;
  margin: auto;
  width: 1.8rem;
  height: 1.8rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #8c8c8c;
  font-size: 2rem;
  svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 800px) {
    width: 2.2rem;
    height: 2.2rem;
  }
`;

export const Eye = styled.div`
  position: absolute;
  right: 1.5rem;
  bottom: 0;
  top: 0;
  margin: auto;
  width: 2.3rem;
  height: 2.3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.4rem;
    height: 1.4rem;
    cursor: pointer;
  }
`;
