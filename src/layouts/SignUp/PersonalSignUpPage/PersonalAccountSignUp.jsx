import { Formik, Form, Field } from 'formik';
import {
	Center,
	Input,
	InputLeftElement,
	InputRightElement,
	InputGroup,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Button,
	Text,
	Stack,
	Image,
	Box,
	Container,
} from '@chakra-ui/react';

import * as Yup from 'yup';
import { MdEmail, MdWifiCalling3 } from 'react-icons/md';
import { FaUser, FaLock, FaEyeSlash, FaEye } from 'react-icons/fa';
import { useColorModeValue } from '@chakra-ui/color-mode';
import logo from '../../../assets/Logomark.png';
import { Link as RLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import {personalUserSignUp} from '../../../ReduxContianer/PersonalRedux/PersonalAction'


export default function PersonalAccountSignUp() {
	const yellowbtn = useColorModeValue('yellow.500');

	// Redux
	const dispatch = useDispatch();
	const personalSignUp = useSelector((state) => state.personalSignUp);
	const {error, loading,user} = personalSignUp;
      const {userDetails} = user
	 
	// //router

	const history = useHistory();

	// useState
	const [name, setName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// const [personal] = useState('')
	const [show, setShow] = useState(false);

	// Function
	const handleClick = () => setShow(!show);
const toast = createStandaloneToast();

	function handleSubmit(e) {
		dispatch(
			personalUserSignUp(name, phoneNumber, email, password, 'personal')
		);
		e.preventDefault();
		localStorage.setItem('phoneNumber', phoneNumber);
		// localStorage.setItem('name', name)
		// console.log(localStorage.getItem('phoneNumber'))
		// setEmail('');
		// setPhoneNumber('');
		// setName('')
		console.log(name, phoneNumber, email, password, "personal");
	}

	useEffect(() => {
		if (userDetails) {
			toast({
				position: 'top',
				title: `Welcome ${userDetails.message.name}`,
				description: 'You have successfully register',
				status: 'success',
				duration: 3000,
				isClosable: true,
			});
			return history.push('/personal-dashboard');
		}	
	}, [userDetails, history]);


	//Validation
	const SignupSchema = Yup.object().shape({
		name: Yup.string().required('Name is required'),
		email: Yup.string().email('Invalid Email').required('Email is required'),
		phoneNumber: Yup.number().required('Phone number is required'),
		password: Yup.string()
			.min(5, 'Too short')
			.max(9, 'Okay')
			.required('Password is required'),
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
					<Stack mt={3}>
						<Text color='gray'>Use your personal information</Text>
					</Stack>
				</Center>
				<Formik
					//  validationSchema={SignupSchema}
					initialValues={{
						name: '',
						phoneNumber: '',
						email: '',
						password: '',
					}}>
					{() => (
						<Center>
							<Form onSubmit={handleSubmit}>
								<Field name='name'>
									{({ field, form }) => (
										<FormControl
											isInvalid={form.errors.name && form.touched.name}
											mt={4}>
											<FormLabel htmlFor='name'>Name</FormLabel>
											<InputGroup>
												<InputLeftElement
													pointerEvents='none'
													m='15px 1px'
													fontSize='20px'
													color='yellow.500'
													children={<FaUser />}
												/>
												<Input
													{...field}
													type='name'
													value={name}
													onChange={(e) => setName(e.target.value)}
													placeholder='Jumoke Adetola'
													width='400px'
													h='70px'
													borderRadius='0px 11px 11px 11px'
												/>
											</InputGroup>
											<FormErrorMessage>{form.errors.name}</FormErrorMessage>
										</FormControl>
									)}
								</Field>
								<Field name='email'>
									{({ field, form }) => (
										<FormControl
											isInvalid={form.errors.email && form.touched.email}
											mt={4}>
											<FormLabel htmlFor='email'>Email</FormLabel>
											<InputGroup>
												<InputLeftElement
													pointerEvents='none'
													m='15px 1px'
													fontSize='20px'
													color='yellow.500'
													children={<MdEmail />}
												/>
												<Input
													{...field}
													type='email'
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
								<Field name='phoneNumber'>
									{({ field, form }) => (
										<FormControl
											isInvalid={
												form.errors.phoneNumber && form.touched.phoneNumber
											}
											mt={4}>
											<FormLabel htmlFor='name'>Phone number</FormLabel>
											<InputGroup>
												<InputLeftElement
													pointerEvents='none'
													m='15px 1px'
													fontSize='20px'
													color='yellow.500'
													children={<MdWifiCalling3 />}
												/>
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
								<Field name='password'>
									{({ field, form }) => (
										<FormControl
											isInvalid={form.errors.password && form.touched.password}
											mt={4}>
											<FormLabel htmlFor='password'>Password</FormLabel>
											<InputGroup>
												<InputLeftElement
													m='15px 1px'
													fontSize='18px'
													color='yellow.500'
													children={<FaLock />}
												/>

												<InputRightElement
													pointerEvents='visible'
													m='20px 15px'
													color='yellow.500'>
													<Button
														onClick={handleClick}
														fontSize='25px'
														size='sm'
														b='transparent'
														cursor='pointer'>
														{show ? <FaEyeSlash /> : <FaEye />}
													</Button>
												</InputRightElement>
												<Input
													{...field}
													type={!show ? 'password' : 'text'}
													onClick={handleClick}
													onChange={(e) => setPassword(e.target.value)}
													value={password}
													placeholder='*********'
													width='400px'
													h='70px'
													borderRadius='0px 11px 11px 11px'
												/>
											</InputGroup>
											<FormErrorMessage>
												{form.errors.password}
											</FormErrorMessage>
										</FormControl>
									)}
								</Field>
								<Button
									mt={4}
									bg={yellowbtn}
									width='400px'
									h='70px'
									borderRadius='0px 11px 11px 11px'
									type='submit'
									color='white'
									_hover={{ bg: '#1A202C' }}
									// onClick={handleButton}
								>
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
							<Text as={RLink} pl='2' to='/personal-signin' color='yellow.500'>
								Login
							</Text>
						</Text>
					</Stack>
				</Center>
			</Box>
		</Container>
	);
}
