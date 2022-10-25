import styled, { keyframes } from "styled-components";

const modalOPenAnimation = keyframes`
    from {
        display: none;
        opacity: 0;
    }
    to{
        display: flex;
        opacity: 1;
    }
`;
const modalCloseAnimation = keyframes`
from{
    display: flex;
        opacity: 1;
}
    to {
        display: none;
        opacity: 0;
    }
    
`;

export const ModalOverlay = styled.div`
  &.${({ className }) => className} {
    background: rgba(0, 0, 0, 0.2);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;

    display: ${({ isOPen }) => (isOPen ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: display 2s ease;
  }
`;

export const ModalContent = styled.div``;
