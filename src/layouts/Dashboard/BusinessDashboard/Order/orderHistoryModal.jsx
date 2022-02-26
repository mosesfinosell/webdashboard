import {
	Modal,
	ModalOverlay,
	ModalContent,
	Box,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	FormControl,
	FormLabel,
	Input,
	Flex,
	Text,
	Stack,
	Center,
} from '@chakra-ui/react';

import React, { useState } from 'react';
// import { useColorModeValue } from "@chakra-ui/color-mode";
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';
import { BiShoppingBag } from 'react-icons/bi';

export default function OrderHistoryModal() {
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
								h='560px'
								w='400px'
								border='0.5px solid #D9D9D9'
								mt='70px'
								borderRadius='0px 11px 11px 11px'>
								<Stack
									h='80px'
									direction='row'
									border='0.5px solid #D9D9D9'
									alignItems='center'
									justifyContent='space-between'
									px='30px'>
									<Text color='gray' fontSize='14px'>
										Item
									</Text>
									<Text color='black' fontSize='20px'>
										Marshmellow Shorts
									</Text>
								</Stack>
								<Stack
									h='80px'
									direction='row'
									border='0.5px solid #D9D9D9'
									alignItems='center'
									justifyContent='space-between'
									px='30px'>
									<Text color='gray' fontSize='14px'>
										Date
									</Text>
									<Text color='black' fontSize='20px'>
										Jan 2, 2022
									</Text>
								</Stack>
								<Stack
									h='80px'
									direction='row'
									border='0.5px solid #D9D9D9'
									alignItems='center'
									justifyContent='space-between'
									px='30px'>
									<Text color='gray' fontSize='14px'>
										Amount
									</Text>
									<Text color='black' fontSize='20px'>
										₦3,500.00
									</Text>
								</Stack>
								<Stack
									h='80px'
									direction='row'
									border='0.5px solid #D9D9D9'
									alignItems='center'
									justifyContent='space-between'
									px='30px'>
									<Text color='gray' fontSize='14px'>
										Transaction ID
									</Text>
									<Text color='black' fontSize='20px'>
										8WH58PWOITNOWN
									</Text>
								</Stack>
								<Stack
									h='80px'
									direction='row'
									border='0.5px solid #D9D9D9'
									alignItems='center'
									justifyContent='space-between'
									px='30px'>
									<Text color='gray' fontSize='14px'>
										Customer Name
									</Text>
									<Text color='black' fontSize='20px'>
										Jumoke Adetola
									</Text>
								</Stack>
								<Stack
									h='80px'
									direction='row'
									border='0.5px solid #D9D9D9'
									alignItems='center'
									justifyContent='space-between'
									px='30px'>
									<Text color='gray' fontSize='14px'>
										Delivery Location
									</Text>
									<Text color='black' fontSize='20px'>
										21 Oremeji St. Ibadan
									</Text>
								</Stack>
								<Stack
									h='80px'
									direction='row'
									border='0.5px solid #D9D9D9'
									alignItems='center'
									justifyContent='space-between'
									px='30px'>
									<Text color='gray' fontSize='14px'>
										Type of Order
									</Text>
									<Text color='yellow.500' fontSize='20px'>
										Escrow
									</Text>
								</Stack>
							</Box>
						</Center>
						<Flex
							direction='row'
							alignItems='center'
							mb={7}
							justifyContent='space-evenly'>
							<Button
								mt={4}
								bg='yellow.500'
								width='150px'
								h='70px'
								borderRadius='0px 11px 11px 11px'
								type='submit'
								color='white'
								_hover={{ bg: '#1A202C' }}>
								Accept
							</Button>
							<Button
								mt={4}
								bg='white'
								width='150px'
								h='70px'
								borderRadius='0px 11px 11px 11px'
								type='submit'
								border='1px solid #D6AA1B'
								color='#1A202C'
								onClick={onClose}
								_hover={{ bg: '#D6AA1B' }}>
								Decline
							</Button>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
