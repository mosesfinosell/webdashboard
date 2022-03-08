import {
	Stack,
	Input,
	InputLeftElement,
	InputGroup,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Button,
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
	const businessSignIn = useSelector((state) => state.businessSignIn);
	const { user } = businessSignIn;
	const { businessDetails } = user;
	const { message } = businessDetails;

	// Function
	function handleSubmit(e) {
        e.preventDefault();
        dispatch(
					updatePassword(
						message.user_id,
						oldPassword,
						newPassword,
						confirmPassword
					)
				);
         console.log(
						message.user_id,
						oldPassword,
						newPassword,
						confirmPassword
					);
    }
    
   

	return (
		<Stack>
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
											width='350px'
											h='70px'
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
											width='350px'
											h='70px'
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
											width='350px'
											h='70px'
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
							width='350px'
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
			<Stack></Stack>
		</Stack>
	);
}
