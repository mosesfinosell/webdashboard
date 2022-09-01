import { Formik, Form, Field } from 'formik';
import {
	Container,
	Center,
	Input,
	InputLeftElement,
	InputGroup,
	FormControl,
	FormLabel,
	// FormErrorMessage,
	Button,
	Box,
	Stack,
	Image,
	Text,
} from '@chakra-ui/react';

import logo from '../../../assets/Logomark.png';
import { useState } from 'react';
import { MdEmail, MdWifiCalling3 } from 'react-icons/md';
import { useColorModeValue } from '@chakra-ui/color-mode';
import {useDispatch } from 'react-redux';
import { FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../../../ReduxContianer/BussinessRedux/BusinessAction';

export default function BusinessForgetPassword() {
	const yellowbtn = useColorModeValue('yellow.500');
	const dispatch = useDispatch();

    const [authCode, setAuthCode] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     const [retypePassword, setRetypePassword] = useState('');
	const navigate = useNavigate();

  
    
    const handleSubmit = () => {
			dispatch(resetPassword(authCode,email,password,retypePassword));
			return navigate('/dashboard');
		};


	// const businessInfo = useSelector(
	// 	(state) => state.businessReducer.businessUserInfo
	// );



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
						<Text fontSize='36px' mt='10' fontWeight='bold' lineHeight='5'>
							Reset Password
						</Text>
					</Stack>
				</Center>
				<Center>
					<Stack mt='8'>
						<Text color='gray' textAlign='center'>
							Enter your email address,the code sent to email <br />
							and reset your password
						</Text>
					</Stack>
				</Center>
				<Formik>
					{() => (
						<Center >
							<Form onSubmit={handleSubmit}>
								<Field name='authCode'>
									{() => (
										<FormControl>
											<FormLabel htmlFor='name'>Auth Code</FormLabel>
											<InputGroup>
												<InputLeftElement
													pointerEvents='none'
													m='15px 1px'
													ml={2}
													fontSize='20px'
													color='yellow.500'
													children={<MdWifiCalling3 />}
												/>
												<Input
													mb={4}
													pl='60px'
													type='number'
													placeholder='08012345678'
													width='500px'
													h='75px'
													borderRadius='0px 11px 11px 11px'
													name='authCode'
													id='authCode'
													onChange={(e) => setAuthCode(e.target.value)}
													
													value={authCode}
													_focus={{ bg: '#fdf9ed', borderColor: '#f7e8b5' }}
												/>
											</InputGroup>
											
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
													children={<MdEmail />}
												/>
												<Input
													mb={4}
													pl='60px'
													type='email'
													id='email'
													onChange={(e) => setEmail(e.target.value)}
											
													value={email}
													placeholder='Email Address'
													width='500px'
													h='75px'
													borderRadius='0px 11px 11px 11px'
													_focus={{
														bg: '#fdf9ed',
														borderColor: '#f7e8b5',
													}}
												/>
											</InputGroup>
											
										</FormControl>
									)}
								</Field>
								<Field name='password'>
									{() => (
										<FormControl>
											<FormLabel htmlFor='password'>Password</FormLabel>
											<InputGroup>
												<InputLeftElement
													m='15px 1px'
													ml={1}
													fontSize='18px'
													color='yellow.500'
													children={<FaLock />}
												/>

												<Input
													mb={4}
													pl='60px'
													type='password'
													id='password'
													placeholder='*******'
													width='500px'
													h='75px'
													borderRadius='0px 11px 11px 11px'
													onChange={(e) => setPassword(e.target.value)}
													value={password}
													name='password'
													_focus={{ bg: '#fdf9ed', borderColor: '#f7e8b5' }}
												/>
											</InputGroup>
										
										</FormControl>
									)}
								</Field>
								<Field name='password'>
									{() => (
										<FormControl>
											<FormLabel htmlFor='password'>Retype Password</FormLabel>
											<InputGroup>
												<InputLeftElement
													m='15px 1px'
													ml={1}
													fontSize='18px'
													color='yellow.500'
													children={<FaLock />}
												/>

												<Input
													pl='60px'
													type='retype_password'
													placeholder='*******'
													width='500px'
													h='75px'
													borderRadius='0px 11px 11px 11px'
													onChange={(e) => setRetypePassword(e.target.value)}
													value={retypePassword}
													id='retypePassword'
													name='retypePassword'
													_focus={{ bg: '#fdf9ed', borderColor: '#f7e8b5' }}
												/>
											</InputGroup>
											
										</FormControl>
									)}
								</Field>
								<Button
									mt={8}
									bg={yellowbtn}
									width='500px'
									h='75px'
									borderRadius='0px 11px 11px 11px'
									type='submit'
									color='white'
									_hover={{ bg: '#1A202C' }}>
									Continue
								</Button>
							</Form>
						</Center>
					)}
				</Formik>
			</Box>
		</Container>
	);
}
