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
	Flex,
	Text,
	Stack,
	Center
} from '@chakra-ui/react';

import React, { useState,useEffect } from 'react';
// import { useColorModeValue } from "@chakra-ui/color-mode";
import { FaCheck,FaPlus } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {
	getCustomers
} from '../../../../ReduxContianer/BussinessRedux/BusinessAction';
// import { BiShoppingBag } from 'react-icons/bi';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
	setVerification,
	
} from '../../../../ReduxContianer/actions/auth/signupActions';

export default function AddCustomerModal() {
		const dispatch = useDispatch();
	
	// const yellowbtn = useColorModeValue('yellow.500')
	const { isOpen, onOpen, onClose } = useDisclosure();
 const { verification,email,tel } = useSelector(
		(state) => state.businessSignup
 );
	 const businessInfo = useSelector(
			(state) => state.businessReducer.businessUserInfo
		);
		const businessId = businessInfo.business_id;
	const customers = useSelector((state) => state.businessReducer.customers);
	// console.log(customers)
	useEffect(() => {
		if (!customers) {
			dispatch(getCustomers(businessId));
		}
	}, [dispatch, businessId]);
	  const isFetching = useSelector((state) => state.businessReducer.isFetching);

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
				<MdKeyboardArrowDown />
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
								h='100%'
								w='400px'
								border='1px solid #fffff'
								mt='70px'
								// borderRadius='0px 11px 11px 11px'
							>
								{!isFetching &&
									customers?.customers?.map((customer,index) => {
										return (
											<Select
												key={index}
												selected={verification === customer?._id || 'tel'}
												onClick={() =>
													verification === customer?._id || 'tel'
														? null
														: setVerification(dispatch)
												}>
												<LeftIcon>
													<Check>
														<FaCheck />
													</Check>
												</LeftIcon>
												<Stack>
													<Text>
														{customer?.customer_name || 'Adewale Deji'}
													</Text>
												</Stack>
											</Select>
										);
									})}
							</Box>
						</Center>
						<Flex
							direction='column'
							alignItems='center'
							mb={7}
							justifyContent='space-evenly'>
							<Button
								onClick={() =>
									verification === 'email' ? null : setVerification(dispatch)
								}
								mt={4}
								bg='yellow.500'
								width='400px'
								h='70px'
								borderRadius='0px 11px 11px 11px'
								type='submit'
								color='white'
								_hover={{ bg: '#1A202C' }}
								leftIcon={<FaPlus />}>
								Add Customer
							</Button>
							<Button
								mt={4}
								bg='white'
								width='400px'
								h='70px'
								borderRadius='0px 11px 11px 11px'
								type='submit'
								border='1px solid #D6AA1B'
								color='#1A202C'
								onClick={onClose}
								_hover={{ bg: '#D6AA1B' }}
								leftIcon={<FaPlus />}>
								Add New Customer
							</Button>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}


const Check = styled.div`
	width: ${23 * 0.063}rem;
	height: ${23 * 0.063}rem;
	border-radius: 50%;
	border: solid ${1 * 0.063}rem #8c8c8c;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: ${10 * 0.063}rem;
	color: #fff;

	position: absolute;
	right: 2rem;
	top: 0;
	bottom: 0;
	margin: auto;
`;

const Select = styled.div`
	width: 400px;
	position: relative;
	border:1px #d9d9d9 solid;
	// border-radius: 0px 11px 11px 11px;
	height: 75px;
	// margin-bottom: ${13 * 0.063}rem;
	background: ${(prop) => (prop.selected ? '#FDF9ED' : '#FAFAFA')};
	border-color: ${(prop) => (prop.selected ? '#F5D776' : '#D9D9D9')};
	display: flex;
	align-items: center;
	padding-left: 5rem;
	color: #8c8c8c;
	cursor: pointer;
	p {
		font-size: ${18 * 0.063}rem;
		line-height: ${22 * 0.063}rem;
		color: ${(prop) => (prop.selected ? '#000' : '')};
	}
	input {
	}
	svg {
		color: ${(prop) => (prop.selected ? '#D6AA1B' : '')};
	}
	${Check} {
		background: ${(prop) => (prop.selected ? '#D6AA1B' : '')};
		border: ${(prop) => (prop.selected ? 'none' : '')};
		svg {
			color: #fff;
		}
	}
`;


const LeftIcon = styled.div`
	position: absolute;
	left: 3rem;
	top: 0;
	bottom: 0;
	margin: auto;
	width: ${18 * 0.063}rem;
	height: ${18 * 0.063}rem;
`;