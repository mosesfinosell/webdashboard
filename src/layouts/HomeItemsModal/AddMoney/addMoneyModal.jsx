import {
	Modal,
	ModalOverlay,
	ModalContent,
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
import { PaystackConsumer } from 'react-paystack';
import { useSelector } from 'react-redux';
// import { useForm } from 'react-hook-form';

export default function AddMoneyModal() {
	const yellowbtn = useColorModeValue('yellow.500');
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [show, setShow] = useState(false);
	const [amount, setAmount] = useState("");
	const handleClick = () => setShow(!show);
	
	const personalSignIn = useSelector((state) => state.personalSignIn);
	const { user} = personalSignIn;
    const {userDetails} = user
	const {message} = userDetails

	// PAYSTACK CONFIG

	const config = {
		reference: new Date().getTime().toString(),
		email: message.email,
		amount: amount * 100 ,
		publicKey: message.public_key
	};
	
	 const handleSuccess = (message) => {
			// Implementation for whatever you want to do with reference and after success call.
			console.log(message);
		};


	 const componentProps = {
			...config,
			text: 'Add Money',
			onSuccess: (message) => handleSuccess(message),
			onClose: onClose,
		};
  
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
								value={amount}
								onChange={(e) =>setAmount(e.target.value)}
							/>
						</FormControl>
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
						<PaystackConsumer {...componentProps}>
							{({ initializePayment }) => (
								<Button
									mt={4}
									bg={yellowbtn}
									width='400px'
									h='70px'
									borderRadius='0px 11px 11px 11px'
									type='submit'
									color='white'
									_hover={{ bg: '#1A202C' }}
									onClick={() =>
										initializePayment(handleSuccess, onClose)
									}>Add Money</Button>
							)}
						</PaystackConsumer>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
