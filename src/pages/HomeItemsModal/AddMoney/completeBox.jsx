import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	Box,
	Flex,
	Text,
	Stack,
	Center,
} from '@chakra-ui/react';

import React, { useState } from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { BsToggleOn, BsToggleOff, BsPlusSquare } from 'react-icons/bs';

export default function SendMoneyConfirmModal() {
	const yellowbtn = useColorModeValue('yellow.500');
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);

	const initialRef = React.useRef();
	const finalRef = React.useRef();

	return (
		<>
			<Stack pr='30px' color='yellow.500' fontSize='24px' onClick={onOpen}>
				<BsPlusSquare />
			</Stack>
			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
				size='xl'
				borderRadius='0px 11px 11px 11px'>
				<ModalOverlay />
				<ModalContent>
					<Center>
						<Text fontSize='24px' p='35px' fontWeight='bold'>
							Confirm
						</Text>
					</Center>
					<ModalCloseButton />

					<ModalBody>
						<Box
							maxW='xlg'
							p='20'
							m='36'
							boxSizing='border-box'
							borderWidth='1px'
							borderRadius='0px 21px 21px 21px'
							m='20'
							borderRadius='lg'
							overflow='hidden'
							bg='#1A202C'>
							<Center>
								<Stack>
									<Text fontSize='35px' color='gray'>
										Completed
									</Text>
									<Text fontSize='14px'>
										Your account has been successfully
									</Text>
								</Stack>
							</Center>
						</Box>
					</ModalBody>
					<ModalFooter>
						<Button
							mt={4}
							bg={yellowbtn}
							width='500px'
							h='80px'
							borderRadius='0px 11px 11px 11px'
							type='submit'
							color='white'
							_hover={{ bg: '#1A202C' }}>
							Continue
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
