import styled from "styled-components";

export const StoreLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StoreLinkFieldContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;

  label {
    color: var(--finosellBluePrimary);
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

export const StoreLinkField = styled.div`
  display: flex;
  height: 7.5rem;
  align-items: center;
  background: #fff;
  border: solid 0.1rem var(--finosellGraySecondaryTwo);
  border-radius: var(--smallBorderRadius);
  margin: 1rem 0 2rem;
  width: 65rem;
  position: relative;
  overflow: ${({ overflow }) => overflow ?? "visible"};

  p {
    padding: 1rem 2rem;
    color: var(--finosellBluePrimary);
    font-weight: 400;
    font-size: 1.8rem;
  }
  input {
    background: ${({ overflow }) =>
      overflow === "hidden" ? "#fff" : "var(--finosellGraySecondaryThree)"};
    height: 100%;
    flex-grow: 1;
    border: solid 0.1rem var(--finosellGraySecondaryTwo);
    border-bottom: none;
    border-top: none;
    font-size: 1.8rem;
    outline: none;
    padding: 0.1rem 2rem;

    &.copy {
      font-weight: 500;
      border: none;
    }
  }
  .message {
    position: absolute;
    right: -20rem;
    display: flex;
    align-items: center;

    svg {
      margin-right: 1rem;
    }
    .pass {
      color: #72ae1e;
    }
    .error {
      color: red;
    }
  }

  button {
    position: absolute;
    right: 4rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1.2rem;
    font-weight: 500;
    background: var(--finosellGraySecondaryTwo);
    border-radius: 0.3rem;
    padding: 0.4rem 1rem;

    svg {
      color: var(--finosellYellowPrimary);
    }
  }
`;

export const ModalContent = styled.div`
  padding: 4.5rem;
  border-radius: 1rem;
  background: #fff;
  position: relative;

  svg {
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 1.8rem;
    cursor: pointer;
  }

  h1,
  h4,
  p {
    text-align: center;
  }
  h4 {
    font-size: 1.8rem;
    margin-bottom: 2.2rem;
  }
  p {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 3rem;
  }
`;
