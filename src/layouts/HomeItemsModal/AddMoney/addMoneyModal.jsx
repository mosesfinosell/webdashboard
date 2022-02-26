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
import { useColorModeValue } from '@chakra-ui/color-mode';
import { BsToggleOn, BsToggleOff, BsPlusSquare } from 'react-icons/bs';
import { PaystackButton } from 'react-paystack';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

export default function AddMoneyModal() {
	const yellowbtn = useColorModeValue('yellow.500');
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);
	const { errors, register, watch } = useForm();

	const personal = useSelector((state) => state.personal);
	const { user } = personal;
	const { userDeatails } = user;
	const { message } = userDeatails;
	console.log(message);
	const amount = watch('amount');
	// const componentProps = {
	//   email,
	//   amount,
	//   metadata: {
	//     name,
	//     phone
	//   },
	//   publicKey,
	//   text: "Pay Now",
	//   onSuccess: () =>
	//     alert("Thanks for doing business with us! Come back soon!!"),
	//   onClose: () => alert("Wait! Don't leave :(")
	// };

	const initialRef = React.useRef();
	const finalRef = React.useRef();

	return (
		<>
			<Stack
				pr='30px'
				color='yellow.500'
				bg='yellow.100'
				borderRadius='0px 8px 8px 8px'
				border='0.2px solid yellow.100'
				p='12px'
				fontSize='24px'
				onClick={onOpen}>
				<BsPlusSquare />
			</Stack>
			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
				size='md'
				borderRadius='0px 11px 11px 11px'>
				<ModalOverlay />
				<ModalContent>
					<Center>
						<Text fontSize='24px' pt='35px' fontWeight='bold'>
							Add Money
						</Text>
					</Center>
					<ModalCloseButton />

					<ModalBody>
						<FormControl>
							<FormLabel>Amount</FormLabel>
							<Input
								name='amount'
								type='text'
								placeholder='₦0.00'
								w='400px'
								h='70px'
								borderRadius='0px 11px 11px 11px'
							/>
						</FormControl>

						{/* <FormControl mt={4}>
                    <FormLabel>Card number</FormLabel>
                    <Input ref={initialRef} placeholder='0000 0000 00000 0000' w='400px' h='70px' borderRadius='0px 11px 11px 11px'/>
                  </FormControl> */}
						<Flex
							direction='row'
							align='center'
							mt={4}
							justifyContent='space-between'>
							<Text>Save your Card</Text>
							<Stack
								onClick={handleClick}
								fontSize='35px'
								cursor='pointer'
								px='30px'
								color='gray.300'>
								{show ? <BsToggleOn /> : <BsToggleOff />}
							</Stack>
						</Flex>
					</ModalBody>
					<ModalFooter>
						<Box
							mt={4}
							bg={yellowbtn}
							width='400px'
							h='70px'
							borderRadius='0px 11px 11px 11px'
							type='submit'
							color='white'
							_hover={{ bg: '#1A202C' }}></Box>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
