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
	Textarea,
	InputGroup,
	FormControl,
	FormLabel,
	Button,
	Select,
} from '@chakra-ui/react';
import { BiShoppingBag } from 'react-icons/bi';
import { MdEmail, MdWifiCalling3 } from 'react-icons/md';
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';

export default function CreateTransaction() {
	const dispatch = useDispatch();

	const businessSignIn = useSelector((state) => state.businessSignIn);
	const { user } = businessSignIn;
	const { businessDetails } = user;
	const { message } = businessDetails;

	const [customerName, setcustomerName] = useState('');
	const [details, setDetails] = useState('');
	const [paymentDate, setpaymentDate] = useState('');
	const [paymentId, setPaymentId] = useState('');
    const [businessId] = useState(message.business_id);
    const [customerId] = useState(message.customer_id);
    const [paymentStatus, setPaymentStatus] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [paymentRef, setPaymentRef] = useState('');
    const [transactionType, setTransactionType] = useState('');
    const [amount, setAmount] = useState('');
	const [product,setProduct] = useState('4575r46rt5');

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(
		
        )
	}

    return (
			<Container m='40px' maxW='container.lg'>
				<Grid h='100vh' templateColumns='repeat(5, 1fr)'>
					<GridItem colSpan={4} rowSpan={6} bg='white' gap='5'>
						<Stack pb='30px'>
							<Text color='black' fontWeight='bold' fontSize='14px'>
								Add a Transcation
							</Text>
						</Stack>

						<Box
							h='700px'
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
													<FormLabel htmlFor='text'>Transaction Details</FormLabel>

													<Textarea
														placeholder='Payment Details'
														size='sm'
														{...field}
														mb='20px'
														value={details}
														onChange={(e) => setDetails(e.target.value)}
														width='300px'
														h='80px'
														borderRadius='0px 11px 11px 11px'
													/>
												</FormControl>
											)}
										</Field>
										<Field name='text'>
											{({ field, form }) => (
												<FormControl>
													<FormLabel htmlFor='order type'>
														Payment Date
													</FormLabel>
													{/* <Input
													{...field}
													mb='20px'
													width='300px'
													h='60px'
													borderRadius='0px 11px 11px 11px'> */}
													<DatePicker
														mb='20px'
														selected={paymentDate}
														onChange={(date) => setpaymentDate(date)}
													/>
													{/* </Input> */}
												</FormControl>
											)}
										</Field>
										<Field name='text'>
											{({ field, form }) => (
												<FormControl>
													<FormLabel htmlFor='order status'>
														Payment Status
													</FormLabel>
													<Select
														mb='20px'
														placeholder='Add Order Status'
														value={paymentStatus}
														onChange={(e) => setPaymentStatus(e.target.value)}
														width='300px'
														h='60px'
														borderRadius='0px 11px 11px 11px'>
														<option>Full Payment</option>
														<option>Half Payment</option>
													</Select>
												</FormControl>
											)}
										</Field>
										<Field name='text'>
											{({ field, form }) => (
												<FormControl>
													<FormLabel htmlFor='order type'>
														Transaction Type
													</FormLabel>
													<Select
														mb='20px'
														placeholder='Add Order Type'
														value={transactionType}
														onChange={(e) => setTransactionType(e.target.value)}
														width='300px'
														h='60px'
														borderRadius='0px 11px 11px 11px'>
														<option></option>
														<option></option>
													</Select>
												</FormControl>
											)}
										</Field>
										<Field name='number'>
											{({ field, form }) => (
												<FormControl mt={4}>
													<FormLabel htmlFor='number'>Amount</FormLabel>
													<InputGroup>
														<Input
															{...field}
															placeholder='Add Total Amount'
															mb='20px'
															value={amount}
															onChange={(e) => setAmount(e.target.value)}
															width='400px'
															h='60px'
															borderRadius='0px 11px 11px 11px'
														/>
													</InputGroup>
												</FormControl>
											)}
										</Field>

										
										{/* <Stack>
											<SelectProduct />
										</Stack>
										<Stack>
											<SelectCustomer />
										</Stack> */}

										<Button
											mt={4}
											bg='yellow.500'
											width='300px'
											h='60px'
											borderRadius='0px 11px 11px 11px'
											type='submit'
											color='white'
											_hover={{ bg: '#1A202C' }}>
											Add Transaction
										</Button>
									</Form>
								)}
							</Formik>
						</Box>
					</GridItem>
					<GridItem colStart={6} colEnd={9} h='10' bg='white'>
						<Stack m='10px'>
							<Text color='gray' fontSize='14px'>
								Deal History
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
