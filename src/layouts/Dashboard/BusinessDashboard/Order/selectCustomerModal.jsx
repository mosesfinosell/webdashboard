import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	Text,
	Stack,
	Flex,
	Radio,
	RadioGroup,
} from '@chakra-ui/react';

import React, { useState, useEffect } from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { getCustomers } from '../../../../ReduxContianer/BussinessRedux/BusinessAction';
import { useSelector, useDispatch } from 'react-redux';

export default function SelectCustomerModal() {
	const bluebtn = useColorModeValue('#1A202C');
	const { isOpen, onOpen, onClose } = useDisclosure();
	const dispatch = useDispatch();

	const businessSignIn = useSelector((state) => state.businessSignIn);
	const { user } = businessSignIn;
	const { businessDetails } = user;
	const { message } = businessDetails;

	const [businessId] = useState(message.business_id);
	const [value, setValue] = React.useState('');

	useEffect(() => {
		dispatch(getCustomers(businessId));
	}, []);

	const fetchCustomer = useSelector((state) => state.fetchCustomer);
	let { customer } = fetchCustomer;
	// console.log(products.details[1]);
	// let productData = Object.keys(products);

	// console.log(productData);
	function handleSubmit(e) {
		e.preventDefault();
	}
	return (
		<>
			<Button
				onClick={onOpen}
				mt={4}
				bg={bluebtn}
				width='300px'
				h='60px'
				borderRadius='0px 11px 11px 11px'
				type='submit'
				color='white'
				_hover={{ bg: '#1A212C' }}>
				Select Customer
			</Button>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				size='lg'
				isCentered
				borderRadius='0px 11px 11px 11px'>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody>
						<RadioGroup onChange={setValue} value={value}>
							<Stack direction='column' mt='30px'>
								{/* {products?.details?.length > 0 && ( */}
								<Stack
									borderTop='0.5px solid #D9D9D9'
									borderBottom='0.5px solid #D9D9D9'
									w='470px'
									h='50px'
									display='flex'
									justifyContent='center'>
									{/* {Object.entries(products).map((product) => { */}

									<Radio
										
										colorScheme='yellow'
										value={customer?.customers[0]._id}>
										<Flex direction='row'>
											<Text px='10px'>
												{customer?.customers[0].customer_name}
											</Text>
											{/* <Text px='100px'>{products.details[0].price}</Text>
												<Text px='70px'>{products.details[0].category}</Text> */}
										</Flex>
									</Radio>
									{/* })}  */}
								</Stack>
								{/* )} */}
							</Stack>
						</RadioGroup>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
