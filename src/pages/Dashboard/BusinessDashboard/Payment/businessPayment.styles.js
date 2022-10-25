import styled from "styled-components";

import { Content } from "../../../../components/Layout/DashboardLayout/dashboardLayout.styles";

export const PaymentContainer = styled.div`
  h1 {
    margin-bottom: 5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 3rem;
`;

export const Transactions = styled.div``;

export const PaymentForm = styled.form`
  background: #fff;
  padding: 4rem;
  width: 50rem;
  overflow-y: auto;
  height: 83%;
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

export const PaymentSmallButton = styled.button`
  color: #ffffff;
  padding: 1rem 1.4rem;
  background: var(--finosellYellowPrimary);
  border-radius: 0rem 1rem 1rem 1rem;
  margin: auto;
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 1.4rem;
`;


