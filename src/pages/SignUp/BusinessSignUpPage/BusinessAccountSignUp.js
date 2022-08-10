import {useState} from 'react'
import { Formik, Form, Field } from 'formik';
import {
	Center,
	Input,
	InputLeftElement,
	InputRightElement,
	InputGroup,
	FormControl,
	FormLabel,
	Button,
	Text,
	Stack,
	Link,
	Image,
	Box,
	Container,
} from '@chakra-ui/react';
import { Link as RLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import * as Yup from 'yup';

import { FaPhone, FaEnvelope, FaIndustry,FaAddressCard,FaLock } from 'react-icons/fa';
import { MdAddBusiness } from 'react-icons/md'

import axios from 'axios';
import logo from "../../../assets/Logomark.png";
import '../../../components/auth.css';
import { useFormik } from 'formik';
import { useColorModeValue } from '@chakra-ui/color-mode';
import toast from 'react-hot-toast';
import {
	SIGN_UP_LOADING,
	SIGN_UP_SUCCESS,
	SIGN_UP_ERROR,
} from '../../../ReduxContianer/constants/businessSignupActionType';


const finosellClient = axios.create({
	baseURL: process.env.REACT_APP_FINOSELL_BASE_URI
});

const createAccount =
	(signData) =>
		async (dispatch) => {
		const {name, phone_number, email, password, address, industry, account_type} = signData
		dispatch({
			type: SIGN_UP_LOADING,
		});
		await finosellClient
			.post('auths/firststage', {
				name,
				phone_number,
				email,
				password,
				address,
				industry,
				account_type,
			})
			.then((res) => {
				const { status, message, data } = res.data;
				if (status) {
					dispatch({
						type: SIGN_UP_SUCCESS,
						payload: data,
					});
					toast.success('Sign up successfull !!!');
				} else {
					dispatch({
						type: SIGN_UP_ERROR,
						payload: message ? message : 'COULD NOT CONNECT',
					});
				}
			})
			.catch((error) => {
				dispatch({
					type: SIGN_UP_ERROR,
					payload:
						error.response && error.response.data.message
							? error.response.data.message
							: error.error,
				});
				toast.error(error.response?.data.message);
			});
	};

 function BusinessAccountSignUp() {
		const yellowbtn = useColorModeValue('yellow.500');
 const [show, setShow] = useState(false);
 
		const dispatch = useDispatch();
		const history = useNavigate();

		// Function
		const businessSign = useSelector((state) => state.businessSignup);
		const { loading, success } = businessSign;

		const validationSchema = Yup.object().shape({
			name: Yup.string().required('Name is required'),
			email: Yup.string().email('Invalid Email').required('Email is required'),
			phoneNumber: Yup.number()
				.typeError('Phone number must be digits')
				.required('Phone number is required'),
			address: Yup.string().required('Address is required'),
			industry: Yup.string().required('Industry is required'),
			password: Yup.string()
				.min(5, 'Too short')
				.max(9, 'Okay')
				.required('Password is required'),
		});
		const initialValues = {
			name: '',
			email: '',
			phoneNumber: '',
			password: '',
			address: '',
			industry: '',
		};

		// Function
		const handleClick = () => setShow(!show);

		const onSubmit = (values, tools) => {
			const formData = {
				name: values.name,
				email: values.email,
				password: values.password,
				phone_number: values.phoneNumber,
				address: values.address,
				industry: values.industry,
				account_type: 'business',
			};
			dispatch(createAccount(formData));
			tools.resetForm();
			if (success) {
				return history('/download-app');
			}
		};

		const formik = useFormik({
			initialValues,
			onSubmit,
			validationSchema,
		});

	 return (
			<Container maxW='container.lg'>
				<Box
					p='50'
					m='36'
					boxSizing='border-box'
					borderWidth='1px'
					borderRadius='0px 21px 21px 21px'
					overflow='hidden'>
					<Center>
						<Stack>
							<Image mb='15' src={logo} alt='logo' />
						</Stack>
					</Center>

					<Center>
						<Stack>
							<Text fontSize='36px' mt='20px' fontWeight='bold' lineHeight='5'>
								Create Accounts
							</Text>
						</Stack>
					</Center>
					<Center>
						<Stack mt={2}>
							<Text color='gray'>Use your personal information</Text>
						</Stack>
					</Center>
					<Formik
						initialValues={{
							name: '',
							phoneNumber: '',
							email: '',
						}}>
						{() => (
							<Center mt={8}>
								<Form onSubmit={formik.handleSubmit}>
									<Field name='name'>
										{() => (
											<FormControl>
												<FormLabel htmlFor='name'>Name</FormLabel>
												<InputGroup>
													<InputLeftElement
														pointerEvents='none'
														m='17px 1px'
														ml={2}
														fontSize='24px'
														color='yellow.500'
														children={<MdAddBusiness />}
													/>

													<Input
														mb={4}
														pl='60px'
														type='name'
														id='name'
														placeholder='Jumoke Adetola'
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.name}
														width='500px'
														h='75px'
														borderRadius='0px 11px 11px 11px'
														_focus={{ bg: '#fdf9ed', borderColor: '#f7e8b5' }}
													/>
												</InputGroup>
												{formik.touched.name && formik.errors.name ? (
													<span className='error-message'>
														{formik.errors.name}
													</span>
												) : null}
											</FormControl>
										)}
									</Field>
									<Field name='email'>
										{() => (
											<FormControl>
												<FormLabel htmlFor='name'>Email</FormLabel>
												<InputGroup>
													<InputLeftElement
														pointerEvents='none'
														m='17px 1px'
														ml={2}
														fontSize='20px'
														color='yellow.500'
														children={<FaEnvelope />}
													/>
													<Input
														mb={4}
														pl='60px'
														type='email'
														id='email'
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.email}
														placeholder='Email Address'
														width='500px'
														h='75px'
														borderRadius='0px 11px 11px 11px'
														_focus={{ bg: '#fdf9ed', borderColor: '#f7e8b5' }}
													/>
												</InputGroup>
												{formik.touched.email && formik.errors.email ? (
													<span className='error-message'>
														{formik.errors.email}
													</span>
												) : null}
											</FormControl>
										)}
									</Field>
									<Field name='phoneNumber'>
										{() => (
											<FormControl>
												<FormLabel htmlFor='phone Number'>
													Phone number
												</FormLabel>
												<InputGroup>
													<InputLeftElement
														pointerEvents='none'
														m='17px 1px'
														ml={2}
														fontSize='20px'
														color='yellow.500'
														children={<FaPhone />}
													/>
													<Input
														mb={4}
														pl='60px'
														type='phoneNumber'
														id='phoneNumber'
														placeholder='08012345678'
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.phoneNumber}
														width='500px'
														h='75px'
														borderRadius='0px 11px 11px 11px'
														_focus={{ bg: '#fdf9ed', borderColor: '#f7e8b5' }}
													/>
												</InputGroup>
												{formik.touched.phoneNumber &&
												formik.errors.phoneNumber ? (
													<span className='error-message'>
														{formik.errors.phoneNumber}
													</span>
												) : null}
											</FormControl>
										)}
									</Field>
									<Field name='address'>
										{() => (
											<FormControl>
												<FormLabel htmlFor='address'>Address</FormLabel>
												<InputGroup>
													<InputLeftElement
														pointerEvents='none'
														m='18px 1px'
														ml={2}
														fontSize='20px'
														color='yellow.500'
														children={<FaAddressCard />}
													/>
													<Input
														mb={4}
														pl='60px'
														type='address'
														id='address'
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.address}
														placeholder='Ibadan'
														width='500px'
														h='75px'
														borderRadius='0px 11px 11px 11px'
														_focus={{ bg: '#fdf9ed', borderColor: '#f7e8b5' }}
													/>
												</InputGroup>
												{formik.touched.address && formik.errors.address ? (
													<span className='error-message'>
														{formik.errors.address}
													</span>
												) : null}
											</FormControl>
										)}
									</Field>
									<Field name='industry'>
										{() => (
											<FormControl>
												<FormLabel htmlFor='text'>Industry</FormLabel>
												<InputGroup>
													<InputLeftElement
														pointerEvents='none'
														m='17px 1px'
														ml={2}
														fontSize='20px'
														color='yellow.500'
														children={<FaIndustry />}
													/>
													<Input
														mb={4}
														pl='60px'
														type='industry'
														id='industry'
														placeholder='Food'
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.industry}
														width='500px'
														h='75px'
														borderRadius='0px 11px 11px 11px'
														_focus={{ bg: '#fdf9ed', borderColor: '#f7e8b5' }}
													/>
												</InputGroup>
												{formik.touched.industry && formik.errors.industry ? (
													<span className='error-message'>
														{formik.errors.industry}
													</span>
												) : null}
											</FormControl>
										)}
									</Field>

									<Field name='password'>
										{() => (
											<FormControl>
												<FormLabel htmlFor='name'>Password</FormLabel>
												<InputGroup>
													<InputLeftElement
														m='15px 1px'
														ml={2}
														fontSize='18px'
														color='yellow.500'
														children={<FaLock />}
													/>

													<InputRightElement
														pointerEvents='visible'
													 m='15px 8px'
													
														color='yellow.500'>
														<Button
															onClick={handleClick}
															fontSize='25px'
															size='sm'
															b='transparent'
															cursor='pointer'>
															{!show ? <FaEyeSlash /> : <FaEye />}
														</Button>
													</InputRightElement>
													<Input
														mb={4}
														pl='60px'
														type={show ? 'name' : 'password'}
														placeholder='*******'
														width='500px'
														h='75px'
														borderRadius='0px 11px 11px 11px'
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.password}
														id='password'
														name='password'
														_focus={{ bg: '#fdf9ed', borderColor: '#f7e8b5' }}
													/>
												</InputGroup>
												{formik.touched.password && formik.errors.password ? (
													<span className='error-message'>
														{formik.errors.password}
													</span>
												) : null}
											</FormControl>
										)}
									</Field>
									<Button
										mt={3}
										bg={yellowbtn}
										width='500px'
										h='75px'
										borderRadius='0px 11px 11px 11px'
										type='submit'
										color='white'
										_hover={{ bg: '#1A202C' }}
										isLoading={loading}
										loadingText='Sign Up...'
										spinnerPlacement='end'>
										Continue
									</Button>
								</Form>
							</Center>
						)}
					</Formik>
					<Center>
						<Stack mt='5'>
							<Text fontSize='18px' lineHeight='5'>
								Already have an account?
								<Link
									as={RLink}
									pl='2'
									to='/business-signin'
									color='yellow.500'>
									Login
								</Link>
							</Text>
						</Stack>
					</Center>
				</Box>
			</Container>
		);
 }

export default BusinessAccountSignUp;
