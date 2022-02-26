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
	Input,
	InputLeftElement,
	InputRightElement,
	InputGroup,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Button,
	Select,
	Switch,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { MdEmail, MdWifiCalling3 } from 'react-icons/md';

export default function AddInvoice() {
	const yellowbtn = useColorModeValue('yellow.500');

	const [name, setName] = useState('');
	const [phonenumber, setPhonenumber] = useState('');
	const [email, setEmail] = useState('');

	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);

	return (
		<Container m='20px' maxW='container.lg'>
			<Grid
				h='100vh'
				templateColumns='repeat(7, 1fr)'
				templateRows='repeat(5, 1fr)'>
				<GridItem rowStart={1} colSpan={3} bg='white'>
					<Center>
						<Heading>Add Invoice</Heading>
					</Center>
				</GridItem>
				<GridItem rowStart={2} colSpan={7}>
					<Flex direction='row' justifyContent='space-between' mt='20px'>
						<Box>
							<Stack mt='80px'>
								<Heading fontSize='16px' as='h6'>
									Contact Information
								</Heading>
							</Stack>
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
														<FormLabel htmlFor='name'>Billed to</FormLabel>
														<InputGroup>
															<Input
																{...field}
																mb='20px'
																value={name}
																//  onChange={(e) => setName(e.target.value)}
																placeholder='Customer Name'
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
											<Field name='email'>
												{({ field, form }) => (
													<FormControl
														isInvalid={form.errors.email && form.touched.email}
														mt={4}>
														<FormLabel htmlFor='name'>Email</FormLabel>
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
																//   value={email}
																//   onChange={(e) => setEmail(e.target.value)}
																placeholder='Email Address'
																width='400px'
																h='70px'
																borderRadius='0px 11px 11px 11px'
															/>
														</InputGroup>
														<FormErrorMessage>
															{form.errors.email}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>
											<Field name='phoneNumber'>
												{({ field, form }) => (
													<FormControl
														isInvalid={
															form.errors.phoneNumber &&
															form.touched.phoneNumber
														}
														mt={4}>
														<FormLabel htmlFor='name'>Phone number</FormLabel>
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
																//    value={phoneNumber}
																//    onChange={(e) => setPhoneNumber(e.target.value)}
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
											<Field name='text'>
												{({ field, form }) => (
													<FormControl>
														<FormLabel htmlFor='billing date'>
															Billing Date
														</FormLabel>
														<Select
															id='country'
															placeholder='Select a date'
															width='420px'
															h='70px'
															borderRadius='0px 11px 11px 11px'>
															<option>United Arab Emirates</option>
															<option>Nigeria</option>
														</Select>
													</FormControl>
												)}
											</Field>
											<Field name='text'>
												{({ field, form }) => (
													<FormControl
														isInvalid={form.errors.name && form.touched.name}>
														<FormLabel htmlFor='name'>Product</FormLabel>
														<InputGroup>
															<Input
																{...field}
																mb='20px'
																value={name}
																//  onChange={(e) => setName(e.target.value)}
																placeholder='Select product from inventory'
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
											<Field name='text'>
												{({ field, form }) => (
													<FormControl>
														<FormLabel htmlFor='billing date'>
															Product
														</FormLabel>
														<Select
															id='country'
															placeholder='Select product category'
															width='420px'
															h='70px'
															borderRadius='0px 11px 11px 11px'>
															<option>United Arab Emirates</option>
															<option>Nigeria</option>
														</Select>
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
											<Center mb='20px'>
												<Text color='yellow.500'>+Add Another Product</Text>
											</Center>
											<Flex direction='row' justifyContent='space-between'>
												<Field name='text'>
													{({ field, form }) => (
														<FormControl
															isInvalid={form.errors.name && form.touched.name}>
															<FormLabel htmlFor='name'>Tax</FormLabel>
															<InputGroup>
																<Input
																	{...field}
																	mb='20px'
																	value={email}
																	// onChange={(e) => setEmail(e.target.value)}
																	placeholder='0%'
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
															<FormLabel htmlFor='name'>Discount</FormLabel>
															<InputGroup>
																<Input
																	{...field}
																	mb='20px'
																	value={email}
																	// onChange={(e) => setEmail(e.target.value)}
																	placeholder='0%'
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
											<Field name='text'>
												{({ field, form }) => (
													<FormControl>
														<FormLabel htmlFor='billing date'>
															Billing Date
														</FormLabel>
														<Select
															id='country'
															placeholder='Select a date'
															width='420px'
															h='70px'
															borderRadius='0px 11px 11px 11px'
															mb='20px'>
															<option>United Arab Emirates</option>
															<option>Nigeria</option>
														</Select>
													</FormControl>
												)}
											</Field>
											<FormControl
												display='flex'
												alignItems='center'
												justifyContent='space-between'
												mb='20px'>
												<FormLabel htmlFor='email-alerts' mb='0'>
													Add a payment link
												</FormLabel>
												<Switch id='email-alerts' />
											</FormControl>
										</Form>
									)}
								</Formik>

								<Button
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
