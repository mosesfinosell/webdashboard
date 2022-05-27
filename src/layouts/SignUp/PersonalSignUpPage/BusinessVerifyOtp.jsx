// import {
// 	Center,
// 	Button,
// 	Box,
// 	Stack,
// 	Image,
// 	Text,
// 	PinInput,
// 	PinInputField,
// 	HStack,
// 	Container,
// } from '@chakra-ui/react';
// import logo from '../../../assets/Logomark.png';
// import { useColorModeValue } from '@chakra-ui/color-mode';
// import {
// 	SendOtpSms,
// 	verifyNumberSms,
// } from '../../../ReduxContianer/PersonalRedux/PersonalAction';
// import { useDispatch, useSelector } from 'react-redux';
// import Countdown from 'react-countdown';
// import { useHistory, Redirect } from 'react-router-dom';
// import { useState } from 'react';

// export default function BusinessVerifyOtp() {
// 	const yellowbtn = useColorModeValue('yellow.500');
// 	const [valuePin, setValuePin] = useState('');
// 	const [phoneNumber] = useState(localStorage.getItem('phoneNumber'));
// 	const dispatch = useDispatch();
// 	const history = useHistory();

// 	const personal = useSelector((state) => state.personal);
// 	const { error, loading, users } = personal;

// 	function handleClick() {
// 		dispatch(SendOtpSms(phoneNumber));
// 	}

// 	const handleChange = (valuePin) => {
// 		setValuePin(valuePin);
// 	};

// 	const handleComplete = () => {
// 		dispatch(verifyNumberSms(phoneNumber, valuePin));
// 		setValuePin('');

// 		if (!users) {
// 			return error;
// 		} else {
// 			return history.push('/business-dashboard');
// 		}
// 	};

// 	const renderer = ({ minutes, seconds, completed }) => {
// 		if (!completed) {
// 			return (
// 				<span>
// 					{minutes}:{seconds}
// 				</span>
// 			);
// 		} else {
// 			return history.push('/resend-otp');
// 		}
// 	};

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
// 						<PinInput
// 							size='lg'
// 							type='alphanumeric'
// 							valuePin={valuePin}
// 							onChange={handleChange}>
// 							<PinInputField />
// 							<PinInputField />
// 							<PinInputField />
// 							<PinInputField />
// 						</PinInput>
// 					</HStack>
// 				</Center>
// 				<Center>
// 					<HStack pt='9' direction='row' color='gray'>
// 						<Text>Resend SMS</Text>
// 						<Stack>
// 							<Countdown
// 								date={Date.now() + 300000}
// 								renderer={renderer}
// 								autoStart
// 							/>
// 						</Stack>
// 					</HStack>
// 				</Center>
// 				<Center>
// 					<HStack direction='row' mt={8}>
// 						<Button
// 							bg={yellowbtn}
// 							width='150px'
// 							h='50px'
// 							borderRadius='0px 11px 11px 11px'
// 							type='submit'
// 							color='white'
// 							_hover={{ bg: '#1A202C' }}
// 							onClick={handleClick}>
// 							Send SMS
// 						</Button>
// 						<Button
// 							mt={4}
// 							bg={yellowbtn}
// 							width='150px'
// 							h='50px'
// 							borderRadius='0px 11px 11px 11px'
// 							type='submit'
// 							color='white'
// 							_hover={{ bg: '#1A202C' }}
// 							onClick={handleComplete}>
// 							Verify Code
// 						</Button>
// 					</HStack>
// 				</Center>
// 			</Box>
// 		</Container>
// 	);
// }
