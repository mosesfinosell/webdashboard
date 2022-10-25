import styled, { keyframes } from "styled-components";

const spinner = keyframes`
  from {
    transform: rotateZ(0);
  } to {
    transform: rotateZ(360deg);
  }
`;

export const CustomButton = styled.button`
  color: #ffffff;
  padding: 0.9rem 0.8rem;
  background: var(--finosellYellowPrimary);
  border-radius: 0rem 1rem 1rem 1rem;
  font-size: ${({ fontSize }) => fontSize ?? "1.2rem"};
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ margin }) => margin ?? "auto"};
  max-width: ${({ width }) => width ?? "55rem"};
  width: ${({ width }) => width ?? "100%"};
  height: ${({ height }) => height ?? "6rem"};

  @media only screen and (min-width: 800px) {
    font-size: ${({ fontSize }) => fontSize ?? "2rem"};
    height: ${({ height }) => height ?? "6.5rem"};
    padding: 1.8rem 2.8rem;
  }

  &:disabled {
    span {
      display: none;
    }
    &:before {
      content: "";
      border: #fff 0.12rem solid;
      border-bottom-color: var(--finosellYellowPrimary);
      border-radius: 50%;
      width: 2.5rem;
      height: 2.5rem;
      animation: ${spinner} 0.8s infinite linear;
    }
  }
`;
