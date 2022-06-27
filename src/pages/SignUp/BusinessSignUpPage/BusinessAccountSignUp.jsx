
import {
  Text,
  Link,
  createStandaloneToast,
} from "@chakra-ui/react";


import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as Yup from "yup";
import { useState } from "react";
import {
  
  FaPhone,
  FaEnvelope,
  FaIndustry,
} from "react-icons/fa";
import {createAccount} from "../../../ReduxContianer/BusinessSignup/signupActions";
import axios from "axios";
import "../../../components/auth.css";
import { useFormik } from "formik";

import FormTitle from "../../../components/Form/FormTitle"
import CustomField from "../../../components/Form/Input"
import Submit from "../../../components/Form/Submit"


export default function BusinessAccountSignUp() {
  
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const history = useNavigate();
  const toast = createStandaloneToast();
  

  // Function
  const handleClick = (values, tools) => setShow(!show);

  const onSubmit = (values, tools) => {
    
    createAccount(dispatch, values)
    tools.resetForm()
    history("/verify-business")
    // setIsLoading(true);

    
  };

  //Validation
  // address: Yup.string().required("Address is required"),
  // industry: Yup.string().required("Industry is required"),
  // password: Yup.string()
  //   .min(5, "Too short")
  //   .max(9, "Okay")
  //   .required("Password is required"),
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    tel: Yup.number()
      .typeError("Phone number must be digits")
      .required("Phone number is required"),
   
  });
  const initialValues = {
    name: "",
    email: "",
    tel:""
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  

  return (
      <>
      <FormTitle title="Create a business account" text="Use your business information" />
        
      <form onSubmit={formik.handleSubmit}>
        
        <CustomField type="name" Left={FaIndustry} formik={formik} label="Business Name" placeholder="Jumoke Adetola" />
        <CustomField type="email" Left={FaEnvelope} formik={formik} label="Business Email" placeholder="Email Address" />
        <CustomField type="tel" Left={FaPhone} formik={formik} label="Phone Number" placeholder="08012345678" />
        <Submit type="submit" >Continue</Submit>
        
      </form>
      <Text
          fontSize="16px"
          // lineHeight="5"
          style={{
            justifyContent: "center",
            display: "flex",
            paddingTop: "0.2rem",
            paddingBottom: "0.4rem",
          }}
        >
          Already have an account?
          <Text as={Link} pl="2" to="/business-signin" color="yellow.500">
            Login
          </Text>
        </Text>
      </>
  );
}
