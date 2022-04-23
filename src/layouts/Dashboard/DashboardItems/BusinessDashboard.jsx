import {
	Grid,
	Box,
	GridItem,
	Container,
	Text,
	Stack,
	Center,
	Heading,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	useDisclosure,
  } from "@chakra-ui/react";

import user1 from '../../../assets/user1.png';
import { FaAngleDown } from 'react-icons/fa';
import { RiHomeSmile2Line } from 'react-icons/ri';
import { IoExitOutline, IoBusinessOutline } from 'react-icons/io5';
import { BiStore } from 'react-icons/bi';
import { MdAddchart } from 'react-icons/md';
import { GiBanknote } from 'react-icons/gi';
import HomeBusiness from '../BusinessDashboard/HomeBusiness/HomeBusiness';
import AddUrlPage from '../BusinessDashboard/StoreLink/addUrlPage';
import OrderHistory from '../../../layouts/Dashboard/DashboardItems/OrderHistory';
import AccountBusinessProfile from '../BusinessDashboard/Account/AccountBusinessProfile';
import { useSelector,useDispatch } from 'react-redux';
import {useEffect} from 'react'
import CreateCustomer from '../BusinessDashboard/Payment/createCustomer';
import CreateOrder from '../BusinessDashboard/Order/createOrder';
import CreateTransaction from '../BusinessDashboard/Payment/createTransaction';
import {getBusinessUserDetails} from "../../../ReduxContianer/BussinessRedux/BusinessAction";
import "../../Dashboard/Dash.css";
import plus from "../../../assets/plus.svg";
import send from "../../../assets/send.svg";
import arrow from "../../../assets/arrow-down.svg";
import phone1 from "../../../assets/phone1.svg"
import BusinessLayout from  "../../../component/Layout/BusinessLayout"

