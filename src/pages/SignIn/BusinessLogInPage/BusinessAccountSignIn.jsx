import styled from "styled-components";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import { CustomFormInput, CustomHeader } from "../../../components/Form";
import { CustomButton } from "../../../components/Button/button.styles";

import { useState, useEffect } from "react";

import { FaPhone, FaLock } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { getBusinessUserInfo } from "../../../ReduxContianer/BussinessRedux/BusinessAction";
import { businessAccountLogin } from "../../../network/auth";
import { useFormik } from "formik";
import { getUser } from "../../../utils/helper";

export default function BusinessAccountSignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (getUser()) {
      navigate("/business-dashboard/home");
    }
  }, []);

  //Validation
  const validationSchema = Yup.object().shape({
    phone: Yup.number()
      .typeError("Please enter a valid phone number")
      .required("Please enter your phone number."),
    password: Yup.string().required("Please enter your finosell password."),
  });
  const initialValues = {
    phone: "",
    password: "",
  };

  const onSubmit = async (values, tools) => {
    setIsLoading(true);
    try {
      const data = {
        phonenumber: values.phone.replace(/0/, "234"),
        password: values.password,
      };

      const res = await businessAccountLogin(data);
      localStorage.setItem("user", JSON.stringify(res));
      localStorage.setItem("password", res.token);
      dispatch(getBusinessUserInfo(res.message));

      if (res.message.phone_status === "notVerified") {
        toast("Please verify your account");
        navigate("/verify/otp");
      } else {
        navigate("/business-dashboard/home");
      }
    } catch (err) {
      if (!err.response?.data) {
        toast.error(err.message);
      } else {
        toast.error("Incorrect phone number or password");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <CustomHeader title="Welcome Back" text="Enter your Login details" />
      <form onSubmit={formik.handleSubmit}>
        <CustomFormInput
          formik={formik}
          label="Phone Number"
          id="phone"
          type="text"
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
        <CustomButton disabled={isLoading} type="submit">
          <span>Login</span>
        </CustomButton>
      </form>

      <Option>
        <Link to="/forgot-password">Forgot Password?</Link>
      </Option>
      <Option>
        Don't have an account? <Link to="/business-signup">signup.</Link>
      </Option>
    </>
  );
}

const Option = styled.p`
  text-align: center;
  margin: 1.5rem auto;
  font-size: 1.4rem;
  a {
    color: var(--finosellYellowPrimary);
  }
`;
