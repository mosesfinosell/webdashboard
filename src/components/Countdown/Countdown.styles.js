import styled from "styled-components";

export const CountdownView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  min-height: 10rem;

  .countdown {
    color: var(--finosellGrayPrimary);
    text-align: center;
    font-size: 1.4rem;
    .time {
      font-size: 1.2rem;
    }
  }

  .resend {
    background-color: var(--finosellYellowPrimary);
    color: #fff;
    cursor: pointer;
    padding: 1.2rem 3rem;
    border-radius: 1rem;
    border: none;
    font-weight: 700;
    font-size: 1.4rem;
    margin-top: 3rem;

    @media only screen and (min-width: 800px) {
      font-size: 1.8rem;
    }
  }
`;
