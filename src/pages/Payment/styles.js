import styled from "styled-components"
import { smallBorderRadius } from "../../Styles"



export const Title = styled.h1`
  color: #273b4a;
  font-size: 3rem;
  line-height: 3.6rem;
  font-weight: 700;
  margin-bottom: 4rem;
  text-align: center;
  padding-top: 9rem;
`;

export const Method = styled.p`
  color: #d6aa1b;
  font-size: 1.8rem;
  line-height: 2.2rem;
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  padding: 0 2rem;
  margin-bottom: 1.6rem;
  gap: 0.6rem;

  @media only screen and (min-width: 800px) {
    gap: 2rem;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const Info = styled.p`
  margin: auto;
  border-radius: ${smallBorderRadius};
  border: solid 0.1rem #d9d9d9;
  padding: 1.8rem 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  line-height: 2.2rem;

  .info-title {
    color: #8c8c8c;
  }
  .info-content {
    color: #273b4a;
    font-weight: 500;
  }

  @media only screen and (min-width: 768px) {
    padding: 2rem 1rem;
    width: 30.9rem;
  }
`;

export const OptionsContainer = styled.div`
  margin-bottom: 4rem;
  width: 100%;
  border-bottom: solid 0.1rem #d9d9d9;
`;

export const Option = styled.div`
  border-top: solid 0.1rem #d9d9d9;
  height: 8.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  font-size: 1.8rem;

  &.click {
    cursor: pointer;
  }

  .left {
    display: flex;
    align-items: center;
    height: 100%;
    color: #273b4a;
  }
  svg {
    display: block;
    color: #8c8c8c;
    width: $0.7rem;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 768px) {
    padding: 0 7.5rem;
  }
`;
export const Left = styled.p`
  color: #8c8c8c;
  font-size: 1.4 rem;
  line-height: 1.8rem;
`;

export const Right = styled.p`
  color: #273b4a;
  font-size: 1.8rem;
  line-height: 2.2rem;
`;
export const Error = styled.div`
    width: 100%;
    height: 100%;
    padding: 4rem 0;

    p{
        color: #8C8C8C;
        text-align: center;
        font-weight: 700;
        font-size: 1.4rem;
    }
`