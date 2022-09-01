import {
	// Grid,
	// Box,
	// GridItem,
	// Container,
	Text,
	// Stack,
	// Center,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Input,
	Textarea,
	InputGroup,
	// FormControl,
	FormLabel,
	Button,
	Select,
	InputRightElement,
} from '@chakra-ui/react';
import { BiShoppingBag } from 'react-icons/bi';
import { useState, useEffect } from 'react';
// import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from 'react-redux';
// import DatePicker from "react-datepicker";
import AddCustomerModal from '../Customer/addCustomerModal';
import AddProductModal from '../Products/addProductsModal';
import {
	createTransaction,
	getPayment,
} from '../../../../ReduxContianer/BussinessRedux/BusinessAction';
// import BusinessLayout from "../../../../components/Layout/BusinessLayout";
import '../../../Dashboard/Dash.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { Spinner } from '@chakra-ui/react';

export default function CreateTransaction() {
	const [loading, setLoading] = useState(false);
	const [payments, setPayments] = useState([]);
	const dispatch = useDispatch();
	const businessInfo = useSelector(
		(state) => state.businessReducer.businessUserInfo
	);
	const businessId = businessInfo.business_id;
	const customers = useSelector((state) => state.businessReducer.customers);
	//   const product = []
	const products = useSelector((state) => state.businessReducer.products);
	//   console.log(products)
	const isFetching = useSelector((state) => state.businessReducer.isFetching);
	// const isFetching = useSelector((state) => state.businessReducer.isFetching);
	const paymentDetails = useSelector(
		(state) => state.businessReducer.transactionRef
	);
	useEffect(() => {
		paymentFetching(businessId);
	}, [businessId]);

	const paymentSchema = Yup.object().shape({
		customer_id: Yup.string().required('Select a customer'),
		product_id: Yup.string().required('Select a product'),
		Itemtype: Yup.string().required('Enter product details'),
		payment_date: Yup.string().required('Select Payment Date'),
		payment_status: Yup.string().required('Payment status is required'),
		payment_method: Yup.string().required('Choose payment method'),
		transtype: Yup.string().required('Enter Transaction Details'),
		amount: Yup.number().required('Amount is required'),
	});
	const formik = useFormik({
		initialValues: {
			transaction_id: paymentDetails?.trans,
			Itemtype: '',
			payment_date: '',
			payment_id: uuidv4(),
			business_id: businessId,
			customer_id: '',
			payment_status: '',
			payment_method: '',
			payment_ref: paymentDetails?.trxref,
			transtype: '',
			amount: paymentDetails?.amount,
			product_id: '',
		},
		onSubmit: (values) => {
			// console.log(values, 'VALU ');
			dispatch(createTransaction(values));
		},
		validationSchema: paymentSchema,
	});
	const paymentFetching = async (businessId) => {
		setLoading(true);
		try {
			const res = await getPayment(businessId);
			// console.log(res, 'PAYMENT');
			const { payments } = res.data;
			setPayments(payments);
			// const total = Math.ceil(allOrders / perPage);
			// setTotalPages(total);
			setLoading(false);
		} catch (err) {
			setLoading(false);
			return err;
		}
	};
	return (
		<div className='dashy-cover'>
			<div className='left-step-dash'>
				{/* <Text className="history" color="gray">
            Action
          </Text> */}
				<form className='form-transaction' onSubmit={formik.handleSubmit}>
					{/* <div className="trans-div" style={{ marginTop: "2rem" }}> */}
					<FormLabel htmlFor='Itemtype' style={{ paddingTop: '2rem' }}>
						Transaction Details
					</FormLabel>
					<InputGroup>
						<Textarea
							placeholder='Payment Details'
							size='sm'
							mb='20px'
							value={formik.values.Itemtype}
							onChange={formik.handleChange}
							// width="90%"
							h='80px'
							borderRadius='0px 11px 11px 11px'
							id='Itemtype'
							name='Itemtype'
							background='#FAFAFA'
						/>
					</InputGroup>
					{formik.touched.Itemtype && formik.errors.Itemtype ? (
						<span>{formik.errors.Itemtype}</span>
					) : null}
					{/* </div> */}

					{/* <div className="trans-div"> */}
					<FormLabel htmlFor='payment_date'>Payment Date</FormLabel>

					<InputGroup>
						<Input
							type='date'
							mb='20px'
							onChange={formik.handleChange}
							value={formik.values.payment_date}
							name='payment_date'
							id='payment_date'
							placeholder='Payment Date'
							h='65px'
							background='#FAFAFA'
						/>
					</InputGroup>
					{formik.touched.payment_date && formik.errors.payment_date ? (
						<span>{formik.errors.payment_date}</span>
					) : null}
					{/* </div> */}

					{/* <div className="trans-div"> */}
					<FormLabel htmlFor='payment_status'>Payment Status</FormLabel>
					<Select
						mb='20px'
						placeholder='Choose Payment Status'
						value={formik.values.payment_status}
						onChange={formik.handleChange}
						// width="100%"
						h='65px'
						borderRadius='0px 11px 11px 11px'
						name='payment_status'
						id='payment_status'
						background='#FAFAFA'>
						<option value='1'>1</option>
						<option value='2'>2</option>
					</Select>
					{formik.touched.payment_status && formik.errors.payment_status ? (
						<span>{formik.errors.payment_status}</span>
					) : null}
					{/* </div> */}
					{/* <div className="trans-div"> */}
					<FormLabel htmlFor='transtype'>Transaction Type</FormLabel>
					<Select
						mb='20px'
						placeholder='Choose Transaction Type'
						value={formik.values.transtype}
						onChange={formik.handleChange}
						width='100%'
						h='65px'
						borderRadius='0px 11px 11px 11px'
						id='transtype'
						name='transtype'
						background='#FAFAFA'>
						<option value='7'>7</option>
						<option value='9'>9</option>
					</Select>
					{formik.touched.transtype && formik.errors.transtype ? (
						<span>{formik.errors.transtype}</span>
					) : null}
					{/* </div> */}

					{/* <div className="trans-div"> */}
					<FormLabel htmlFor='payment_method'>Payment Method</FormLabel>
					<Select
						mb='20px'
						placeholder='Choose Payment Method'
						value={formik.values.payment_method}
						onChange={formik.handleChange}
						width='100%'
						h='65px'
						borderRadius='0px 11px 11px 11px'
						id='payment_method'
						name='payment_method'
						background='#FAFAFA'>
						<option value='online'>Online</option>
						<option value='offline'>Offline</option>
					</Select>
					{formik.touched.payment_method && formik.errors.payment_method ? (
						<span>{formik.errors.payment_method}</span>
					) : null}
					{/* </div> */}

					{/* <div className="trans-div"> */}
					<FormLabel htmlFor='amount'>Amount</FormLabel>
					<InputGroup>
						<Input
							readOnly
							placeholder='Add Total Amount'
							mb='20px'
							onChange={formik.handleChange}
							value={formik.values.amount}
							width='100%'
							h='65px'
							borderRadius='0px 11px 11px 11px'
							id='amount'
							name='amount'
							background='#FAFAFA'
						/>
					</InputGroup>
					{formik.touched.amount && formik.errors.amount ? (
						<span>{formik.errors.amount}</span>
					) : null}
					{/* </div> */}

					{/* <div className="trans-div"> */}
					<FormLabel htmlFor='customer_id'>Select Customer</FormLabel>
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
							customers?.map((customer,index) => {
								return (
									<option value={customer._id} key={index}>
										{customer.customer_name || 'no customer'}
									</option>
								);
							})}
					</Select>

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
							products?.map((product,index) => {
								return (
									<option value={product._id} key={index}>
										{product.title || 'no product'}
									</option>
								);
							})}
					</Select>
					{/* <InputGroup>
						<InputRightElement
							pointerEvents='visible'
							m='15px 15px'
							ml={2}
							color='yellow.500'>
							<Button
								fontSize='25px'
								size='sm'
								b='transparent'
								cursor='pointer'>
								<AddProductModal />
							</Button>
						</InputRightElement>
						<Input
							mb='20px'
							placeholder='Select Product'
							value={formik.values.product_id}
							onChange={formik.handleChange}
							// width="100%"
							h='65px'
							borderRadius='0px 11px 11px 11px'
							id='product_id'
							name='product_id'
							background='#FAFAFA'
						/>
				
					</InputGroup>
					{formik.touched.product_id && formik.errors.product_id ? (
						<span>{formik.errors.product_id}</span>
					) : null} */}
					{/* </div> */}
					{/* <div className="btn-div"> */}
					<Button
						disabled={!formik.isValid}
						bg='yellow.500'
						width='100%'
						h='60px'
						borderRadius='0px 11px 11px 11px'
						type='submit'
						color='white'
						_hover={{ bg: '#1A202C' }}
						mb={6}>
						Add Transaction
					</Button>
					{/* </div> */}
				</form>
			</div>

			<div className='order-right'>
				<p className='order-para'>Transaction History</p>
				<div className='right-step-dash'>
					<Tabs variant='unstyled'>
						<div className='payment-div'>
							<TabList style={{ paddingLeft: '5.7rem' }}>
								<Tab fontSize='16px' fontWeight='bold' color='black'>
									All
								</Tab>
								<Tab fontSize='16px' fontWeight='bold' color='black'>
									Payments
								</Tab>
								<Tab fontSize='16px' fontWeight='bold' color='black'>
									Debit
								</Tab>
							</TabList>
						</div>

						<TabPanels>
							<TabPanel className='trans-tab'>
								{loading ? (
									<div style={{ textAlign: 'center', paddingTop: '2rem' }}>
										<Spinner
											thickness='9px'
											speed='0.95s'
											emptyColor='yellow.200'
											color='yellow.500'
											size='xl'
										/>
									</div>
								) : payments?.length === 0 ? (
									<div>
										<h1
											style={{
												textAlign: 'center',
												paddingTop: '18px',
												color: '#D6AA1B',
												fontWeight: '700',
												paddingBottom: '18px',
											}}>
											There are no transactions
										</h1>
									</div>
								) : (
									<div>
										{payments?.map((payment) => (
											<div className='transactions' key={payment.id}>
												<div className='transactions-inner'>
													<div>
														<BiShoppingBag />
													</div>
													<div style={{ paddingLeft: '2rem' }}>
														<Text>{payment.Itemtype}</Text>
														<Text color='gray' fontSize='12px'>
															{payment.payment_method}
														</Text>
													</div>
												</div>
												<div style={{ paddingRight: '2rem' }}>
													<Text fontSize='12px' color='green.500'>
														₦{payment.amount}
													</Text>
													<Text fontSize='12px' color='gray'>
														{new Date(payment.createdAt).toLocaleDateString(
															'fr'
														)}
													</Text>
												</div>
											</div>
										))}
									</div>
								)}
							</TabPanel>
							<TabPanel>
								<div className='transactions'>
									<div className='transactions-inner'>
										<div>
											<BiShoppingBag />
										</div>
										<div style={{ paddingLeft: '2rem' }}>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</div>
									</div>
									<div style={{ paddingRight: '2rem' }}>
										<Text fontSize='12px' color='yellow.500'>
											₦12,000
										</Text>
										<Text fontSize='12px' color='gray'>
											Jan 3, 2022
										</Text>
									</div>
								</div>
								<div className='transactions'>
									<div className='transactions-inner'>
										<div>
											<BiShoppingBag />
										</div>
										<div style={{ paddingLeft: '2rem' }}>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</div>
									</div>
									<div style={{ paddingRight: '2rem' }}>
										<Text fontSize='12px' color='yellow.500'>
											₦12,000
										</Text>
										<Text fontSize='12px' color='gray'>
											Jan 3, 2022
										</Text>
									</div>
								</div>
								<div className='transactions'>
									<div className='transactions-inner'>
										<div>
											<BiShoppingBag />
										</div>
										<div style={{ paddingLeft: '2rem' }}>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</div>
									</div>
									<div style={{ paddingRight: '2rem' }}>
										<Text fontSize='12px' color='yellow.500'>
											₦12,000
										</Text>
										<Text fontSize='12px' color='gray'>
											Jan 3, 2022
										</Text>
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								<div className='transactions'>
									<div className='transactions-inner'>
										<div>
											<BiShoppingBag />
										</div>
										<div style={{ paddingLeft: '2rem' }}>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</div>
									</div>
									<div style={{ paddingRight: '2rem' }}>
										<Text fontSize='12px' color='yellow.500'>
											₦12,000
										</Text>
										<Text fontSize='12px' color='gray'>
											Jan 3, 2022
										</Text>
									</div>
								</div>
								<div className='transactions'>
									<div className='transactions-inner'>
										<div>
											<BiShoppingBag />
										</div>
										<div style={{ paddingLeft: '2rem' }}>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</div>
									</div>
									<div style={{ paddingRight: '2rem' }}>
										<Text fontSize='12px' color='yellow.500'>
											₦12,000
										</Text>
										<Text fontSize='12px' color='gray'>
											Jan 3, 2022
										</Text>
									</div>
								</div>
								<div className='transactions'>
									<div className='transactions-inner'>
										<div>
											<BiShoppingBag />
										</div>
										<div style={{ paddingLeft: '2rem' }}>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</div>
									</div>
									<div style={{ paddingRight: '2rem' }}>
										<Text fontSize='12px' color='yellow.500'>
											₦12,000
										</Text>
										<Text fontSize='12px' color='gray'>
											Jan 3, 2022
										</Text>
									</div>
								</div>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</div>
			</div>
		</div>
	);
}
