import React from "react";
import {
	FormLabel,
	Button,
	Select,
	Input,
	InputGroup,
	// InputRightElement,
} from '@chakra-ui/react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import {
  getCustomers,
  getStepTwoDetails,
  getProduct,
} from "../../../../ReduxContianer/BussinessRedux/BusinessAction";
// import AddCustomerModal from '../Customer/addCustomerModal';
// import AddProductModal from '../Products/addProductsModal';
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
// import DatePicker from "react-datepicker";
function StepTwo({ activeStep, steppings, handleNext }) {
//   const [orderDate, setOrderDate] = useState(null);
//   const [orders, setOrders] = useState([]);
//   const [totalPages, setTotalPages] = useState(0);
//   const [page, setPage] = useState(1);
  const isFetching = useSelector((state) => state.businessReducer.isFetching);
//   const stepOne = useSelector((state) => state.businessReducer.stepOne);
  const dispatch = useDispatch();
  const businessInfo = useSelector(
    (state) => state.businessReducer.businessUserInfo
  );
  const customers = useSelector((state) => state.businessReducer.customers);
  const products = useSelector((state) => state.businessReducer.products);
	const [businessId] = useState(businessInfo.business_id);
	
  const createStepTwoSchema = Yup.object().shape({
    order_type: Yup.string().required("Select type of order"),
    order_status: Yup.string().required("Choose order status"),
    customer_id: Yup.string().required("Select a customer"),
    payment_status: Yup.string().required("Choose payment status"),
    sales_channel: Yup.string().required("Choose Sales Status"),
    payment_method: Yup.string().required("Select payment method"),
    order_date: Yup.string().required("Choose Order Date"),
    productID: Yup.string().required("Select a product"),
    quantity: Yup.number().required("Product Quantity is required"),
  });
  useEffect(() => {
    dispatch(getCustomers(businessId));
    dispatch(getProduct(businessId));
  }, [dispatch, businessId]);

  const formik = useFormik({
    initialValues: {
      order_status: "",
      order_type: "",
      customer_id: "",
      payment_status: "",
      sales_channel: "",
      payment_method: "",
      order_date: "",
      productID: "",
      business_id: businessId,
      buyer_id: businessId,
    //   buyer_id: "BusW5xmF",
      order_id: uuidv4(),
      quantity: null,
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
				style={{ width: '90%', border: 'none' }}>
				<FormLabel htmlFor='order_status'>Order Status</FormLabel>
				<Select
					id='order_status'
					name='order_status'
					mb='20px'
					placeholder='Add Order Status'
					value={formik.values.order_status}
					onChange={formik.handleChange}
					width='100%'
					h='60px'
					borderRadius='0px 11px 11px 11px'>
					<option value='pending'>Pending</option>
					<option value='in-delivery'>In-Delivery</option>
					<option value='completed'>Completed</option>
					<option value='cancelled'>Cancelled</option>
				</Select>
				{formik.touched.order_status && formik.errors.order_status ? (
					<span>{formik.errors.order_status}</span>
				) : null}

				<FormLabel htmlFor='order_type'>Order Type</FormLabel>
				<Select
					mb='20px'
					placeholder='Add Order Type'
					value={formik.values.order_type}
					onChange={formik.handleChange}
					width='100%'
					h='60px'
					borderRadius='0px 11px 11px 11px'
					id='order_type'
					name='order_type'>
					<option value='normal'>Normal</option>
					<option value='escrow'>Escrow</option>
				</Select>
				{formik.touched.order_type && formik.errors.order_type ? (
					<span>{formik.errors.order_type}</span>
				) : null}

				<FormLabel htmlFor='payment_status'>Payment Status</FormLabel>
				<Select
					mb='20px'
					placeholder='Add Payment Status'
					value={formik.values.payment_status}
					onChange={formik.handleChange}
					width='100%'
					h='60px'
					borderRadius='0px 11px 11px 11px'
					id='payment_status'
					name='payment_status'>
					<option value='paid'>Paid</option>
					<option value='unpaid'>Unpaid</option>
				</Select>
				{formik.touched.payment_status && formik.errors.payment_status ? (
					<span>{formik.errors.payment_status}</span>
				) : null}
				<FormLabel htmlFor='customer_id'>Select Customers</FormLabel>
				<Select
					mb='20px'
					placeholder='Select Customer'
					value={formik.values.customer_id}
					onChange={formik.handleChange}
					// width="100%"
					h='65px'
					borderRadius='0px 11px 11px 11px'
					id='customer_id'
					name='customer_id'
					background='#FAFAFA'>
					{!isFetching &&
						customers?.map((customer) => {
							return (
								<option value={customer._id}>
									{customer.customer_name || 'no customer'}
								</option>
							);
						})}
				</Select>
				{/* </div> */}

				{/* <div className="trans-div"> */}
				<FormLabel htmlFor='product_id'>Select Product</FormLabel>
				<Select
					mb='20px'
					placeholder='Select Product'
					value={formik.values.product_id}
					onChange={formik.handleChange}
					// width="100%"
					h='65px'
					borderRadius='0px 11px 11px 11px'
					id='product_id'
					name='product_id'
					background='#FAFAFA'>
					{!isFetching &&
						products?.map((product) => {
							return (
								<option value={product._id}>
									{product.title || 'no product'}
								</option>
							);
						})}
				</Select>
				<FormLabel htmlFor='sales_channel'>Sales Channel</FormLabel>
				<Select
					mb='20px'
					placeholder='Choose sales Channel'
					value={formik.values.sales_channel}
					onChange={formik.handleChange}
					width='100%'
					h='60px'
					borderRadius='0px 11px 11px 11px'
					id='sales_channel'
					name='sales_channel'>
					<option value='offline'>Offline</option>
					<option value='online'>Online</option>
				</Select>
				{formik.touched.sales_channel && formik.errors.sales_channel ? (
					<span>{formik.errors.sales_channel}</span>
				) : null}

				<FormLabel htmlFor='payment_method'>Payment Method</FormLabel>
				<Select
					mb='20px'
					placeholder='Add Payment Method'
					value={formik.values.payment_method}
					onChange={formik.handleChange}
					width='100%'
					h='60px'
					borderRadius='0px 11px 11px 11px'
					id='payment_method'
					name='payment_method'>
					<option>Offline</option>
					<option>Checkout</option>
					<option>Transfer</option>
				</Select>
				{formik.touched.payment_method && formik.errors.payment_method ? (
					<span>{formik.errors.payment_method}</span>
				) : null}
				<FormLabel htmlFor='order_date'>Order Date</FormLabel>
				<InputGroup>
					<Input
						type='date'
						id='order_date'
						name='order_date'
						mb='20px'
						value={formik.values.order_date}
						onChange={formik.handleChange}
						placeholder='Order Date'
						width='100%'
						height='60px'
						borderRadius='0px 11px 11px 11px'
					/>
				</InputGroup>
				{formik.touched.order_date && formik.errors.order_date ? (
					<span>{formik.errors.order_date}</span>
				) : null}
				<Button
					// disabled={!formik.isValid}
					onClick={handleNext}
					mt={4}
					mb={6}
					bg='yellow.500'
					width='100%'
					h='60px'
					borderRadius='0px 11px 11px 11px'
					type='submit'
					color='white'
					_hover={{ bg: '#1A202C' }}>
					COMPLETE STEP TWO
				</Button>
			</form>

			{/* </Formik> */}
		</div>
	);
}

export default StepTwo;
