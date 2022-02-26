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
	InputGroup,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Button,
	Select,
} from '@chakra-ui/react';
import { BiShoppingBag, BiPencil } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';

export default function AddTeam() {
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
									<Button
										mt={4}
										bg={yellowbtn}
										width='400px'
										h='70px'
										borderRadius='0px 11px 11px 11px'
										type='submit'
										color='white'
										_hover={{ bg: '#1A202C' }}>
										Save
									</Button>
								</Form>
							)}
						</Formik>
					</Box>
				</GridItem>
				<GridItem colStart={6} colEnd={9} h='10' bg='white'>
					<Center>
						<Box
							h='100px'
							w='480px'
							borderRadius='0px 11px 0px 0px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'
							justifyContent='center'>
							<Stack>
								<Text fontSize='16px' fontWeight='bold' color='black'>
									Team Management
								</Text>
							</Stack>
						</Box>
					</Center>
					<Center>
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
									Jumoke Adetola
								</Text>
								<Text color='gray' fontSize='12px'>
									Manager
								</Text>
							</Stack>

							<Stack color='gray.500'>
								<BiPencil />
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
									Michelle Gideon
								</Text>
								<Text color='gray' fontSize='12px'>
									Sales Representative
								</Text>
							</Stack>
							<Stack color='gray.500'>
								<BiPencil />
							</Stack>
						</Box>
					</Center>
				</GridItem>
			</Grid>
		</Container>
	);
}
