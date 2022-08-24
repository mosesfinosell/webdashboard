import {
	Container,
	Flex,
	Stack,
	Input,
	InputLeftElement,
	InputGroup,
	FormControl,
	FormErrorMessage,
	Button,
	Text,
	Box,
	VStack,
	HStack,
	Heading,
	StackDivider,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useState,useEffect } from 'react';
import { BsSortUp } from 'react-icons/bs';
import { MdFilterAlt} from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
// import user1 from '../../../../assets/user1.png';
// import { FaAngleDown } from 'react-icons/fa';
// import { RiHomeSmile2Line } from 'react-icons/ri';
// import { IoExitOutline, IoBusinessOutline } from 'react-icons/io5';
// import { BiStore } from 'react-icons/bi';
// import { GiBanknote } from 'react-icons/gi';
import {
	generateInvoice,
	getInvoice,
} from '../../../../ReduxContianer/BussinessRedux/BusinessAction';

export default function InvoiceBoard() {
	const dispatch = useDispatch();
	const yellowbtn = useColorModeValue('yellow.500');
	const [search, setSearch] = useState('');
    const orderId = 'sdjeshshshsd';
	const customers = useSelector((state) => state.businessReducer.customers);
	const order = useSelector((state) => state.businessReducer.orders);
	
	function handleClick() {
		dispatch(generateInvoice(orderId,customers.customers_id));
	}

	const downloadFile = () => {
		 dispatch(getInvoice(orderId,customers.customers_id));
			
	};

	// useEffect(() => {
	// 	dispatch(getInvoice(orderId));
	// },[])

	return (
		<Container maxW='container.lg' mt='20px' pl='180px'>
			<Flex
				w='100%'
				direction='row'
				alignItems='center'
				justifyContent='space-between'
				mb='50px'
				gap='40px'>
				<Stack>
					<Text color='black' fontWeight='bold' fontSize='30px'>
						Invoices
					</Text>
				</Stack>
				<Stack direction='row' justifyContent='center' alignItems='center'>
					<Formik>
						{() => (
							<Form>
								<Field name='text'>
									{({ field, form }) => (
										<FormControl
											isInvalid={form.errors.name && form.touched.name}>
											<InputGroup>
												<InputLeftElement
													pointerEvents='none'
													m='25px 1px'
													fontSize='20px'
													color='yellow.500'
													children=''
												/>
												<Input
													{...field}
													onChange={(e) => setSearch(e.target.value)}
													type='text'
													placeholder='Search'
													value={search}
													padding='30px 10px'
													borderRadius='0px 11px 11px 11px'
												/>
											</InputGroup>
											<FormErrorMessage>{form.errors.name}</FormErrorMessage>
										</FormControl>
									)}
								</Field>
							</Form>
						)}
					</Formik>
					<Flex direction='row' gap='10px' alignItems='center'>
						<Button
							// onClick={handleClick}
							bg={yellowbtn}
							width='180px'
							h='60px'
							borderRadius='0px 11px 11px 11px'
							type='submit'
							color='white'
							_hover={{ bg: '#1A202C' }}
							leftIcon={<FaPlus />}>
							<a href={handleClick} download>
								Generate Invoice
							</a>
						</Button>
						<Button
							onClick={downloadFile}
							bg={yellowbtn}
							width='180px'
							h='60px'
							borderRadius='0px 11px 11px 11px'
							type='submit'
							color='white'
							_hover={{ bg: '#1A202C' }}>
							Download Invoice
						</Button>
					</Flex>
				</Stack>
			</Flex>
			<Stack>
				<Box
					w='65vw'
					h='100%'
					borderWidth='1px'
					borderRadius='0px 11px 11px 11px'
					overflow='hidden'>
					<Flex
						direction='row'
						justifyContent='space-between'
						alignItems='center'
						p='20px'>
						<Stack>
							<Text color='black' fontWeight='bold' fontSize='16px'>
								All Invoice
							</Text>
						</Stack>

						<Stack direction='row' alignItems='center' fontWeight='bold'>
							<Stack
								color='black'
								direction='row'
								alignItems='center'
								// pr='30px'
							>
								<BsSortUp />
								<Text color='black' fontSize='16px'>
									Sort
								</Text>
							</Stack>
							<Stack direction='row' alignItems='center'>
								<MdFilterAlt />
								<Text color='black' fontSize='16px'>
									Filter
								</Text>
							</Stack>
						</Stack>
					</Flex>

					<VStack
						divider={<StackDivider borderColor='gray.200' />}
						// spacing={4}
						align='stretch'>
						<Box
							px='30px'
							// h='60px'
							display='flex'
							direction='row'
							alignItems='center'
							justifyContent='space-between'>
							<Stack>
								<Text color='gray' fontSize='14px'>
									Customer Name
								</Text>
							</Stack>
							<HStack
								direction='row'
								spacing='175px'
								// justifyContent='space-between'
								alignItems='center'>
								<Stack>
									<Text color='gray' textAlign='center' fontSize='14px'>
										Price
									</Text>
								</Stack>
								<Stack>
									<Text color='gray' textAlign='left' fontSize='14px'>
										Date
									</Text>
								</Stack>
								<Stack>
									<Text color='gray' fontSize='14px'>
										Status
									</Text>
								</Stack>
							</HStack>
						</Box>
						<Box
							px='30px'
							h='60px'
							display='flex'
							direction='row'
							alignItems='center'
							justifyContent='space-between'>
							<Stack direction='column' alignItems='center'>
								<Heading color='black' fontSize='13px'>
									Ridwan Egbeyemi
								</Heading>
								<Text color='gray' fontSize='12px'>
									#01982303885
								</Text>
							</Stack>
							<HStack
								direction='row'
								spacing='130px'
								// justifyContent='space-between'
								alignItems='center'>
								<Stack>
									<Heading fontSize='13px'>₦12,000</Heading>
									<Text fontSize='12px' color='gary.500'>
										on 24.05.2019
									</Text>
								</Stack>
								<Stack>
									<Heading fontSize='13px' color='black'>
										Jan 3, 2022
									</Heading>
									<Text fontSize='12px' color='gray'>
										6:30 PM
									</Text>
								</Stack>
								<Stack>
									<Text fontSize='12px' color='yellow.400'>
										Pending
									</Text>
								</Stack>
							</HStack>
						</Box>
						<Box h='80px'></Box>
					</VStack>
				</Box>
			</Stack>
		</Container>
	);
}
