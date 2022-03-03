// import { BiPencil } from 'react-icons/bi';
// import {
// 	Modal,
// 	ModalOverlay,
// 	ModalContent,
// 	Box,
// 	ModalFooter,
// 	ModalBody,
// 	ModalCloseButton,
// 	useDisclosure,
// 	Checkbox,
// 	Text,
// 	Stack,
// 	Center,
// } from '@chakra-ui/react';

// import React, { useState } from 'react';
// // import { useColorModeValue } from "@chakra-ui/color-mode";
// import { BsToggleOn, BsToggleOff } from 'react-icons/bs';
// import { BiShoppingBag } from 'react-icons/bi';
// import { useSelector } from 'react-redux';
// import dateformat from 'dateformat';

// export default function uploadImageModal(props) {
// 	const { isOpen, onOpen, onClose } = useDisclosure();

// 	const getOrder = useSelector((state) => state.getOrder);
// 	const { orders } = getOrder;

// 	return (
// 		<>
			
// 			<Stack
// 				color='white'
// 				fontSize='18px'
// 				w='30px'
// 				border='0.5px solid yellow.500'
// 				bg='yellow.500'
// 				p='5px'
// 				onClick={onOpen}
// 				cursor='pointer'
// 				borderRadius='0px 8px 8px 8px'
// 				position='relative'
// 				bottom='30px'
// 				left='50px'>
// 				<BiPencil />
// 			</Stack>
// 			<Modal
// 				isOpen={isOpen}
// 				onClose={onClose}
// 				// borderRadius='0px 11px 11px 11px'
// 				size='lg'>
// 				<ModalOverlay />
// 				<ModalContent>
// 					<ModalCloseButton />
// 					<ModalBody>
// 						<Center>
// 							{orders.orders.map((order, index) => {
// 								return (
// 									<Box
// 										key={order.index}
// 										h='560px'
// 										w='400px'
// 										border='0.5px solid #D9D9D9'
// 										mt='30px'
// 										borderRadius='0px 11px 11px 11px'>
// 										<Stack
// 											h='80px'
// 											direction='row'
// 											border='0.5px solid #D9D9D9'
// 											alignItems='center'
// 											justifyContent='space-between'
// 											px='30px'>
// 											<Text color='gray' fontSize='14px'>
// 												Item
// 											</Text>
// 											<Text color='black' fontSize='20px'>
// 												{order.title}
// 											</Text>
// 										</Stack>
// 										<Stack
// 											h='80px'
// 											direction='row'
// 											border='0.5px solid #D9D9D9'
// 											alignItems='center'
// 											justifyContent='space-between'
// 											px='30px'>
// 											<Text color='gray' fontSize='14px'>
// 												Date
// 											</Text>
// 											<Text color='black' fontSize='20px'>
// 												{dateformat(order.order_date, 'mediumDate')}
// 											</Text>
// 										</Stack>
// 										<Stack
// 											h='80px'
// 											direction='row'
// 											border='0.5px solid #D9D9D9'
// 											alignItems='center'
// 											justifyContent='space-between'
// 											px='30px'>
// 											<Text color='gray' fontSize='14px'>
// 												Amount
// 											</Text>
// 											<Text color='black' fontSize='20px'>
// 												₦{order.amount}
// 											</Text>
// 										</Stack>
// 										<Stack
// 											h='80px'
// 											direction='row'
// 											border='0.5px solid #D9D9D9'
// 											alignItems='center'
// 											justifyContent='space-between'
// 											px='30px'>
// 											<Text color='gray' fontSize='14px'>
// 												Transaction ID
// 											</Text>
// 											<Text color='black' fontSize='20px'>
// 												{order.order_id}
// 											</Text>
// 										</Stack>
// 										<Stack
// 											h='80px'
// 											direction='row'
// 											border='0.5px solid #D9D9D9'
// 											alignItems='center'
// 											justifyContent='space-between'
// 											px='30px'>
// 											<Text color='gray' fontSize='14px'>
// 												Customer Name
// 											</Text>
// 											<Text color='black' fontSize='20px'>
// 												Jumoke Adetola
// 											</Text>
// 										</Stack>
// 										<Stack
// 											h='80px'
// 											direction='row'
// 											border='0.5px solid #D9D9D9'
// 											alignItems='center'
// 											justifyContent='space-between'
// 											px='30px'>
// 											<Text color='gray' fontSize='14px'>
// 												Delivery Location
// 											</Text>
// 											<Text color='black' fontSize='20px'>
// 												{order.shipping_address}
// 											</Text>
// 										</Stack>
// 										<Stack
// 											h='80px'
// 											direction='row'
// 											border='0.5px solid #D9D9D9'
// 											alignItems='center'
// 											justifyContent='space-between'
// 											px='30px'>
// 											<Text color='gray' fontSize='14px'>
// 												Type of Order
// 											</Text>
// 											<Text color='yellow.500' fontSize='20px'>
// 												Escrow
// 											</Text>
// 										</Stack>
// 									</Box>
// 								);
// 							})}
// 						</Center>
// 						<Center>
// 							<Checkbox
// 								size='md'
// 								colorScheme='green'
// 								color='green'
// 								pt='30px'
// 								defaultChecked>
// 								Delivered
// 							</Checkbox>
// 						</Center>
// 					</ModalBody>
// 					<ModalFooter></ModalFooter>
// 				</ModalContent>
// 			</Modal>
// 		</>
// 	);
// }
