import {Formik,Form,Field} from 'formik'
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
  } from '@chakra-ui/react'

import logo from '../../../assets/Logomark.png'
import {useState} from 'react'
  import {MdEmail} from 'react-icons/md'
import { useColorModeValue } from "@chakra-ui/color-mode";
  import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { sendAuthCode } from '../../../ReduxContianer/BussinessRedux/BusinessAction';

export default function BusinessForgetPassword() {
    const yellowbtn = useColorModeValue('yellow.500');
    const dispatch = useDispatch();
    
	const [email, setEmail] = useState('');
const navigate = useNavigate();
	const validationSchema = Yup.object().shape({
		email: Yup.string().email('Invalid Email').required('Email is required'),
	});
	const initialValues = {
		email: '',
	};
	const formik = useFormik({
		initialValues,
		// onSubmit,
		validationSchema,
	});

    const businessInfo = useSelector(
	(state) => state.businessReducer.businessUserInfo
);

	function handleClick() {
	    if ('email') {
	        dispatch(sendAuthCode(businessInfo.email));
	    }
	  return navigate('otp');
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
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values.email}
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
											{formik.touched.email && formik.errors.email ? (
												<span className='error-message'>
													{formik.errors.email}
												</span>
											) : null}
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
					;
				</Formik>
			</Box>
		</Container>
	);
}
      

