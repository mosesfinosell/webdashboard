import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { FaEnvelope } from "react-icons/fa";

import { CustomButton } from "../../components/Button/button.styles";
import { CustomFormInput, CustomHeader } from "../../components/Form";
import { emailValidator } from "../../utils/yupSchema";

import { passwordResetRequest } from "../../network/auth";

export const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const res = await passwordResetRequest(values.email);
      console.log("Sent email", res);
      localStorage.setItem("password-reset-email", values.email);
      navigate("/reset-password");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: emailValidator,
  });

  const initialValues = {
    email: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <CustomHeader
        title="Forgot Password"
        text="Enter your email address and we'll email you a code to use to reset your passcode"
      />
      <form onSubmit={formik.handleSubmit}>
        <CustomFormInput
          formik={formik}
          label="Email"
          id="email"
          type="text"
          Left={FaEnvelope}
          placeholder="Email Address"
        />
        <CustomButton disabled={loading} type="submit">
          <span>Continue</span>
        </CustomButton>
      </form>
    </>
  );
};
