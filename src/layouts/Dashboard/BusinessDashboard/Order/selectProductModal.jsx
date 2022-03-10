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
	useCheckbox,
} from '@chakra-ui/react';

import React,{ useState,useEffect} from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { getProduct} from '../../../../ReduxContianer/BussinessRedux/BusinessAction' 
import  {useSelector,useDispatch} from 'react-redux'


export default function SelectProductModal() {
const bluebtn = useColorModeValue('#1A202C');
const { isOpen, onOpen, onClose } = useDisclosure();
const dispatch = useDispatch()

	const businessSignIn = useSelector((state) => state.businessSignIn);
	const { user } = businessSignIn;
	const { businessDetails } = user;
	const { message } = businessDetails;

	useEffect(() => {
		dispatch(getProduct(businessId));
	}, []);

	const fetchProduct = useSelector((state) => state.fetchProduct);
	let { products } = fetchProduct;
	
	const [businessId] = useState(message.business_id);
	const [value, setValue] = React.useState('1');

		// function handleSelect(e) {
		// 	setValue(e);
		// 	console.log(e);
		// }
	
	
	// console.log(products.details[1]);
	// let productData = Object.keys(products);

	// console.log(productData);
	const CustomCheckbox = (props) => {
		const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
			useCheckbox(props)

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
					Select Product
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
							<chakra.label
								display='flex'
								flexDirection='row'
								alignItems='center'
								gridColumnGap={2}
								maxW='36'
								bg='green.50'
								border='1px solid'
								borderColor='green.500'
								rounded='lg'
								px={3}
								py={1}
								cursor='pointer'
								{...htmlProps}
							>
								<input {...getInputProps()} hidden />
								<Flex
									alignItems='center'
									justifyContent='center'
									border='2px solid'
									borderColor='green.500'
									w={4}
									h={4}
									{...getCheckboxProps()}
								>
									{state.isChecked && <Box w={2} h={2} bg='green.500' />}
								</Flex>
								<Text {...getLabelProps()}>Click me</Text>
							</chakra.label>
						</ModalBody>
					</ModalContent>
				</Modal>
			</>
		);
	}



