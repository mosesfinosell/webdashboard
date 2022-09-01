import React from 'react';
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
	useDisclosure,
} from '@chakra-ui/react';
// import { FaAddressCard } from 'react-icons/fa';
// import { MdEmail, MdPeopleAlt } from 'react-icons/md';
import { BsArrowDownLeftSquare } from 'react-icons/bs';
import { useState, useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { generatePaymentLink } from '../../../../utils/API';

export default function CreateCustomer() {
	// const dispatch = useDispatch();

	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');

	// const isFetching = useSelector((state) => state.businessReducer.isFetching);
	const businessInfo = useSelector(
		(state) => state.businessReducer.businessUserInfo
	);

	// function generatePayment() {

	// }

	const { isOpen, onOpen, onClose } = useDisclosure();

	const btnRef = useRef();

	function handleSubmit(e) {
		e.preventDefault();
		generatePaymentLink(businessInfo.business_id, amount, title);
		console.log((businessInfo.business_id, amount, title));
	}

	return (
		<>
			<Stack
				color='yellow.500'
				// bg='yellow.500'
				borderRadius='0px 8px 8px 8px'
				border='0.2px solid yellow.100'
				p='8px'
				fontSize='32px'
				onClick={onOpen}
				cursor='pointer'>
				<BsArrowDownLeftSquare />
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
					<DrawerHeader>Request Money</DrawerHeader>
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
													<FormLabel htmlFor='name'>Payment Title</FormLabel>
													<InputGroup>
														<InputLeftElement
															pointerEvents='none'
															m='15px 1px'
															fontSize='20px'
															color='yellow.500'
															// children={<MdPeopleAlt />}
														/>
														<Input
															{...field}
															mb='20px'
															value={title}
															onChange={(e) => setTitle(e.target.value)}
															placeholder='Title'
															width='400px'
															h='70px'
															borderRadius='0px 11px 11px 11px'
															_focus={{ bg: '#fdf9ed', borderColor: '#f7e8b5' }}
														/>
													</InputGroup>
												</FormControl>
											)}
										</Field>
										<Field name='amount'>
											{({ field, form }) => (
												<FormControl mt={4}>
													<FormLabel htmlFor='amount'>Amount</FormLabel>
													<InputGroup>
														<InputLeftElement
															pointerEvents='none'
															m='15px 1px'
															fontSize='20px'
															color='yellow.500'
															// children={<MdEmail />}
														/>
														<Input
															{...field}
															mb='20px'
															value={amount}
															onChange={(e) => setAmount(e.target.value)}
															placeholder='₦0.0'
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
											Generate Payment
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
