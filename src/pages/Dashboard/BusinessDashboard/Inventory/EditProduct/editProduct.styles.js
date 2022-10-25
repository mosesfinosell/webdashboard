import styled from "styled-components";
import { Content } from "../../../../../components/Layout/DashboardLayout/dashboardLayout.styles";

export const Container = styled(Content)`
  h1 {
    margin-bottom: 10rem;
  }
`;

export const Form = styled.form`
  width: 50rem;
  margin-bottom: 4rem;
  background: #fff;
  padding: 4rem 3rem;
  border-radius: var(--smallBorderRadius);
  .flex-container {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;
