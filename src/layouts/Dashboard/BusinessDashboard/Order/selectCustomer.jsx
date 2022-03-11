import {
	AsyncCreatableSelect,
	AsyncSelect,
    CreatableSelect,
    chakraComponents,
	Select,
} from 'chakra-react-select';
import { FormControl, FormLabel, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  Button,
  ModalBody,
  ModalCloseButton,} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import React, { useState, useEffect } from 'react';

import { getCustomers } from '../../../../ReduxContianer/BussinessRedux/BusinessAction';
import { useSelector, useDispatch } from 'react-redux';

export default function SelectCustomer() {
	const bluebtn = useColorModeValue('#1A202C');
const { isOpen, onOpen, onClose } = useDisclosure();
  
	const dispatch = useDispatch();

	const businessSignIn = useSelector((state) => state.businessSignIn);
	const { user } = businessSignIn;
	const { businessDetails } = user;
	const { message } = businessDetails;

	const [businessId] = useState(message.business_id);

	useEffect(() => {
		dispatch(getCustomers(businessId));
	}, []);

	const fetchCustomer = useSelector((state) => state.fetchCustomer);
	let { customers } = fetchCustomer;
	// console.log(products.details[1]);
	// let productData = Object.keys(products);

	// console.log(productData);

	// const customerData = [
	// 	...Array.from(Array(1).keys(products)).map((customer) => ({
	// 		title: `${customers?.details?.length > 0 && customer?.details?.title}`,
	// 	})),
	// ];
	// console.log(products);
	// console.log(productData);


	return (
		<>
			<Button
				mt={4}
				mb={4}
				bg={bluebtn}
				width='300px'
				h='60px'
				borderRadius='0px 11px 11px 11px'
				type='submit'
				color='white'
				onClick={onOpen}>
				Select Customers
			</Button>

			<Modal isOpen={isOpen} onClose={onClose} size='lg'>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Select Products</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl>
							<Select
								isMulti
								name='products'
								placeholder='Add Products'
								closeMenuOnSelect={false}
								chakraStyles={{
									input: (provided) => ({
										...provided,
										h: '50px',

										borderRadius: '0px 11px 11px 11px',
									}),
								}}
								// options={customerData}
							/>
						</FormControl>
					</ModalBody>
				</ModalContent>
			</Modal>

			{/* <Button
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
								{products?.details?.length > 0 && (
								<Stack
									borderTop='0.5px solid #D9D9D9'
									borderBottom='0.5px solid #D9D9D9'
									w='470px'
									h='50px'
									display='flex'
									justifyContent='center'>
									{Object.entries(products).map((product) => {

									<Radio
										
										colorScheme='yellow'
										value={customer?.customers[0]._id}>
										<Flex direction='row'>
											<Text px='10px'>
												{customer?.customers[0].customer_name}
											</Text>
											<Text px='100px'>{products.details[0].price}</Text>
												<Text px='70px'>{products.details[0].category}</Text> 
										</Flex>
									</Radio>
									})} 
								</Stack>
								)} 
							</Stack>
						</RadioGroup>
					</ModalBody>
				</ModalContent>
			</Modal> */}
		</>
	);
}
