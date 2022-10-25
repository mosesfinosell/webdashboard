import styled from "styled-components";

export const ModalContainer = styled.div`
  position: relative;
  background: #fff;
  border-radius: var(--smallBorderRadius);
  padding: 4rem 2rem;

  h3 {
    font-weight: 700;
    font-size: 1.8rem;
    margin-bottom: 3rem;
    text-align: center;
  }

  svg {
    position: absolute;
    right: 2rem;
    top: 2rem;
    font-size: 2.5rem;
    cursor: pointer;
  }
`;

export const Form = styled.form`
  width: 60rem;
`;
