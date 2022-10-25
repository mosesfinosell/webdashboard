import styled from "styled-components"



export const Spinner = styled.span`
  position: relative;
  width: ${({ size }) => size ?? 8}rem;
  height: ${({ size }) => size ?? 8}rem;
  margin: ${({ margin }) => margin ?? "auto"};
  display: block;
  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: ${({ border }) => border ?? 0.5}rem solid #dddddd;
    border-bottom-color: ${({ color }) =>
      color ?? "var(--finosellYellowPrimary)"};
    border-radius: 50%;
    animation: spin 1s ease both infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0turn);
    }
    to {
      transform: rotate(1turn);
    }
  }
`;

export const SpinnerContainer = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
`