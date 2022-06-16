// import {
// 	Center,
// 	Container,
// 	Box,
// 	Stack,
// 	Image,
// 	Text,
// 	PinInput,
// 	PinInputField,
// 	HStack,
// } from '@chakra-ui/react';
// import logo from '../../../assets/Logomark.png';
// import { useColorModeValue } from '@chakra-ui/color-mode';
// import { SendOtpSms } from '../../../ReduxContianer/PersonalRedux/PersonalAction';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// export default function ResendOtp() {
// 	const yellowbtn = useColorModeValue('yellow.500');

// 	const dispatch = useDispatch();

// 	function handleClick() {
// 		dispatch(SendOtpSms(localStorage.getItem('phoneNumber')));
// 	}

// 	return (
// 		<Container maxW='container.lg'>
// 			<Box
// 				p='50'
// 				m='36'
// 				boxSizing='border-box'
// 				borderWidth='1px'
// 				borderRadius='0px 21px 21px 21px'
// 				m='20'
// 				borderRadius='lg'
// 				overflow='hidden'>
// 				<Center>
// 					<Stack>
// 						<Image mt='35' src={logo} alt='logo' />
// 					</Stack>
// 				</Center>
// 				<Center>
// 					<Stack>
// 						<Text fontSize='36px' p='25' fontWeight='bold' lineHeight='5'>
// 							Enter OTP
// 						</Text>
// 					</Stack>
// 				</Center>
// 				<Center>
// 					<Stack mt='2'>
// 						<Text align='center' color='gray'>
// 							Enter the OTP sent to your phone number
// 						</Text>
// 					</Stack>
// 				</Center>

// 				<Center>
// 					<HStack mt='8'>
// 						<PinInput size='lg' otp>
// 							<PinInputField />
// 							<PinInputField />
// 							<PinInputField />
// 							<PinInputField />
// 						</PinInput>
// 					</HStack>
// 				</Center>
// 				<Center>
// 					<Stack>
// 						<Box
// 							mt={4}
// 							width='150px'
// 							h='90px'
// 							borderRadius='0px 11px 11px 11px'
// 							type='submit'
// 							color='yellow.500'
// 							onClick={handleClick}>
// 							Resend SMS
// 						</Box>
// 					</Stack>
// 				</Center>
// 			</Box>
// 		</Container>
// 	);
// }
