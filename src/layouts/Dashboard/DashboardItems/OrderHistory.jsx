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
import { useEffect, useState } from "react";
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

export default function OrderHistory() {
  const dispatch = useDispatch();
  // Remove this placeholder
  const orders = [];
  const [activeStep, setActiveStep] = useState(0);
  // const getOrder = useSelector((state) => state.getOrder)
  // const {orders} = getOrder
  // console.log(orders.orders)

  const businessInfo = useSelector(
    (state) => state.businessReducer.businessUserInfo
  );
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
          />
        );
      default:
        return "Unknown Step";
    }
  }
  return (
    <>
      <BusinessLayout>
        <div className="dash-cover">
          <div className="left-step-dash">
            {/* <Text color="black" fontWeight="bold" fontSize="14px">
              Add a order
            </Text> */}

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
    </>

    // <Container m="40px" maxW="container.lg">
    //   <Grid h="100vh" templateColumns="repeat(5, 1fr)">
    //     <GridItem colSpan={4} rowSpan={6} bg="white" gap="5">
    //       <Stack pb="30px">
    //         <Text color="black" fontSize="14px">
    //           New
    //         </Text>
    //       </Stack>

    //       {orders &&
    //         orders.orders?.map((order, index) => {
    //           return (
    //             <Box
    //               key={index}
    //               h="100px"
    //               w="400px"
    //               border="0.5px solid #D9D9D9"
    //               display="flex"
    //               alignItems="center"
    //               justifyContent="space-evenly"
    //             >
    //               <OrderHistoryModal />
    //               <Stack pr="10px">
    //                 <Text color="#273B4A" w="200px">
    //                   {order.title}
    //                 </Text>
    //                 <Text color="gray" fontSize="12px">
    //                   {order.order_status}
    //                 </Text>
    //               </Stack>
    //               <Stack>
    //                 <Text fontSize="12px" color="gray">
    //                   ₦{order.amount}
    //                 </Text>
    //                 <Text fontSize="12px" color="gray">
    //                   {dateformat(order.order_date, "mediumDate")}
    //                 </Text>
    //               </Stack>
    //             </Box>
    //           );
    //         })}
    //     </GridItem>
    //     <GridItem colStart={6} colEnd={9} h="10" bg="white">
    //       <Stack m="10px">
    //         <Text color="gray" fontSize="14px">
    //           Deal History
    //         </Text>
    //       </Stack>
    //       <Tabs variant="unstyled">
    //         <Center>
    //           <Box
    //             h="100px"
    //             w="400px"
    //             borderRadius="0px 11px 0px 0px"
    //             border="0.5px solid #D9D9D9"
    //             display="flex"
    //             alignItems="center"
    //             justifyContent="center"
    //           >
    //             <TabList>
    //               <Tab fontSize="16px" fontWeight="bold" color="black">
    //                 Pending
    //               </Tab>
    //               <Tab fontSize="16px" fontWeight="bold" color="black">
    //                 Delivery
    //               </Tab>
    //             </TabList>
    //           </Box>
    //         </Center>
    //         <Center>
    //           <TabPanels>
    //             <TabPanel>
    //               <Box
    //                 h="100px"
    //                 w="400px"
    //                 border="0.5px solid #D9D9D9"
    //                 display="flex"
    //                 alignItems="center"
    //                 justifyContent="space-evenly"
    //               >
    //                 <Stack
    //                   color="yellow.500"
    //                   bg="yellow.100"
    //                   borderRadius="0px 8px 8px 8px"
    //                   border="0.2px solid yellow.100"
    //                   p="12px"
    //                   fontSize="22px"
    //                 >
    //                   <BiShoppingBag />
    //                 </Stack>
    //                 <Stack pr="10px">
    //                   <Text color="#273B4A" w="200px">
    //                     Adidas Core Sneakers{" "}
    //                   </Text>
    //                   <Text color="gray" fontSize="12px">
    //                     Accepted
    //                   </Text>
    //                 </Stack>

    //                 <Stack>
    //                   <Text fontSize="12px" color="yellow.500">
    //                     ₦12,000
    //                   </Text>
    //                   <Text fontSize="12px" color="gray">
    //                     Jan 3, 2022
    //                   </Text>
    //                 </Stack>
    //               </Box>
    //               <Box
    //                 h="100px"
    //                 w="400px"
    //                 border="0.5px solid #D9D9D9"
    //                 display="flex"
    //                 alignItems="center"
    //                 justifyContent="space-evenly"
    //               >
    //                 <Stack
    //                   color="red.500"
    //                   bg="red.100"
    //                   borderRadius="0px 8px 8px 8px"
    //                   border="0.2px solid red.100"
    //                   p="12px"
    //                   fontSize="22px"
    //                 >
    //                   <BiShoppingBag />
    //                 </Stack>
    //                 <Stack pr="10px">
    //                   <Text color="#273B4A" w="200px">
    //                     Adidas Core Sneakers{" "}
    //                   </Text>
    //                   <Text color="gray" fontSize="12px">
    //                     Accepted
    //                   </Text>
    //                 </Stack>

    //                 <Stack>
    //                   <Text fontSize="12px" color="red.500">
    //                     ₦12,000
    //                   </Text>
    //                   <Text fontSize="12px" color="gray">
    //                     Jan 3, 2022
    //                   </Text>
    //                 </Stack>
    //               </Box>
    //               <Box
    //                 h="100px"
    //                 w="400px"
    //                 border="0.5px solid #D9D9D9"
    //                 display="flex"
    //                 alignItems="center"
    //                 justifyContent="space-evenly"
    //               >
    //                 <Stack
    //                   color="green.500"
    //                   bg="green.100"
    //                   borderRadius="0px 8px 8px 8px"
    //                   border="0.2px solid green.100"
    //                   p="12px"
    //                   fontSize="22px"
    //                 >
    //                   <BiShoppingBag />
    //                 </Stack>
    //                 <Stack pr="10px">
    //                   <Text color="#273B4A" w="200px">
    //                     Adidas Core Sneakers{" "}
    //                   </Text>
    //                   <Text color="gray" fontSize="12px">
    //                     Accepted
    //                   </Text>
    //                 </Stack>

    //                 <Stack>
    //                   <Text fontSize="12px" color="green.500">
    //                     ₦12,000
    //                   </Text>
    //                   <Text fontSize="12px" color="gray">
    //                     Jan 3, 2022
    //                   </Text>
    //                 </Stack>
    //               </Box>
    //             </TabPanel>
    //             <TabPanel>
    //               <Box
    //                 h="100px"
    //                 w="400px"
    //                 border="0.5px solid #D9D9D9"
    //                 display="flex"
    //                 alignItems="center"
    //                 justifyContent="space-evenly"
    //               >
    //                 <Stack
    //                   color="green.500"
    //                   bg="green.100"
    //                   borderRadius="0px 8px 8px 8px"
    //                   border="0.2px solid green.100"
    //                   p="12px"
    //                   fontSize="22px"
    //                 >
    //                   <BiShoppingBag />
    //                 </Stack>
    //                 <Stack pr="10px">
    //                   <Text color="#273B4A" w="200px">
    //                     {" "}
    //                     Sneakers Adidas Core
    //                   </Text>
    //                   <Text color="gray" fontSize="12px">
    //                     Accepted
    //                   </Text>
    //                 </Stack>

    //                 <Stack>
    //                   <Text fontSize="12px" color="green.500">
    //                     ₦12,000
    //                   </Text>
    //                   <Text fontSize="12px" color="gray">
    //                     Jan 3, 2022
    //                   </Text>
    //                 </Stack>
    //               </Box>
    //               <Box
    //                 h="100px"
    //                 w="400px"
    //                 border="0.5px solid #D9D9D9"
    //                 display="flex"
    //                 alignItems="center"
    //                 justifyContent="space-evenly"
    //               >
    //                 <Stack
    //                   color="yellow.500"
    //                   bg="yellow.100"
    //                   borderRadius="0px 8px 8px 8px"
    //                   border="0.2px solid yellow.100"
    //                   p="12px"
    //                   fontSize="22px"
    //                 >
    //                   <BiShoppingBag />
    //                 </Stack>
    //                 <Stack pr="10px">
    //                   <Text color="#273B4A" w="200px">
    //                     Adidas Core Sneakers{" "}
    //                   </Text>
    //                   <Text color="gray" fontSize="12px">
    //                     Accepted
    //                   </Text>
    //                 </Stack>

    //                 <Stack>
    //                   <Text fontSize="12px" color="yellow.500">
    //                     ₦12,000
    //                   </Text>
    //                   <Text fontSize="12px" color="gray">
    //                     Jan 3, 2022
    //                   </Text>
    //                 </Stack>
    //               </Box>
    //               <Box
    //                 h="100px"
    //                 w="400px"
    //                 border="0.5px solid #D9D9D9"
    //                 display="flex"
    //                 alignItems="center"
    //                 justifyContent="space-evenly"
    //               >
    //                 <Stack
    //                   color="gray.500"
    //                   bg="gray.100"
    //                   borderRadius="0px 8px 8px 8px"
    //                   border="0.2px solid gray.100"
    //                   p="12px"
    //                   fontSize="24px"
    //                 >
    //                   <BiShoppingBag />
    //                 </Stack>
    //                 <Stack pr="10px">
    //                   <Text color="#273B4A" w="200px">
    //                     Adidas Core Sneakers{" "}
    //                   </Text>
    //                   <Text color="gray" fontSize="12px">
    //                     Accepted
    //                   </Text>
    //                 </Stack>

    //                 <Stack>
    //                   <Text fontSize="12px" color="gray.500">
    //                     ₦12,000
    //                   </Text>
    //                   <Text fontSize="12px" color="gray">
    //                     Jan 3, 2022
    //                   </Text>
    //                 </Stack>
    //               </Box>
    //             </TabPanel>
    //           </TabPanels>
    //         </Center>
    //       </Tabs>
    //     </GridItem>
    //   </Grid>
    // </Container>
  );
}
