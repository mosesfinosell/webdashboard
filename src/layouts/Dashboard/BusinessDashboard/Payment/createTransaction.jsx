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
  Input,
  Textarea,
  InputGroup,
  FormControl,
  FormLabel,
  Button,
  Select,
  InputLeftElement,
} from "@chakra-ui/react";
import { BiShoppingBag } from "react-icons/bi";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import { createTransaction } from "../../../../ReduxContianer/BussinessRedux/BusinessAction";
import BusinessLayout from "../../../../component/Layout/BusinessLayout";
import "../../../Dashboard/Dash.css";
export default function CreateTransaction() {
  const dispatch = useDispatch();
  const businessInfo = useSelector(
    (state) => state.businessReducer.businessUserInfo
  );

  // const businessSignIn = useSelector((state) => state.businessSignIn);
  // const { user } = businessSignIn;
  // const { businessDetails } = user;
  // const { message } = businessDetails;

  // const fetchProduct = useSelector((state) => state.fetchProduct);
  // const { products, loading } = fetchProduct
  let products = [];
  let loading = false;

  // const fetchCustomer = useSelector((state) => state.fetchCustomer);
  // const { customers } = fetchCustomer;
  let customers = [];

  const [details, setDetails] = useState("");
  const [paymentDate, setpaymentDate] = useState("");
  const [paymentId] = useState("ghg77gnkjn");
  const [transcationId] = useState("jklg77gnkjn");
  const [businessId] = useState(businessInfo.user_id);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentRef] = useState("h7hiuljuji");
  const [transactionType, setTransactionType] = useState("");
  const [amount, setAmount] = useState("");
  const [selectProduct, setSelectProduct] = useState("");
  const [selectCustomer, setSelectCustomer] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      createTransaction()
      // details,
      // paymentDate,
      // paymentId,
      // businessId,
      // selectProduct,
      // selectCustomer,
      // paymentStatus,
      // paymentMethod,
      // paymentRef,
      // transactionType,
      // amount
    );
    console.log(
      details,
      paymentDate,
      paymentId,
      businessId,
      selectProduct,
      selectCustomer,
      paymentStatus,
      paymentMethod,
      paymentRef,
      transactionType,
      amount
    );
  }

  return (
    <BusinessLayout>
      <div className="dash-cover">
        <div className="left-deal-dash">
          <Text className="history" color="gray">
            Action
          </Text>
          <div className="deals-left">
            <div className="trans-div" style={{ marginTop: "2rem" }}>
              <FormLabel htmlFor="text">Transaction Details</FormLabel>

              <Textarea
                placeholder="Payment Details"
                size="sm"
                mb="20px"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                // width="90%"
                h="80px"
                borderRadius="0px 11px 11px 11px"
              />
            </div>

            <div className="trans-div">
              <FormLabel htmlFor="order type">Payment Date</FormLabel>

              <InputGroup>
                <Input
                  type="date"
                  mb="20px"
                  selected={paymentDate}
                  onChange={(date) => setpaymentDate(date)}
                />
              </InputGroup>
            </div>

            <div className="trans-div">
              <FormLabel htmlFor="order status">Payment Status</FormLabel>
              <Select
                mb="20px"
                placeholder="Add Order Status"
                value={paymentStatus}
                onChange={(e) => setPaymentStatus(e.target.value)}
                // width="100%"
                h="60px"
                borderRadius="0px 11px 11px 11px"
              >
                <option>1</option>
                <option>2</option>
              </Select>
            </div>
            <div className="trans-div">
              <FormLabel htmlFor="order type">Transaction Type</FormLabel>
              <Select
                mb="20px"
                placeholder="Add Order Type"
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
                width="100%"
                h="60px"
                borderRadius="0px 11px 11px 11px"
              >
                <option>7</option>
                <option>9</option>
              </Select>
            </div>

            <div className="trans-div">
              <FormLabel htmlFor="order type">Payment Method</FormLabel>
              <Select
                mb="20px"
                placeholder="Add Order Type"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                width="100%"
                h="60px"
                borderRadius="0px 11px 11px 11px"
              >
                <option>Online</option>
                <option>Offline</option>
              </Select>
            </div>

            <div className="trans-div">
              <FormLabel htmlFor="number">Amount</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Add Total Amount"
                  mb="20px"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  width="100%"
                  h="60px"
                  borderRadius="0px 11px 11px 11px"
                />
              </InputGroup>
            </div>

            <div className="trans-div">
              <FormLabel htmlFor="payment method">Select Product</FormLabel>
              <Select
                mb="20px"
                placeholder="Select Product"
                value={selectProduct}
                onChange={(e) => setSelectProduct(e.target.value)}
                // width="100%"
                h="60px"
                borderRadius="0px 11px 11px 11px"
              >
                {!loading &&
                  products?.details?.map((product) => {
                    return <option>{product.title}</option>;
                  })}
              </Select>
            </div>
            <div className="btn-div">
              <Button
                bg="yellow.500"
                width="90%"
                h="95px"
                borderRadius="0px 11px 11px 11px"
                type="submit"
                color="white"
                _hover={{ bg: "#1A202C" }}
              >
                Add Transaction
              </Button>
            </div>
          </div>
        </div>

        <div className="right-deal-dash">
          <Text color="gray" fontSize="14px">
            Deal History
          </Text>

          <Tabs variant="unstyled">
            <div className="payment-div">
              <TabList>
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
                      <BiShoppingBag />
                    </div>
                    <div style={{ paddingLeft: "2rem" }}>
                      <Text color="#273B4A" w="200px">
                        Adidas Core Sneakers{" "}
                      </Text>
                      <Text color="gray" fontSize="12px">
                        Accepted
                      </Text>
                    </div>
                  </div>
                  <div style={{ paddingRight: "2rem" }}>
                    <Text fontSize="12px" color="yellow.500">
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
                      <BiShoppingBag />
                    </div>
                    <div style={{ paddingLeft: "2rem" }}>
                      <Text color="#273B4A" w="200px">
                        Adidas Core Sneakers{" "}
                      </Text>
                      <Text color="gray" fontSize="12px">
                        Accepted
                      </Text>
                    </div>
                  </div>
                  <div style={{ paddingRight: "2rem" }}>
                    <Text fontSize="12px" color="yellow.500">
                      ₦12,000
                    </Text>
                    <Text fontSize="12px" color="gray">
                      Jan 3, 2022
                    </Text>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="transactions">
                  <div className="transactions-inner">
                    <div>
                      <BiShoppingBag />
                    </div>
                    <div style={{ paddingLeft: "2rem" }}>
                      <Text color="#273B4A" w="200px">
                        Adidas Core Sneakers{" "}
                      </Text>
                      <Text color="gray" fontSize="12px">
                        Accepted
                      </Text>
                    </div>
                  </div>
                  <div style={{ paddingRight: "2rem" }}>
                    <Text fontSize="12px" color="yellow.500">
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
                      <BiShoppingBag />
                    </div>
                    <div style={{ paddingLeft: "2rem" }}>
                      <Text color="#273B4A" w="200px">
                        Adidas Core Sneakers{" "}
                      </Text>
                      <Text color="gray" fontSize="12px">
                        Accepted
                      </Text>
                    </div>
                  </div>
                  <div style={{ paddingRight: "2rem" }}>
                    <Text fontSize="12px" color="yellow.500">
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
                      <BiShoppingBag />
                    </div>
                    <div style={{ paddingLeft: "2rem" }}>
                      <Text color="#273B4A" w="200px">
                        Adidas Core Sneakers{" "}
                      </Text>
                      <Text color="gray" fontSize="12px">
                        Accepted
                      </Text>
                    </div>
                  </div>
                  <div style={{ paddingRight: "2rem" }}>
                    <Text fontSize="12px" color="yellow.500">
                      ₦12,000
                    </Text>
                    <Text fontSize="12px" color="gray">
                      Jan 3, 2022
                    </Text>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="transactions">
                  <div className="transactions-inner">
                    <div>
                      <BiShoppingBag />
                    </div>
                    <div style={{ paddingLeft: "2rem" }}>
                      <Text color="#273B4A" w="200px">
                        Adidas Core Sneakers{" "}
                      </Text>
                      <Text color="gray" fontSize="12px">
                        Accepted
                      </Text>
                    </div>
                  </div>
                  <div style={{ paddingRight: "2rem" }}>
                    <Text fontSize="12px" color="yellow.500">
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
                      <BiShoppingBag />
                    </div>
                    <div style={{ paddingLeft: "2rem" }}>
                      <Text color="#273B4A" w="200px">
                        Adidas Core Sneakers{" "}
                      </Text>
                      <Text color="gray" fontSize="12px">
                        Accepted
                      </Text>
                    </div>
                  </div>
                  <div style={{ paddingRight: "2rem" }}>
                    <Text fontSize="12px" color="yellow.500">
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
                      <BiShoppingBag />
                    </div>
                    <div style={{ paddingLeft: "2rem" }}>
                      <Text color="#273B4A" w="200px">
                        Adidas Core Sneakers{" "}
                      </Text>
                      <Text color="gray" fontSize="12px">
                        Accepted
                      </Text>
                    </div>
                  </div>
                  <div style={{ paddingRight: "2rem" }}>
                    <Text fontSize="12px" color="yellow.500">
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
  );
}
