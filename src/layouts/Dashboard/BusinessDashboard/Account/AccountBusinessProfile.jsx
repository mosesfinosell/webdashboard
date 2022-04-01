// import {
// 	Grid,
// 	Box,
// 	GridItem,
// 	Container,
// 	Text,
// 	Stack,
// 	Center,
// 	Flex,
// 	Heading,
// 	Tabs,
// 	TabList,
// 	TabPanels,
// 	Tab,
// 	TabPanel,
// 	Image,
// 	Input,
// 	InputLeftElement,
// 	InputRightElement,
// 	InputGroup,
// 	FormControl,
// 	FormLabel,
// 	FormErrorMessage,
// 	Button
// } from '@chakra-ui/react';
// import { Formik, Form, Field } from 'formik';
// import { useState} from 'react';
// import { MdEmail, MdWifiCalling3, MdAddBusiness } from 'react-icons/md';
// import { BsWhatsapp, BsInstagram, BsTwitter } from 'react-icons/bs';
// import { useColorModeValue } from '@chakra-ui/color-mode';
// import { useSelector,useDispatch } from 'react-redux';
// import { BiPencil } from 'react-icons/bi';
// import accUser from '../../../../assets/accuser.svg';
// import UpdatePassword from '../Account/updatePassword'
// // import ImageUploaded from './uploadImage';
// import {updateProfile} from '../../../../ReduxContianer/BussinessRedux/BusinessAction'
// import {sendAuthCode} from '../../../../ReduxContianer/BussinessRedux/BusinessAction';


// export default function AccountBusinessProfile() {
// 	const yellowbtn = useColorModeValue('yellow.500');
// 	const dispatch = useDispatch();

// 	// Redux
// 	const businessSignIn = useSelector((state) => state.businessSignIn);
// 	const { user } = businessSignIn;
// 	const { businessDetails } = user;
// 	const { message } = businessDetails;

// 	const [name, setName] = useState('');
// 	const [phonenumber, setPhonenumber] = useState('');
// 	const [email, setEmail] = useState('');
// 	const [authCode, setAuthCode] = useState('');
// 	const [userId] = useState(message.userId);

// 	//Function
// 	function handleSubmit(e) {
// 		e.preventDefault()
// 		dispatch(updateProfile(userId,phonenumber,name,email,authCode))
// 	}

// 	function handleClick() {
// 		dispatch(sendAuthCode(message.email))
// 	}

// 	return (
// 		<Container m='40px' maxW='container.md'>
// 			<Tabs variant='unstyled'>
// 				<Grid
// 					h='100vh'
// 					templateColumns='repeat(7, 1fr)'
// 					templateRows='repeat(5, 1fr)'>
// 					<GridItem rowStart={1} colSpan={3} bg='white'>
// 						<Center>
// 							<TabList>
// 								<Tab
// 									_selected={{
// 										color: 'white',
// 										px: '20px',
// 										w: '100px',
// 										h: '45px',
// 										bg: 'yellow.500',
// 										borderRadius: '0px 11px 11px 11px',
// 									}}>
// 									Profile
// 								</Tab>
// 							</TabList>
// 							<TabList>
// 								<Tab
// 									_selected={{
// 										color: 'white',

// 										w: '100px',
// 										h: '45px',
// 										bg: 'yellow.500',
// 										borderRadius: '0px 11px 11px 11px',
// 									}}>
// 									Password
// 								</Tab>
// 							</TabList>
// 						</Center>
// 					</GridItem>
// 					<GridItem rowStart={2} colSpan={7}>
// 						<TabPanels>
// 							<TabPanel>
// 								<Flex direction='row' justifyContent='space-between' mt='40px'>
// 									<Box>
// 										<Stack mb='90'>
// 											<Heading fontSize='16px' as='h6'>
// 												Change Profile Picture
// 											</Heading>
// 											<Text fontSize='14px' color='gray'>
// 												Choose a new profile to be used across Finosell
// 											</Text>
// 										</Stack>
// 										<Stack mb='90px'>
// 											<Heading fontSize='16px' as='h6'>
// 												Full name
// 											</Heading>
// 											<Text fontSize='14px' color='gray'>
// 												Choose a new profile to be used across Finosell
// 											</Text>
// 										</Stack>
// 										<Stack mb='80px'>
// 											<Heading fontSize='16px' as='h6'>
// 												Email
// 											</Heading>
// 											<Text fontSize='14px' color='gray'>
// 												Choose a new profile to be used across Finosell
// 											</Text>
// 										</Stack>
// 										<Stack mb='50px'>
// 											<Heading fontSize='16px' as='h6'>
// 												Phone Number
// 											</Heading>
// 											<Text fontSize='14px' color='gray'>
// 												Choose a new profile to be used across Finosell
// 											</Text>
// 										</Stack>
// 										<Stack>
// 											<Heading fontSize='16px' as='h6'>
// 												Social Media
// 											</Heading>
// 											<Text fontSize='14px' color='gray'>
// 												Choose a new profile to be used across Finosell
// 											</Text>
// 										</Stack>
// 									</Box>
// 									<Box alignItems='start'>
// 										<Stack alignItems='start' pb='30px'>
// 											<Image src={accUser} alt='user' h='80px' />

