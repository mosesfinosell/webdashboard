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
import BusinessLayout from "../../../components/Layout/BusinessLayout";
import "../../Dashboard/Dash.css";
import plus from "../../../assets/plus.svg";
import send from "../../../assets/send.svg";
import arrow from "../../../assets/arrow-down.svg";
import phone1 from "../../../assets/phone1.svg";
import StepOne from "../../Dashboard/BusinessDashboard/Order/StepOne";
import StepTwo from "../../Dashboard/BusinessDashboard/Order/StepTwo";
import StepThree from "../../Dashboard/BusinessDashboard/Order/StepThree";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import {
  getOrders,
  getPendingOrders,
  getCompletedOrders,
  getCancelledOrders,
} from "../../../ReduxContianer/BussinessRedux/BusinessAction";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "@chakra-ui/react";
export default function OrderHistory() {
  const businessInfo = useSelector(
    (state) => state.businessReducer.businessUserInfo
  );
  const [businessId] = useState(businessInfo.business_id);
  const [orders, setOrders] = useState([]);
  const [pendingOrders, setPendingOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [cancelledOrders, setCancelledOrders] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pendingTotalPages, setPendingTotalPages] = useState(0);
  const [completedTotalPages, setCompletedTotalPages] = useState(0);
  const [cancelledTotalPages, setCancelledTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [pendingPage, setPendingPage] = useState(1);
  const [completedPage, setCompletedPage] = useState(1);
  const [cancelledPage, setCancelledPage] = useState(1);
  // const [currentPage, setCurrentPage] = useState(1);
  const [currentPendingPage, setCurrentPendingPage] = useState(1);
  const [currentCompletedPage, setCurrentCompletedPage] = useState(1);
  const [currentCancelledPage, setCurrentCancelledPage] = useState(1);
  const [isFetching, setFetching] = useState(false);
  const orderFetching = async (businessId, page) => {
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
  const completedOrderFetching = async (businessId, completedPage) => {
    setFetching(true);
    try {
      const res = await getCompletedOrders(businessId, completedPage);
      console.log(res, "COMPLETED ORDERS");
      const { allOrders, perPage, orders } = res.data;
      setCompletedOrders(orders);
      const total = Math.ceil(allOrders / perPage);
      setCompletedTotalPages(total);
      setFetching(false);
    } catch (err) {
      setFetching(false);
      return err;
    }
  };
  const cancelledOrderFetching = async (businessId, cancelledPage) => {
    setFetching(true);
    try {
      const res = await getCancelledOrders(businessId, cancelledPage);
      console.log(res, "CANCELLED ORDERS");
      const { allOrders, perPage, orders } = res.data;
      setCancelledOrders(orders);
      const total = Math.ceil(allOrders / perPage);
      setCancelledTotalPages(total);
      setFetching(false);
    } catch (err) {
      setFetching(false);
      return err;
    }
  };
  const pendingOrderFetching = async (businessId, pendingPage) => {
    setFetching(true);
    try {
      const res = await getPendingOrders(businessId, pendingPage);
      console.log(res, "PENDING ORDERS");
      const { allOrders, perPage, orders } = res.data;
      setPendingOrders(orders);
      const total = Math.ceil(allOrders / perPage);
      setPendingTotalPages(total);
      setFetching(false);
    } catch (err) {
      setFetching(false);
      return err;
    }
  };
  const fetchMoreCancelledOrders = async () => {
    try {
      const nextPage = currentCancelledPage + 1;
      if (nextPage <= cancelledTotalPages) {
        const res = await getCancelledOrders(businessId, nextPage);
        setCancelledOrders(cancelledOrders.concat(res.data.orders));
        setCurrentCancelledPage(nextPage);
      }
    } catch (err) {
      return err;
    }
  };
  const fetchMoreCompletedOrders = async () => {
    try {
      const nextPage = currentCompletedPage + 1;
      if (nextPage <= completedTotalPages) {
        const res = await getCompletedOrders(businessId, nextPage);
        setCompletedOrders(completedOrders.concat(res.data.orders));
        setCurrentCompletedPage(nextPage);
      }
    } catch (err) {
      return err;
    }
  };

  const fetchMorePendingOrders = async () => {
    try {
      const nextPage = currentPendingPage + 1;
      if (nextPage <= pendingTotalPages) {
        const res = await getPendingOrders(businessId, nextPage);
        setPendingOrders(pendingOrders.concat(res.data.orders));
        setCurrentPendingPage(nextPage);
      }
    } catch (err) {
      return err;
    }
  };

  const fetchMore = async () => {
    try {
      const nextPage = page + 1;
      // const nextPage = currentPage + 1;
      if (nextPage <= totalPages) {
        console.log("fetching", businessId, nextPage);
        const res = await getOrders(businessId, nextPage);
        setOrders(orders.concat(res.data.orders));
        setPage(nextPage);
      }
    } catch (err) {
      return err;
    }
  };
  useEffect(() => {
    orderFetching(businessId, page);
    pendingOrderFetching(businessId, pendingPage);
    completedOrderFetching(businessId, completedPage);
    cancelledOrderFetching(businessId, cancelledPage);
  }, [businessId]);

  // const dispatch = useDispatch();
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
            orderFetching={orderFetching}
            // currentPage={currentPage}
            businessId={businessId}
            setActiveStep={setActiveStep}
            page={page}
            setPage={setPage}
          />
        );
      default:
        return "Unknown Step";
    }
  }
  return (
    <React.Fragment>
      <BusinessLayout>
        <div className="dashy-cover">
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
            <div>
              {activeStep === steppings.length ? (
                "Steps Complete"
              ) : (
                <React.Fragment>{getStepsContents(activeStep)}</React.Fragment>
              )}
            </div>
          </div>
          <div className="order-right">
            {/* <Text className="history" color="gray">
              Order History
            </Text> */}
            <p className="order-para">Order History</p>
            <div className="right-step-dash">
              <Tabs variant="unstyled">
                <div className="payment-div">
                  <TabList style={{ paddingLeft: "1.7rem" }}>
                    <Tab fontSize="16px" fontWeight="bold" color="black">
                      All
                    </Tab>
                    <Tab fontSize="16px" fontWeight="bold" color="black">
                      Pending
                    </Tab>
                    <Tab fontSize="16px" fontWeight="bold" color="black">
                      Completed
                    </Tab>
                    <Tab
                      fontSize="16px"
                      fontWeight="bold"
                      color="black"
                      id="tabs-1--tab-3"
                    >
                      Cancelled
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
                    ) : orders?.length === 0 ? (
                      <div>
                        <h1
                          style={{
                            textAlign: "center",
                            paddingTop: "18px",
                            color: "#D6AA1B",
                            fontWeight: "700",
                            paddingBottom: "18px",
                          }}
                        >
                          There are no orders
                        </h1>
                      </div>
                    ) : (
                      <InfiniteScroll
                        dataLength={orders.length}
                        next={fetchMore}
                        hasMore={Number(page) !== Number(totalPages)}
                        // hasMore={Number(currentPage) !== Number(totalPages)}
                        loader={
                          <h4
                            style={{
                              textAlign: "center",
                              color: "#D6AA1B",
                              paddingBottom: "0.8rem",
                            }}
                          >
                            Loading...
                          </h4>
                        }
                        scrollableTarget="scrollTarget"
                        endMessage={
                          <p
                            style={{
                              textAlign: "center",
                              paddingTop: "5px",
                              color: "#D6AA1B",
                              paddingBottom: "0.7rem",
                            }}
                          >
                            <b>No more orders</b>
                          </p>
                        }
                      >
                        {orders?.map((order) => (
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

                  <TabPanel className="trans-tab">
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
                    ) : pendingOrders.length === 0 ? (
                      <div>
                        <h1
                          style={{
                            textAlign: "center",
                            paddingTop: "18px",
                            color: "#D6AA1B",
                            fontWeight: "700",
                            paddingBottom: "18px",
                          }}
                        >
                          There are no orders
                        </h1>
                      </div>
                    ) : (
                      <InfiniteScroll
                        dataLength={pendingOrders.length}
                        next={fetchMorePendingOrders}
                        hasMore={
                          Number(currentPendingPage) !==
                          Number(pendingTotalPages)
                        }
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
                        {pendingOrders.map((order) => (
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
                  <TabPanel className="trans-tab">
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
                    ) : completedOrders.length === 0 ? (
                      <div>
                        <h1
                          style={{
                            textAlign: "center",
                            paddingTop: "18px",
                            color: "#D6AA1B",
                            fontWeight: "700",
                            paddingBottom: "18px",
                          }}
                        >
                          There are no orders
                        </h1>
                      </div>
                    ) : (
                      <InfiniteScroll
                        dataLength={completedOrders.length}
                        next={fetchMoreCompletedOrders}
                        hasMore={
                          Number(currentCompletedPage) !==
                          Number(completedTotalPages)
                        }
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
                        {completedOrders.map((order) => (
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
                  <TabPanel className="trans-tab" id="cancelled-order">
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
                    ) : cancelledOrders.length === 0 ? (
                      <div>
                        <h1
                          style={{
                            textAlign: "center",
                            paddingTop: "18px",
                            color: "#D6AA1B",
                            fontWeight: "700",
                            paddingBottom: "18px",
                          }}
                        >
                          There are no orders
                        </h1>
                      </div>
                    ) : (
                      <InfiniteScroll
                        dataLength={cancelledOrders.length}
                        next={fetchMoreCancelledOrders}
                        hasMore={
                          Number(currentCancelledPage) !==
                          Number(cancelledTotalPages)
                        }
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
                        {cancelledOrders.map((order) => (
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
                </TabPanels>
              </Tabs>
            </div>
          </div>
        </div>
      </BusinessLayout>
    </React.Fragment>
  );
}
