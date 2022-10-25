import {
	Container,
	Flex,
	Stack,
	Input,
	InputLeftElement,
	InputGroup,
	FormControl,
	FormErrorMessage,
	Text,
	Box,
	HStack,
	VStack,
	StackDivider,
	Image,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useState, useEffect } from 'react';

import { BsSortUp } from 'react-icons/bs';
import { MdFilterAlt } from 'react-icons/md';
import shoe from '../../../../assets/shoe.svg';

import AddProduct from './addProduct';
import { useSelector, useDispatch } from 'react-redux';
// import BusinessLayout from "../../../../components/Layout/BusinessLayout";
// import {getProduct} from '../../../../ReduxContianer/BussinessRedux/BusinessAction';
// import StoreTable from '../../../../components/Table/storeTable'
import { useToken } from '@chakra-ui/react';
//...

export default function StoreInventory() {
	const yellowbtn = useColorModeValue('yellow.500');
	const bg = useToken('background', 'white');
    	const businessInfo = useSelector(
		(state) => state.businessReducer.businessUserInfo
	);
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const products = [];
	const [search, setSearch] = useState('');
    const product = useSelector((state) => state.businessReducer.products);
     const isFetching = useSelector(
				(state) => state.businessReducer.isFetching
			);
//     useEffect(() => {
//     dispatch(getProduct(businessInfo.business_id));
// },[])

	return (
		<Container maxW='100%' >
			<Flex
				w='100%'
				direction='row'
				alignItems='center'
				justifyContent='space-between'
				mb='50px'>
				<Stack>
					<Text fontWeight='bold' fontSize='30px'>
						Store Inventory
					</Text>
				</Stack>
				<Stack direction='row' alignItems='center'>
					<Formik>
						{() => (
							<Form>
								<Field name='text'>
									{({ field, form }) => (
										<FormControl
											isInvalid={form.errors.name && form.touched.name}>
											<InputGroup>
												<InputLeftElement
													pointerEvents='none'
													m='25px 1px'
													fontSize='20px'
													color='yellow.500'
													children=''
												/>
												<Input
													{...field}
													onChange={(e) => setSearch(e.target.value)}
													type='text'
													placeholder='Search'
													value={search}
													padding='30px 10px'
													// width="300px"
													// h="60px"
													borderRadius='0px 11px 11px 11px'
												/>
											</InputGroup>
											<FormErrorMessage>{form.errors.name}</FormErrorMessage>
										</FormControl>
									)}
								</Field>
							</Form>
						)}
					</Formik>
					<Stack>
						<AddProduct />
					</Stack>
				</Stack>
			</Flex>
			<Stack>
				<Box
					w='65vw'
					h='100%'
					borderWidth='1px'
					borderRadius='0px 11px 11px 11px'
					overflow='hidden'>
					<Flex
						direction='row'
						justifyContent='space-between'
						alignItems='center'
						p='20px'>
						<Stack>
							<Text color='black' fontWeight='bold' fontSize='16px'>
								All Products
							</Text>
						</Stack>

						<Stack direction='row' alignItems='center' fontWeight='bold'>
							<Stack
								color='black'
								direction='row'
								alignItems='center'
								// pr='30px'
							>
								<BsSortUp />
								<Text color='black' fontSize='16px'>
									Sort
								</Text>
							</Stack>
							<Stack direction='row' alignItems='center'>
								<MdFilterAlt />
								<Text color='black' fontSize='16px'>
									Filter
								</Text>
							</Stack>
						</Stack>
					</Flex>

					<VStack
						divider={<StackDivider borderColor='gray.200' />}
						// spacing={4}
						align='stretch'>
						<Box
							px='30px'
							// h='60px'
							display='flex'
							direction='row'
							alignItems='center'
							justifyContent='space-between'>
							<Stack>
								<Text color='gray' fontSize='14px'>
									Product Name
								</Text>
							</Stack>
							<HStack
								direction='row'
								spacing='175px'
								// justifyContent='space-between'
								alignItems='center'>
								<Stack>
									<Text color='gray' textAlign='center' fontSize='14px'>
										Price
									</Text>
								</Stack>
								<Stack>
									<Text color='gray' textAlign='left' fontSize='14px'>
										Category
									</Text>
								</Stack>
								<Stack>
									<Text color='gray' fontSize='14px'>
										Status
									</Text>
								</Stack>
							</HStack>
						</Box>
						{!isFetching &&
                            products?.map((product) => {
                               
								return (
									<Box
										px='30px'
										h='60px'
										display='flex'
										direction='row'
										alignItems='center'
										justifyContent='space-between'>
										<Stack direction='column' alignItems='center'>
											<Text color='black' fontSize='13px'>
												{product.title}
											</Text>
										</Stack>
										<HStack direction='row' spacing='130px' alignItems='center'>
											<Stack>
												<Text fontSize='13px'>₦{product.price}</Text>
											</Stack>
											<Stack>
												<Text fontSize='13px' color='black'>
													{product.category}
												</Text>
											</Stack>
											<Stack>
												<Text fontSize='12px' color='yellow.400'>
													{product.status}
												</Text>
											</Stack>
										</HStack>
									</Box>
								);
							})}
						<Box h='80px'></Box>
					</VStack>
				</Box>
			</Stack>
		</Container>
	);
}
