import {
	Box,
	Container,
	Stack,
	Flex,
	Heading,
	Textarea,	
	Input,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	InputGroup,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Button,
	useDisclosure,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';

import { useState, useRef } from 'react';
import { FaPlus} from 'react-icons/fa';
import { useColorModeValue } from '@chakra-ui/color-mode';
// import { BiPencil } from 'react-icons/bi';
// import shoe from '../../../../assets/shoe.svg';
import FileUpload from '../Account/uploadImage';
import { useForm } from 'react-hook-form';

// import ProductModal from './addProductModal';
import { createProduct } from '../../../../ReduxContianer/BussinessRedux/BusinessAction';
import { useSelector, useDispatch} from 'react-redux'
//   import ProductModal from '../../../Dashboard/BusinessDashboard/BusinessDashboard'
import QrReaderPage from '../../../Dashboard/BusinessDashboard/QRcode/QrReaderPage';

export default function AddProduct() {
	 const { isOpen, onOpen, onClose } = useDisclosure();
		const btnRef = useRef();
const dispatch = useDispatch();
	//   const {onOpen} = ProductModal
	const yellowbtn = useColorModeValue('yellow.500');

		const {
			// handleSubmit,
			register,
			setError,
			control,
			formState: { errors, isSubmitting },
		} = useForm();


	const [title, setTitle] = useState('');
	const [price, setPrice] = useState('');
	const [color, setColor] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [size, setSize] = useState('');
	const [image, setImage] = useState('');
  const isFetching = useSelector((state) => state.businessReducer.isFetching);

// const [businessId] = useState('c3cd4210-6e69-48ac-975f-b4a0b3b2ef9d');
const businessInfo = useSelector(
	(state) => state.businessReducer.businessUserInfo
);
	
	function handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData();
        formData.append('title', title);
		formData.append('description', description);
		formData.append('businessid', businessInfo.business_id);
		formData.append('product_img', image);
		formData.append('category', category);
		formData.append('size', size);
		formData.append('color', color);
		formData.append('price', price);
		
       dispatch(createProduct(FormData));
		console.log(image)
	}

	
    
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
					onClick={onOpen}
					leftIcon={<FaPlus />}>
					Add Product
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
									// w='150px'
									// h='750px'
									border='0.5px solid white.500'
									borderRadius='0px 8px 8px 8px'>
									<QrReaderPage />
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
									<Formik initialValues={{ image: '' }}>
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
												{/* <Field name='text'>
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
																		
																			form.setFieldValue(
																				'image',
																				event.target.files[0]
																			)
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
												</Field> */}
												<FileUpload
													name='image'
													acceptedFileTypes='image/*'
													isRequired={true}
													placeholder='Select picture'
													width='300px'
													height='60px'
													value={image}
													onChange={(e) => setImage(e.target.files[0])}
													control={control}>
													Product Image
												</FileUpload>
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
														_hover={{ bg: '#1A202C' }}
														isLoading={isSubmitting}
														loadingText='Adding...'
														spinnerPlacement='end'>
														{!isFetching ? 'Add Product' : 'Adding Product...'}
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
