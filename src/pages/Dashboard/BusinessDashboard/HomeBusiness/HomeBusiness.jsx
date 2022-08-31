import {
	Grid,
	Box,
	GridItem,
	Container,
	Text,
	Stack,
	Center,
	Link,
	Heading,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Flex,
	HStack,
	VStack,
	StackDivider,
} from '@chakra-ui/react';
import {useNavigate } from "react-router-dom";
// import { BsJournalText,BsArrowDownLeftSquare } from "react-icons/bs";
// import { FaStore } from "react-icons/fa";
// import {
// 	MdOutlineContentCopy,
// 	MdDelivery Dining,
// 	MdPeopleAlt,
// } from 'react-icons/md';
// import { BsPlusSquare, BsArrowDownLeftSquare, BsPhone } from "react-icons/bs";
// import { BiStore } from "react-icons/bi";
import { RiTeamLine } from "react-icons/ri";
import AddMoneyBusinessModal from "./addMoneyModal";
// import SendMoneyModal from "./SendMoney/sendMoneyModal";
import { useEffect } from "react";
import { getBusinessUserDetails } from "../../../../ReduxContianer/BussinessRedux/BusinessAction";
import { useSelector, useDispatch } from "react-redux";
// import Qrcode from '../../BusinessDashboard/QRcode'
import CreateCustomer from '../Customer/createCustomer';
import StoreProfile from '../StoreProfile/storeProfile';

// import { Bar } from 'react-chartjs-2';
// import chartData from '../../../../components/ChartData';
// import { useState } from 'react';
// import BusinessLayout from "../../../../components/Layout/BusinessLayout"


