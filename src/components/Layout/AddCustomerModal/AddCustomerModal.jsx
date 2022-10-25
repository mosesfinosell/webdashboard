import { useState, useRef } from "react";

import toast from "react-hot-toast";
import { FaTimes } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ModalContainer, Form } from "./addCustomerModal.styles";
import { CustomButton } from "../../Button/button.styles";
import { CustomFormInput } from "../../Form/Input";
import { useAddress } from "../../../hooks/useAddress";
import { addCustomer } from "../../../network/customer";

export const AddCustomerModal = ({ handleModal, refetch }) => {
  const [loading, setLoading] = useState(false);
  const form = useRef(null);

  const validationSchema = Yup.object().shape({
    customer_name: Yup.string().required("please provide customer's name."),
    customer_email: Yup.string().required(
      "Please provide customer's phone number."
    ),
    customer_phonenumber: Yup.number()
      .typeError("Please enter a valid phone number")
      .required("Please enter customer's phone number"),
    customer_address: Yup.string().test(
      "dropdown_selection",
      "Please select address from the dropdown",
      function (value) {
        const { path, createError } = this;

        return !!suggestion;
      }
    ),
  });

  const initialValues = {
    customer_name: "",
    customer_email: "",
    customer_phonenumber: "",
    customer_address: "",
  };

  const onSubmit = async (values, tools) => {
    try {
      setLoading(true);
      values.customer_id = Math.random().toString(16).slice(3);
      values.business_id = JSON.parse(
        localStorage.getItem("user")
      )?.message.business_id;

      const res = await addCustomer(values);
      form.current.reset();
      handleModal();
      if (refetch) refetch();
    } catch (err) {
      console.log(err.response.data);
      toast.error(err?.response.data.message || "Couldn't add new customer.");
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
  });
  const suggestion = useAddress("customer_address", formik);

  return (
    <ModalContainer>
      <FaTimes onClick={handleModal} />
      <h3>Add New Customer</h3>
      <Form ref={form} onSubmit={formik.handleSubmit}>
        <CustomFormInput
          label="Customer Name"
          placeholder="Customer's Name"
          id="customer_name"
          formik={formik}
        />
        <CustomFormInput
          label="Email"
          placeholder="Customer's Email"
          id="customer_email"
          formik={formik}
        />
        <CustomFormInput
          label="Phone Number"
          placeholder="0800 000 0000"
          id="customer_phonenumber"
          formik={formik}
        />
        <CustomFormInput
          label="Address"
          type="address"
          placeholder="Customer's Address"
          id="customer_address"
          formik={formik}
        />
        <CustomButton type="submit" disabled={loading}>
          <span>Save</span>
        </CustomButton>
      </Form>
    </ModalContainer>
  );
};
