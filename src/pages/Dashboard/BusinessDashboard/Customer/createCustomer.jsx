import React from 'react'
import {
	Box,
	Drawer,
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
	Stack,
	useDisclosure
} from '@chakra-ui/react';
import { FaAddressCard } from 'react-icons/fa';
import {
	MdEmail,
	MdWifiCalling3,
	MdPeopleAlt,
} from 'react-icons/md';
import { useState,useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import  {createCustomers} from '../../../../ReduxContianer/BussinessRedux/BusinessAction'
	
	
export default function CreateCustomer() {
const dispatch = useDispatch();
  
	const [customerName, setcustomerName] = useState('');
    const [customerEmail, setcustomerEmail] = useState('');
    const [customerPhonenumber, setcustomerPhonenumber] = useState('');
	const [customerAddress, setcustomerAddress] = useState('');
	 const isFetching = useSelector((state) => state.businessReducer.isFetching);
	 const businessInfo = useSelector(
			(state) => state.businessReducer.businessUserInfo
		);
	const businessId = businessInfo.business_id;
	const customerId = uuidv4();
	
	const { isOpen, onOpen, onClose } = useDisclosure();
	
	const btnRef = useRef();
	

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(
			createCustomers(
				customerName,
				customerEmail,
				customerId,
				customerPhonenumber,
				customerAddress,
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
				<MdPeopleAlt />
			</Stack>

			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
				finalFocusRef={btnRef}
				size='lg'>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Add Customer</DrawerHeader>
					<DrawerBody>
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
													<FormLabel htmlFor='name'>Customer Name</FormLabel>
													<InputGroup>
														<InputLeftElement
															pointerEvents='none'
															m='15px 1px'
															fontSize='20px'
															color='yellow.500'
															children={<MdPeopleAlt />}
														/>
														<Input
															{...field}
															mb='20px'
															value={customerName}
															onChange={(e) => setcustomerName(e.target.value)}
															placeholder='Customer Name'
															width='400px'
															h='70px'
															borderRadius='0px 11px 11px 11px'
															_focus={{ bg: '#fdf9ed', borderColor: '#f7e8b5' }}
														/>
													</InputGroup>
												</FormControl>
											)}
										</Field>
										<Field name='email'>
											{({ field, form }) => (
												<FormControl mt={4}>
													<FormLabel htmlFor='email'>Customer Email</FormLabel>
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
															value={customerEmail}
															onChange={(e) => setcustomerEmail(e.target.value)}
															placeholder='Email Address'
															width='400px'
															h='70px'
															borderRadius='0px 11px 11px 11px'
															_focus={{ bg: '#fdf9ed', borderColor: '#f7e8b5' }}
														/>
													</InputGroup>
												</FormControl>
											)}
										</Field>
										<Field name='number'>
											{({ field, form }) => (
												<FormControl mt={4}>
													<FormLabel htmlFor='number'>
														Customer Phone number
													</FormLabel>
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
															mb='20px'
															value={customerPhonenumber}
															onChange={(e) =>
																setcustomerPhonenumber(e.target.value)
															}
															placeholder='08012345678'
															width='400px'
															h='70px'
															borderRadius='0px 11px 11px 11px'
															_focus={{ bg: '#fdf9ed', borderColor: '#f7e8b5' }}
														/>
													</InputGroup>
												</FormControl>
											)}
										</Field>

										<Field name='address'>
											{({ field, form }) => (
												<FormControl mt='20px'>
													<FormLabel htmlFor='address'>
														Customer Address
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
															value={customerAddress}
															onChange={(e) =>
																setcustomerAddress(e.target.value)
															}
															placeholder='Input your address'
															width='400px'
															h='70px'
															borderRadius='0px 11px 11px 11px'
															_focus={{ bg: '#fdf9ed', borderColor: '#f7e8b5' }}
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
											Create Customer
										</Button>
									</Form>
								)}
							</Formik>
						</Box>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}
