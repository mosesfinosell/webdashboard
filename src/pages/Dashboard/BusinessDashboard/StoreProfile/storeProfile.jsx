import React from 'react';
import {
	Box,
	Drawer,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Input,
	InputLeftElement,
	InputGroup,
	FormControl,
	FormLabel,
	Button,
	Textarea,
	Stack,
	Center,
	Heading,
	Text,
	useDisclosure,
} from '@chakra-ui/react';

import {
	MdEmail,
	MdManageAccounts,
	MdAddBusiness,
} from 'react-icons/md';
import { FaAddressCard,FaIndustry } from 'react-icons/fa';
import { useState,useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import SocialMedia from './socialMedia'
import { updateStoreInfo } from '../../../../ReduxContianer/BussinessRedux/BusinessAction';

export default function StoreProfile() {
	const dispatch = useDispatch();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
		const [description, setDescription] = useState('');
	const [industry, setIndustry] = useState('');
	const [address, setAddress] = useState('');

  const isFetching = useSelector((state) => state.businessReducer.isFetching);
	const storeInfo = useSelector(
		(state) => state.businessReducer.store
	);
	const businessId = storeInfo?.business_id;
	
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();
	
	function handleSubmit(e) {
		e.preventDefault();
		dispatch(
			updateStoreInfo(
				name,description,email,industry,address,
				businessId
			)
		);
	}

	return (
		<>
			<Stack
				color='yellow.500'
				// bg='yellow.500'
				borderRadius='0px 8px 8px 8px'
				border='0.2px solid yellow.100'
				p='8px'
				fontSize='28px'
				onClick={onOpen}
				cursor='pointer'>
				<MdManageAccounts />
			</Stack>
			<Tabs>
				<Drawer
					isOpen={isOpen}
					placement='right'
					onClose={onClose}
					finalFocusRef={btnRef}
					size='lg'>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerHeader>Upadte Store Profile</DrawerHeader>
						<DrawerBody>
							<Center gap='40px'>
								<TabList>
									<Tab
										_selected={{
											color: 'white',
											fontWeight: 'bold',
											px: '20px',
											w: '100%',
											h: '45px',
											bg: 'yellow.500',
											borderRadius: '0px 11px 11px 11px',
										}}>
										Update Profile
									</Tab>
								</TabList>
								<TabList>
									<Tab
										_selected={{
											color: 'white',
											px: '20px',
											w: '100%',
											h: '45px',
											bg: 'yellow.500',
											borderRadius: '0px 11px 11px 11px',
										}}>
										Social Media
									</Tab>
								</TabList>
							</Center>
							<TabPanels>
								<TabPanel>
									<Stack my='20px' px='40px' >
										<Heading fontSize='16px' as='h6'>
											Update Profile
										</Heading>
										<Text fontSize='14px' color='gray'>
											Upadate your profile to be used across Finosell
										</Text>
									</Stack>
									<Box
										h='100%'
										w='100p%'
										borderRadius='0px 11px 11px 11px'
										// border='0.5px solid #D9D9D9'
										px='40px'>
										<Formik>
											{() => (
												<Form onSubmit={handleSubmit}>
													<Field name='name'>
														{({ field, form }) => (
															<FormControl mt='30px'>
																<FormLabel htmlFor='name'>Store Name</FormLabel>
																<InputGroup>
																	<InputLeftElement
																		pointerEvents='none'
																		m='15px 1px'
																		fontSize='20px'
																		color='yellow.500'
																		children={<MdAddBusiness />}
																	/>
																	<Input
																		{...field}
																		mb='20px'
																		value={name}
																		onChange={(e) => setName(e.target.value)}
																		placeholder='Store Name'
																		width='400px'
																		h='70px'
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
													<Field name='email'>
														{({ field, form }) => (
															<FormControl mt={4}>
																<FormLabel htmlFor='email'>
																	Store Email
																</FormLabel>
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
																		placeholder='Store Email Address'
																		width='400px'
																		h='70px'
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
													<Field name='industry'>
														{({ field, form }) => (
															<FormControl mt={4}>
																<FormLabel htmlFor='industry'>
																	Industry
																</FormLabel>
																<InputGroup>
																	<InputLeftElement
																		pointerEvents='none'
																		m='15px 1px'
																		fontSize='20px'
																		color='yellow.500'
																		children={<FaIndustry />}
																	/>
																	<Input
																		{...field}
																		mb='20px'
																		value={industry}
																		onChange={(e) =>
																			setIndustry(e.target.value)
																		}
																		placeholder='Industry'
																		width='400px'
																		h='70px'
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

													<Field name='address'>
														{({ field, form }) => (
															<FormControl mt='20px'>
																<FormLabel htmlFor='address'>
																	Store Address
																</FormLabel>
																<InputGroup>
																	<InputLeftElement
																		pointerEvents='none'
																		m='15px 1px'
																		fontSize='20px'
																		color='yellow.500'
																		children={<FaAddressCard />}
																	/>
																	<Input
																		mb='20px'
																		{...field}
																		value={address}
																		onChange={(e) => setAddress(e.target.value)}
																		placeholder='Input your address'
																		width='400px'
																		h='70px'
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
													<Field name='address'>
														{({ field, form }) => (
															<FormControl mt='20px'>
																<FormLabel htmlFor='address'>
																	{' '}
																	Store Description
																</FormLabel>
																<InputGroup>
																	<Textarea
																		mb='20px'
																		{...field}
																		value={description}
																		onChange={(e) =>
																			setDescription(e.target.value)
																		}
																		placeholder='Input your description'
																		width='400px'
																		h='100px'
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
														mt={4}
														bg='yellow.500'
														width='390px'
														h='70px'
														borderRadius='0px 11px 11px 11px'
														type='submit'
														color='white'
														_hover={{ bg: '#1A202C' }}>
														{/* {!isFetching */}
															Update Store Profile
															{/* : 'Updating...'} */}
													</Button>
												</Form>
											)}
										</Formik>
									</Box>
								</TabPanel>
								<TabPanel>
									<SocialMedia />
								</TabPanel>
							</TabPanels>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
			</Tabs>
		</>
	);
}