export default function BusinessDashboard() {
	const dispatch = useDispatch()
	const businessInfo = useSelector((state) => state.businessReducer.businessUserInfo);
	useEffect(() => {
		dispatch(getBusinessUserDetails(businessInfo.user_id));
	  }, [businessInfo.user_id, dispatch])


	return (
		<BusinessLayout>
		<div className="dash-cover">
		  <div className="left-dash">
			<div className="left-dash-inner">
			  <Tabs variant="unstyled">
				<div className="tab-div">
				  <TabList>
					<Tab
					  _selected={{
						color: "white",
						px: "4",
						w: "170px",
						h: "45px",
						bg: "yellow.500",
						borderRadius: "0px 11px 11px 11px",
					  }}
					>
					  Wallet Balanceaaa
					</Tab>
				  </TabList>
				  <TabList>
					<Tab
					  _selected={{
						color: "white",
						px: "4",
						w: "170px",
						h: "45px",
						bg: "yellow.500",
						borderRadius: "0px 11px 11px 11px",
					  }}
					>
					  Escrow Balance
					</Tab>
				  </TabList>
				</div>
				<TabPanels>
				  <TabPanel>
					<Heading className="balance" as="h6">
					  ₦45000
					</Heading>
				  </TabPanel>
				  <TabPanel>
					<Heading className="balance" as="h6">
					  ₦34000
					</Heading>
				  </TabPanel>
				</TabPanels>
			  </Tabs>{" "}
			  <Text className="text-act" color="gray">
				Action
			  </Text>
			  <div className="act-box-holder">
				<div className="act-box">
				  <div>
					<img src={plus} alt="plus" />
				  </div>
				  <div>
					<Text>Add Money</Text>
					<Text>Space for subtitle text</Text>
				  </div>
				</div>
				<div className="act-box">
				  <div>
					<img src={send} alt="send" />
				  </div>
				  <div>
					<Text>Send Money</Text>
					<Text>Space for subtitle text</Text>
				  </div>
				</div>
				<div className="act-box">
				  <div>
					<img src={arrow} alt="arrow-down" />
				  </div>
				  <div>
					<Text>Request Money</Text>
					<Text>Space for subtitle text</Text>
				  </div>
				</div>
				<div className="act-box">
				  <div>
					<img src={phone1} alt="phone" />
				  </div>
				  <div>
					<Text>Buy Airtime</Text>
					<Text>Space for subtitle text</Text>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		  <div className="right-dash">
			<Text className="history" color="gray">
			  Transaction History
			</Text>
  
			<Tabs variant="unstyled">
			  <div className="payment-div">
				<TabList style={{ paddingLeft: "1.7rem" }}>
				  <Tab fontSize="16px" fontWeight="bold" color="black">
					Payment
				  </Tab>
				  <Tab fontSize="16px" fontWeight="bold" color="black">
					Withdrawal
				  </Tab>
				</TabList>
			  </div>
  
			  <TabPanels>
				<TabPanel className="trans-tab">
				  <div className="transactions">
					<div className="transactions-inner">
					  <div>
						<img src={plus} alt="plus" />
					  </div>
					  <div style={{ paddingLeft: "2rem" }}>
						<Text>Transfer Funds</Text>
						<Text color="gray" fontSize="12px">
						  Success
						</Text>
					  </div>
					</div>
  
					<div style={{ paddingRight: "2rem" }}>
					  <Text fontSize="12px" color="green.500">
						₦12,000
					  </Text>
					  <Text fontSize="12px" color="gray">
						Jan 3, 2022
					  </Text>
					</div>
				  </div>
				  <div className="transactions">
					<div className="transactions-inner">
					  <div>
						<img src={plus} alt="plus" />
					  </div>
					  <div style={{ paddingLeft: "2rem" }}>
						<Text>Transfer Funds</Text>
						<Text color="gray" fontSize="12px">
						  Success
						</Text>
					  </div>
					</div>
  
					<div style={{ paddingRight: "2rem" }}>
					  <Text fontSize="12px" color="green.500">
						₦12,000
					  </Text>
					  <Text fontSize="12px" color="gray">
						Jan 3, 2022
					  </Text>
					</div>
				  </div>
				  <div className="transactions">
					<div className="transactions-inner">
					  <div>
						<img src={plus} alt="plus" />
					  </div>
					  <div style={{ paddingLeft: "2rem" }}>
						<Text>Transfer Funds</Text>
						<Text color="gray" fontSize="12px">
						  Success
						</Text>
					  </div>
					</div>
  
					<div style={{ paddingRight: "2rem" }}>
					  <Text fontSize="12px" color="green.500">
						₦12,000
					  </Text>
					  <Text fontSize="12px" color="gray">
						Jan 3, 2022
					  </Text>
					</div>
				  </div>
				  <div className="transactions">
					<div className="transactions-inner">
					  <div>
						<img src={plus} alt="plus" />
					  </div>
					  <div style={{ paddingLeft: "2rem" }}>
						<Text>Transfer Funds</Text>
						<Text color="gray" fontSize="12px">
						  Success
						</Text>
					  </div>
					</div>
  
					<div style={{ paddingRight: "2rem" }}>
					  <Text fontSize="12px" color="green.500">
						₦12,000
					  </Text>
					  <Text fontSize="12px" color="gray">
						Jan 3, 2022
					  </Text>
					</div>
				  </div>
				  <div className="transactions">
					<div className="transactions-inner">
					  <div>
						<img src={plus} alt="plus" />
					  </div>
					  <div style={{ paddingLeft: "2rem" }}>
						<Text>Transfer Funds</Text>
						<Text color="gray" fontSize="12px">
						  Success
						</Text>
					  </div>
					</div>
  
					<div style={{ paddingRight: "2rem" }}>
					  <Text fontSize="12px" color="green.500">
						₦12,000
					  </Text>
					  <Text fontSize="12px" color="gray">
						Jan 3, 2022
					  </Text>
					</div>
				  </div>
				  <div className="transactions">
					<div className="transactions-inner">
					  <div>
						<img src={plus} alt="plus" />
					  </div>
					  <div style={{ paddingLeft: "2rem" }}>
						<Text>Transfer Funds</Text>
						<Text color="gray" fontSize="12px">
						  Success
						</Text>
					  </div>
					</div>
  
					<div style={{ paddingRight: "2rem" }}>
					  <Text fontSize="12px" color="green.500">
						₦12,000
					  </Text>
					  <Text fontSize="12px" color="gray">
						Jan 3, 2022
					  </Text>
					</div>
				  </div>
				  <div className="transactions">
					<div className="transactions-inner">
					  <div>
						<img src={plus} alt="plus" />
					  </div>
					  <div style={{ paddingLeft: "2rem" }}>
						<Text>Transfer Funds</Text>
						<Text color="gray" fontSize="12px">
						  Success
						</Text>
					  </div>
					</div>
  
					<div style={{ paddingRight: "2rem" }}>
					  <Text fontSize="12px" color="green.500">
						₦12,000
					  </Text>
					  <Text fontSize="12px" color="gray">
						Jan 3, 2022
					  </Text>
					</div>
				  </div>
				</TabPanel>
  
				<TabPanel className="trans-tab">
				  <div className="transactions">
					<div className="transactions-inner">
					  <div>
						<img src={plus} alt="plus" />
					  </div>
					  <div style={{ paddingLeft: "2rem" }}>
						<Text>Transfer Funds</Text>
						<Text color="gray" fontSize="12px">
						  Success
						</Text>
					  </div>
					</div>
  
					<div style={{ paddingRight: "2rem" }}>
					  <Text fontSize="12px" color="green.500">
						₦12,000
					  </Text>
					  <Text fontSize="12px" color="gray">
						Jan 3, 2022
					  </Text>
					</div>
				  </div>
				  <div className="transactions">
					<div className="transactions-inner">
					  <div>
						<img src={plus} alt="plus" />
					  </div>
					  <div style={{ paddingLeft: "2rem" }}>
						<Text>Transfer Funds</Text>
						<Text color="gray" fontSize="12px">
						  Success
						</Text>
					  </div>
					</div>
  
					<div style={{ paddingRight: "2rem" }}>
					  <Text fontSize="12px" color="green.500">
						₦12,000
					  </Text>
					  <Text fontSize="12px" color="gray">
						Jan 3, 2022
					  </Text>
					</div>
				  </div>
				  <div className="transactions">
					<div className="transactions-inner">
					  <div>
						<img src={plus} alt="plus" />
					  </div>
					  <div style={{ paddingLeft: "2rem" }}>
						<Text>Transfer Funds</Text>
						<Text color="gray" fontSize="12px">
						  Success
						</Text>
					  </div>
					</div>
  
					<div style={{ paddingRight: "2rem" }}>
					  <Text fontSize="12px" color="green.500">
						₦12,000
					  </Text>
					  <Text fontSize="12px" color="gray">
						Jan 3, 2022
					  </Text>
					</div>
				  </div>
				</TabPanel>
			  </TabPanels>
			</Tabs>
		  </div>
		</div>
	  </BusinessLayout>
		// <Grid
		//    pl='25'
		// 	templateRows='repeat(6, 1fr)'
		// 	templateColumns='repeat(12, 1fr)'
		// 	display='flex'
		// 	>
		// 	<Tabs orientation='vertical' variant='unstyled'>
		// 		<GridItem rowSpan={7} colSpan={2} bg='white' py='25'>
		// 			<Box bg='white' w='300px' h='150vh' borderRight='0.3px solid #D9D9D9'>
		// 				<Center p='45px'>
		// 					<Flex display='flex' direction='row' alignItems='center'>
		// 						<Stack pr='15px'>
		// 							<Avatar name='user' src={user1} />
		// 						</Stack>
		// 						<Stack pr='15px'>
		// 							{businessInfo && (
		// 								<Text>Hello {businessInfo.name}</Text>
		// 							)}
		// 						</Stack>
		// 						<Stack>
		// 							<FaAngleDown />
		// 						</Stack>
		// 					</Flex>
		// 				</Center>
		// 				<TabList>
		// 					<Tab fontSize='16px' color='black'>
		// 						<Stack px='20px' fontSize='20px'>
		// 							<RiHomeSmile2Line />
		// 						</Stack>
		// 						Home
		// 					</Tab>
		// 					<Tab fontSize='16px' color='black'>
		// 						<Stack px='20px' fontSize='20px'>
		// 							<BiStore />
		// 						</Stack>
		// 						Storelink
		// 					</Tab>
		// 					<Tab fontSize='16px' color='black'>
		// 						<Stack px='20px' fontSize='20px'>
		// 							<MdAddchart />
		// 						</Stack>
		// 						Order
		// 					</Tab>
		// 					<Tab fontSize='16px' color='black'>
		// 						<Stack px='20px' fontSize='20px'>
		// 							<GiBanknote />
		// 						</Stack>
		// 						Payment
		// 					</Tab>
		// 					<Tab fontSize='16px' color='black'>
		// 						<Stack px='20px' fontSize='20px'>
		// 							<IoBusinessOutline />
		// 						</Stack>
		// 						Account
		// 					</Tab>
		// 					<Tab fontSize='16px' color='black'>
		// 						<Stack px='20px' fontSize='20px'>
		// 							<IoExitOutline />
		// 						</Stack>
		// 						LogOut
		// 					</Tab>
		// 				</TabList>
		// 			</Box>
		// 		</GridItem>
		// 		<GridItem colSpan={9} rowSpan={9} bg='white'>
		// 			<TabPanels>
		// 				<TabPanel>
		// 					<HomeBusiness />
		// 				</TabPanel>
		// 				<TabPanel>
		// 					<AddUrlPage />
		// 				</TabPanel>
		// 				<TabPanel>
		// 					{/* <OrderHistory/> */}
		// 					<CreateOrder/>
		// 				</TabPanel>
		// 				<TabPanel>
		// 					<CreateTransaction/>
		// 				</TabPanel>
		// 				<TabPanel>
		// 					{/* <AccountBusinessProfile /> */}
		// 				</TabPanel>
		// 			</TabPanels>
		// 		</GridItem>
		// 	</Tabs>
		// </Grid>
	);
}
