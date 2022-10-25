import styled from "styled-components";
import { CustomButton } from "../../../../../../components/Button/button.styles";

export const DetailsContainer = styled.div`
  padding: 7rem 7rem;
  position: relative;
  background: var(--finosellGraySecondaryThree);
  display: flex;
  gap: 2rem;
  border-radius: var(--smallBorderRadius);

  .x {
    font-size: 2.5rem;
    position: absolute;
    right: 2rem;
    top: 2rem;
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  width: 20rem;
  height: 20rem;
  border: solid 0.1rem var(--finosellGraySecondaryTwo);
  border-radius: var(--smallBorderRadius);
  background: #fff;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Details = styled.div`
  .values {
    border: solid 0.1rem var(--finosellGraySecondaryTwo);
    border-radius: var(--smallBorderRadius);
    width: 42rem;
    background: #fff;
  }
  p {
    border-bottom: solid 0.1rem var(--finosellGraySecondaryTwo);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6.8rem;
    padding: 2rem;

    &:last-child {
      border: none;
    }
  }

  .values__name {
    font-size: 1.4rem;
    font-weight: 550;
    color: var(--finosellGrayPrimary);
  }

  .values__value {
    color: var(--finosellBluePrimary);
    font-weight: 700;
    font-size: 1.8rem;
  }

  .available {
    color: var(--finosellYellowPrimary);
  }

  .unavailable {
    color: #b6546c;
  }

  .buttons {
    margin-top: 3rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  .button-content {
    display: flex;
    align-items: center;
    font-size: 1.4rem;

    svg {
      margin-right: 1rem;
    }
  }
`;

export const Edit = styled(CustomButton)`
  border: solid 0.1rem var(--finosellYellowPrimary);
  color: var(--finosellBluePrimary);
  background: #fff;
`;
