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
import { BsPlusSquare, BsArrowDownLeftSquare, BsPhone } from "react-icons/bs";
import { VscRocket } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import AddMoneyModal from "../../HomeItemsModal/AddMoney/addMoneyModal";
// import SendMoneyModal from '../../HomeItemsModal/SendMoney/sendMoneyModal'
import BuyAirtimeModal from "../../HomeItemsModal/BuyAirtime/BuyAirtimeModal";
import { getUserDetails } from "../../../ReduxContianer/PersonalRedux/PersonalAction";
// import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import Layout from "../../../component/Layout/Layout";
import "../../Dashboard/Dash.css";
import plus from "../../../assets/plus.svg";
import send from "../../../assets/send.svg";
import arrow from "../../../assets/arrow-down.svg";
import phone1 from "../../../assets/phone1.svg";

export default function HomeDash() {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.personalReducer.userInfo);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const personalSignIn = useSelector((state) => state.personalSignIn);
  // const { userDetails } = personalSignIn
  //   const {message} = userDetails
  // 		const getUser = useSelector((state) => state.getUser);
  // 		const { users } = getUser;
  // 		// const { message } = users;
  // 	console.log(users)

  useEffect(() => {
    dispatch(getUserDetails(userInfo.user_id));
  }, [userInfo.user_id, dispatch]);

  return (
    <Layout>
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
                    Wallet Balance
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
    </Layout>
  );
}
