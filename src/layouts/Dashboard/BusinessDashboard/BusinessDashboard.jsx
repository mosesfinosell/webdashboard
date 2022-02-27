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

import user1 from '../../../assets/user1.png';
import { FaAngleDown } from 'react-icons/fa';
import { RiHomeSmile2Line } from 'react-icons/ri';
import { IoExitOutline, IoBusinessOutline } from 'react-icons/io5';
import { BiStore } from 'react-icons/bi';
import { MdAddchart } from 'react-icons/md';
import { GiBanknote } from 'react-icons/gi';
import HomeBusiness from '../BusinessDashboard/HomeBusiness/HomeBusiness';
import AddUrlPage from './StoreLink/addUrlPage';
import OrderHistory from './Order/orderHistory';
import PaymentDashboard from './Payment/paymentDashboard';
import AccountBusinessProfile from './Account/AccountBusinessProfile';
import { useSelector } from 'react-redux';

export default function BusinessDashboard() {
	const businessSignIn = useSelector((state) => state.businessSignIn);
	const { businessDetails } = businessSignIn;

	return (
		<Grid
			//  maxH='100%'
			h='100%'
			templateRows='repeat(6, 1fr)'
			templateColumns='repeat(12, 1fr)'
			display='flex'>
			<Tabs orientation='vertical' variant='unstyled'>
				<GridItem rowSpan={7} colSpan={2} bg='white' py='25'>
					<Box bg='white' w='300px' h='100vh' border='0.5px solid #D9D9D9'>
						<Center p='45px'>
							<Flex display='flex' direction='row' alignItems='center'>
								<Stack pr='15px'>
									<Avatar name='user' src={user1} />
								</Stack>
								<Stack pr='15px'>
									{businessDetails && (
										<Text>Hello {businessDetails.name}</Text>
									)}
								</Stack>
								<Stack>
									<FaAngleDown />
								</Stack>
							</Flex>
						</Center>
						<TabList>
							<Tab fontSize='16px' color='black'>
								<Stack px='20px' fontSize='20px'>
									<RiHomeSmile2Line />
								</Stack>
								Home
							</Tab>
							<Tab fontSize='16px' color='black'>
								<Stack px='20px' fontSize='20px'>
									<BiStore />
								</Stack>
								Storelink
							</Tab>
							<Tab fontSize='16px' color='black'>
								<Stack px='20px' fontSize='20px'>
									<MdAddchart />
								</Stack>
								Order
							</Tab>
							<Tab fontSize='16px' color='black'>
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
				</GridItem>
				<GridItem colSpan={9} rowSpan={9} bg='white'>
					<TabPanels>
						<TabPanel>
							<HomeBusiness />
						</TabPanel>
						<TabPanel>
							<AddUrlPage />
						</TabPanel>
						<TabPanel>
							<OrderHistory />
						</TabPanel>
						<TabPanel>
							<PaymentDashboard />
						</TabPanel>
						<TabPanel>
							<AccountBusinessProfile />
						</TabPanel>
					</TabPanels>
				</GridItem>
			</Tabs>
		</Grid>
	);
}
