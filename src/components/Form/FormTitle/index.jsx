import React from "react";
import logo from "../../../assets/Logomark.png";

import { CustomHeaderContainer } from "./customHeader.styles";

export const CustomHeader = ({ title, text }) => {
  return (
    <CustomHeaderContainer>
      <div className="imgcontainer">
        <img src={logo} alt="logo" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </CustomHeaderContainer>
  );
};
