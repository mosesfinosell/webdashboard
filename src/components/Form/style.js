import styled from "styled-components";
import { borderRadius, smallBorderRadius } from "../../Styles";

export const FormTitleContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 3.5rem;
  width: 45.3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-bottom: 2.8rem;
  }
  h3 {
    margin-bottom: 1rem;
    font-size: 3.6rem;
    line-height: 3.6rem;
    color: #273b4a;
    font-weight: 700;
  }
  p {
    color: #8c8c8c;
    font-size: 1.8rem;
    line-height: 2.3rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${(prop) => prop.width};
  margin: 0 auto 2rem;
  transition: all 3s ease;
  .error-message {
    color: var(--finosellRedPrimary);
    font-weight: 500;
    font-size: 1rem;
    padding: 0 0.1rem;

    @media only screen and (min-width: 800px) {
      font-size: 1.4rem;
    }
  }

  @media only screen and (min-width: 800px) {
    margin-bottom: 3rem;
  }
`;

export const FieldContainer = styled.div`
  width: 100%;
  height: 6rem;
  position: relative;

  @media only screen and (min-width: 800px) {
    height: 7rem;
  }
`;

export const Field = styled.input`
  border-radius: 0px 11px 11px 11px;
  width: 100%;
  height: 100%;
  border: solid 0.1rem #d9d9d9;
  background: #fafafa;
  padding-left: 5.4rem;
  font-size: 1.8rem;
  line-height: 2.2rem;
  &:focus {
    background: #fdf9ed;
    border-color: #f7e8b5;
    box-shadow: none;
    outline: none;
    & + div {
      color: #d6aa1b;
    }
  }
  @media only screen and (min-width: 768px) {
    padding-left: 7.4rem;
  }
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  line-height: 1.4rem;
  font-weight: 500;
  color: var(--finosellBluePrimary);

  @media only screen and (min-width: 800px) {
    font-size: 1.5rem;
    line-height: 1.9rem;
  }

  .required {
    color: var(--finosellRedPrimary);
  }
`;

export const InputLeft = styled.div`
  position: absolute;
  left: 1.5rem;
  bottom: 0;
  top: 0;
  margin: auto;
  width: 2.3rem;
  height: 2.3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #8c8c8c;
  font-size: 2rem;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Submit = styled.div`
  // border-radius: ${smallBorderRadius};
  // background: #d6aa1b;
  // border: none;
  // outline: none;
  // width: ${0.063 * 650}rem;
  // height: ${0.063 * 90}rem;
  //display: flex;
  //align-items: center;
  //justify-content: center;
  // font-weight: 400;
  // color: #fff;
  // font-size: ${0.063 * 18}rem;
  // line-height: ${0.063 * 22}rem;
  margin-left: 28rem;
  margin-bottom: 15px;
  @media only screen and (max-width: 768px) {
    margin-left: 8rem;
  }
`;
