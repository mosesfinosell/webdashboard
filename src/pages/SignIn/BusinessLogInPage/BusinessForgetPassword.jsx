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
import { MdEmail } from 'react-icons/md';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { sendAuthCode } from '../../../ReduxContianer/BussinessRedux/BusinessAction';

export default function BusinessForgetPassword() {
	const yellowbtn = useColorModeValue('yellow.500');
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const navigate = useNavigate();
	

	  
  

	function handleClick() {
		// if ('email') {
		// 	dispatch(sendAuthCode(email));
		// }
		return navigate('/reset-password');
	}

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
							Forgot Password
						</Text>
					</Stack>
				</Center>
				<Center>
					<Stack mt='8'>
						<Text color='gray'>
							Enter your email address and we’ll email <br /> you a code to use
							to reset your passcode
						</Text>
					</Stack>
				</Center>
				<Formik>
					{() => (
						<Center>
							<Form>
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
								<Button
									onClick={handleClick}
									mt={4}
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
