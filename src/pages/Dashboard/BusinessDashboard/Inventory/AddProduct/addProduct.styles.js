import styled from "styled-components";
import { Content } from "../../../../../components/Layout/DashboardLayout/dashboardLayout.styles";

export const Container = styled(Content)`
  h1 {
    margin-bottom: 3rem;
  }
`;

export const Form = styled.form`
 
`;

export const Section = styled.section`
  display: flex;
  justify-content: flex-start;
  gap: 15rem;
  padding-bottom: 4rem;

  h2{
    color: var(--finosellBluePrimary);
    font-size: 1.8rem;
    font-weight: 700;
  }

  .left{
    width: 35rem;
  }

  .right {
    width: 100%;
    max-width: 50rem;
  }

  .flex-container{
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .
`;

export const ImageContainer = styled.div`
  width: 23rem;
  height: 23rem;
  position: relative;

  .container {
    border-radius: 1rem;
    border: solid 0.1rem var(--finosellGraySecondary);
    background: var(--finosellGraySecondaryThree);
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding: 0;
  }

  img {
    width: 100%;
    height: 100%;
  }
  input {
    display: none;
  }
  label {
    position: absolute;
    right: -1rem;
    bottom: -1rem;
    background: var(--finosellYellowPrimary);
    border-radius: var(--smallBorderRadius);
    color: #fff;
    padding: 1.5rem;
    cursor: pointer;
  }
`;
