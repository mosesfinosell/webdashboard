import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Grid,
	GridItem,
	Container,
	Flex,
	Stack,
	Input,
	InputLeftElement,
	InputGroup,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Button,
	Text,
	Center,
	Box,
	Avatar,
	Heading
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useState,useEffect }  from 'react';
import { BsSortUp } from 'react-icons/bs';
import { MdFilterAlt, MdAddchart } from 'react-icons/md';
import user1 from '../../../../assets/user1.png';
import { FaAngleDown } from 'react-icons/fa';
import { RiHomeSmile2Line } from 'react-icons/ri';
import { IoExitOutline, IoBusinessOutline } from 'react-icons/io5';
import { BiStore } from 'react-icons/bi';
import { GiBanknote } from 'react-icons/gi';
import AddProduct from './addProduct'
import { useSelector,useDispatch } from 'react-redux';
import {getProduct} from '../../../../ReduxContianer/BussinessRedux/BusinessAction';

export default function StoreInventory() {
	const yellowbtn = useColorModeValue('yellow.500');
    const dispatch = useDispatch();
		const businessSignIn = useSelector((state) => state.businessSignIn);
		const { user } = businessSignIn;
		const { businessDetails } = user;
		const { message } = businessDetails;
    
	const [search, setSearch] = useState('');
    const [businessId] = useState(message.business_id);
useEffect(() => {
	dispatch(getProduct(businessId));
}, []);



	const fetchProduct = useSelector((state) => state.fetchProduct);
	const { products } = fetchProduct;
	const theProducts = products || [];
	console.log(products)
	
	return (
		<Grid templateRows='repeat(6, 1fr)' templateColumns='repeat(12, 1fr)'>
			<Tabs orientation='vertical' variant='unstyled'>
				<GridItem rowSpan={7} colSpan={2} bg='white' h='100vh'>
					<Box bg='white' w='250px' h='100%' border='0.5px solid #D9D9D9'>
						<Center p='45px'>
							<Flex display='flex' direction='row' alignItems='center'>
								<Avatar name='user' src={user1} />
								<Stack>
									{/* <Text>Hello {users[0variant='unstyled']}</Text> */}
								</Stack>
								<Stack>
									<FaAngleDown />
								</Stack>
							</Flex>
						</Center>
						<TabList>
							<Tab fontSize='16px' color='black'>
								<Stack px='20px' fontSize='20px'>
									<RiHomeSmile2Line />
								</Stack>
								Home
							</Tab>
							<Tab fontSize='16px' color='black'>
								<Stack px='20px' fontSize='20px'>
									<BiStore />
								</Stack>
								Storelink
							</Tab>
							<Tab fontSize='16px' color='black'>
								<Stack px='20px' fontSize='20px'>
									<MdAddchart />
								</Stack>
								Order
							</Tab>
							<Tab fontSize='16px' color='black'>
								<Stack px='20px' fontSize='20px'>
									<GiBanknote />
								</Stack>
								Finance
							</Tab>
							<Tab fontSize='16px' color='black'>
								<Stack px='20px' fontSize='20px'>
									<IoBusinessOutline />
								</Stack>
								Account
							</Tab>
							<Tab fontSize='16px' color='black'>
								<Stack px='20px' fontSize='20px'>
									<IoExitOutline />
								</Stack>
								LogOut
							</Tab>
						</TabList>
					</Box>
				</GridItem>
			</Tabs>
			<GridItem colSpan={9} rowSpan={9} bg='white'>
				<Container maxW='container.lg' mt='40px'>
					<Flex
						px='30px'
						direction='row'
						alignItems='center'
						justifyContent='space-between'>
						<Stack>
							<Text fontWeight='bold' fontSize='30px'>
								Store Inventory
							</Text>
						</Stack>
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
														width='300px'
														h='60px'
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
					</Flex>

					<Container maxW='container.lg' mt='40px'>
						<Box
							px='30px'
							w='60vw'
							boxSizing='border-box'
							borderWidth='1px'
							borderRadius='0px 21px 21px 21px'
							overflow='hidden'
							display='flex'
							direction='row'
							alignItems='center'
							justifyContent='space-between'>
							<Stack>
								<Text color='black' fontSize='16px'>
									All Products
								</Text>
							</Stack>
							<Flex h='10vh' direction='row' alignItems='center'>
								<Stack
									direction='row'
									color='black'
									alignItems='center'
									pr='30px'>
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
							</Flex>
						</Box>
						<Box
							px='30px'
							w='60vw'
							boxSizing='border-box'
							borderWidth='1px'
							borderRadius='0px 21px 21px 21px'
							overflow='hidden'>
							<Stack
								h='10vh'
								display='flex'
								direction='row'
								alignItems='center'
								justifyContent='space-between'>
								<Text color='gray' fontSize='14px'>
									Product Name
								</Text>
								<Text color='gray' fontSize='14px'>
									Price
								</Text>
								<Text color='gray' fontSize='14px'>
									Quantity
								</Text>
								<Text color='gray' fontSize='14px'>
									Status
								</Text>
							</Stack>
						</Box>

						{products.length > 0 &&
							theProducts.map((product) => {
								<Box
									px='25px'
									h='100px'
									w='60vw'
									border='0.5px solid #D9D9D9'
									display='flex'
									alignItems='center'
									justifyContent='space-between'>
									<Stack>
										<Text>{product.details?.title}</Text>
										<Text color='gray' fontSize='12px'>
											{product.details?.updateAt}
										</Text>
									</Stack>

									<Text fontSize='12px' color='red.500'>
										₦{product.details?.price}
									</Text>
									<Text fontSize='12px' color='gray'>
										{product.details?.status}
									</Text>
									<Text fontSize='12px' color='gray'>
										{product.details?.title}
									</Text>
								</Box>;
							})}
					</Container>
				</Container>
			</GridItem>
		</Grid>
	);
}
