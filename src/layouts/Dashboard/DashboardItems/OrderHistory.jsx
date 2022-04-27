import {
  Grid,
  Box,
  GridItem,
  Container,
  Text,
  Stack,
  Center,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
} from "@chakra-ui/react";
import OrderHistoryModal from "../BusinessDashboard/Order/orderHistoryModal";
import { BiShoppingBag } from "react-icons/bi";
import OrderDeliveryModal from "../BusinessDashboard/Order/orderDeliveryModal";
// import {getOrders} from '../../../../ReduxContianer/BussinessRedux/BusinessAction'
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import dateformat from "dateformat";
import BusinessLayout from "../../../component/Layout/BusinessLayout";
import "../../Dashboard/Dash.css";
import plus from "../../../assets/plus.svg";
import send from "../../../assets/send.svg";
import arrow from "../../../assets/arrow-down.svg";
import phone1 from "../../../assets/phone1.svg";
import StepOne from "../../Dashboard/BusinessDashboard/Order/StepOne";
import StepTwo from "../../Dashboard/BusinessDashboard/Order/StepTwo";
import StepThree from "../../Dashboard/BusinessDashboard/Order/StepThree";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import { getOrders } from "../../../ReduxContianer/BussinessRedux/BusinessAction";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "@chakra-ui/react";
export default function OrderHistory() {
  const businessInfo = useSelector(
    (state) => state.businessReducer.businessUserInfo
  );
  const [businessId] = useState(businessInfo.business_id);
  // const isFetching = useSelector((state) => state.businessReducer.isFetching);

  const [orders, setOrders] = useState([]);
  console.log(orders, "ORDERS");
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setFetching] = useState(false);
  console.log(isFetching, "FETCHING");
  const orderCreation = async (businessId, page) => {
    setFetching(true);
    try {
      const res = await getOrders(businessId, page);
      const { allOrders, perPage, orders } = res.data;
      setOrders(orders);
      const total = Math.ceil(allOrders / perPage);
      setTotalPages(total);
      setFetching(false);
    } catch (err) {
      setFetching(false);
      return err;
    }
  };
  useEffect(() => {
    orderCreation(businessId, page);
  }, [businessId, page]);

  const fetchMore = async () => {
    try {
      const nextPage = currentPage + 1;
      if (nextPage <= totalPages) {
        console.log("fetching", businessId, nextPage);
        const res = await getOrders(businessId, nextPage);
        console.log("responsss", res);
        setOrders(orders.concat(res.data.orders));
        setCurrentPage(nextPage);
        console.log("res CONCAT", orders.concat(res.data.orders));
      }
    } catch (err) {
      return err;
    }
  };

  const dispatch = useDispatch();
  // Remove this placeholder
  // const orders = [];
  const [activeStep, setActiveStep] = useState(0);
  // const getOrder = useSelector((state) => state.getOrder)
  // const {orders} = getOrder
  // console.log(orders.orders)

  // const businessInfo = useSelector(
  //   (state) => state.businessReducer.businessUserInfo
  // );
  function getSteps() {
    return ["STEP 1", "STEP 2", "CREATE ORDER"];
  }
  const handleNext = () => {
    console.log("HANDLE NEXT CALLED", activeStep);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const steppings = getSteps();
  function getStepsContents(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <StepOne
            handleNext={handleNext}
            activeStep={activeStep}
            steppings={steppings}
          />
        );
      case 1:
        return (
          <StepTwo
            handleNext={handleNext}
            activeStep={activeStep}
            steppings={steppings}
          />
        );
      case 2:
        return (
          <StepThree
            handleNext={handleNext}
            activeStep={activeStep}
            steppings={steppings}
          />
        );
      default:
        return "Unknown Step";
    }
  }
  return (
    <React.Fragment>
      <BusinessLayout>
        <div className="dash-cover">
          <div className="left-step-dash">
            <Stepper
              //   className={classes.root}
              activeStep={activeStep}
              alternativeLabel
            >
              {steppings.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <>
              {activeStep === steppings.length ? (
                "Steps Complete"
              ) : (
                <>{getStepsContents(activeStep)}</>
              )}
            </>
          </div>
          <div className="right-dash">
            <Text className="history" color="gray">
              Order History
            </Text>

            <Tabs variant="unstyled">
              <div className="payment-div">
                <TabList style={{ paddingLeft: "1.7rem" }}>
                  <Tab fontSize="16px" fontWeight="bold" color="black">
                    All
                  </Tab>
                  <Tab fontSize="16px" fontWeight="bold" color="black">
                    Payments
                  </Tab>
                  <Tab fontSize="16px" fontWeight="bold" color="black">
                    Debit
                  </Tab>
                </TabList>
              </div>

              <TabPanels>
                <TabPanel className="trans-tab" id="scrollTarget">
                  {isFetching ? (
                    <div style={{ textAlign: "center" }}>
                      <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="yellow.200"
                        color="yellow.500"
                        size="xl"
                      />
                    </div>
                  ) : orders.length === 0 ? (
                    <div>
                      <h1
                        style={{
                          textAlign: "center",
                          paddingTop: "7px",
                          color: "#D6AA1B",
                          fontWeight: "700",
                        }}
                      >
                        There are no orders
                      </h1>
                    </div>
                  ) : (
                    <InfiniteScroll
                      dataLength={orders.length}
                      next={fetchMore}
                      hasMore={Number(currentPage) !== Number(totalPages)}
                      loader={
                        <h4 style={{ textAlign: "center", color: "#D6AA1B" }}>
                          Loading...
                        </h4>
                      }
                      scrollableTarget="scrollTarget"
                      endMessage={
                        <p
                          style={{
                            textAlign: "center",
                            paddingTop: "7px",
                            color: "#D6AA1B",
                          }}
                        >
                          <b>No more orders</b>
                        </p>
                      }
                    >
                      {orders.map((order) => (
                        <div className="transactions" key={order.id}>
                          <div className="transactions-inner">
                            <div>
                              <img src={plus} alt="plus" />
                            </div>
                            <div style={{ paddingLeft: "2rem" }}>
                              <Text>{order.title}</Text>
                              <Text color="gray" fontSize="12px">
                                {order.order_status}
                              </Text>
                            </div>
                          </div>
                          <div style={{ paddingRight: "2rem" }}>
                            <Text fontSize="12px" color="green.500">
                              ₦{order.amount}
                            </Text>
                            <Text fontSize="12px" color="gray">
                              {new Date(order.createdAt).toLocaleDateString(
                                "fr"
                              )}
                            </Text>
                          </div>
                        </div>
                      ))}
                    </InfiniteScroll>
                  )}
                </TabPanel>
                {/* <div className="transactions">
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
                  </div> */}
                {/* <div className="transactions">
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
                  </div> */}
                {/* <div className="transactions">
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
                  </div> */}
                {/* <div className="transactions">
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
                  </div> */}
                {/* <div className="transactions">
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
                  </div> */}
                {/* <div className="transactions">
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
                  </div> */}
                {/* <div className="transactions">
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
                  </div> */}

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
    </React.Fragment>
  );
}
