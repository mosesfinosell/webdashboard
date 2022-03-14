import { Formik, Form, Field } from 'formik';
import {
	Center,
	Input,
	InputRightElement,
	InputLeftElement,
	InputGroup,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Button,
	Box,
	Stack,
	Image,
	Text,
	Container,
	Spinner,
	// useToast,
	Alert,
	AlertIcon,
	createStandaloneToast,
} from '@chakra-ui/react';
import { useState,useEffect } from 'react';
import { Link as RLink } from 'react-router-dom';
import logo from '../../../assets/Logomark.png';
import { MdWifiCalling3 } from 'react-icons/md';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import {Redirect} from 'react-router-dom'
import * as Yup from 'yup';
import { businessUserLogin } from '../../../ReduxContianer/BussinessRedux/BusinessAction';
// import {getUserDetails} from '../../../ReduxContianer/BussinessRedux/BusinessAction'

export default function BusinessAccountSignIn() {
	const yellowbtn = useColorModeValue('yellow.500');

	// Redux
	const dispatch = useDispatch();
	const businessSignIn = useSelector((state) => state.businessSignIn);
	const { error, businessDetails, loading } = businessSignIn;

    // const getUser = useSelector((state) => state.getUser);
	// const { users } = getUser;
    // console.log(users)
	const [phoneNumber, setPhoneNumber] = useState('');
	const [password, setPassword] = useState('');
	
	const [show, setShow] = useState(false);
	// const [errorMessage, setErrorMessage] = useState(true);

	// const toast = useToast({error})

	//Validation
	const SignInSchema = Yup.object().shape({
		phoneNumber: Yup.number().required('Phone number is required'),
		password: Yup.string().required('Password is required'),
	});

	// Function
	const handleClick = () => setShow(!show);

	const handleSubmit = (e) => {
		dispatch(businessUserLogin(phoneNumber, password));
		e.preventDefault();
		
		console.log(phoneNumber, password);
	};

	const history = useHistory();
	//   const toast = useToast();
	const toast = createStandaloneToast();

	useEffect(() => {
// dispatch(getUserDetails("user_id"));
		if (businessDetails) {
			toast({
				position: 'top',
				title: `Welcome ${businessDetails.message.name}`,
				description: 'You have successfully login',
				status: 'success',
				duration: 3000,
				isClosable: true,
			});
			return history.push('/business-dashboard');
			
		}
		}, [businessDetails, history,error]);

	
	// function handleClicked() {
	// 	if (error) {
			
	// 		toast({
	// 			title: `${error}`,
	// 			description: 'incorrect email or password',
	// 			status: 'error',
	// 			duration: 3000,
	// 			isClosable: true,
	// 		});
	// 	}
	// }
			
	
	return (
		<Container maxW='container.lg'>
			<Box
				maxW='xlg'
				p='20'
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
				<Center></Center>
				<Center>
					<Stack>
						<Text fontSize='36px' mt='10' fontWeight='bold' lineHeight='5'>
							Welcome back
						</Text>
					</Stack>
				</Center>
				<Center>
					<Stack mt='8'>
						<Text color='gray'>Enter your login details</Text>
					</Stack>
				</Center>
				<Formik
					initialValues={{
						phoneNumber: '',
						email: '',
					}}>
					{() => (
						<Center>
							<Form onSubmit={handleSubmit}>
								<Field name='phoneNumber'>
									{({ field, form }) => (
										<FormControl
											isInvalid={
												form.errors.phoneNumber && form.touched.phoneNumber
											}
											mt={4}>
											<FormLabel htmlFor='name'>Phone Number</FormLabel>
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
													m='15px 15px'
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
													{...field}
													type={show ? 'text' : 'password'}
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
								//    onClick={handleClicked}
								>
									Login
								</Button>
							</Form>
						</Center>
					)}
				</Formik>
				<Center>
					<Stack mt='5'>
						<Text as={RLink} pl='2' to='/forget-password' color='yellow.500'>
							Forgot Password
						</Text>
					</Stack>
				</Center>
			</Box>
		</Container>
	);
}
