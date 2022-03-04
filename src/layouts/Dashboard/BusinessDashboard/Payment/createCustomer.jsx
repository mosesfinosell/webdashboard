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
	InputLeftElement,
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
import { useDispatch,useSelector } from 'react-redux';
import  {createCustomers} from '../../../../ReduxContianer/BussinessRedux/BusinessAction'
	
	
export default function createCustomer() {
const dispatch = useDispatch();
  
	  const businessSignIn = useSelector((state) => state.businessSignIn);
		const { user } = businessSignIn;
		const { businessDetails } = user;
		const { message } = businessDetails;
  	
	const [customerName, setcustomerName] = useState('');
    const [customerEmail, setcustomerEmail] = useState('');
    const [customerPhonenumber, setcustomerPhonenumber] = useState('');
	const [customerAddress, setcustomerAddress] = useState('');
	const [businessId] = useState(message.business_id);
	const [randomNumber] = useState('4575r46rt5')
	

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(createCustomers(customerName,customerEmail,customerPhonenumber,customerAddress, businessId, randomNumber))
		
	}

	return (
		<Container m='40px' maxW='container.lg'>
			<Grid h='100vh' templateColumns='repeat(5, 1fr)'>
				<GridItem colSpan={4} rowSpan={6} bg='white' gap='5'>
					<Stack pb='30px'>
						<Text color='black' fontWeight='bold' fontSize='14px'>
							Add a transaction
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
									<Field name='name'>
										{({ field, form }) => (
											<FormControl mt='30px'>
												<FormLabel htmlFor='name'>Billed to</FormLabel>
												<InputGroup>
													<Input
														{...field}
														mb='20px'
														value={customerName}
														onChange={(e) => setcustomerName(e.target.value)}
														placeholder='Customer Name'
														width='420px'
														h='60px'
														borderRadius='0px 11px 11px 11px'
													/>
												</InputGroup>
											</FormControl>
										)}
									</Field>
									<Field name='email'>
										{({ field, form }) => (
											<FormControl mt={4}>
												<FormLabel htmlFor='email'>Email</FormLabel>
												<InputGroup>
													<InputLeftElement
														pointerEvents='none'
														m='15px 1px'
														fontSize='20px'
														color='gray.500'
														children={<MdEmail />}
													/>
													<Input
														{...field}
														mb='20px'
														value={customerEmail}
														onChange={(e) => setcustomerEmail(e.target.value)}
														placeholder='Email Address'
														width='400px'
														h='70px'
														borderRadius='0px 11px 11px 11px'
													/>
												</InputGroup>
											</FormControl>
										)}
									</Field>
									<Field name='number'>
										{({ field, form }) => (
											<FormControl mt={4}>
												<FormLabel htmlFor='number'>Phone number</FormLabel>
												<InputGroup>
													<InputLeftElement
														pointerEvents='none'
														m='15px 1px'
														fontSize='20px'
														color='gray.500'
														children={<MdWifiCalling3 />}
													/>
													<Input
														{...field}
														mb='20px'
														value={customerPhonenumber}
														onChange={(e) =>
															setcustomerPhonenumber(e.target.value)
														}
														placeholder='08012345678'
														width='400px'
														h='70px'
														borderRadius='0px 11px 11px 11px'
													/>
												</InputGroup>
											</FormControl>
										)}
									</Field>
									{/* <Field>
										<FormControl>
											<FormLabel htmlFor='billing date'>
												Type of Transaction
											</FormLabel>
											<Select
												id='country'
												placeholder='Select a date'
												width='400px'
												h='70px'
												borderRadius='0px 11px 11px 11px'>
												<option>United Arab Emirates</option>
												<option>Nigeria</option>
											</Select>
										</FormControl>
									</Field> */}
									<Field name='address'>
										{({ field, form }) => (
											<FormControl mt='20px'>
												<FormLabel htmlFor='address'>Address</FormLabel>
												<InputGroup>
													<Input
														mb='20px'
														{...field}
														value={customerAddress}
														onChange={(e) => setcustomerAddress(e.target.value)}
														placeholder='Select product from inventory'
														width='420px'
														h='70px'
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
										Add Customer
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
