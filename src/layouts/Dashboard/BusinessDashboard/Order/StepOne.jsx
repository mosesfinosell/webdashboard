import React from "react";
import { Input, InputGroup, FormLabel, Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { getStepOneDetails } from "../../../../ReduxContianer/BussinessRedux/BusinessAction";
function StepOne({ activeStep, steppings, handleNext }) {
  const dispatch = useDispatch();
  const createOrderSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    buyer_phone: Yup.number().required("Phone number is required"),
    buyer_email: Yup.string()
      .email("Invalid email")
      .required("buyer_email is required"),
    discount: Yup.number()
      .typeError("Discount must be digits")
      .required("Discount is required"),
    shipping_address: Yup.string().required("Address is required"),
    totalamount: Yup.number()
      .typeError("Amount is required")
      .required("Amount is required"),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      discount: "",
      buyer_phone: "",
      buyer_email: "",
      shipping_address: "",
      totalamount: "",
    },
    onSubmit: (values) => {
      handleNext();
      dispatch(getStepOneDetails(values));
    },
    validationSchema: createOrderSchema,
  });
  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        style={{ width: "90%", border: "none" }}
      >
        <FormLabel htmlFor="title">Title</FormLabel>
        <InputGroup>
          <Input
            id="title"
            name="title"
            mb="20px"
            value={formik.values.title}
            onChange={formik.handleChange}
            placeholder="Add Order Title"
            width="100%"
            height="60px"
            borderRadius="0px 11px 11px 11px"
          />
        </InputGroup>
        {formik.touched.title && formik.errors.title ? (
          <span>{formik.errors.title}</span>
        ) : null}
        <FormLabel htmlFor="discount">Discount</FormLabel>
        <InputGroup>
          <Input
            id="discount"
            name="discount"
            mb="20px"
            value={formik.values.discount}
            onChange={formik.handleChange}
            placeholder="Discount"
            width="100%"
            height="60px"
            borderRadius="0px 11px 11px 11px"
          />
        </InputGroup>
        {formik.touched.discount && formik.errors.discount ? (
          <span>{formik.errors.discount}</span>
        ) : null}

        <FormLabel htmlFor="shipping_address">Address</FormLabel>
        <InputGroup>
          <Input
            id="shipping_address"
            name="shipping_address"
            mb="20px"
            value={formik.values.shipping_address}
            onChange={formik.handleChange}
            placeholder="Address"
            width="100%"
            height="60px"
            borderRadius="0px 11px 11px 11px"
          />
        </InputGroup>
        {formik.touched.shipping_address && formik.errors.shipping_address ? (
          <span>{formik.errors.shipping_address}</span>
        ) : null}
        <FormLabel htmlFor="totalamount">Amount</FormLabel>
        <InputGroup>
          <Input
            id="totalamount"
            name="totalamount"
            mb="20px"
            value={formik.values.totalamount}
            onChange={formik.handleChange}
            placeholder="Amount"
            width="100%"
            height="60px"
            borderRadius="0px 11px 11px 11px"
          />
        </InputGroup>
        {formik.touched.totalamount && formik.errors.totalamount ? (
          <span>{formik.errors.totalamount}</span>
        ) : null}
        <FormLabel htmlFor="buyer_phone">Phone Number</FormLabel>
        <InputGroup>
          <Input
            id="buyer_phone"
            name="buyer_phone"
            mb="20px"
            value={formik.values.buyer_phone}
            onChange={formik.handleChange}
            placeholder="Phone Number"
            width="100%"
            height="60px"
            borderRadius="0px 11px 11px 11px"
          />
        </InputGroup>
        {formik.touched.buyer_phone && formik.errors.buyer_phone ? (
          <span>{formik.errors.buyer_phone}</span>
        ) : null}
        <FormLabel htmlFor="buyer_email">Buyer Email</FormLabel>
        <InputGroup>
          <Input
            id="buyer_email"
            name="buyer_email"
            mb="20px"
            value={formik.values.buyer_email}
            onChange={formik.handleChange}
            placeholder="Email"
            width="100%"
            height="60px"
            borderRadius="0px 11px 11px 11px"
          />
        </InputGroup>
        {formik.touched.buyer_email && formik.errors.buyer_email ? (
          <span>{formik.errors.buyer_email}</span>
        ) : null}
        <Button
          disabled={!formik.isValid}
          //   onClick={handleNext}
          mt={4}
          mb={6}
          bg="yellow.500"
          width="100%"
          h="60px"
          borderRadius="0px 11px 11px 11px"
          type="submit"
          color="white"
          _hover={{ bg: "#1A202C" }}
        >
          {activeStep === steppings.length ? "Create Order" : "Next"}
        </Button>
      </form>
    </div>
  );
}

export default StepOne;
