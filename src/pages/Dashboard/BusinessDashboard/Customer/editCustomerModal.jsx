import {
	Modal,
	ModalOverlay,
	ModalContent,
	Box,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	
	InputLeftElement,
	InputRightElement,
	InputGroup,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Button,
	Input,
	Stack,
	Center,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import React, { useState } from 'react';
// import { useColorModeValue } from "@chakra-ui/color-mode";
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';
import { BiShoppingBag } from 'react-icons/bi';

export default function EditCustomerModal() {
	// const yellowbtn = useColorModeValue('yellow.500')
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);

	const initialRef = React.useRef();
	const finalRef = React.useRef();

	return (
		<>
			<Stack
				color='gray'
				bg='gray.100'
				borderRadius='0px 8px 8px 8px'
				border='0.2px solid yellow.100'
				p='12px'
				fontSize='22px'
				onClick={onOpen}
				cursor='pointer'>
				<BiShoppingBag />
			</Stack>

			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
				// borderRadius='0px 11px 11px 11px'
				size='lg'>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody>
						<Center>
							<Box
								h='700px'
								w='480px'
								borderRadius='0px 11px 11px 11px'
								border='0.5px solid #D9D9D9'
								px='40px'>
								<Formik>
									{() => (
										<Form>
											<Field name='text'>
												{({ field, form }) => (
													<FormControl
														isInvalid={form.errors.name && form.touched.name}
														mt='30px'>
														<FormLabel htmlFor='name'>Billed to</FormLabel>
														<InputGroup>
															<Input
																{...field}
																mb='20px'
																//  value={name}
																//  onChange={(e) => setName(e.target.value)}
																placeholder='Customer Name'
																width='420px'
																h='60px'
																borderRadius='0px 11px 11px 11px'
															/>
														</InputGroup>
														<FormErrorMessage>
															{form.errors.name}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>
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
																color='gray.500'
																// children={<MdEmail />
																
															/>
															<Input
																{...field}
																mb='20px'
																//   value={email}
																//   onChange={(e) => setEmail(e.target.value)}
																placeholder='Email Address'
																width='400px'
																h='70px'
																borderRadius='0px 11px 11px 11px'
															/>
														</InputGroup>
														<FormErrorMessage>
															{form.errors.email}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>
											<Field name='phoneNumber'>
												{({ field, form }) => (
													<FormControl
														isInvalid={
															form.errors.phoneNumber &&
															form.touched.phoneNumber
														}
														mt={4}>
														<FormLabel htmlFor='name'>Phone number</FormLabel>
														<InputGroup>
															<InputLeftElement
																pointerEvents='none'
																m='15px 1px'
																fontSize='20px'
																color='gray.500'
																// children={<MdWifiCalling3 />}
															/>
															<Input
																{...field}
																mb='20px'
																//    value={phoneNumber}
																//    onChange={(e) => setPhoneNumber(e.target.value)}
																placeholder='08012345678'
																width='400px'
																h='70px'
																borderRadius='0px 11px 11px 11px'
															/>
														</InputGroup>
														<FormErrorMessage>
															{form.errors.phoneNumber}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>
											<Field name='text'>
												{({ field, form }) => (
													<FormControl
														isInvalid={form.errors.name && form.touched.name}
														mt='20px'>
														<FormLabel htmlFor='name'>Adress</FormLabel>
														<InputGroup>
															<Input
																{...field}
																//  value={name}
																//  onChange={(e) => setName(e.target.value)}
																placeholder='Select product from inventory'
																width='420px'
																h='70px'
																borderRadius='0px 11px 11px 11px'
															/>
														</InputGroup>
														<FormErrorMessage>
															{form.errors.name}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>
										</Form>
									)}
								</Formik>
							</Box>
						</Center>
						<Button
							mt={4}
							bg='yellow.500'
							width='400px'
							h='70px'
							borderRadius='0px 11px 11px 11px'
							type='submit'
							color='white'
							_hover={{ bg: '#1A202C' }}>
							Save
						</Button>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
