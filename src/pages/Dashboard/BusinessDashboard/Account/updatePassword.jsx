import {
	Stack,
	Input,
	InputLeftElement,
	InputGroup,
	FormControl,
	FormLabel,
	FormErrorMessage,
    Button,
    Text,
    Heading
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { FaLock } from 'react-icons/fa';
import { useState } from 'react';
import {updatePassword} from '../../../../ReduxContianer/BussinessRedux/BusinessAction'

export default function UpdatePassword() {
	const yellowbtn = useColorModeValue('yellow.500');
	const dispatch = useDispatch();

	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	// Redux
	const businessInfo = useSelector(
		(state) => state.businessReducer.businessUserInfo
	);
	const isLoading = useSelector((state) => state.businessReducer.isFetching);
	

	// Function
	function handleSubmit(e) {
        e.preventDefault();
        dispatch(
					updatePassword(
						businessInfo.user_id,
						oldPassword,
						newPassword,
						confirmPassword
					)
				);
    }

	
    
   

	return (
		<Stack pl='70px' pt='20px'>
			<Stack mb='30px'>
				<Heading fontSize='16px' as='h6'>
					Update Password
				</Heading>
				<Text fontSize='14px' color='gray'>
					Choose a new password to be used across Finosell
				</Text>
			</Stack>
			<Formik>
				{() => (
					<Form onSubmit={handleSubmit}>
						<Field name='password'>
							{({ field, form }) => (
								<FormControl isInvalid={form.errors.name && form.touched.name}>
									<FormLabel htmlFor='password'>Old Password</FormLabel>
									<InputGroup>
										<InputLeftElement
											m='10px 1px'
											fontSize='18px'
											color='yellow.500'
											children={<FaLock />}
										/>

										<Input
											{...field}
											mb='20px'
											type='password'
											onChange={(e) => setOldPassword(e.target.value)}
											value={oldPassword}
											placeholder='********'
											width='300px'
											h='60px'
											borderRadius='0px 11px 11px 11px'
										/>
									</InputGroup>
									<FormErrorMessage>{form.errors.name}</FormErrorMessage>
								</FormControl>
							)}
						</Field>
						<Field name='password'>
							{({ field, form }) => (
								<FormControl>
									<FormLabel htmlFor='password'>New Password</FormLabel>
									<InputGroup>
										<InputLeftElement
											m='10px 1px'
											fontSize='18px'
											color='yellow.500'
											children={<FaLock />}
										/>

										<Input
											{...field}
											mb='20px'
											type='password'
											onChange={(e) => setNewPassword(e.target.value)}
											value={newPassword}
											placeholder='*********'
											width='300px'
											h='60px'
											borderRadius='0px 11px 11px 11px'
										/>
									</InputGroup>
								</FormControl>
							)}
						</Field>
						<Field name='password'>
							{({ field, form }) => (
								<FormControl>
									<FormLabel htmlFor='password'>Confirm Password</FormLabel>
									<InputGroup>
										<InputLeftElement
											m='10px 1px'
											fontSize='18px'
											color='yellow.500'
											children={<FaLock />}
										/>

										<Input
											{...field}
											mb='20px'
											type='password'
											onChange={(e) => setConfirmPassword(e.target.value)}
											value={confirmPassword}
											placeholder='*********'
											width='300px'
											h='60px'
											borderRadius='0px 11px 11px 11px'
										/>
									</InputGroup>
									<FormErrorMessage>{form.errors.name}</FormErrorMessage>
								</FormControl>
							)}
						</Field>
						<Button
							mt={4}
							bg={yellowbtn}
							width='300px'
							h='60px'
							borderRadius='0px 11px 11px 11px'
							type='submit'
							color='white'
							_hover={{ bg: '#1A202C' }}>
							Update Password
						</Button>
					</Form>
				)}
			</Formik>
			<Stack></Stack>
		</Stack>
	);
}
