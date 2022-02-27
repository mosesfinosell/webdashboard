import { Formik, Form, Field } from 'formik';
import {
	Container,
	Center,
	Input,
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
} from '@chakra-ui/react';

import logo from '../../../assets/Logomark.png';
import { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { useColorModeValue } from '@chakra-ui/color-mode';

export default function PersonalForgetPassword() {
	const yellowbtn = useColorModeValue('yellow.500');
	const [email, setEmail] = useState('');

	return (
		<Container maxW='container.lg'>
			<Box
				p='50'
				m='36'
				boxSizing='border-box'
				borderWidth='1px'
				borderRadius='0px 21px 21px 21px'
				m='20'
				borderRadius='lg'
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
						<Text color='gray' textAlign='center' w='350px' mb='20px'>
							Enter your email address and we’ll email you a code to use
							to reset your passcode
						</Text>
					</Stack>
				</Center>
				<Formik>
					{() => (
						<Center>
							<Form>
								<Field name='email'>
									{({ field, form }) => (
										<FormControl
											isInvalid={form.errors.name && form.touched.name}>
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
													onChange={(e) => setEmail(e.target.value)}
													type='email'
													placeholder='Email Address'
													value={email}
													width='400px'
													h='70px'
													mb='20px'
													borderRadius='0px 11px 11px 11px'
												/>
											</InputGroup>
											<FormErrorMessage>{form.errors.name}</FormErrorMessage>
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
