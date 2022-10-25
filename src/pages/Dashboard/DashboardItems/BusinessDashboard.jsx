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
import OrderHistory from "../../../pages/Dashboard/DashboardItems/OrderHistory";
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
import BusinessLayout from "../../../components/Layout/BusinessLayout";
import { Bar } from "react-chartjs-2";
import chartData from "../../../components/ChartData";
import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Link } from "react-router-dom";
import AddMoneyBusinessModal from "../../../pages/Dashboard/BusinessDashboard/HomeBusiness/addMoneyModal";
import { useNavigate } from "react-router-dom";


export default function BusinessDashboard() {
  const history = useNavigate();
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
    dispatch(getBusinessUserDetails(businessInfo?.user_id));
  }, [businessInfo?.user_id, dispatch]);
  // const toggleModal = () => {
  //   console.log(isOpen, "DISCLOSE");
  //   dispatch(setBusinessModal(isOpen));
  // };
  return (
    // <BusinessLayout>
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
                onClick={() => history("/business/store-inventory")}
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
    // </BusinessLayout>
  );
}
