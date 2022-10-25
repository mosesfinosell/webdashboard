import styled from "styled-components";
import { CustomButton } from "../../../../../../components/Button/button.styles";

export const ContentContainer = styled.div`
  background: var(--finosellGraySecondaryThree);
  position: relative;
  padding: 6rem 3rem;

  border-radius: var(--smallBorderRadius);

  h3 {
    text-align: center;
    margin: 2rem auto;
    font-size: 3rem;
    font-weight: 700;
    color: var(--finosellBluePrimary);
  }

  .close {
    position: absolute;
    right: 3rem;
    top: 3rem;
    font-size: 3rem;
    cursor: pointer;
  }

  .details {
    max-height: 45rem;
    overflow-y: scroll;

    width: 60rem;

    .info {
      border: solid 0.1rem var(--finosellGraySecondaryTwo);
      border-radius: var(--smallBorderRadius);
      width: 100%;
      overflow: hidden;
      overflow: hidden
      overflow: hidden
      margin-right: 1rem;
    }
    .mb{
      margin-bottom: 2rem;
    }
    h4 {
      font-weight: 600;
      font-size: 1.4rem;
      margin: 2rem auto;
      color: var(--finosellBluePrimary);
    }
    p {
      background: #fff;
      width: 100%;
      padding: 2rem 1.5rem;
      display: flex;
      justify-content: space-between;
      gap: 3rem;
      font-size: 1.2rem;
      border-bottom: solid 0.1rem var(--finosellGraySecondaryTwo);
      &:last-child {
        border: none;
      }

      .title {
        color: var(--finosellGrayPrimary);
      }
      .value {
        color: var(--finosellBluePrimary);
        font-size: 1.4rem;
        font-weight: 700;
      }
    }
  }
`;

export const InvoiceButton = styled(CustomButton)`
  margin-top: 2rem;
`;
