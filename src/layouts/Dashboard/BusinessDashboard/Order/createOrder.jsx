import {
	Grid,
	Box,
	GridItem,
	Container,
	Text,
	Stack,
	Center,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Input,
	InputGroup,
	FormControl,
	FormLabel,
	Button,
	Select,
	InputLeftElement,
	FormErrorMessage,
} from '@chakra-ui/react';
// import {
// 	AsyncCreatableSelect,
// 	AsyncSelect,
// 	CreatableSelect,
// 	Select,
// } from 'chakra-react-select';
import { BiShoppingBag } from 'react-icons/bi';
import {MdWifiCalling3,MdEmail} from 'react-icons/md'
import { useState,useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import SelectProduct from './selectProduct';
// import SelectCustomer from './selectCustomer';
import { getProduct } from '../../../../ReduxContianer/BussinessRedux/BusinessAction';
import {getCustomers} from '../../../../ReduxContianer/BussinessRedux/BusinessAction'
import {createOrders} from '../../../../ReduxContianer/BussinessRedux/BusinessAction'

export default function CreateOrder() {
	const dispatch = useDispatch();

	const businessSignIn = useSelector((state) => state.businessSignIn);
	const { user } = businessSignIn;
	const { businessDetails } = user;
	const { message } = businessDetails;
    
	const [title, setTitle] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [startDate, setStartDate] = useState(null);
	const [orderStatus, setOrderStatus] = useState('');
	const [orderType, setOrderType] = useState('');
	const [saleStatus, setSaleStatus] = useState('');
	const [discount, setDiscount] = useState('');
	const [shippingAddress, setShippingAddress] = useState('');
	const [paymentStatus, setPaymentStatus] = useState('');
	const [paymentMethod, setPaymentMethod] = useState('');
	const [totalAmount, setTotalAmount] = useState('');
	const [selectProduct, setSelectProduct] = useState('');
	const [selectCustomer, setSelectCustomer] = useState('');
	const [businessId] = useState(message.business_id);
	const [orderId] = useState('4575r46rt5');

useEffect(() => {
	dispatch(getProduct(businessId));
}, [dispatch,businessId]);

	useEffect(() => {
		dispatch(getCustomers(businessId));
	}, [dispatch,businessId]);

	const fetchCustomer = useSelector((state) => state.fetchCustomer);
	let { customers} = fetchCustomer;

const fetchProduct = useSelector((state) => state.fetchProduct);
let { products,loading } = fetchProduct;

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(
			createOrders(
				title,
				email,
				phoneNumber,
				startDate,
				orderStatus,
				orderType,
				saleStatus,
				discount,
				shippingAddress,
				paymentStatus,
				paymentMethod,
				totalAmount,
				selectProduct,
				selectCustomer,
				businessId,
				orderId
			)
		);

		console.log(
			title,
			email,
			phoneNumber,
			startDate,
			orderStatus,
			orderType,
			saleStatus,
			discount,
			shippingAddress,
			paymentStatus,
			paymentMethod,
			totalAmount,
			selectProduct,
			selectCustomer,
			businessId,
			orderId
		);
	}


	return (
		<Container m='40px' maxW='container.lg'>
			<Grid h='100vh' templateColumns='repeat(5, 1fr)'>
				<GridItem colSpan={4} rowSpan={6} bg='white' gap='5'>
					<Stack pb='30px'>
						<Text color='black' fontWeight='bold' fontSize='14px'>
							Add a order
						</Text>
					</Stack>

					<Box
						h='1550px'
						w='400px'
						borderRadius='0px 11px 11px 11px'
						border='0.5px solid #D9D9D9'
						px='40px'>
						<Formik>
							{() => (
								<Form onSubmit={handleSubmit}>
									<Field name='text'>
										{({ field, form }) => (
											<FormControl mt='30px'>
												<FormLabel htmlFor='text'>Title</FormLabel>
												<InputGroup>
													<Input
														{...field}
														mb='20px'
														value={title}
														onChange={(e) => setTitle(e.target.value)}
														placeholder='Add Order Title'
														width='300px'
														h='60px'
														borderRadius='0px 11px 11px 11px'
													/>
												</InputGroup>
											</FormControl>
										)}
									</Field>
									<Field name='phoneNumber'>
										{({ field, form }) => (
											<FormControl
												isInvalid={
													form.errors.phoneNumber && form.touched.phoneNumber
												}
												mt={4}>
												<FormLabel htmlFor='name'>Phone Number</FormLabel>
												<InputGroup>
													
													<Input
														{...field}
														value={phoneNumber}
														type='phoneNumber'
														onChange={(e) => setPhoneNumber(e.target.value)}
														placeholder='08012345678'
														width='400px'
														h='70px'
														borderRadius='0px 11px 11px 11px'
													/>
												</InputGroup>
												<FormErrorMessage>
													{form.errors.phoneNumber}
												</FormErrorMessage>
											</FormControl>
										)}
									</Field>
									<Field name='email'>
										{({ field, form }) => (
											<FormControl
												isInvalid={form.errors.email && form.touched.email}
												mt={4}>
												<FormLabel htmlFor='name'>Email</FormLabel>
												<InputGroup>
													
													<Input
														{...field}
														value={email}
														onChange={(e) => setEmail(e.target.value)}
														placeholder='Email Address'
														width='400px'
														h='70px'
														borderRadius='0px 11px 11px 11px'
													/>
												</InputGroup>
												<FormErrorMessage>{form.errors.email}</FormErrorMessage>
											</FormControl>
										)}
									</Field>
									<Field name='text'>
										{({ field, form }) => (
											<FormControl>
												<FormLabel htmlFor='order status'>
													Order Status
												</FormLabel>
												<Select
													mb='20px'
													placeholder='Add Order Status'
													value={orderStatus}
													onChange={(e) => setOrderStatus(e.target.value)}
													width='300px'
													h='60px'
													borderRadius='0px 11px 11px 11px'>
													<option>Paid</option>
													<option>Unpaid</option>
												</Select>
											</FormControl>
										)}
									</Field>
									<Field name='text'>
										{({ field, form }) => (
											<FormControl>
												<FormLabel htmlFor='order type'>Order Type</FormLabel>
												<Select
													mb='20px'
													placeholder='Add Order Type'
													value={orderType}
													onChange={(e) => setOrderType(e.target.value)}
													width='300px'
													h='60px'
													borderRadius='0px 11px 11px 11px'>
													<option>Direct</option>
													<option>Escrow</option>
												</Select>
											</FormControl>
										)}
									</Field>

									<Field name='text'>
										{({ field, form }) => (
											<FormControl>
												<FormLabel htmlFor='order type'>Order Date</FormLabel>
												{/* <Input
													{...field}
													mb='20px'
													width='300px'
													h='60px'
													borderRadius='0px 11px 11px 11px'> */}
												<DatePicker
													mb='20px'
													selected={startDate}
													onChange={(date) => setStartDate(date)}
												/>
												{/* </Input> */}
											</FormControl>
										)}
									</Field>
									<Field name='text'>
										{({ field, form }) => (
											<FormControl>
												<FormLabel htmlFor='order type'>
													Sales Channel
												</FormLabel>
												<Select
													mb='20px'
													placeholder='Add Sales Channel'
													value={saleStatus}
													onChange={(e) => setSaleStatus(e.target.value)}
													width='300px'
													h='60px'
													borderRadius='0px 11px 11px 11px'>
													<option>Offline</option>
													<option>Online</option>
												</Select>
											</FormControl>
										)}
									</Field>
									<Field name='number'>
										{({ field, form }) => (
											<FormControl mt='30px'>
												<FormLabel htmlFor='number'>Discount</FormLabel>
												<InputGroup>
													<Input
														{...field}
														placeholder='Add Discount'
														mb='20px'
														value={discount}
														onChange={(e) => setDiscount(e.target.value)}
														width='300px'
														h='60px'
														borderRadius='0px 11px 11px 11px'
													/>
												</InputGroup>
											</FormControl>
										)}
									</Field>
									<Field name='address'>
										{({ field, form }) => (
											<FormControl mt={4}>
												<FormLabel htmlFor='address'>
													Shipping Address
												</FormLabel>
												<InputGroup>
													<Input
														{...field}
														mb='20px'
														placeholder='Add Shipping Address'
														value={shippingAddress}
														onChange={(e) => setShippingAddress(e.target.value)}
														width='400px'
														h='60px'
														borderRadius='0px 11px 11px 11px'
													/>
												</InputGroup>
											</FormControl>
										)}
									</Field>
									<Field name='text'>
										{({ field, form }) => (
											<FormControl>
												<FormLabel htmlFor='payment status'>
													Payment Status
												</FormLabel>
												<Select
													mb='20px'
													placeholder='Add Payment Status'
													value={paymentStatus}
													onChange={(e) => setPaymentStatus(e.target.value)}
													width='300px'
													h='60px'
													borderRadius='0px 11px 11px 11px'>
													<option>Paid</option>
													<option>Unpaid</option>
												</Select>
											</FormControl>
										)}
									</Field>
									<Field name='text'>
										{({ field, form }) => (
											<FormControl>
												<FormLabel htmlFor='payment method'>
													Payment Method
												</FormLabel>
												<Select
													mb='20px'
													placeholder='Add Payment Method'
													value={paymentMethod}
													onChange={(e) => setPaymentMethod(e.target.value)}
													width='300px'
													h='60px'
													borderRadius='0px 11px 11px 11px'>
													<option>Offline</option>
													<option>Checkout</option>
													<option>Transfer</option>
												</Select>
											</FormControl>
										)}
									</Field>
									<Field name='text'>
										{({ field, form }) => (
											<FormControl>
												<FormLabel htmlFor='payment method'>
													Payment Method
												</FormLabel>
												<Select
													mb='20px'
													placeholder='Select Product'
													value={selectProduct}
													onChange={(e) => setSelectProduct(e.target.value)}
													width='300px'
													h='60px'
													borderRadius='0px 11px 11px 11px'>
													{!loading &&
														products?.details?.map((product) => {
															return <option>{product.title}</option>;
														})}
												</Select>
											</FormControl>
										)}
									</Field>
									<Field name='text'>
										{({ field, form }) => (
											<FormControl>
												<FormLabel htmlFor='payment method'>
													Select Customers
												</FormLabel>
												<Select
													mb='20px'
													placeholder='Select Customer'
													value={selectCustomer}
													onChange={(e) => setSelectCustomer(e.target.value)}
													width='300px'
													h='60px'
													borderRadius='0px 11px 11px 11px'>
													{!loading &&
														customers?.customers?.map((customer) => {
															return <option>{customer.customer_name}</option>;
														})}
												</Select>
											</FormControl>
										)}
									</Field>
									<Field name='number'>
										{({ field, form }) => (
											<FormControl mt={4}>
												<FormLabel htmlFor='number'>Total Amount</FormLabel>
												<InputGroup>
													<Input
														{...field}
														placeholder='Add Total Amount'
														mb='20px'
														value={totalAmount}
														onChange={(e) => setTotalAmount(e.target.value)}
														width='400px'
														h='60px'
														borderRadius='0px 11px 11px 11px'
													/>
												</InputGroup>
											</FormControl>
										)}
									</Field>
									<Button
										mt={4}
										bg='yellow.500'
										width='300px'
										h='60px'
										borderRadius='0px 11px 11px 11px'
										type='submit'
										color='white'
										_hover={{ bg: '#1A202C' }}>
										Add Order
									</Button>
								</Form>
							)}
						</Formik>
					</Box>
				</GridItem>
				<GridItem colStart={6} colEnd={9} h='10' bg='white'>
					<Stack m='10px'>
						<Text color='gray' fontSize='14px'>
							Order History
						</Text>
					</Stack>
					<Tabs variant='unstyled'>
						<Center>
							<Box
								h='100px'
								w='400px'
								borderRadius='0px 11px 0px 0px'
								border='0.5px solid #D9D9D9'
								display='flex'
								direction='column'
								alignItems='center'
								justifyContent='center'>
								<TabList>
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
							</Box>
						</Center>
						<Center>
							<TabPanels>
								<TabPanel>
									<Box
										h='100px'
										w='400px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='yellow.500'
											bg='yellow.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid yellow.100'
											p='12px'
											fontSize='22px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='10px'>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</Stack>

										<Stack>
											<Text fontSize='12px' color='yellow.500'>
												₦12,000
											</Text>
											<Text fontSize='12px' color='gray'>
												Jan 3, 2022
											</Text>
										</Stack>
									</Box>
									<Box
										h='100px'
										w='400px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='red.500'
											bg='red.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid red.100'
											p='12px'
											fontSize='22px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='10px'>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</Stack>

										<Stack>
											<Text fontSize='12px' color='red.500'>
												₦12,000
											</Text>
											<Text fontSize='12px' color='gray'>
												Jan 3, 2022
											</Text>
										</Stack>
									</Box>
									<Box
										h='100px'
										w='400px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='green.500'
											bg='green.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid green.100'
											p='12px'
											fontSize='22px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='10px'>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</Stack>

										<Stack>
											<Text fontSize='12px' color='green.500'>
												₦12,000
											</Text>
											<Text fontSize='12px' color='gray'>
												Jan 3, 2022
											</Text>
										</Stack>
									</Box>
								</TabPanel>
								<TabPanel>
									<Box
										h='100px'
										w='400px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='green.500'
											bg='green.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid green.100'
											p='12px'
											fontSize='22px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='10px'>
											<Text color='#273B4A' w='200px'>
												{' '}
												Sneakers Adidas Core
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</Stack>

										<Stack>
											<Text fontSize='12px' color='green.500'>
												₦12,000
											</Text>
											<Text fontSize='12px' color='gray'>
												Jan 3, 2022
											</Text>
										</Stack>
									</Box>
									<Box
										h='100px'
										w='400px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='yellow.500'
											bg='yellow.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid yellow.100'
											p='12px'
											fontSize='22px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='10px'>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</Stack>

										<Stack>
											<Text fontSize='12px' color='yellow.500'>
												₦12,000
											</Text>
											<Text fontSize='12px' color='gray'>
												Jan 3, 2022
											</Text>
										</Stack>
									</Box>
									<Box
										h='100px'
										w='400px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='gray.500'
											bg='gray.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid gray.100'
											p='12px'
											fontSize='24px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='10px'>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</Stack>

										<Stack>
											<Text fontSize='12px' color='gray.500'>
												₦12,000
											</Text>
											<Text fontSize='12px' color='gray'>
												Jan 3, 2022
											</Text>
										</Stack>
									</Box>
								</TabPanel>
								<TabPanel>
									<Box
										h='100px'
										w='400px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='yellow.500'
											bg='yellow.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid green.100'
											p='12px'
											fontSize='22px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='10px'>
											<Text color='#273B4A' w='200px'>
												{' '}
												Sneakers Adidas Core
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</Stack>

										<Stack>
											<Text fontSize='12px' color='green.500'>
												₦12,000
											</Text>
											<Text fontSize='12px' color='gray'>
												Jan 3, 2022
											</Text>
										</Stack>
									</Box>
									<Box
										h='100px'
										w='400px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='yellow.500'
											bg='yellow.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid yellow.100'
											p='12px'
											fontSize='22px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='10px'>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</Stack>

										<Stack>
											<Text fontSize='12px' color='yellow.500'>
												₦12,000
											</Text>
											<Text fontSize='12px' color='gray'>
												Jan 3, 2022
											</Text>
										</Stack>
									</Box>
									<Box
										h='100px'
										w='400px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='gray.500'
											bg='gray.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid gray.100'
											p='12px'
											fontSize='24px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='10px'>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</Stack>

										<Stack>
											<Text fontSize='12px' color='gray.500'>
												₦12,000
											</Text>
											<Text fontSize='12px' color='gray'>
												Jan 3, 2022
											</Text>
										</Stack>
									</Box>
								</TabPanel>
							</TabPanels>
						</Center>
					</Tabs>
				</GridItem>
			</Grid>
		</Container>
	);
}
