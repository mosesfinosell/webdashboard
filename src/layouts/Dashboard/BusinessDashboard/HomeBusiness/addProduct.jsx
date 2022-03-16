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
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	InputRightElement,
	InputGroup,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Button,
	useDisclosure,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { useState, useRef } from 'react';
import { FaUser, FaLock, FaEyeSlash, FaEye, FaAngleDown } from 'react-icons/fa';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { BiPencil } from 'react-icons/bi';
import shoe from '../../../../assets/shoe.svg';
import ProductModal from './addProductModal';
import { createProduct } from '../../../../ReduxContianer/BussinessRedux/BusinessAction';
import { useSelector, useDispatch} from 'react-redux'
//   import ProductModal from '../../../Dashboard/BusinessDashboard/BusinessDashboard'

export default function AddProduct() {
	 const { isOpen, onOpen, onClose } = useDisclosure();
		const btnRef = useRef();
const dispatch = useDispatch();
	//   const {onOpen} = ProductModal
	const yellowbtn = useColorModeValue('yellow.500');

	const [title, setTitle] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [price, setPrice] = useState('');
	const [color, setColor] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [size, setSize] = useState('');
	const [image, setImage] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
       dispatch(
					createProduct(
						title,
						phoneNumber,
						price,
						color,
						description,
						category,
						size,
						image
					)
				);
		console.log(title,phoneNumber,price,color,description,category,size,image)
	}

    // const [businessId] = useState(message.business_id);
	return (
		<Container m='20px' maxW='container.lg'>
			<Stack>
				<Button
					bg={yellowbtn}
					width='150px'
					h='60px'
					borderRadius='0px 11px 11px 11px'
					type='submit'
					color='white'
					_hover={{ bg: '#1A202C' }}
					ref={btnRef}
					onClick={onOpen}>
					+ Add Product
				</Button>
			</Stack>
			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
				finalFocusRef={btnRef}
				size='lg'>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Add Product</DrawerHeader>

					<DrawerBody>
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
									<Formik
										initialValues={{image: ""}}
										onSubmit={(values) => {
											console.log(values)
										}}
									>
										{() => (
											<Form onSubmit={handleSubmit}>
												<Field name='text'>
													{({ field, form }) => (
														<FormControl
															isInvalid={form.errors.name && form.touched.name}>
															<FormLabel htmlFor='name'>Product Name</FormLabel>
															<InputGroup>
																<Input
																	{...field}
																	mb='20px'
																	value={title}
																	onChange={(e) => setTitle(e.target.value)}
																	placeholder='Product Title'
																	width='300px'
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
												<Field name='number'>
													{({ field, form }) => (
														<FormControl
															isInvalid={form.errors.name && form.touched.name}>
															<FormLabel htmlFor='phoneName'>
																Seller Phone Number
															</FormLabel>
															<InputGroup>
																<Input
																	{...field}
																	mb='20px'
																	value={phoneNumber}
																	onChange={(e) =>
																		setPhoneNumber(e.target.value)
																	}
																	placeholder='08123456789'
																	width='300px'
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
												{/* <Flex direction='row' justifyContent='space-between'> */}
												<Field name='text'>
													{({ field, form }) => (
														<FormControl
															isInvalid={form.errors.name && form.touched.name}>
															<FormLabel htmlFor='name'>Price</FormLabel>
															<InputGroup>
																<Input
																	{...field}
																	mb='20px'
																	value={price}
																	onChange={(e) => setPrice(e.target.value)}
																	placeholder='₦0.00'
																	width='300px'
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
															<FormLabel htmlFor='name'>Color</FormLabel>
															<InputGroup>
																<Input
																	{...field}
																	mb='20px'
																	value={color}
																	onChange={(e) => setColor(e.target.value)}
																	placeholder='red'
																	width='300px'
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
												{/* </Flex> */}
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
																	value={description}
																	onChange={(e) =>
																		setDescription(e.target.value)
																	}
																	width='300px'
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
																<Input
																	{...field}
																	mb='20px'
																	value={category}
																	onChange={(e) => setCategory(e.target.value)}
																	placeholder='Select product category'
																	width='300px'
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
												{/* <Flex direction='row' justifyContent='space-between'> */}
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
																	value={size}
																	onChange={(e) => setSize(e.target.value)}
																	placeholder='Select available sizes'
																	width='300px'
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
																Product Image
															</FormLabel>
															<InputGroup>
																<Input
																	{...field}
																	mb='20px'
																	type='file'
																	name='image'
																	onChange={(event) => 
																		form.setFieldValue("image", event.target.files[0])
																	
																	}
																	placeholder='Select available colors'
																	width='300px'
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
												{/* </Flex> */}
												<DrawerFooter>
													<Button
														mt={4}
														bg={yellowbtn}
														width='300px'
														h='60px'
														borderRadius='0px 11px 11px 11px'
														type='submit'
														color='white'
														_hover={{ bg: '#1A202C' }}>
														Add Product
													</Button>
												</DrawerFooter>
											</Form>
										)}
									</Formik>
								</Stack>
							</Box>
						</Flex>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Container>
	);
}
