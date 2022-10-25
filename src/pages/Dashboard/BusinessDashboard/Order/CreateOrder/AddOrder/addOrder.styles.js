import styled from "styled-components";
import { CustomButton } from "../../../../../../components/Button/button.styles";

export const AddOrderContainer = styled.div`
  height: 100%;

  h4 {
    color: var(--finosellGrayPrimary);
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
  }
`;

export const AddOrderForm = styled.form`
  background: #fff;
  padding: 4rem;
  width: 50rem;
  overflow-y: auto;
  height: 93%;
  border-radius: var(--smallBorderRadius);

  h3 {
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: 4rem;
  }

  h4 {
    color: var(--finosellBluePrimary);
    font-size: 1.4rem;
    font-weight: 700;
  }

  .products {
    margin: 2rem auto;
    width: 100%;
    display: block;
  }
`;

export const OrderSmallButton = styled.button`
  color: #ffffff;
  padding: 1rem 1.4rem;
  background: var(--finosellYellowPrimary);
  border-radius: 0rem 1rem 1rem 1rem;
  margin: auto;
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 1.4rem;
`;

export const AddProductButton = styled(CustomButton)`
  color: var(--finosellBluePrimary);
  background: #fff;
  border: solid 0.1rem var(--finosellYellowPrimary);
  gap: 1.5rem;
`;
