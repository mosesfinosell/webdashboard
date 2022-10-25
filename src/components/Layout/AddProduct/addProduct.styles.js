import styled from "styled-components";
import { CustomButton } from "../../Button/button.styles";

export const Container = styled.div`
  margin: 2rem auto;
  width: 100%;
  display: block;

  h4 {
    color: var(--finosellBluePrimary);
    font-size: 1.4rem;
    font-weight: 700;
  }
`;

export const AddProductButton = styled(CustomButton)`
  color: var(--finosellBluePrimary);
  background: #fff;
  border: solid 0.1rem var(--finosellYellowPrimary);
  gap: 1.5rem;
`;

export const ProductSection = styled.div`
  margin: 2rem auto;
  border-bottom: solid 0.1rem var(--finosellGraySecondaryTwo);

  .flex-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;
