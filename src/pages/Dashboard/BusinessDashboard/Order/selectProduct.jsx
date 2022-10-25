import {
	AsyncCreatableSelect,
	AsyncSelect,
	CreatableSelect,
	Select,
} from 'chakra-react-select';
import { FormControl, FormLabel, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
	Button,
  Stack,
  ModalBody,
  ModalCloseButton,} from '@chakra-ui/react';

import React, { useState, useEffect } from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { getProduct } from '../../../../ReduxContianer/BussinessRedux/BusinessAction';
import { useSelector, useDispatch } from 'react-redux';

export default function SelectProduct() {
	const dispatch = useDispatch();
	const bluebtn = useColorModeValue('#1A202C');

	const businessSignIn = useSelector((state) => state.businessSignIn);
	const { user } = businessSignIn;
	const { businessDetails } = user;
	const { message } = businessDetails;
   const [businessId] = useState(message.business_id);

	useEffect(() => {
		dispatch(getProduct(businessId));
	}, []);

	const fetchProduct = useSelector((state) => state.fetchProduct);
	let { products ,loading} = fetchProduct;

	
	// const productData = [
	// 	 !loading &&
	// 	products?.details?.map((product) => ({
	// 		title : `${product.title }`
	// 	})
	// ]
// console.log(products)
// console.log(productData);


const { isOpen, onOpen, onClose } = useDisclosure()
  
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
				Select Products
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
								options={[
									!loading &&
										products?.details?.map((product) => ({
											title: `${product.title}`,
										})),
								]}
							/>
						</FormControl>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
