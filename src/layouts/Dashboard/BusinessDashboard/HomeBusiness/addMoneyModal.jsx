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

import React, { useState ,useEffect} from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { BsToggleOn, BsToggleOff, BsPlusSquare } from 'react-icons/bs';
import {PaystackConsumer} from "react-paystack"
import {useSelector,useDispatch} from 'react-redux'
import {creditUserAccount} from '../../../../ReduxContianer/BussinessRedux/BusinessAction'

export default function AddMoneyBusinessModal() {
	const yellowbtn = useColorModeValue('yellow.500');
	const { isOpen, onOpen, onClose } = useDisclosure();

    const [amount, setAmount] = useState("")
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);

const businessSignIn = useSelector((state) => state.businessSignIn);
	const { user} = businessSignIn;
    const {businessDetails} = user
	const {message} = businessDetails

	// const creditUser = useSelector((state) => state.creditUser)
	// const { amount } = creditUser
	
const dispatch = useDispatch()

// useEffect(() => {
//      dispatch(creditUserAccount())
// },[])

	// PAYSTACK CONFIG

	const config = {
		reference: new Date().getTime().toString(),
		email: message.email,
		amount: amount * 100 ,
		publicKey: message.public_key
	};
	
	 const handleSuccess = (message,amount) => {
			// Implementation for whatever you want to do with reference and after success call.
		
				dispatch(
					creditUserAccount(
						amount,
						'dSX5pNJFZJ6OI711jWn3',
						'p_balance',
						'ref',
						'paystack'
					)
				);
			// console.log(amount,message)
		};


	 const componentProps = {
			...config,
			text: 'Add Money',
			onSuccess: (message) => handleSuccess(message,amount),
			onClose: onClose,
		};
  

	return (
		<>
			<Stack fontSize='34px' color='yellow.500' px='32px' onClick={onOpen}>
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
