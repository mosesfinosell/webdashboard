import { Formik, Form, Field } from 'formik';
import {
	Center,
	Input,
	InputLeftElement,
	InputGroup,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Button,
	Text,
	Stack,
	Link,
	Container,
	Box,
	Image,
	Flex,
	InputRightElement,
	Checkbox,
} from '@chakra-ui/react';

import { Link as RLink } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import { MdEmail, MdWifiCalling3 } from 'react-icons/md';
import { AiOutlineShop } from 'react-icons/ai';
import { useColorModeValue } from '@chakra-ui/color-mode';
import logo from '../../../assets/Logomark.png';

export default function AddBusinessPage() {
	const yellowbtn = useColorModeValue('yellow.500');

	return (
		<Container maxW='container.lg'>
			<Box
				maxW='xlg'
				p='20'
				m='36'
				boxSizing='border-box'
				borderWidth='1px'
				borderRadius='lg'
				overflow='hidden'>
				<Center>
					<Stack>
						<Image mb='15' src={logo} alt='logo' />
					</Stack>
				</Center>

				<Center>
					<Stack>
						<Text fontSize='36px' mt='10' fontWeight='bold' lineHeight='5'>
							Add Business Details
						</Text>
					</Stack>
				</Center>
				<Center>
					<Stack mb='40px'>
						<Text color='gray'>
							Use correct information about your business
						</Text>
					</Stack>
				</Center>
				<Formik>
					{() => (
						<Center>
							<Form>
								<Flex direction='row' justifyContent='space-between'>
									<Field name='name'>
										{({ field, form }) => (
											<FormControl
												isInvalid={form.errors.name && form.touched.name}>
												<FormLabel htmlFor='name'>
													CAC Registeration Number
												</FormLabel>
												<InputGroup>
													<InputLeftElement
														pointerEvents='none'
														m='15px 1px'
														fontSize='20px'
														color='yellow.500'
														children={<AiOutlineShop />}
													/>
													<Input
														{...field}
														id='name'
														placeholder='CAC Registeration No'
														width='220px'
														h='70px'
														borderRadius='0px 11px 11px 11px'
													/>
												</InputGroup>
												<FormErrorMessage>{form.errors.name}</FormErrorMessage>
											</FormControl>
										)}
									</Field>
									<Field name='name' pl='40px'>
										{({ field, form }) => (
											<FormControl
												isInvalid={form.errors.name && form.touched.name}>
												<FormLabel htmlFor='name'>Business Category*</FormLabel>
												<InputGroup>
													<InputLeftElement
														pointerEvents='none'
														m='15px 1px'
														fontSize='24px'
														color='yellow.500'
														children={<MdEmail />}
													/>
													<InputRightElement
														pointerEvents='none'
														color='gray.500'
														m='14px 30px'
														fontSize='24px'
														children={<FaAngleDown />}
													/>
													<Input
														{...field}
														id='name'
														placeholder='Select Category'
														width='220px'
														h='70px'
														borderRadius='0px 11px 11px 11px'
													/>
												</InputGroup>
												<FormErrorMessage>{form.errors.name}</FormErrorMessage>
											</FormControl>
										)}
									</Field>
								</Flex>
								<Field name='name'>
									{({ field, form }) => (
										<FormControl
											isInvalid={form.errors.name && form.touched.name}>
											<FormLabel htmlFor='name'>Business Address*</FormLabel>
											<InputGroup>
												<InputLeftElement
													pointerEvents='none'
													m='22px 1px'
													fontSize='20px'
													color='yellow.500'
													children={<MdWifiCalling3 />}
												/>
												<Input
													{...field}
													id='name'
													placeholder='Business Address'
													width='500px'
													h='80px'
													borderRadius='0px 11px 11px 11px'
												/>
											</InputGroup>
											<FormErrorMessage>{form.errors.name}</FormErrorMessage>
										</FormControl>
									)}
								</Field>
								<Center>
									<Stack
										mt='50px'
										direction='row'
										justifyContent='space-between'>
										<Text fontSize='18px' lineHeight='5'>
											Will you be adding employees to your account?
										</Text>
										<Stack direction='row'>
											<Checkbox colorScheme='yellow' defaultChecked>
												Yes
											</Checkbox>
											<Checkbox colorScheme='yellow' defaultChecked>
												No
											</Checkbox>
										</Stack>
									</Stack>
								</Center>
								<Button
									mt='50px'
									bg={yellowbtn}
									width='500px'
									h='90px'
									borderRadius='0px 11px 11px 11px'
									type='submit'
									color='white'
									_hover={{ bg: '#1A202C' }}>
									Continue
								</Button>
							</Form>
						</Center>
					)}
				</Formik>
				<Stack mt='40px'>
					<Center>
						<Link as={RLink} pl='2' to='/business-signin' color='yellow.500'>
							Skip for now
						</Link>
					</Center>
				</Stack>
			</Box>
		</Container>
	);
}