// 											{/* <ImageUploaded/> */}
// 										</Stack>
// 										<Stack>
// 											<Formik>
// 												{() => (
// 													<Form onSubmit={handleSubmit}>
// 														<Field name='name'>
// 															{({ field, form }) => (
// 																<FormControl
// 																	isInvalid={
// 																		form.errors.name && form.touched.name
// 																	}>
// 																	<FormLabel htmlFor='name'>
// 																		Business Name
// 																	</FormLabel>
// 																	<InputGroup>
// 																		<InputLeftElement
// 																			pointerEvents='none'
// 																			m='12px 1px'
// 																			fontSize='20px'
// 																			color='yellow.500'
// 																			children={<MdAddBusiness />}
// 																		/>
// 																		<InputRightElement
// 																			pointerEvents='none'
// 																			m='15px 15px'
// 																			color='gray.500'>
// 																			<BiPencil />
// 																		</InputRightElement>
// 																		<Input
// 																			{...field}
// 																			mb='20px'
// 																			value={name}
// 																			onChange={(e) => setName(e.target.value)}
// 																			placeholder={message.name}
// 																			width='300px'
// 																			h='60px'
// 																			borderRadius='0px 11px 11px 11px'
// 																		/>
// 																	</InputGroup>
// 																	<FormErrorMessage>
// 																		{form.errors.name}
// 																	</FormErrorMessage>
// 																</FormControl>
// 															)}
// 														</Field>
// 														<Field name='email'>
// 															{({ field, form }) => (
// 																<FormControl
// 																	isInvalid={
// 																		form.errors.name && form.touched.name
// 																	}>
// 																	<FormLabel htmlFor='name'>Email</FormLabel>
// 																	<InputGroup>
// 																		<InputLeftElement
// 																			pointerEvents='none'
// 																			m='12px 1px'
// 																			fontSize='20px'
// 																			color='yellow.500'
// 																			children={<MdEmail />}
// 																		/>
// 																		<InputRightElement
// 																			pointerEvents='none'
// 																			m='15px 15px'
// 																			color='gray.500'>
// 																			<BiPencil />
// 																		</InputRightElement>
// 																		<Input
// 																			{...field}
// 																			mb='20px'
// 																			value={email}
// 																			onChange={(e) => setEmail(e.target.value)}
// 																			placeholder={message.email}
// 																			width='300px'
// 																			h='60px'
// 																			borderRadius='0px 11px 11px 11px'
// 																		/>
// 																	</InputGroup>
// 																	<FormErrorMessage>
// 																		{form.errors.name}
// 																	</FormErrorMessage>
// 																</FormControl>
// 															)}
// 														</Field>
// 														<Field name='number'>
// 															{({ field, form }) => (
// 																<FormControl
// 																	isInvalid={
// 																		form.errors.name && form.touched.name
// 																	}>
// 																	<FormLabel htmlFor='name'>
// 																		Phone number
// 																	</FormLabel>
// 																	<InputGroup>
// 																		<InputLeftElement
// 																			pointerEvents='none'
// 																			m='12px 1px'
// 																			fontSize='20px'
// 																			color='yellow.500'
// 																			children={<MdWifiCalling3 />}
// 																		/>
// 																		<InputRightElement
// 																			pointerEvents='none'
// 																			m='15px 15px'
// 																			color='gray.500'>
// 																			<BiPencil />
// 																		</InputRightElement>
// 																		<Input
// 																			{...field}
// 																			value={phonenumber}
// 																			mb='20px'
// 																			onChange={(e) =>
// 																				setPhonenumber(e.target.value)
// 																			}
// 																			placeholder={message.phone_number}
// 																			width='300px'
// 																			h='60px'
// 																			borderRadius='0px 11px 11px 11px'
// 																		/>
// 																	</InputGroup>
// 																	<FormErrorMessage>
// 																		{form.errors.name}
// 																	</FormErrorMessage>
// 																</FormControl>
// 															)}
// 														</Field>
// 														{/* <Field name='number'>
// 															{({ field, form }) => (
// 																<FormControl
// 																	isInvalid={
// 																		form.errors.name && form.touched.name
// 																	}>
// 																	<FormLabel htmlFor='name'>WhatsApp</FormLabel>
// 																	<InputGroup>
// 																		<InputLeftElement
// 																			pointerEvents='none'
// 																			m='12px 1px'
// 																			fontSize='20px'
// 																			color='yellow.500'
// 																			children={<BsWhatsapp />}
// 																		/>
// 																		<InputRightElement
// 																			pointerEvents='none'
// 																			m='15px 15px'
// 																			color='gray.500'>
// 																			<BiPencil />
// 																		</InputRightElement>
// 																		<Input
// 																			{...field}
// 																			value={phonenumber}
// 																			mb='20px'
// 																			onChange={(e) =>
// 																				setPhonenumber(e.target.value)
// 																			}
// 																			placeholder={message.phone_number}
// 																			width='300px'
// 																			h='60px'
// 																			borderRadius='0px 11px 11px 11px'
// 																		/>
// 																	</InputGroup>
// 																	<FormErrorMessage>
// 																		{form.errors.name}
// 																	</FormErrorMessage>
// 																</FormControl>
// 															)}
// 														</Field>
// 														<Field name='number'>
// 															{({ field, form }) => (
// 																<FormControl
// 																	isInvalid={
// 																		form.errors.name && form.touched.name
// 																	}>
// 																	<FormLabel htmlFor='name'>
// 																		Instagram
// 																	</FormLabel>
// 																	<InputGroup>
// 																		<InputLeftElement
// 																			pointerEvents='none'
// 																			m='12px 1px'
// 																			fontSize='20px'
// 																			color='yellow.500'
// 																			children={<BsInstagram />}
// 																		/>
// 																		<InputRightElement
// 																			pointerEvents='none'
// 																			m='15px 15px'
// 																			color='gray.500'>
// 																			<BiPencil />
// 																		</InputRightElement>
// 																		<Input
// 																			{...field}
// 																			value={phonenumber}
// 																			mb='20px'
// 																			onChange={(e) =>
// 																				setPhonenumber(e.target.value)
// 																			}
// 																			placeholder='08012345678'
// 																			width='300px'
// 																			h='60px'
// 																			borderRadius='0px 11px 11px 11px'
// 																		/>
// 																	</InputGroup>
// 																	<FormErrorMessage>
// 																		{form.errors.name}
// 																	</FormErrorMessage>
// 																</FormControl>
// 															)}
// 														</Field>
// 														<Field name='number'>
// 															{({ field, form }) => (
// 																<FormControl
// 																	isInvalid={
// 																		form.errors.name && form.touched.name
// 																	}>
// 																	<FormLabel htmlFor='name'>Twitter</FormLabel>
// 																	<InputGroup>
// 																		<InputLeftElement
// 																			pointerEvents='none'
// 																			m='12px 1px'
// 																			fontSize='20px'
// 																			color='yellow.500'
// 																			children={<BsTwitter />}
// 																		/>
// 																		<InputRightElement
// 																			pointerEvents='none'
// 																			m='15px 15px'
// 																			color='gray.500'>
// 																			<BiPencil />
// 																		</InputRightElement>
// 																		<Input
// 																			{...field}
// 																			value={phonenumber}
// 																			mb='20px'
// 																			onChange={(e) =>
// 																				setPhonenumber(e.target.value)
// 																			}
// 																			placeholder='08012345678'
// 																			width='300px'
// 																			h='60px'
// 																			borderRadius='0px 11px 11px 11px'
// 																		/>
// 																	</InputGroup>
// 																	<FormErrorMessage>
// 																		{form.errors.name}
// 																	</FormErrorMessage>
// 																</FormControl>
// 															)}
// 														</Field> */}
// 														<Field name='number'>
// 															{({ field, form }) => (
// 																<FormControl
// 																	isInvalid={
// 																		form.errors.name && form.touched.name
// 																	}>
// 																	<FormLabel htmlFor='name'>
// 																		Auth Code
// 																	</FormLabel>
// 																	<InputGroup>
// 																		<Input
// 																			{...field}
// 																			value={authCode}
// 																			mb='20px'
// 																			onChange={(e) =>
// 																				setAuthCode(e.target.value)
// 																			}
// 																			placeholder='1234'
// 																			width='300px'
// 																			h='60px'
// 																			borderRadius='0px 11px 11px 11px'
// 																		/>
// 																	</InputGroup>
// 																	<FormErrorMessage>
// 																		{form.errors.name}
// 																	</FormErrorMessage>
// 																</FormControl>
// 															)}
// 														</Field>{' '}
						
// 															<Button
// 																mt={4}
// 																bg='white'
// 																width='280px'
// 																h='60px'
// 																borderRadius='0px 11px 11px 11px'
// 																type='submit'
// 																border='1px solid #D6AA1B'
// 																color='#1A202C'
// 																_hover={{ bg: '#D6AA1B', color: 'white' }}>
// 																Save
// 															</Button>
													
// 													</Form>
// 												)}
// 											</Formik>
// 											<Button
// 												mt={4}
// 												bg={yellowbtn}
// 												width='280px'
// 												h='60px'
// 												borderRadius='0px 11px 11px 11px'
// 												type='submit'
// 												color='white'
// 												_hover={{ bg: '#1A202C' }}
// 												onClick={handleClick}>
// 												Send Code
// 											</Button>
// 										</Stack>
// 									</Box>
// 								</Flex>
// 							</TabPanel>
// 							<TabPanel>
// 								<UpdatePassword />
// 							</TabPanel>
// 						</TabPanels>
// 					</GridItem>
// 				</Grid>
// 			</Tabs>
// 		</Container>
// 	);
// }
