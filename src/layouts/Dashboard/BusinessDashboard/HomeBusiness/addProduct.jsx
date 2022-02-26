import {
	Grid,
	Box,
	GridItem,
	Container,
	Text,
	Stack,
	Center,
	Flex,
	Heading,
	Textarea,
	Image,
	Input,
	InputLeftElement,
	InputRightElement,
	InputGroup,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Button,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { FaUser, FaLock, FaEyeSlash, FaEye, FaAngleDown } from 'react-icons/fa';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { BiPencil } from 'react-icons/bi';
import shoe from '../../../../assets/shoe.svg';
import ProductModal from './addProductModal';
//   import ProductModal from '../../../Dashboard/BusinessDashboard/BusinessDashboard'

export default function AddProduct() {
	//   const {onOpen} = ProductModal
	const yellowbtn = useColorModeValue('yellow.500');

	const [name, setName] = useState('');
	const [phonenumber, setPhonenumber] = useState('');
	const [email, setEmail] = useState('');

	return (
		<Container m='20px' maxW='container.lg'>
			<Grid
				h='100vh'
				templateColumns='repeat(7, 1fr)'
				templateRows='repeat(5, 1fr)'>
				<GridItem rowStart={1} colSpan={3} bg='white'>
					<Center>
						<Heading>Add Product</Heading>
					</Center>
				</GridItem>
				<GridItem rowStart={2} colSpan={7}>
					<Flex direction='row' justifyContent='space-between' mt='20px'>
						<Box>
							<Box
								w='150px'
								h='350px'
								border='0.5px solid white.500'
								borderRadius='0px 8px 8px 8px'>
								<Image src={shoe} alt='user' h='180px' />
							</Box>
							<Box
								color='white'
								fontSize='18px'
								w='70px'
								border='0.5px solid yellow.500'
								bg='yellow.500'
								p='20px'
								borderRadius='0px 8px 8px 8px'
								position='relative'
								bottom='120px'
								left='90px'>
								<BiPencil />
							</Box>
							<Stack mt='80px'>
								<Heading fontSize='16px' as='h6'>
									Product Specification
								</Heading>
							</Stack>
							<Stack mt='50px'>
								<Heading fontSize='16px' as='h6'>
									Alternative Information
								</Heading>
							</Stack>
						</Box>
						<Box alignItems='start'>
							<Stack>
								<Formik>
									{() => (
										<Form>
											<Field name='text'>
												{({ field, form }) => (
													<FormControl
														isInvalid={form.errors.name && form.touched.name}>
														<FormLabel htmlFor='name'>Product Name</FormLabel>
														<InputGroup>
															<Input
																{...field}
																mb='20px'
																value={name}
																//  onChange={(e) => setName(e.target.value)}
																placeholder='Product Name'
																width='420px'
																h='60px'
																borderRadius='0px 11px 11px 11px'
															/>
														</InputGroup>
														<FormErrorMessage>
															{form.errors.name}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>
											<Flex direction='row' justifyContent='space-between'>
												<Field name='text'>
													{({ field, form }) => (
														<FormControl
															isInvalid={form.errors.name && form.touched.name}>
															<FormLabel htmlFor='name'>Price</FormLabel>
															<InputGroup>
																<Input
																	{...field}
																	mb='20px'
																	value={email}
																	// onChange={(e) => setEmail(e.target.value)}
																	placeholder='₦0.00'
																	width='200px'
																	h='70px'
																	borderRadius='0px 11px 11px 11px'
																/>
															</InputGroup>
															<FormErrorMessage>
																{form.errors.name}
															</FormErrorMessage>
														</FormControl>
													)}
												</Field>
												<Field name='text'>
													{({ field, form }) => (
														<FormControl
															isInvalid={form.errors.name && form.touched.name}>
															<FormLabel htmlFor='name'>Quantity</FormLabel>
															<InputGroup>
																<Input
																	{...field}
																	mb='20px'
																	value={email}
																	// onChange={(e) => setEmail(e.target.value)}
																	placeholder='1000'
																	width='200px'
																	h='70px'
																	borderRadius='0px 11px 11px 11px'
																/>
															</InputGroup>
															<FormErrorMessage>
																{form.errors.name}
															</FormErrorMessage>
														</FormControl>
													)}
												</Field>
											</Flex>
											<Field name='number'>
												{({ field, form }) => (
													<FormControl
														isInvalid={form.errors.name && form.touched.name}>
														<FormLabel htmlFor='name'>
															Product Description
														</FormLabel>
														<InputGroup>
															<Textarea
																{...field}
																placeholder='Add a description'
																mb='20px'
																//  onChange={(e) => setPhonenumber(e.target.value)}
																width='420px'
																h='60px'
																borderRadius='0px 11px 11px 11px'
															/>
														</InputGroup>
														<FormErrorMessage>
															{form.errors.name}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>
											<Field name='text'>
												{({ field, form }) => (
													<FormControl
														isInvalid={form.errors.name && form.touched.name}>
														<FormLabel htmlFor='name'>
															Product Category
														</FormLabel>
														<InputGroup>
															<InputRightElement
																pointerEvents='none'
																color='gray.500'
																m='15px 15px'
																fontSize='24px'
																children={<FaAngleDown />}
															/>
															<Input
																{...field}
																mb='20px'
																value={name}
																//  onChange={(e) => setName(e.target.value)}
																placeholder='Select product category'
																width='420px'
																h='70px'
																borderRadius='0px 11px 11px 11px'
															/>
														</InputGroup>
														<FormErrorMessage>
															{form.errors.name}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>
											<Flex direction='row' justifyContent='space-between'>
												<Field name='text'>
													{({ field, form }) => (
														<FormControl
															isInvalid={form.errors.name && form.touched.name}>
															<FormLabel htmlFor='name'>
																Available Sizes
															</FormLabel>
															<InputGroup>
																<Input
																	{...field}
																	mb='20px'
																	value={email}
																	// onChange={(e) => setEmail(e.target.value)}
																	placeholder='Select available sizes'
																	width='200px'
																	h='70px'
																	borderRadius='0px 11px 11px 11px'
																/>
															</InputGroup>
															<FormErrorMessage>
																{form.errors.name}
															</FormErrorMessage>
														</FormControl>
													)}
												</Field>
												<Field name='text'>
													{({ field, form }) => (
														<FormControl
															isInvalid={form.errors.name && form.touched.name}>
															<FormLabel htmlFor='name'>
																Available Colors
															</FormLabel>
															<InputGroup>
																<Input
																	{...field}
																	mb='20px'
																	value={email}
																	// onChange={(e) => setEmail(e.target.value)}
																	placeholder='Select available colors'
																	width='200px'
																	h='70px'
																	borderRadius='0px 11px 11px 11px'
																/>
															</InputGroup>
															<FormErrorMessage>
																{form.errors.name}
															</FormErrorMessage>
														</FormControl>
													)}
												</Field>
											</Flex>
											<Flex direction='row' justifyContent='space-between'>
												<Field name='text'>
													{({ field, form }) => (
														<FormControl
															isInvalid={form.errors.name && form.touched.name}>
															<FormLabel htmlFor='name'>
																Discounted Price
															</FormLabel>
															<InputGroup>
																<Input
																	{...field}
																	mb='20px'
																	value={email}
																	// onChange={(e) => setEmail(e.target.value)}
																	placeholder='₦0.00'
																	width='200px'
																	h='70px'
																	borderRadius='0px 11px 11px 11px'
																/>
															</InputGroup>
															<FormErrorMessage>
																{form.errors.name}
															</FormErrorMessage>
														</FormControl>
													)}
												</Field>
												<Field name='text'>
													{({ field, form }) => (
														<FormControl
															isInvalid={form.errors.name && form.touched.name}>
															<FormLabel htmlFor='name'>
																Discount Quantity
															</FormLabel>
															<InputGroup>
																<Input
																	{...field}
																	mb='20px'
																	value={email}
																	// onChange={(e) => setEmail(e.target.value)}
																	placeholder='1000'
																	width='200px'
																	h='70px'
																	borderRadius='0px 11px 11px 11px'
																/>
															</InputGroup>
															<FormErrorMessage>
																{form.errors.name}
															</FormErrorMessage>
														</FormControl>
													)}
												</Field>
											</Flex>
											<Field name='number'>
												{({ field, form }) => (
													<FormControl
														isInvalid={form.errors.name && form.touched.name}>
														<FormLabel htmlFor='name'>Discount Code</FormLabel>
														<InputGroup>
															<Textarea
																{...field}
																placeholder='Discount Code'
																mb='20px'
																//  onChange={(e) => setPhonenumber(e.target.value)}
																width='420px'
																h='60px'
																borderRadius='0px 11px 11px 11px'
															/>
														</InputGroup>
														<FormErrorMessage>
															{form.errors.name}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>
										</Form>
									)}
								</Formik>
							</Stack>
							<Stack>
								<Button
									onClick={() => {
										ProductModal();
									}}
									mt={4}
									bg={yellowbtn}
									width='400px'
									h='70px'
									borderRadius='0px 11px 11px 11px'
									type='submit'
									color='white'
									_hover={{ bg: '#1A202C' }}>
									Add Product
								</Button>
							</Stack>
						</Box>
					</Flex>
				</GridItem>
			</Grid>
		</Container>
	);
}
