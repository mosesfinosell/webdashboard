import React from "react";
import { Input, InputGroup, FormLabel, Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
function StepOne({ activeStep, steppings, handleNext }) {
  const createOrderSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    phoneNumber: Yup.number().required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    discount: Yup.string().required("Discount is required"),
    shippingAddress: Yup.string().required("Address is required"),
    totalAmount: Yup.string().required("Amount is required"),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      discount: "",
      phoneNumber: "",
      email: "",
      shippingAddress: "",
      totalAmount: "",
    },
    onSubmit: (values) => {
      handleNext();
      console.log(values, "FORMIK");
    },
    validationSchema: createOrderSchema,
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <FormLabel htmlFor="title">Title</FormLabel>
        <InputGroup>
          <Input
            id="title"
            name="title"
            mb="20px"
            value={formik.values.title}
            onChange={formik.handleChange}
            placeholder="Add Order Title"
            width="300px"
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
            width="300px"
            height="60px"
            borderRadius="0px 11px 11px 11px"
          />
        </InputGroup>
        {formik.touched.discount && formik.errors.discount ? (
          <span>{formik.errors.discount}</span>
        ) : null}

        <FormLabel htmlFor="shippingAddress">Address</FormLabel>
        <InputGroup>
          <Input
            id="shippingAddress"
            name="shippingAddress"
            mb="20px"
            value={formik.values.shippingAddress}
            onChange={formik.handleChange}
            placeholder="Address"
            width="300px"
            height="60px"
            borderRadius="0px 11px 11px 11px"
          />
        </InputGroup>
        {formik.touched.shippingAddress && formik.errors.shippingAddress ? (
          <span>{formik.errors.shippingAddress}</span>
        ) : null}
        <FormLabel htmlFor="totalAmount">Amount</FormLabel>
        <InputGroup>
          <Input
            id="totalAmount"
            name="totalAmount"
            mb="20px"
            value={formik.values.totalAmount}
            onChange={formik.handleChange}
            placeholder="Amount"
            width="300px"
            height="60px"
            borderRadius="0px 11px 11px 11px"
          />
        </InputGroup>
        {formik.touched.totalAmount && formik.errors.totalAmount ? (
          <span>{formik.errors.totalAmount}</span>
        ) : null}
        <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
        <InputGroup>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            mb="20px"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            placeholder="Phone Number"
            width="300px"
            height="60px"
            borderRadius="0px 11px 11px 11px"
          />
        </InputGroup>
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <span>{formik.errors.phoneNumber}</span>
        ) : null}
        <FormLabel htmlFor="email">Email</FormLabel>
        <InputGroup>
          <Input
            id="email"
            name="email"
            mb="20px"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email"
            width="300px"
            height="60px"
            borderRadius="0px 11px 11px 11px"
          />
        </InputGroup>
        {formik.touched.email && formik.errors.email ? (
          <span>{formik.errors.email}</span>
        ) : null}
        <Button
          disabled={!formik.isValid}
          //   onClick={handleNext}
          mt={4}
          bg="yellow.500"
          width="300px"
          h="60px"
          borderRadius="0px 11px 11px 11px"
          type="submit"
          color="white"
          _hover={{ bg: "#1A202C" }}
        >
          {activeStep === steppings.length ? "Create Order" : "Move"}
        </Button>
      </form>

      {/* </Formik> */}
    </div>
  );
}

export default StepOne;
