import { useState } from "react";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

import * as Yup from "yup";

import { FaPhone, FaEnvelope, FaLock } from "react-icons/fa";
import { MdAddBusiness } from "react-icons/md";

import { businessAccountRegister } from "../../../../network/auth";
import { createStoreMetrics } from "../../../../network/store";

import "../../../../components/auth.css";
import {
  CustomFormInput,
  CustomHeader,
  CustomSelect,
} from "../../../../components/Form";
import { LoginText, Form } from "./BusinessSignup.styles";
import { useFormik, useFormikContext } from "formik";

import { CustomButton } from "../../../../components/Button/button.styles";
import { useAddress } from "../../../../hooks/useAddress";

function BusinessAccountSignUp() {
  const industries = [
    "food",
    "wears",
    "electronics",
    "beauty products",
    "women accessories",
    "food and beverage",
    "kids",
    "others",
  ];

  const [isLoading, setIsLoading] = useState(false);

  const history = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter your business' name."),
    email: Yup.string()
      .email("Invalid Email")
      .required("Please enter your business email."),
    phone: Yup.number()
      .typeError("Please enter a valid phone number")
      .required("Please enter a valid phone number"),
    address: Yup.string()
      .required("Please enter your business' physical address.")
      .test(
        "dropdown_selection",
        "Please select address from the dropdown",
        function (value) {
          const { path, createError } = this;

          return !!suggestion;
        }
      ),
    industry: Yup.string().required("Industry is required"),
    password: Yup.string()
      .required("Please choose your password.")
      .min(6, "password should be at least 6 characters long")
      .matches(/[a-z]/, "password must contain at least 1 lower case letter")
      .matches(/[A-Z]/, "password must contain at least 1 upper case letter")
      .matches(/[0-9]/, "password must contain at least 1 number")
      .matches(/\W|_/, "password must contain at least 1 special character"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords don't match.")
      .required("Please confirm your password."),
  });

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",

    industry: "",
  };

  const onSubmit = (values) => {
    setIsLoading(true);
    const formData = {
      name: values.name,
      email: values.email,
      password: values.password,
      phone_number: values.phone.replace(/0/, "234"),
      address: values.address,
      industry: values.industry,
      account_type: "business",
      ...suggestion,
    };
    businessAccountRegister(formData)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res));

        history("/verify/otp");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
  });
  const suggestion = useAddress("address", formik);

  return (
    <>
      <CustomHeader
        title="Create a Business Account"
        text="Use correct information about your business"
      />
      <Form onSubmit={formik.handleSubmit}>
        <CustomFormInput
          formik={formik}
          label="Business Name"
          id="name"
          Left={MdAddBusiness}
          placeholder="Your Business Name"
        />
        <CustomSelect
          formik={formik}
          label={"Select Industry"}
          id="industry"
          items={industries}
        />
        <CustomFormInput
          formik={formik}
          label="Business Email"
          id="email"
          Left={FaEnvelope}
          placeholder="Email Address"
        />
        <CustomFormInput
          formik={formik}
          label="Contact Number"
          id="phone"
          Left={FaPhone}
          placeholder="Phone number"
        />
        <CustomFormInput
          formik={formik}
          label="Password"
          id="password"
          type="password"
          Left={FaLock}
          placeholder="Password"
        />
        <CustomFormInput
          formik={formik}
          label="Confirm Password"
          id="confirmPassword"
          type="password"
          Left={FaLock}
          placeholder="Confirm Password"
        />
        <CustomFormInput
          type="address"
          formik={formik}
          label="Your Business Address"
          id="address"
          placeholder="Your Business Address"
        />

        <CustomButton disabled={isLoading} type="submit">
          <span>Create Account</span>
        </CustomButton>
      </Form>
      <LoginText>
        Already have an account? <Link to="/business-login">Login</Link>
      </LoginText>
    </>
  );
}

export default BusinessAccountSignUp;