export default function HomeBusiness() {
	const dispatch = useDispatch();
	const navigate = useNavigate()

// 	function handleNavigate() {
// 	;
//  }
// const [userChart, setUserChart] = useState({
// 	labels: chartData.map((data) => data.year),
// 	datasets: [
// 		{
// 			label: 'Users Gained',
// 			data: chartData.map((data) => data.userGain),
// 			backgroundColor: ['#D6AA1B'],
// 		},
// 		{
// 			label: 'Users Lost',
// 			data: chartData.map((data) => data.userLost),
// 			backgroundColor: ['#8C8C8C'],
// 		},
// 	],
// });
const businessInfo = useSelector(
	(state) => state.businessReducer.businessUserInfo
);
// const businessDetails = useSelector(
// 	(state) => state.businessReducer.businessUserIdDetails
// );
useEffect(() => {
	dispatch(getBusinessUserDetails(businessInfo?.user_id));
}, [businessInfo?.user_id, dispatch]);
  useEffect(() => {
    dispatch(getBusinessUserDetails(businessInfo.user_id));
  }, [businessInfo?.user_id, dispatch]);
  //   useEffect(() => {
  //     dispatch(getBusinessUserDetails(businessUserInfo.user_id));
  //   }, [dispatch, businessUserInfo.user_id]);


	
	return (
		<Container pt='50px' ml='350px' maxW='container.md'>
			<Tabs variant='unstyled'>
				<Flex>
					<TabList ml='40px'>
						<Tab
							_selected={{
								color: 'white',
								px: '4px',
								w: '170px',
								h: '45px',
								fontWeight: 'bold',
								bg: 'yellow.500',
								borderRadius: '0px 11px 11px 11px',
							}}>
							Savings Balance
						</Tab>
					</TabList>
					<TabList>
						<Tab
							_selected={{
								color: 'white',
								px: '4px',
								fontWeight: 'bold',
								w: '170px',
								h: '45px',
								bg: 'yellow.500',
								borderRadius: '0px 11px 11px 11px',
							}}>
							Payments Balance
						</Tab>
					</TabList>
				</Flex>
				<TabPanels>
					<TabPanel>
						<Stack pl={25}>
							<Heading as='h6'>₦66,789,567</Heading>
						</Stack>
					</TabPanel>
					<TabPanel>
						<Stack pl={25}>
							<Heading as='h6'>₦6,745,563.09</Heading>
						</Stack>
					</TabPanel>
				</TabPanels>
			</Tabs>
			<Tabs />
			<Flex direction='row' justifyContent='space-between' alignItems='center'>
				<Stack pl='30'>
					{/* <Stack pt='23'>
					<Text color='gray' fontSize='14px'>
						Virtual Account Details
					</Text>
				</Stack> */}

					<Stack>
						{/* <Box
							as='button'
							h='160px'
							w='350px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'>
							<Flex
								display='flex'
								alignItems='center'
								justifyContent='space-evenly'
								pb='20px'>
								<Stack>
									<Text color='gray' fontSize='12px'>
										Account Number
									</Text>
									<Text fontSize='16px'>01234567890</Text>
								</Stack>
								<Stack color='yellow.500' fontSize='14px' direction='row'>
									<Text>Copy</Text>
									<MdOutlineContentCopy />
								</Stack>
							</Flex>

							<Flex display='flex' justifyContent='space-evenly'>
								<Stack>
									<Text color='gray' fontSize='12px'>
										Bank
									</Text>
									<Text fontSize='14px'>Polaris Bank</Text>
								</Stack>
								<Stack>
									<Text color='gray' fontSize='12px'>
										Account Name
									</Text>
									<Text fontSize='14px'>Oreofe Ventures</Text>
								</Stack>
							</Flex>
						</Box> */}

						<Stack pt='18px'>
							<Text color='gray' fontSize='14px'>
								Action
							</Text>
						</Stack>

						{/* <Box
							onClick={handleNavigate}
							as='button'
							h='90px'
							w='350px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'>
							<Stack fontSize='34px' color='yellow.500' px='32px'>
								<FaStore />
							</Stack>
							<Stack onClick={handleStore}>
								<Text textAlign='left'>Store Inventory</Text>
								<Text color='gray' fontSize='14px'>
									Space for subtitle text
								</Text>
							</Stack>
						</Box> */}
						<Box
							as='button'
							h='90px'
							w='350px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'>
							<AddMoneyBusinessModal />
							<Stack>
								<Text textAlign='left'>Add Money</Text>
								<Text color='gray' fontSize='14px'>
									Space for subtitle text
								</Text>
							</Stack>
						</Box>
						{/* <Box
							pt='20px'
							as='button'
							h='90px'
							w='350px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'>
							<Stack fontSize='34px' color='yellow.500' px='32px'>
								<BsArrowDownLeftSquare />
							</Stack>
							<Stack>
								<Text textAlign='left'>Request Money</Text>
								<Text color='gray' fontSize='14px'>
									Space for subtitle text
								</Text>
							</Stack>
						</Box> */}
						{/* <Box
							onClick={() => navigate('/business-dashboard/invoice')}
							as='button'
							h='90px'
							w='350px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'>
							<Stack fontSize='34px' color='yellow.500' px='32px'>
								<BsJournalText />
							</Stack>
							<Stack>
								<Text textAlign='left'>Invoice</Text>
								<Text color='gray' fontSize='14px'>
									Space for subtitle text
								</Text>
							</Stack>
						</Box> */}
						<Box
							onClick={() => navigate('/business-dashboard/team')}
							as='button'
							h='90px'
							w='350px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'>
							<Stack fontSize='34px' color='yellow.500' px='32px'>
								<RiTeamLine />
							</Stack>
							<Stack>
								<Text textAlign='left'>Team Management</Text>
								<Text color='gray' fontSize='14px'>
									Add and Manage Teams
								</Text>
							</Stack>
						</Box>
						<Box
							as='button'
							h='90px'
							w='350px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'>
							<Stack fontSize='34px' color='yellow.500' px='32px'>
								<CreateCustomer />
							</Stack>
							<Stack>
								<Text textAlign='left'>Add Customer</Text>
								<Text color='gray' fontSize='14px'>
									Create Customers
								</Text>
							</Stack>
						</Box>
						<Box
							as='button'
							h='90px'
							w='350px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'>
							<Stack fontSize='34px' color='yellow.500' px='32px'>
								<StoreProfile />
							</Stack>
							<Stack>
								<Text textAlign='left'>Store Profile</Text>
								<Text color='gray' fontSize='14px'>
									Edit Store Profile
								</Text>
							</Stack>
						</Box>
						{/* <Box
							as='button'
							h='90px'
							w='350px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'>
							<Stack fontSize='34px' color='yellow.500' px='32px'>
								<BsJournalText />
							</Stack>
							<Stack>
								<Text textAlign='left'>Invoicing</Text>
								<Text color='gray' fontSize='14px'>
									Space for subtitle text
								</Text>
							</Stack>
						</Box> */}

						{/* <Box
							as='button'
							h='90px'
							w='350px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'>
							<SendMoneyModal />
							<Stack>
								<Text>Send Money</Text>
								<Text color='gray' fontSize='14px'>
									Space for subtitle text
								</Text>
							</Stack>
						</Box> */}
					</Stack>

					{/* <Stack position='relative' top='-150px'> */}
					{/* <Stack >
							<Text>Balance inflow & outflow for the last 24hours</Text>
							<Box
								w='500px'
								h='300px'
								bg='white'
								border='1px solid #D9D9D9'
								borderRadius='0px 11px 11px 11px'>
								<Bar data={userChart} />
							</Box>
						</Stack> */}
					{/* </Stack> */}
				</Stack>
				<Stack
					spacing={8}
					// direction='row'
					w='541px'
					h='380px'
					position='relative'
					left='80px'
					top='30px'
					border='1px solid #D9D9D9'
					borderRadius='0px 11px 11px 11px'>
					<Feature />
				</Stack>
			</Flex>
			{/* <Stack>
				<Qrcode />
			</Stack> */}
		</Container>
	);
}



function Feature({ title, total, ...rest }) {
	return (
		<VStack
			// direction='row'
			divider={<StackDivider borderColor='gray.200' />}
			// spacing={4}
			align='stretch'>
			<HStack direction='row'>
				<Box p={8} {...rest}>
					<Text fontSize='sm'>Total Spending</Text>
					<Heading fontSize='xl' mt={4}>
						₦400,0000
					</Heading>
				</Box>
				<Box p={8} {...rest}>
					<Text fontSize='sm'>Total Sales</Text>
					<Heading fontSize='xl' mt={4}>
						₦50,000,00
					</Heading>
				</Box>
			</HStack>
			<HStack direction='row'>
				<Box p={8} {...rest}>
					<Text fontSize='sm'>Total Spending</Text>
					<Heading fontSize='xl' mt={4}>
						₦40,000,00
					</Heading>
				</Box>
				<Box p={8} {...rest}>
					<Text fontSize='sm'>Total Sales</Text>
					<Heading fontSize='xl' mt={4}>
						₦50,000,00
					</Heading>
				</Box>
			</HStack>
		</VStack>
	);
}
