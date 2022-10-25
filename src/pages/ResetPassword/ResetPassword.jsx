import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CustomButton } from "../../components/Button/button.styles";
import { CustomFormInput, CustomHeader } from "../../components/Form";

import { passwordReset } from "../../network/auth";

export const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const email = localStorage.getItem("password-reset-email");
  useEffect(() => {
    if (!email) {
      toast.error("Please select email for password reset.");
      navigate("/forgot-password");
    }
  }, []);

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(6, "password should be at least 6 characters long")
      .matches(/[a-z]/, "password must contain at least 1 lower case letter")
      .matches(/[A-Z]/, "password must contain at least 1 upper case letter")
      .matches(/[0-9]/, "password must contain at least 1 number")
      .matches(/\W|_/, "password must contain at least 1 special character"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password confirmation is required"),
    authCode: Yup.string()
      .typeError("Please enter valid verification code")
      .required("Verification code is required")
      .matches(/^[0-9]{5}$/, "Verification code should be 5 numbers long"),
  });

  const initialValues = {
    password: "",
    confirmPassword: "",
    authCode: "",
  };

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const data = {
        auth_code: values.authCode,
        password: values.password,
        email,
        retype_password: values.confirmPassword,
      };

      const res = await passwordReset(data);
      console.log("password reset success", res);
      localStorage.removeItem("password-reset-email");
      navigate("/business-login");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <>
      <CustomHeader title="Choose Password" text="" />
      <form onSubmit={formik.handleSubmit}>
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
          placeholder="Password"
        />
        <CustomFormInput
          formik={formik}
          label="Auth Code"
          id="authCode"
          type="text"
          placeholder="Auth Code"
        />
        <CustomButton disabled={loading} type="submit">
          <span>Continue</span>
        </CustomButton>
      </form>
    </>
  );
};
