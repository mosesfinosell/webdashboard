import { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaTimes, FaClone } from "react-icons/fa";
import toast from "react-hot-toast";
import { Container } from "./requestMoney.styles";
import { CustomFormInput } from "../../../../../../../components/Form";
import { CustomButton } from "../../../../../../../components/Button/button.styles";
import { createPaylink } from "../../../../../../../network/payment";

export const RequestMoney = ({ onClose }) => {
  const [amount, setAmount] = useState();
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState();
  const formRef = useRef();

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Please enter title"),
    amount: Yup.number().required("Please enter payment amount."),
  });
  const initialValues = {
    title: "",
    amount: "",
  };
  const onSubmit = async (values, tools) => {
    formRef.current.reset;

    try {
      setLoading(true);
      const res = await createPaylink(values);
      setLink(res.link);
      tools.resetForm();
    } catch (err) {
      toast.error("Couldn't create paylink");
    } finally {
      setLoading(false);
    }
  };
  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
  });

  const handleModal = () => {
    onClose();
    setLink(undefined);
  };

  return (
    <Container>
      <FaTimes onClick={() => handleModal()} />

      <h2>Request Payment</h2>
      <form ref={formRef} onSubmit={formik.handleSubmit}>
        <CustomFormInput
          label="Title"
          placeholder="Payment title"
          formik={formik}
          id="title"
        />
        <CustomFormInput
          type="number"
          label="Amount"
          formik={formik}
          id="amount"
          placeholder="₦0.00"
        />
        {link && (
          <button
            type="button"
            className="copy"
            onClick={() => navigator.clipboard.writeText(link)}
          >
            <span>Copy Link</span>
            <FaClone />
          </button>
        )}

        <CustomButton type="submit" disabled={loading}>
          <span>Generate Payment Link</span>
        </CustomButton>
      </form>
    </Container>
  );
};
