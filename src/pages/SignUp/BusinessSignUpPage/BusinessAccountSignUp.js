import {useState,useEffect} from 'react'
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
	createStandaloneToast,
	Link,
	Image,
	Box,
	Container,
} from '@chakra-ui/react';
import { Link as RLink } from 'react-router-dom';
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


 function BusinessAccountSignUp() {
		const yellowbtn = useColorModeValue('yellow.500');
 const [show, setShow] = useState(false);
 
  const [isLoading, setIsLoading] = useState(false);
const toast = createStandaloneToast();

	 const history = useNavigate();
	
		const validationSchema = Yup.object().shape({
			name: Yup.string().required('Name is required'),
			email: Yup.string().email('Invalid Email').required('Email is required'),
			tel: Yup.number()
				.typeError('Phone number must be digits')
				.required('Phone number is required'),
			address: Yup.string().required('Address is required'),
			industry: Yup.string().required('Industry is required'),
			password: Yup.string()
				.min(5, 'Too short')
				.max(19, 'Okay')
				.required('Password is required'),
		});
		const initialValues = {
			name: '',
			email: '',
			tel: '',
			password: '',
			address: '',
			industry: '',
		};

		// Function
	 const handleClick = () => setShow(!show);

	 const onSubmit = (values, tools) => {
		  setIsLoading(true);
		 const formData = {
			 name: values.name,
			 email: values.email,
			 password: values.password,
			 phone_number: values.tel,
			 address: values.address,
			 industry: values.industry,
			 account_type: 'business',
		 };
		  axios
      .post("https://finosell.link/api/v2/auths/firststage", formData)
      .then((response) => {
        setIsLoading(false);
		  const userDetails = response?.data.message;
		  console.log(userDetails)
        toast({
					position: 'top',
					// title: `Welcome ${userDetails.business_name}`,
					description: 'You have successfully signup',
					status: 'success',
					duration: 3000,
					isClosable: true,
				});
        localStorage.setItem("password", response.data?.message.password);
        tools.resetForm();
        return history('/dashboard');
      })
      .catch((error) => {
        setIsLoading(false);
        toast({
					position: 'top',
					title: `Unsuccessful Attempt`,
					description: `${error.response?.data.message}`,
					status: 'error',
					duration: 3000,
					isClosable: true,
				});
        tools.resetForm();
        return error;
      });
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
														type='tel'
														id='tel'
														placeholder='08012345678'
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.tel}
														width='500px'
														h='75px'
														borderRadius='0px 11px 11px 11px'
														_focus={{ bg: '#fdf9ed', borderColor: '#f7e8b5' }}
													/>
												</InputGroup>
												{formik.touched.tel &&
												formik.errors.tel? (
													<span className='error-message'>
														{formik.errors.tel}
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
									isLoading={isLoading}
									loadingText='SignUp...'
									spinnerPlacement='end'>
									Sign Up
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
