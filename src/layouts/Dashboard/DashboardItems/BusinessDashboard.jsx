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
import { MdOutlineContentCopy, MdDeliveryDining } from "react-icons/md";
import user1 from "../../../assets/user1.png";
import { FaAngleDown } from "react-icons/fa";
import { RiHomeSmile2Line } from "react-icons/ri";
import { IoExitOutline, IoBusinessOutline } from "react-icons/io5";
import { BiStore } from "react-icons/bi";
import { MdAddchart } from "react-icons/md";
import { GiBanknote } from "react-icons/gi";
import HomeBusiness from "../BusinessDashboard/HomeBusiness/HomeBusiness";
import AddUrlPage from "../BusinessDashboard/StoreLink/addUrlPage";
import OrderHistory from "../../../layouts/Dashboard/DashboardItems/OrderHistory";
import AccountBusinessProfile from "../BusinessDashboard/Account/AccountBusinessProfile";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import CreateCustomer from "../BusinessDashboard/Payment/createCustomer";
import CreateOrder from "../BusinessDashboard/Order/createOrder";
import CreateTransaction from "../BusinessDashboard/Payment/createTransaction";
import {
  getBusinessUserDetails,
  setBusinessModal,
} from "../../../ReduxContianer/BussinessRedux/BusinessAction";
import "../../Dashboard/Dash.css";
import store from "../../../assets/store.svg";
import plus from "../../../assets/plus.svg";
import delivery from "../../../assets/delivery.svg";
import invoice from "../../../assets/invoice.svg";
import BusinessLayout from "../../../component/Layout/BusinessLayout";
import { Bar } from "react-chartjs-2";
import chartData from "../../../component/ChartData";
import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Link } from "react-router-dom";
import AddMoneyBusinessModal from "../../../layouts/Dashboard/BusinessDashboard/HomeBusiness/addMoneyModal";
import { useHistory } from "react-router-dom";
export default function BusinessDashboard() {
  const history = useHistory();
  const { onOpen } = useDisclosure();
  const [userChart, setUserChart] = useState({
    labels: chartData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: chartData.map((data) => data.userGain),
        backgroundColor: ["#D6AA1B"],
      },
      {
        label: "Users Lost",
        data: chartData.map((data) => data.userLost),
        backgroundColor: ["#8C8C8C"],
      },
    ],
  });
  const dispatch = useDispatch();
  const businessInfo = useSelector(
    (state) => state.businessReducer.businessUserInfo
  );
  const businessDetails = useSelector(
    (state) => state.businessReducer.businessUserIdDetails
  );
  useEffect(() => {
    dispatch(getBusinessUserDetails(businessInfo.user_id));
  }, [businessInfo.user_id, dispatch]);
  // const toggleModal = () => {
  //   console.log(isOpen, "DISCLOSE");
  //   dispatch(setBusinessModal(isOpen));
  // };
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
                    Savings Balance
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
                    Payment Balance
                  </Tab>
                </TabList>
              </div>
              <TabPanels>
                <TabPanel>
                  <Heading className="balance" as="h6">
                    ₦{businessDetails?.transfer_bal}
                  </Heading>
                </TabPanel>
                <TabPanel>
                  <Heading className="balance" as="h6">
                    ₦{businessDetails?.p_balance}
                  </Heading>
                </TabPanel>
              </TabPanels>
            </Tabs>{" "}
            <Text className="text-act" color="gray">
              Virtual Account Details
            </Text>
            <div className="copy-div">
              <div className="copy-top" style={{ marginBottom: "1.9rem" }}>
                <div>
                  {" "}
                  <Text color="gray" fontSize="12px">
                    Account Number
                  </Text>
                  <Text fontSize="16px">
                    {" "}
                    {businessDetails?.account_number === "null"
                      ? "NA"
                      : businessDetails?.account_number}
                  </Text>
                </div>
                <div className="copy-copy">
                  <Text fontSize="14px">Copy</Text>
                  <MdOutlineContentCopy />
                </div>
              </div>
              <div className="copy-top">
                <div>
                  {" "}
                  <Text color="gray" fontSize="12px">
                    Bank
                  </Text>
                  <Text fontSize="16px">
                    {businessDetails?.bank === "null"
                      ? "NA"
                      : businessDetails?.bank}
                  </Text>
                </div>
                <div>
                  <Text color="gray" fontSize="12px">
                    Account Name
                  </Text>
                  <Text fontSize="16px">{businessDetails?.business_name}</Text>
                </div>
              </div>
            </div>
            <Text className="text-act" color="gray">
              Action
            </Text>
            <div className="act-box-holder">
              <div className="act-box" onClick={onOpen}>
                <AddMoneyBusinessModal />
                {/* <div>
                  <img src={plus} alt="plus" />
                </div> */}
                <div>
                  <Text>Add Money</Text>
                  <Text>Space for subtitle text</Text>
                </div>
              </div>

              <div
                className="act-box"
                onClick={() => history.push("/business/store-inventory")}
              >
                <div>
                  <img src={store} alt="store" />
                </div>
                <div>
                  <Text>Store Inventory</Text>
                  <Text>Space for subtitle text</Text>
                </div>
              </div>

              <div className="act-box">
                <div>
                  <img src={delivery} alt="delivery" />
                </div>
                <div>
                  <Text>Delivery</Text>
                  <Text>Space for subtitle text</Text>
                </div>
              </div>
              <div className="act-box">
                <div>
                  <img src={invoice} alt="arrow-down" />
                </div>
                <div>
                  <Text>Invoicing</Text>
                  <Text>Space for subtitle text</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-chart-dash">
          {/* <Text className="text-act" color="gray">
            Balance inflow & outflow for the last 24hours
          </Text> */}
          <div className="chart-div">
            <Bar data={userChart} />
          </div>
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
