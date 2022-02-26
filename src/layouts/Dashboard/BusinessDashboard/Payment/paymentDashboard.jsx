import {
	Grid,
	Box,
	GridItem,
	Container,
	Text,
	Stack,
	Center,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Input,
	InputLeftElement,
	InputRightElement,
	InputGroup,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Button,
	Select,
} from '@chakra-ui/react';
import { BiShoppingBag } from 'react-icons/bi';
import { MdEmail, MdWifiCalling3 } from 'react-icons/md';
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';

export default function PaymentDashboard() {
	const [name, setName] = useState('');

	return (
		<Container m='40px' maxW='container.lg'>
			<Grid h='100vh' templateColumns='repeat(5, 1fr)'>
				<GridItem colSpan={4} rowSpan={6} bg='white' gap='5'>
					<Stack pb='30px'>
						<Text color='black' fontWeight='bold' fontSize='14px'>
							Add a transaction
						</Text>
					</Stack>

					<Box
						h='700px'
						w='480px'
						borderRadius='0px 11px 11px 11px'
						border='0.5px solid #D9D9D9'
						px='40px'>
						<Formik>
							{() => (
								<Form>
									<Field name='text'>
										{({ field, form }) => (
											<FormControl
												isInvalid={form.errors.name && form.touched.name}
												mt='30px'>
												<FormLabel htmlFor='name'>Billed to</FormLabel>
												<InputGroup>
													<Input
														{...field}
														mb='20px'
														value={name}
														//  onChange={(e) => setName(e.target.value)}
														placeholder='Customer Name'
														width='420px'
														h='60px'
														borderRadius='0px 11px 11px 11px'
													/>
												</InputGroup>
												<FormErrorMessage>{form.errors.name}</FormErrorMessage>
											</FormControl>
										)}
									</Field>
									<Field name='email'>
										{({ field, form }) => (
											<FormControl
												isInvalid={form.errors.email && form.touched.email}
												mt={4}>
												<FormLabel htmlFor='name'>Email</FormLabel>
												<InputGroup>
													<InputLeftElement
														pointerEvents='none'
														m='15px 1px'
														fontSize='20px'
														color='gray.500'
														children={<MdEmail />}
													/>
													<Input
														{...field}
														mb='20px'
														//   value={email}
														//   onChange={(e) => setEmail(e.target.value)}
														placeholder='Email Address'
														width='400px'
														h='70px'
														borderRadius='0px 11px 11px 11px'
													/>
												</InputGroup>
												<FormErrorMessage>{form.errors.email}</FormErrorMessage>
											</FormControl>
										)}
									</Field>
									<Field name='phoneNumber'>
										{({ field, form }) => (
											<FormControl
												isInvalid={
													form.errors.phoneNumber && form.touched.phoneNumber
												}
												mt={4}>
												<FormLabel htmlFor='name'>Phone number</FormLabel>
												<InputGroup>
													<InputLeftElement
														pointerEvents='none'
														m='15px 1px'
														fontSize='20px'
														color='gray.500'
														children={<MdWifiCalling3 />}
													/>
													<Input
														{...field}
														mb='20px'
														//    value={phoneNumber}
														//    onChange={(e) => setPhoneNumber(e.target.value)}
														placeholder='08012345678'
														width='400px'
														h='70px'
														borderRadius='0px 11px 11px 11px'
													/>
												</InputGroup>
												<FormErrorMessage>
													{form.errors.phoneNumber}
												</FormErrorMessage>
											</FormControl>
										)}
									</Field>
									<Field name='text'>
										{({ field, form }) => (
											<FormControl>
												<FormLabel htmlFor='billing date'>
													Type of Transaction
												</FormLabel>
												<Select
													id='country'
													placeholder='Select a date'
													width='400px'
													h='70px'
													borderRadius='0px 11px 11px 11px'>
													<option>United Arab Emirates</option>
													<option>Nigeria</option>
												</Select>
											</FormControl>
										)}
									</Field>
									<Field name='text'>
										{({ field, form }) => (
											<FormControl
												isInvalid={form.errors.name && form.touched.name}
												mt='20px'>
												<FormLabel htmlFor='name'>Amount</FormLabel>
												<InputGroup>
													<Input
														{...field}
														value={name}
														//  onChange={(e) => setName(e.target.value)}
														placeholder='Select product from inventory'
														width='420px'
														h='70px'
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
					</Box>
				</GridItem>
				<GridItem colStart={6} colEnd={9} h='10' bg='white'>
					<Stack m='10px'>
						<Text color='gray' fontSize='14px'>
							Deal History
						</Text>
					</Stack>
					<Tabs variant='unstyled'>
						<Center>
							<Box
								h='100px'
								w='480px'
								borderRadius='0px 11px 0px 0px'
								border='0.5px solid #D9D9D9'
								display='flex'
								alignItems='center'
								justifyContent='center'>
								<TabList>
									<Tab fontSize='16px' fontWeight='bold' color='black'>
										All
									</Tab>
									<Tab fontSize='16px' fontWeight='bold' color='black'>
										Payments
									</Tab>
									<Tab fontSize='16px' fontWeight='bold' color='black'>
										Debit
									</Tab>
								</TabList>
							</Box>
						</Center>
						<Center>
							<TabPanels>
								<TabPanel>
									<Box
										h='100px'
										w='480px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='yellow.500'
											bg='yellow.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid yellow.100'
											p='12px'
											fontSize='22px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='120px'>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</Stack>

										<Stack>
											<Text fontSize='12px' color='yellow.500'>
												₦12,000
											</Text>
											<Text fontSize='12px' color='gray'>
												Jan 3, 2022
											</Text>
										</Stack>
									</Box>
									<Box
										h='100px'
										w='480px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='red.500'
											bg='red.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid red.100'
											p='12px'
											fontSize='22px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='120px'>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
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
									<Box
										h='100px'
										w='480px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='green.500'
											bg='green.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid green.100'
											p='12px'
											fontSize='22px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='120px'>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</Stack>

										<Stack>
											<Text fontSize='12px' color='green.500'>
												₦12,000
											</Text>
											<Text fontSize='12px' color='gray'>
												Jan 3, 2022
											</Text>
										</Stack>
									</Box>
								</TabPanel>
								<TabPanel>
									<Box
										h='100px'
										w='480px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='green.500'
											bg='green.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid green.100'
											p='12px'
											fontSize='22px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='120px'>
											<Text color='#273B4A' w='200px'>
												{' '}
												Sneakers Adidas Core
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</Stack>

										<Stack>
											<Text fontSize='12px' color='green.500'>
												₦12,000
											</Text>
											<Text fontSize='12px' color='gray'>
												Jan 3, 2022
											</Text>
										</Stack>
									</Box>
									<Box
										h='100px'
										w='480px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='yellow.500'
											bg='yellow.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid yellow.100'
											p='12px'
											fontSize='22px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='120px'>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</Stack>

										<Stack>
											<Text fontSize='12px' color='yellow.500'>
												₦12,000
											</Text>
											<Text fontSize='12px' color='gray'>
												Jan 3, 2022
											</Text>
										</Stack>
									</Box>
									<Box
										h='100px'
										w='480px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='gray.500'
											bg='gray.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid gray.100'
											p='12px'
											fontSize='24px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='120px'>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</Stack>

										<Stack>
											<Text fontSize='12px' color='gray.500'>
												₦12,000
											</Text>
											<Text fontSize='12px' color='gray'>
												Jan 3, 2022
											</Text>
										</Stack>
									</Box>
								</TabPanel>
								<TabPanel>
									<Box
										h='100px'
										w='480px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='yellow.500'
											bg='yellow.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid green.100'
											p='12px'
											fontSize='22px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='120px'>
											<Text color='#273B4A' w='200px'>
												{' '}
												Sneakers Adidas Core
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</Stack>

										<Stack>
											<Text fontSize='12px' color='green.500'>
												₦12,000
											</Text>
											<Text fontSize='12px' color='gray'>
												Jan 3, 2022
											</Text>
										</Stack>
									</Box>
									<Box
										h='100px'
										w='480px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='yellow.500'
											bg='yellow.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid yellow.100'
											p='12px'
											fontSize='22px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='120px'>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</Stack>

										<Stack>
											<Text fontSize='12px' color='yellow.500'>
												₦12,000
											</Text>
											<Text fontSize='12px' color='gray'>
												Jan 3, 2022
											</Text>
										</Stack>
									</Box>
									<Box
										h='100px'
										w='480px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='gray.500'
											bg='gray.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid gray.100'
											p='12px'
											fontSize='24px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='120px'>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</Stack>

										<Stack>
											<Text fontSize='12px' color='gray.500'>
												₦12,000
											</Text>
											<Text fontSize='12px' color='gray'>
												Jan 3, 2022
											</Text>
										</Stack>
									</Box>
								</TabPanel>
							</TabPanels>
						</Center>
					</Tabs>
				</GridItem>
			</Grid>
		</Container>
	);
}
