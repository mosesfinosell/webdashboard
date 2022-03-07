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
	Box,
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
 
	// const getProduct = useSelector((state) => state.getProduct);

		const [businessId] = useState(message.business_id);
	
	useEffect((limitno, pageno) => {
		dispatch(getProduct('BusW5xmF', 5, 1));
	}, []);

	return (
		<>
			<Button
				onClick={onOpen}
				mt={4}
				bg={bluebtn}
				width='300px'
				h='70px'
				borderRadius='0px 11px 11px 11px'
				type='submit'
				color='white'
                _hover={{ bg: '#1A212C' }}
            >
				Select Product
			</Button>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				size='md'
				isCentered
				borderRadius='0px 11px 11px 11px'>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody>
						<Box
							h='100px'
							w='400px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'
							justifyContent='space-evenly'>
						
							<Stack mr='150px'>
								<Text>Buy Airtime</Text>
							</Stack>
							<Stack>
								<Text fontSize='12px' color='red.500'>
									₦12,000
								</Text>
								<Text fontSize='12px' color='gray'>
									Jan 3, 2022
								</Text>
							</Stack>
                        </Box>
                        
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
