import React from "react";
import { FormLabel, Button, Select, Input, InputGroup } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import {
  getCustomers,
  getStepTwoDetails,
  getProduct
} from "../../../../ReduxContianer/BussinessRedux/BusinessAction";
import { useDispatch, useSelector } from "react-redux";
// import DatePicker from "react-datepicker";
function StepTwo({ activeStep, steppings, handleNext }) {
  console.log(useSelector((state) => state.businessReducer));
  const isFetching = useSelector((state) => state.businessReducer.isFetching);
  const stepOne = useSelector((state) => state.businessReducer.stepOne);
  const dispatch = useDispatch();
  const businessInfo = useSelector(
    (state) => state.businessReducer.businessUserInfo
  );
  const customers = useSelector((state) => state.businessReducer.customers);
  const products = useSelector((state) => state.businessReducer.products);
  console.log(customers, "CUSTOMERS");
  const [businessId] = useState(businessInfo.business_id);
  console.log(businessId, "PRODUCTS");
  const createStepTwoSchema = Yup.object().shape({
    orderType: Yup.string().required("Select type of order"),
    order_status: Yup.string().required("Choose order status"),
    customer_id: Yup.string().required("Select a customer"),
    paymentStatus: Yup.string().required("Choose payment status"),
    sales_channel: Yup.string().required("Choose Sales Status"),
    payment_Method: Yup.string().required("Select payment method"),
    order_date: Yup.string().required("Choose Order Date"),
    product_id: Yup.string().required("Select a product"),
  });
  useEffect(() => {
    dispatch(getCustomers(businessId));
  }, [dispatch, businessId]);
  useEffect(() => {
    dispatch(getProduct(businessId));
  }, [dispatch, businessId]);
  const formik = useFormik({
    initialValues: {
      order_status: "",
      orderType: "",
      customer_id: "",
      paymentStatus: "",
      sales_channel: "",
      payment_Method: "",
      order_date: "",
      product_id: "",
    },

    onSubmit: (values) => {
      handleNext();
      dispatch(getStepTwoDetails(values));
    },
    validationSchema: createStepTwoSchema,
  });
  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        style={{ width: "90%", border: "none" }}
      >
        <FormLabel htmlFor="order_status">Order Status</FormLabel>
        <Select
          id="order_status"
          name="order_status"
          mb="20px"
          placeholder="Add Order Status"
          value={formik.values.order_status}
          onChange={formik.handleChange}
          width="100%"
          h="60px"
          borderRadius="0px 11px 11px 11px"
        >
          <option>Paid</option>
          <option>Unpaid</option>
        </Select>
        {formik.touched.order_status && formik.errors.order_status ? (
          <span>{formik.errors.order_status}</span>
        ) : null}

        <FormLabel htmlFor="orderType">Order Type</FormLabel>
        <Select
          mb="20px"
          placeholder="Add Order Type"
          value={formik.values.orderType}
          onChange={formik.handleChange}
          width="100%"
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
          width="100%"
          h="60px"
          borderRadius="0px 11px 11px 11px"
          id="paymentStatus"
          name="paymentStatus"
        >
          <option>Paid</option>
          <option>Unpaid</option>
        </Select>
        {formik.touched.paymentStatus && formik.errors.paymentStatus ? (
          <span>{formik.errors.paymentStatus}</span>
        ) : null}
        <FormLabel htmlFor="customer_id">Select Customers</FormLabel>
        <Select
          mb="20px"
          placeholder="Select Customer"
          value={formik.values.customer_id}
          onChange={formik.handleChange}
          width="100%"
          h="60px"
          borderRadius="0px 11px 11px 11px"
          id="customer_id"
          name="customer_id"
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

        <FormLabel htmlFor="product_id">Select Products</FormLabel>
        <Select
          mb="20px"
          placeholder="Select Product"
          value={formik.values.product_id}
          onChange={formik.handleChange}
          width="100%"
          h="60px"
          borderRadius="0px 11px 11px 11px"
          id="customer_id"
          name="customer_id"
        >
          {!isFetching &&
            products?.map((product) => {
              return (
                <option value={product.product_id}>{product.product}</option>
              );
            })}
        </Select>
        <FormLabel htmlFor="sales_channel">Sales Status</FormLabel>
        <Select
          mb="20px"
          placeholder="Choose sales Status"
          value={formik.values.sales_channel}
          onChange={formik.handleChange}
          width="100%"
          h="60px"
          borderRadius="0px 11px 11px 11px"
          id="sales_channel"
          name="sales_channel"
        >
          <option>Paid</option>
          <option>Unpaid</option>
        </Select>
        {formik.touched.sales_channel && formik.errors.sales_channel ? (
          <span>{formik.errors.sales_channel}</span>
        ) : null}

        <FormLabel htmlFor="payment_Method">Payment Method</FormLabel>
        <Select
          mb="20px"
          placeholder="Add Payment Method"
          value={formik.values.payment_Method}
          onChange={formik.handleChange}
          width="100%"
          h="60px"
          borderRadius="0px 11px 11px 11px"
          id="payment_Method"
          name="payment_Method"
        >
          <option>Offline</option>
          <option>Checkout</option>
          <option>Transfer</option>
        </Select>
        <FormLabel htmlFor="order_date">Order Date</FormLabel>
        <InputGroup>
          <Input
            type="date"
            id="order_date"
            name="order_date"
            mb="20px"
            value={formik.values.order_date}
            onChange={formik.handleChange}
            placeholder="Order Date"
            width="100%"
            height="60px"
            borderRadius="0px 11px 11px 11px"
          />
        </InputGroup>
        {formik.touched.order_date && formik.errors.order_date ? (
          <span>{formik.errors.order_date}</span>
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
          COMPLETE STEP TWO
        </Button>
      </form>

      {/* </Formik> */}
    </div>
  );
}

export default StepTwo;
