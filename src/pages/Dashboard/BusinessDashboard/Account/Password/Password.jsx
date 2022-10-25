import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { Form } from "./password.styles";
import { CustomFormInput } from "../../../../../components/Form";
import { CustomButton } from "../../../../../components/Button/button.styles";
import { updatePassword } from "../../../../../network/profile";
import { Navigate } from "react-router-dom";

export const Password = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    old_password: Yup.string().required("Please enter your old password"),
    new_password: Yup.string()
      .required("Please choose your password.")
      .min(6, "password should be at least 6 characters long")
      .matches(/[a-z]/, "password must contain at least 1 lower case letter")
      .matches(/[A-Z]/, "password must contain at least 1 upper case letter")
      .matches(/[0-9]/, "password must contain at least 1 number")
      .matches(/\W|_/, "password must contain at least 1 special character"),
    retype_new_password: Yup.string()
      .oneOf([Yup.ref("new_password"), null], "Passwords don't match.")
      .required("Please confirm your password."),
  });

  const initialValues = {
    old_password: "",
    new_password: "",
    retype_new_password: "",
  };
  const onSubmit = async (values, tools) => {
    try {
      setLoading(true);
      const res = await updatePassword(values);
      toast.success("Password updated.");
      tools.resetForm();
      localStorage.removeItem("user");
      navigate("/business-login");
    } catch (err) {
      toast.error(err?.response.data.errors || "Couldn't update password.");
    } finally {
      setLoading(false);
    }
  };
  const formik = useFormik({ validationSchema, initialValues, onSubmit });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <CustomFormInput
        label="Old Password"
        placeholder="Enter your old password"
        formik={formik}
        id="old_password"
        type="password"
      />
      <CustomFormInput
        label="New Password"
        placeholder="Enter your new password"
        formik={formik}
        id="new_password"
        type="password"
      />
      <CustomFormInput
        label="Confirm Password"
        placeholder="Confirm password"
        formik={formik}
        id="retype_new_password"
        type="password"
      />
      <CustomButton disabled={loading} type="submit">
        <span>Update Password</span>
      </CustomButton>
    </Form>
  );
};
