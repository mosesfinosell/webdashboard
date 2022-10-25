import styled from "styled-components";
import { smallBorderRadius } from "../../../../Styles";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${90 * 0.063}rem auto ${25 * 0.063}rem;
`;

export const Hidden = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

export const Input = styled.div`
  border-radius: ${smallBorderRadius};
  padding: 1.6rem;
  border: #d9d9d9 0.1rem solid;
  background: #fafafa;
  width: 6rem;
  height: 6rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 0.6rem;

  @media only screen and (min-width: 800px) {
    padding: 2rem;
    width: 9.3rem;
    height: 9rem;
  }

  input {
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 0;
    border-bottom: solid #000000 0.1rem;
    outline: none;
    background: none;
    text-align: center;
    font-size: 1.8rem;
    padding-bottom: 0.2rem;
    font-weight: 700;
    margin: 0;

    @media only screen and (min-width: 800px) {
      font-size: 2.8rem;
    }
  }
`;

export const Resend = styled.p`
  color: ${(prop) => (prop.resend ? "#D6AA1B" : "#8C8C8C")};
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.3rem;
  text-align: center;
  margin-bottom: 20rem;
`;

export const Change = styled.div`
  border-radius: ${smallBorderRadius};
  text-align: center;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #273b4a;
  border: solid #d6aa1b 0.1rem;
  width: 65rem;
  height: 9rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #d6aa1b;
  }
`;
