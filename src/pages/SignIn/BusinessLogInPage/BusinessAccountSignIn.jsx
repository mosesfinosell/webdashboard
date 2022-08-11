import {
	Input,
	InputRightElement,
	InputLeftElement,
	InputGroup,
	FormLabel,
	Button,
	Image,
	Text,
	createStandaloneToast,
	Container,
	Box,
	Center,
	Stack,
	FormControl
} from '@chakra-ui/react';
import {Formik,Form,Field} from 'formik'
import { useState} from "react";
import { Link as RLink } from "react-router-dom";
import logo from "../../../assets/Logomark.png";
import { MdWifiCalling3 } from "react-icons/md";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { getBusinessUserInfo } from "../../../ReduxContianer/BussinessRedux/BusinessAction";
import axios from "axios";
import { useFormik } from "formik";
export default function BusinessAccountSignIn() {
  const yellowbtn = useColorModeValue("yellow.500");

  // Redux
  const dispatch = useDispatch();
 
  const [isLoading, setIsLoading] = useState(false);

  const [show, setShow] = useState(false);
 
  //Validation
  const validationSchema = Yup.object().shape({
    phonenumber: Yup.number()
      .typeError("Phone number must be digits")
      .required("Phone number is required"),
    password: Yup.string().required("Password is needed"),
  });
  const initialValues = {
    phonenumber: "",
    password: "",
  };
  // Function
  const handleClick = () => setShow(!show);

  const onSubmit = (values, tools) => {
    setIsLoading(true);
    axios
      .post("https://finosell.link/api/v2/auths/login", values)
      .then((response) => {
        setIsLoading(false);
		  const userDetails = response.data.message;
		  dispatch(getBusinessUserInfo(userDetails));
        toast({
					position: 'top',
					title: `Welcome ${userDetails.business_name}`,
					description: 'You have successfully login',
					status: 'success',
					duration: 3000,
					isClosable: true,
				});
        localStorage.setItem("password", response.data.message.password);
        tools.resetForm();
        return history('/verify');
      })
      .catch((error) => {
        setIsLoading(false);
        toast({
          position: "top",
          title: `Unsuccessful Attempt`,
          description: `${error.response.data.error}`,
          status: "error",
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

  const history = useNavigate();
  const toast = createStandaloneToast();

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
				<Formik>
					{() => (
						<Center>
							<Form onSubmit={formik.handleSubmit}>
								<Field name='phoneNumber'>
									{() => (
										<FormControl>
											<FormLabel htmlFor='name'>Phone Number</FormLabel>
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
													type='phone Number'
													placeholder='08012345678'
													width='500px'
													h='75px'
													borderRadius='0px 11px 11px 11px'
													name='phonenumber'
													id='phonenumber'
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values.phonenumber}
													_focus={{ bg: '#fdf9ed', borderColor: '#f7e8b5' }}
												/>
											</InputGroup>
											{formik.touched.phonenumber &&
											formik.errors.phonenumber ? (
												<span className='error-message'>
													{formik.errors.phonenumber}
												</span>
											) : null}
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

												<InputRightElement
													pointerEvents='visible'
													m='15px 15px'
													ml={2}
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
													_focus={{ bg: "#fdf9ed",borderColor: "#f7e8b5" }}
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
									mt={4}
									bg={yellowbtn}
									width='500px'
									h='75px'
									borderRadius='0px 11px 11px 11px'
									type='submit'
									color='white'
									_hover={{ bg: '#1A202C' }}
									isLoading={isLoading}
									loadingText='Sign In...'
									spinnerPlacement='end'>
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
