import {
	Box,
	Container,
	Text,
	Stack,
	Flex,
	Input,
	InputLeftElement,
	InputGroup,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Button,
	Select,
	Avatar,
} from '@chakra-ui/react';

import { MdEmail, MdWifiCalling3 } from 'react-icons/md';
import { FaArrowLeft } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTeamMember } from '../../../../ReduxContianer/BussinessRedux/BusinessAction';
import { fetchTeamMember } from '../../../../ReduxContianer/BussinessRedux/BusinessAction';

export default function AddTeam() {
	// Redux
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	const businessInfo = useSelector(
		(state) => state.businessReducer.businessUserInfo
	);

	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [accountId] = useState('Fint393i4078');
	const [accountType, setAccountType] = useState('');
	const [businessId] = useState(businessInfo.business_id);
	const [userId] = useState(businessInfo.user_id);

	// FUNCTION
	const isFetching = useSelector((state) => state.businessReducer.isFetching);
	const team = useSelector((state) => state.businessReducer?.teams);
	// console.log(team)
	useEffect(() => {
		if (!team) {
			dispatch(fetchTeamMember(businessInfo.business_id));
		}
	}, [team, businessInfo.business_id, dispatch]);

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(
			addTeamMember(
				accountId,
				phoneNumber,
				email,
				userId,
				accountType,
				businessId
			)
		);
	}

	function handleBack(){
		navigate(-1)
	}

	return (
		<Container maxW='container.lg'>
			<Stack p='30px' cursor='pointer' onClick={handleBack}>
				<FaArrowLeft />
			</Stack>
			<Flex mt={4} direction='row' gap='60px' pl='50px'>
				<Stack>
					<Stack pb='30px'>
						<Text color='black' fontWeight='bold' fontSize='24px'>
							Add Team
						</Text>
					</Stack>
					<Box
						h='100%'
						w='400px'
						borderRadius='0px 11px 11px 11px'
						border='0.5px solid #D9D9D9'
						px='40px'>
						<Formik>
							{() => (
								<Form onSubmit={handleSubmit}>
									<Field name='email'>
										{({ field, form }) => (
											<FormControl
												isInvalid={form.errors.email && form.touched.email}
												mt={4}>
												<FormLabel htmlFor='name'>Email</FormLabel>
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
														mb='20px'
														value={email}
														onChange={(e) => setEmail(e.target.value)}
														placeholder='Email Address'
														width='300px'
														h='70px'
														borderRadius='0px 11px 11px 11px'
														_focus={{ bg: '#fdf9ed', borderColor: '#f7e8b5' }}
													/>
												</InputGroup>
												<FormErrorMessage>{form.errors.email}</FormErrorMessage>
											</FormControl>
										)}
									</Field>
									<Field name='phoneNumber'>
										{({ field, form }) => (
											<FormControl
												isInvalid={form.errors.email && form.touched.email}
												mt={4}>
												<FormLabel htmlFor='number'>Phone Number</FormLabel>
												<InputGroup>
													<InputLeftElement
														pointerEvents='none'
														m='15px 1px'
														fontSize='20px'
														color='yellow.500'
														children={<MdWifiCalling3 MdManageAccounts />}
													/>
													<Input
														{...field}
														mb='20px'
														value={phoneNumber}
														onChange={(e) => setPhoneNumber(e.target.value)}
														placeholder='Phone Number'
														width='300px'
														h='70px'
														borderRadius='0px 11px 11px 11px'
														_focus={{ bg: '#fdf9ed', borderColor: '#f7e8b5' }}
													/>
												</InputGroup>
												<FormErrorMessage>{form.errors.email}</FormErrorMessage>
											</FormControl>
										)}
									</Field>

									<Field name='text'>
										{({ field, form }) => (
											<FormControl>
												<FormLabel htmlFor='billing date'>
													Add Team Role
												</FormLabel>

												<Select
													mb={8}
													id='account type'
													placeholder='Select a Role'
													width='300px'
													h='70px'
													_focus={{ bg: '#fdf9ed', borderColor: '#f7e8b5' }}
													value={accountType}
													onChange={(e) => setAccountType(e.target.value)}
													borderRadius='0px 11px 11px 11px'>
													<option>Manager</option>
													<option>Sales</option>
													<option>Attendant</option>
												</Select>
											</FormControl>
										)}
									</Field>
									<Button
										mb={5}
										bg='yellow.500'
										width='300px'
										h='60px'
										borderRadius='0px 11px 11px 11px'
										type='submit'
										color='white'
										_hover={{ bg: '#1A202C' }}>
										Save
									</Button>
								</Form>
							)}
						</Formik>
					</Box>
				</Stack>
				<Stack mt='70px'>
					{/* <Stack> */}
					<Box
						h='100%'
						w='450px'
						borderRadius='0px 11px 0px 0px'
						border='0.5px solid #D9D9D9'>
						<Stack p={8}>
							<Text
								fontSize='16px'
								textAlign='center'
								fontWeight='bold'
								color='black'>
								Team Management
							</Text>
						</Stack>

						{/* </Stack> */}
						<Stack
							display='flex'
							direction='column'
							alignItems='center'
							justifyContent='center'>
							<Box h='100px' w='450px' border='0.5px solid #D9D9D9'>
								<Stack pt='12px' pl='40px'>
									<Avatar ml='10px' src={team?.profile_img} />
									<Text color='gray' fontSize='18px'>
										{team?.account_type}
									</Text>
								</Stack>
							</Box>
							{/* <Box
								h='100px'
								w='450px'
								border='0.5px solid #D9D9D9'
								display='flex'
								alignItems='center'
								justifyContent='space-evenly'>
								 <Stack
									color='red.500'
									bg='red.100'
									borderRadius='0px 8px 8px 8px'
									border='0.2px solid red.100'
									p='12px'
									fontSize='22px'>
									<BiShoppingBag />
								</Stack>
								<Stack pr='120px'>
									<Text color='#273B4A' w='200px'>
										Michelle Gideon
									</Text>
									<Text color='gray' fontSize='12px'>
										Sales Representative
									</Text>
								</Stack>
								<Stack color='gray.500'>
									<BiPencil />
								</Stack>
							</Box> */}
						</Stack>
					</Box>
				</Stack>
			</Flex>
		</Container>
	);
}
