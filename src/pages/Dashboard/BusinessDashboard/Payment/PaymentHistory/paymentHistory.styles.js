import styled from "styled-components";
import { CustomButton } from "../../../../../components/Button/button.styles";

export const ContentContainer = styled.div`
  background: #fff;

  width: 50rem;
  border-radius: var(--smallBorderRadius);
  ul {
    display: flex;
    gap: 1rem;
    list-style: none;
    font-size: 700;
    color: var(--finosellGraySecondary);
    font-size: 1.8rem;
    padding: 4rem 2.5rem 1rem;

    border-bottom: 0.1rem solid var(--finosellGraySecondaryThree);

    li {
      cursor: pointer;
    }

    .active {
      color: var(--finosellBluePrimary);
    }
  }
  .content {
    padding-bottom: 3rem;
    overflow-y: auto;
    max-height: 93%;
  }
`;

export const InvoiceButton = styled(CustomButton)`
  margin-top: 2rem;
`;
