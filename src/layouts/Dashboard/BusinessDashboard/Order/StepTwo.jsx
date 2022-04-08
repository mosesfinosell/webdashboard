import React from "react";
import { FormLabel, Button, Select } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { getCustomers } from "../../../../ReduxContianer/BussinessRedux/BusinessAction";
import { useDispatch, useSelector } from "react-redux";
function StepTwo({ activeStep, steppings, handleNext }) {
  const isFetching = useSelector((state) => state.businessReducer.isFetching);
  const dispatch = useDispatch();
  const businessInfo = useSelector(
    (state) => state.businessReducer.businessUserInfo
  );
  const customers = useSelector((state) => state.businessReducer.customers);
  const [businessId] = useState(businessInfo.business_id);
  const createStepTwoSchema = Yup.object().shape({
    orderType: Yup.string().required("Select type of order"),
    orderStatus: Yup.string().required("Choose order status"),
    selectCustomer: Yup.string().required("Select a customer"),
    paymentStatus: Yup.string().required("Choose payment status"),
    saleStatus: Yup.string().required("Choose Sales Status"),
    paymentMethod: Yup.string().required("Select payment method")
  });
  useEffect(() => {
    dispatch(getCustomers(businessId));
  }, [dispatch, businessId]);
  const formik = useFormik({
    initialValues: {
      orderStatus: "",
      orderType: "",
      selectCustomer: "",
      paymentStatus: "",
      saleStatus: "",
      paymentMethod:""
    },

    onSubmit: (values) => {
      handleNext();
      console.log(values, "FORMIK 2");
    },
    validationSchema: createStepTwoSchema,
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <FormLabel htmlFor="orderStatus">Order Status</FormLabel>
        <Select
          id="orderStatus"
          name="orderStatus"
          mb="20px"
          placeholder="Add Order Status"
          value={formik.values.orderStatus}
          onChange={formik.handleChange}
          width="300px"
          h="60px"
          borderRadius="0px 11px 11px 11px"
        >
          <option>Paid</option>
          <option>Unpaid</option>
        </Select>
        {formik.touched.orderStatus && formik.errors.orderStatus ? (
          <span>{formik.errors.orderStatus}</span>
        ) : null}

        <FormLabel htmlFor="orderType">Order Type</FormLabel>
        <Select
          mb="20px"
          placeholder="Add Order Type"
          value={formik.values.orderType}
          onChange={formik.handleChange}
          width="300px"
          h="60px"
          borderRadius="0px 11px 11px 11px"
          id="orderType"
          name="orderType"
        >
          <option>Direct</option>
          <option>Escrow</option>
        </Select>
        {formik.touched.orderType && formik.errors.orderType ? (
          <span>{formik.errors.orderType}</span>
        ) : null}

        <FormLabel htmlFor="paymentStatus">Payment Status</FormLabel>
        <Select
          mb="20px"
          placeholder="Add Payment Status"
          value={formik.values.paymentStatus}
          onChange={formik.handleChange}
          width="300px"
          h="60px"
          borderRadius="0px 11px 11px 11px"
        >
          <option>Paid</option>
          <option>Unpaid</option>
        </Select>
        {formik.touched.paymentStatus && formik.errors.paymentStatus ? (
          <span>{formik.errors.paymentStatus}</span>
        ) : null}
        <FormLabel htmlFor="selectCustomer">Select Customers</FormLabel>
        <Select
          mb="20px"
          placeholder="Select Customer"
          value={formik.values.selectCustomer}
          onChange={formik.handleChange}
          width="300px"
          h="60px"
          borderRadius="0px 11px 11px 11px"
          id="selectCustomer"
          name="selectCustomer"
        >
          {!isFetching &&
            customers?.map((customer) => {
              return (
                <option value={customer.customer_id}>
                  {customer.customer_name}
                </option>
              );
            })}
        </Select>
        <FormLabel htmlFor="saleStatus">Sales Status</FormLabel>
        <Select
          mb="20px"
          placeholder="Choose sales Status"
          value={formik.values.saleStatus}
          onChange={formik.handleChange}
          width="300px"
          h="60px"
          borderRadius="0px 11px 11px 11px"
        >
          <option>Paid</option>
          <option>Unpaid</option>
        </Select>
        {formik.touched.saleStatus && formik.errors.saleStatus ? (
          <span>{formik.errors.saleStatus}</span>
        ) : null}
       
                        <FormLabel htmlFor="paymentMethod">
                          Payment Method
                        </FormLabel>
                        <Select
                          mb="20px"
                          placeholder="Add Payment Method"
                          value={formik.values.paymentMethod}
                          onChange={formik.handleChange}
                          width="300px"
                          h="60px"
                          borderRadius="0px 11px 11px 11px"
                        >
                          <option>Offline</option>
                          <option>Checkout</option>
                          <option>Transfer</option>
                        </Select>
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

export default StepTwo;
