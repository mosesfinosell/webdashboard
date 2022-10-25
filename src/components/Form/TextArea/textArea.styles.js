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
  height: 8rem;
  position: relative;

  @media only screen and (min-width: 800px) {
    height: 13rem;
  }
`;

export const Field = styled.textarea`
  border-radius: 0 1rem 1rem 1rem;
  width: 100%;
  height: 100%;
  border: solid 0.1rem #d9d9d9;
  background: #fafafa;
  padding: 1.5rem;
  resize: none;
  font-size: 1.2rem;
  line-height: 1.6rem;
  font-weight: 500;

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
