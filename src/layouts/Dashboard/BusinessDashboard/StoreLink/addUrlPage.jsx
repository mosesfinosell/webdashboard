import {
	Grid,
	Box,
	GridItem,
	Container,
	Text,
	Stack,
	Center,
	Flex,
	Heading,
	// Textarea,
	// Image,
	Input,
	Checkbox,
	InputGroup,
	FormControl,
	FormLabel,
	FormErrorMessage,
	InputRightAddon,
	InputLeftAddon,
	Button,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';
// import { BiPencil } from 'react-icons/bi';
// import shoe from '../../../../assets/shoe.svg';

export default function AddUrlPage() {
	//   const {onOpen} = ProductModal
	const yellowbtn = useColorModeValue('yellow.500');

	const [name, setName] = useState('');
	const [phonenumber, setPhonenumber] = useState('');
	const [email, setEmail] = useState('');

	return (
		<Container m='20px' maxW='container.lg'>
			<Box maxW='xlg' m='36' overflow='hidden'>
				<Grid templateColumns='repeat(7, 1fr)' templateRows='repeat(5, 1fr)'>
					<GridItem rowStart={1} colSpan={3} bg='white'>
						<Center>
							<Stack>
								<Heading fontSize='38px'>Add Url</Heading>
							</Stack>
						</Center>

						{/* <Center mt='80px' ml='380px'> */}
						<Box>
							<FormLabel htmlFor='url'>Url</FormLabel>
							<InputGroup>
								<InputLeftAddon width='100px' h='70px'>
									http://
								</InputLeftAddon>
								<Input
									placeholder='Add a URL'
									width='100vh'
									h='70px'
									bg='#FAFAFA'
									type='url'
									id='url'
								/>
								<InputRightAddon width='100px' h='70px'>
									.com
								</InputRightAddon>
								<Button
									bg={yellowbtn}
									width='550px'
									h='70px'
									borderRadius='0px 0px 11px 0px'
									type='submit'
									color='white'
									_hover={{ bg: '#1A202C' }}>
									Add 
								</Button>
							</InputGroup>
						</Box>
						{/* <Stack>
								<Formik>
									{() => (
										<Form>
											<Field name='text'>
												{({ field, form }) => (
													<FormControl
														isInvalid={form.errors.name && form.touched.name}>
														<FormLabel htmlFor='name'>
															Add a name for your store link
														</FormLabel>
														<InputGroup>
															<Box
																width='100px'
																h='70px'
																display='flex'
																alignItems='center'
																px='20px'
																borderRadius='0px 0px 0px 11px'
																border='0.5px solid #D9D9D9'>
																<Text fontSize='16px'>https://</Text>
															</Box>
															<Input
																{...field}
																mb='20px'
																value={name}
																//  onChange={(e) => setName(e.target.value)}
																placeholder='Add a URL'
																width='300px'
																h='70px'
																bg='#FAFAFA'
																borderRadius='0px'
															/>
															<Box
																width='150px'
																h='70px'
																display='flex'
																alignItems='center'
																px='20px'
																borderRadius='0px 11px 11px 0px'
																border='0.5px solid #D9D9D9'>
																<Text fontSize='16px'>.finosell.com</Text>
															</Box>
															<Stack
																direction='row'
																alignItems='center'
																w='30%'
																px='30px'>
																<Checkbox colorScheme='green' defaultChecked>
																	Url Available
																</Checkbox>
															</Stack>
														</InputGroup>

														<FormErrorMessage>
															{form.errors.name}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>
											<Button
												mt={4}
												bg={yellowbtn}
												width='550px'
												h='70px'
												borderRadius='0px 11px 11px 11px'
												type='submit'
												color='white'
												_hover={{ bg: '#1A202C' }}>
												Add
											</Button>
										</Form>
									)}
								</Formik>
							</Stack> */}
						{/* </Center> */}
					</GridItem>
				</Grid>
			</Box>
		</Container>
	);
}
