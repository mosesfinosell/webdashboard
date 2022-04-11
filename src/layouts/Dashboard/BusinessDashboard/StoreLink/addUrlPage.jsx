import {
	Grid,
	Box,
	Container,
	Stack,
	Flex,
	Heading,
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
import { useSelector, useDispatch } from 'react-redux';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { createStoreLink } from '../../../../ReduxContianer/BussinessRedux/BusinessAction'


export default function AddUrlPage() {

const yellowbtn = useColorModeValue('yellow.500');
const dispatch = useDispatch();

const businessInfo = useSelector((state) => state.businessReducer.businessUserInfo);
// const { user } = businessSignIn;
// const { businessDetails } = user;
// const { message } = businessDetails;
	
	
	const [userId] = useState(businessInfo.user_id);
	const [storeName, setStoreName] = useState('');

	function handleSubmit(e) {
		console.log('PPPEEE')
		e.preventDefault();
		dispatch(createStoreLink(storeName, userId));
		setStoreName('')
    }


	return (
		<Container m='20px' maxW='container.lg'>
			<Flex direction='column' m='50px'>
				<Stack>
					<Heading fontSize='38px'>Add Url</Heading>
				</Stack>

				<Box mt='40px'>
					<Formik>
						{() => (
							<Form onSubmit={handleSubmit}>
								<Field name='name'>
									{({ field, form }) => (
										<FormControl
											isInvalid={form.errors.name && form.touched.name}>
											<InputGroup>
												<InputLeftAddon width='100px' h='60px'>
													http://
												</InputLeftAddon>
												<Input
													type='name'
													value={storeName}
													onChange={(e) => setStoreName(e.target.value)}
													width='200px'
													h='60px'
													placeholder='Input your Store Name'
												/>
												<InputRightAddon width='120px' h='60px'>
													finosell.com
												</InputRightAddon>
												<Stack ml='25px' direction='row'>
													<Checkbox colorScheme='green' defaultChecked>
														Url Available
													</Checkbox>
												</Stack>
											</InputGroup>
										</FormControl>
									)}
								</Field>
								<Button
									mt={4}
									bg={yellowbtn}
									width='400px'
									h='60px'
									borderRadius='0px 11px 11px 11px'
									type='submit'
									color='white'
									_hover={{ bg: '#1A202C' }}>
									Add
								</Button>
							</Form>
						)}
					</Formik>
				</Box>
			</Flex>
		</Container>
	);
}
