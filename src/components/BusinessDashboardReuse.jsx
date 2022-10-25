import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Grid,
	GridItem,
	Box,
	Center,
	Text,
	Flex,
	Stack,
	Avatar,
} from '@chakra-ui/react';

import user1 from '../assets/user1.png';
import { FaAngleDown } from 'react-icons/fa';
import { RiHomeSmile2Line } from 'react-icons/ri';
import { IoExitOutline, IoBusinessOutline } from 'react-icons/io5';
import { BiStore } from 'react-icons/bi';
import { MdAddchart } from 'react-icons/md';
import { GiBanknote } from 'react-icons/gi';
// import HomeBusiness from '../BusinessDashboard/HomeBusiness/HomeBusiness';
// import AddUrlPage from './StoreLink/addUrlPage';
// import OrderHistory from './Order/orderHistory';
// import PaymentDashboard from './Payment/paymentDashboard';
import AccountBusinessProfile from '../layouts/Dashboard/BusinessDashboard/Account/AccountBusinessProfile';
import { useSelector, useDispatch } from 'react-redux';
import AddTeam from '../layouts/Dashboard/BusinessDashboard/Account/addTeam';
// import { useEffect } from 'react';
// import CreateCustomer from './Payment/createCustomer';
// import CreateOrder from './Order/createOrder';

export default function BusinessDashboardReuse() {
	const businessSignIn = useSelector((state) => state.businessSignIn);
	const { user } = businessSignIn;
	const { businessDetails } = user;
	const { message } = businessDetails;
	const dispatch = useDispatch();

	// useEffect(() => {

	// },[])

    return (
         
		// <Grid
		// 	templateRows='repeat(6, 1fr)'
		// 	templateColumns='repeat(12, 1fr)'
		// 	display='flex'>
         <Box>
			<Tabs orientation='vertical' variant='unstyled'>
					<Box bg='white' w='300px' h='150vh' borderRight='0.3px solid #D9D9D9'>
						<Center p='45px'>
							<Flex display='flex' direction='row' alignItems='center'>
								<Stack pr='15px'>
									<Avatar name='user' src={user1} />
								</Stack>
								<Stack pr='15px'>
									{businessDetails && <Text>Hello {message.name}</Text>}
								</Stack>
								<Stack>
									<FaAngleDown />
								</Stack>
							</Flex>
						</Center>
						<TabList>
							<Tab fontSize='16px' color='black' isDisabled>
								<Stack px='20px' fontSize='20px'>
									<RiHomeSmile2Line />
								</Stack>
								Home
							</Tab>
							<Tab fontSize='16px' color='black' isDisabled>
								<Stack px='20px' fontSize='20px'>
									<BiStore />
								</Stack>
								Storelink
							</Tab>
							<Tab fontSize='16px' color='black' isDisabled>
								<Stack px='20px' fontSize='20px'>
									<MdAddchart />
								</Stack>
								Order
							</Tab>
							<Tab fontSize='16px' color='black' isDisabled>
								<Stack px='20px' fontSize='20px'>
									<GiBanknote />
								</Stack>
								Payment
							</Tab>
							<Tab fontSize='16px' color='black'>
								<Stack px='20px' fontSize='20px'>
									<IoBusinessOutline />
								</Stack>
								Account
							</Tab>
							<Tab fontSize='16px' color='black'>
								<Stack px='20px' fontSize='20px'>
									<IoExitOutline />
								</Stack>
								LogOut
							</Tab>
						</TabList>
					</Box>
				{/* </GridItem> */}
				{/* <GridItem colSpan={9} rowSpan={9} bg='white'> */}
					<TabPanels>
						{/* <TabPanel>
							<HomeBusiness />
						</TabPanel>
						<TabPanel>
							<AddUrlPage />
						</TabPanel>
						<TabPanel>
							<OrderHistory />
							<CreateOrder />
						</TabPanel>
						<TabPanel>
							<CreateCustomer />
							<PaymentDashboard />
						</TabPanel> */}
						{/* <TabPanel>
							<AddTeam/>
						</TabPanel> */}
					</TabPanels>
			</Tabs>
        </Box>
	);
}
