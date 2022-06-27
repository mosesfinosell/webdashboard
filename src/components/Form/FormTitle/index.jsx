import React from 'react'
import logo from "../../../assets/Logomark.png";
import {FormTitleContainer} from "../style"

const Index = ({title, text}) => {
  return (
    <FormTitleContainer>
        <div className="imgcontainer">
          <img src={logo} alt="logo" />
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
    </FormTitleContainer>
  )
}

export default Index