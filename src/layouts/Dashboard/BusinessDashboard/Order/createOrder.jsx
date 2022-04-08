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
  InputGroup,
  FormControl,
  FormLabel,
  Button,
  Select,
  InputLeftElement,
  FormErrorMessage,
} from "@chakra-ui/react";
// import {
// 	AsyncCreatableSelect,
// 	AsyncSelect,
// 	CreatableSelect,
// 	Select,
// } from 'chakra-react-select';
import { BiShoppingBag } from "react-icons/bi";
import { MdWifiCalling3, MdEmail } from "react-icons/md";
import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import SelectProduct from './selectProduct';
// import SelectCustomer from './selectCustomer';
// import { getProduct } from '../../../../ReduxContianer/BussinessRedux/BusinessAction';
// import {getCustomers} from '../../../../ReduxContianer/BussinessRedux/BusinessAction'
import {
  getOrders,
  getOrderPagination,
  getProduct,
  getCustomers,
} from "../../../../ReduxContianer/BussinessRedux/BusinessAction";
import * as Yup from "yup";
import { Spinner } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
const useStyles = makeStyles({
  root: {
    "& .MuiStepIcon-rootMuiStepIcon-active": {
      color: "red",
    },
  },
});
export default function CreateOrder() {
  const dispatch = useDispatch();
  const businessInfo = useSelector(
    (state) => state.businessReducer.businessUserInfo
  );
  const orders = useSelector((state) => state.businessReducer.order);
  const totalOrders = useSelector(
    (state) => state.businessReducer.paginatedOrderResponse.allOrders
  );
  const perPage = useSelector(
    (state) => state.businessReducer.paginatedOrderResponse.perPage
  );
  const orderPageNumber = useSelector(
    (state) => state.businessReducer.paginatedOrderResponse.page
  );
  const totalPages = totalOrders / perPage;
  const isFetching = useSelector((state) => state.businessReducer.isFetching);
  const customers = useSelector((state) => state.businessReducer.customers);
  // const businessSignIn = useSelector((state) => state.businessSignIn);
  // const { user } = businessSignIn;
  // const { businessDetails } = user;
  // const { message } = businessDetails;

  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [orderStatus, setOrderStatus] = useState("");
  const [orderType, setOrderType] = useState("");
  const [saleStatus, setSaleStatus] = useState("");
  const [discount, setDiscount] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [selectProduct, setSelectProduct] = useState("");
  const [selectCustomer, setSelectCustomer] = useState("");
  const [businessId] = useState(businessInfo.business_id);
  const [page, setPage] = useState(1);
  let [step, setStep] = useState(1);
  const [orderId] = useState("4575r46rt5");
  const [activeStep, setActiveStep] = useState(0);

  //Validate
  const createOrderSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    // phoneNumber: Yup.number().required("Phone number is required"),
    // email: Yup.string().email("Invalid email").required("Email is required"),
    discount: Yup.string().required("Discount is required"),
    // address: Yup.string().required("Address is required"),
    // amount: Yup.string().required("Amount is required"),
  });
  useEffect(() => {
    dispatch(getOrders(businessId, page));
    dispatch(getOrderPagination(businessId));
    dispatch(getProduct(businessId));
    dispatch(getCustomers(businessId));
  }, [dispatch, businessId, page]);
  // useEffect(() => {
  // 	dispatch(getProduct(businessId));
  // }, [dispatch,businessId]);

  // useEffect(() => {
  // 	dispatch(getCustomers(businessId));
  // }, [dispatch,businessId]);

  // const fetchCustomer = useSelector((state) => state.fetchCustomer);
  // let { customers} = fetchCustomer;

  // const fetchProduct = useSelector((state) => state.fetchProduct);
  // let { products,loading } = fetchProduct;
  let products = [];
  //   let loading = false;
  function handleSubmit(e) {
    console.log(step);
    setStep(step++);
    e.preventDefault();
    if (step === 3) {
      setStep(3);
      console.log("SUBMIT");
    } else {
      return;
    }

    // dispatch(
    // 	createOrders(
    // 		title,
    // 		email,
    // 		phoneNumber,
    // 		startDate,
    // 		orderStatus,
    // 		orderType,
    // 		saleStatus,
    // 		discount,
    // 		shippingAddress,
    // 		paymentStatus,
    // 		paymentMethod,
    // 		totalAmount,
    // 		selectProduct,
    // 		selectCustomer,
    // 		businessId,
    // 		orderId
    // 	)
    // );
  }
  function getSteps() {
    return ["SIGN UP", "CHOOSE PLAN", "CREATE ORDER"];
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
        return "Step Three (CREATE ORDER)";
      default:
        return "Unknown Step";
    }
  }
  const classes = useStyles();
  return (
    <Container m="40px" maxW="container.lg">
      <Grid h="100vh" templateColumns="repeat(5, 1fr)">
        <GridItem colSpan={4} rowSpan={6} bg="white" gap="5">
          <Stack pb="30px">
            <Text color="black" fontWeight="bold" fontSize="14px">
              Add a order
            </Text>
          </Stack>
          <Box
            h="1550px"
            w="450px"
            borderRadius="0px 11px 11px 11px"
            border="0.5px solid #D9D9D9"
            px="40px"
          >
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
                <>
                  {getStepsContents(activeStep)}
                  {/* <Button
                    onClick={handleNext}
                    mt={4}
                    bg="yellow.500"
                    width="300px"
                    h="60px"
                    borderRadius="0px 11px 11px 11px"
                    type="submit"
                    color="white"
                    _hover={{ bg: "#1A202C" }}
                  >
                    {activeStep === steppings.length ? "Create Order" : "Next"}
                  </Button> */}
                </>
              )}
            </>

            {/* <Formik
              initialValues={{ title: "", discount: "" }}
              onSubmit={(values) => {
                console.log(values, "nnn");
                alert("VALUES RE", values);
              }}
              validationSchema={createOrderSchema}
            >
              {(formik) => (
                <form onSubmit={formik.handleSubmit}>
                  <FormLabel htmlFor="title">Title</FormLabel>
                  <InputGroup>
                    <Input
                      id="title"
                      name="title"
                      mb="20px"
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      placeholder="Add Order Title"
                      width="300px"
                      height="60px"
                      borderRadius="0px 11px 11px 11px"
                    />
                  </InputGroup>
                  {formik.touched.title && formik.errors.title ? (
                    <span>{formik.errors.title}</span>
                  ) : null}
                  <FormLabel htmlFor="title">Discount</FormLabel>
                  <InputGroup>
                    <Input
                      id="discount"
                      name="discount"
                      mb="20px"
                      value={formik.values.discount}
                      onChange={formik.handleChange}
                      placeholder="Discount"
                      width="300px"
                      height="60px"
                      borderRadius="0px 11px 11px 11px"
                    />
                  </InputGroup>
                  {formik.touched.discount && formik.errors.discount ? (
                    <span>{formik.errors.discount}</span>
                  ) : null}
                  <Button
                    mt={4}
                    bg="yellow.500"
                    width="300px"
                    h="60px"
                    borderRadius="0px 11px 11px 11px"
                    type="submit"
                    color="white"
                    _hover={{ bg: "#1A202C" }}
                  >
                    Add Order
                  </Button>
                </form>
              )}
            </Formik> */}
          </Box>
          {/* <Box
            h="1550px"
            w="400px"
            borderRadius="0px 11px 11px 11px"
            border="0.5px solid #D9D9D9"
            px="40px"
          >
            <Formik
              initialValues={{
                title: "",
                phoneNumber: "",
                email: "",
                orderStatus: "",
                orderType: "",
                orderDate: "",
                salesStatus: "",
                discount: "",
                shippingAddress: "",
                paymentStatus: "",
                paymentMethod: "",
                selectProduct: "",
                selectCustomer: "",
                totalAmount: "",
              }}
              validationSchema={createOrderSchema}
            >
              {() => (
                <Form onSubmit={handleSubmit}>
                  <Field name="title">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.title && form.touched.title}
                        mt={4}
                      >
                        <FormLabel htmlFor="title">Title</FormLabel>
                        <InputGroup>
                          <Input
                            {...field}
                            mb="20px"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Add Order Title"
                            width="300px"
                            h="60px"
                            borderRadius="0px 11px 11px 11px"
                          />
                        </InputGroup>
                        <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="phoneNumber">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.phoneNumber && form.touched.phoneNumber
                        }
                        mt={4}
                      >
                        <FormLabel htmlFor="phoneNumber">
                          Phone Number
                        </FormLabel>
                        <InputGroup>
                          <Input
                            {...field}
                            value={phoneNumber}
                            type="phoneNumber"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="08012345678"
                            width="400px"
                            h="70px"
                            borderRadius="0px 11px 11px 11px"
                          />
                        </InputGroup>
                        <FormErrorMessage>
                          {form.errors.phoneNumber}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                        mt={4}
                      >
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <InputGroup>
                          <Input
                            {...field}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email Address"
                            width="400px"
                            h="70px"
                            borderRadius="0px 11px 11px 11px"
                          />
                        </InputGroup>
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="orderStatus">
                    {({ field, form }) => (
                      <FormControl>
                        <FormLabel htmlFor="orderStatus">
                          Order Status
                        </FormLabel>
                        <Select
                          mb="20px"
                          placeholder="Add Order Status"
                          value={orderStatus}
                          onChange={(e) => setOrderStatus(e.target.value)}
                          width="300px"
                          h="60px"
                          borderRadius="0px 11px 11px 11px"
                        >
                          <option>Paid</option>
                          <option>Unpaid</option>
                        </Select>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="orderType">
                    {({ field, form }) => (
                      <FormControl>
                        <FormLabel htmlFor="orderType">Order Type</FormLabel>
                        <Select
                          mb="20px"
                          placeholder="Add Order Type"
                          value={orderType}
                          onChange={(e) => setOrderType(e.target.value)}
                          width="300px"
                          h="60px"
                          borderRadius="0px 11px 11px 11px"
                        >
                          <option>Direct</option>
                          <option>Escrow</option>
                        </Select>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="startDate">
                    {({ field, form }) => (
                      <FormControl>
                        <FormLabel htmlFor="startDate">Order Date</FormLabel>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="saleStatus">
                    {({ field, form }) => (
                      <FormControl>
                        <FormLabel htmlFor="saleStatus">Sales Status</FormLabel>
                        <Select
                          mb="20px"
                          placeholder="Add Sales Status"
                          value={saleStatus}
                          onChange={(e) => setSaleStatus(e.target.value)}
                          width="300px"
                          h="60px"
                          borderRadius="0px 11px 11px 11px"
                        >
                          <option>Offline</option>
                          <option>Online</option>
                        </Select>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="discount">
                    {({ field, form }) => (
                      <FormControl
                        mt="30px"
                        isInvalid={
                          form.errors.discount && form.touched.discount
                        }
                      >
                        <FormLabel htmlFor="discount">Discount</FormLabel>
                        <InputGroup>
                          <Input
                            {...field}
                            placeholder="Add Discount"
                            mb="20px"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                            width="300px"
                            h="60px"
                            borderRadius="0px 11px 11px 11px"
                          />
                        </InputGroup>
                        <FormErrorMessage>
                          {form.errors.discount}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="shippingAddress">
                    {({ field, form }) => (
                      <FormControl
                        mt={4}
                        isInvalid={
                          form.errors.shippingAddress &&
                          form.touched.shippingAddress
                        }
                      >
                        <FormLabel htmlFor="shippingAddress">
                          Shipping Address
                        </FormLabel>
                        <InputGroup>
                          <Input
                            {...field}
                            mb="20px"
                            placeholder="Add Shipping Address"
                            value={shippingAddress}
                            onChange={(e) => setShippingAddress(e.target.value)}
                            width="400px"
                            h="60px"
                            borderRadius="0px 11px 11px 11px"
                          />
                        </InputGroup>
                        <FormErrorMessage>
                          {form.errors.shippingAddress}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="paymentStatus">
                    {({ field, form }) => (
                      <FormControl>
                        <FormLabel htmlFor="paymentStatus">
                          Payment Status
                        </FormLabel>
                        <Select
                          mb="20px"
                          placeholder="Add Payment Status"
                          value={paymentStatus}
                          onChange={(e) => setPaymentStatus(e.target.value)}
                          width="300px"
                          h="60px"
                          borderRadius="0px 11px 11px 11px"
                        >
                          <option>Paid</option>
                          <option>Unpaid</option>
                        </Select>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="paymentMethod">
                    {({ field, form }) => (
                      <FormControl>
                        <FormLabel htmlFor="paymentMethod">
                          Payment Method
                        </FormLabel>
                        <Select
                          mb="20px"
                          placeholder="Add Payment Method"
                          value={paymentMethod}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          width="300px"
                          h="60px"
                          borderRadius="0px 11px 11px 11px"
                        >
                          <option>Offline</option>
                          <option>Checkout</option>
                          <option>Transfer</option>
                        </Select>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="selectProduct">
                    {({ field, form }) => (
                      <FormControl>
                        <FormLabel htmlFor="selectProduct">
                          Select Product
                        </FormLabel>
                        <Select
                          mb="20px"
                          placeholder="Select Product"
                          value={selectProduct}
                          onChange={(e) => setSelectProduct(e.target.value)}
                          width="300px"
                          h="60px"
                          borderRadius="0px 11px 11px 11px"
                        >
                          {!isFetching &&
                            products?.details?.map((product) => {
                              return <option>{product.title}</option>;
                            })}
                        </Select>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="selectCustomer">
                    {({ field, form }) => (
                      <FormControl>
                        <FormLabel htmlFor="selectCustomer">
                          Select Customers
                        </FormLabel>
                        <Select
                          mb="20px"
                          placeholder="Select Customer"
                          value={selectCustomer}
                          onChange={(e) => setSelectCustomer(e.target.value)}
                          width="300px"
                          h="60px"
                          borderRadius="0px 11px 11px 11px"
                        >
                          {!isFetching &&
                            customers?.map((customer) => {
                              return <option>{customer.customer_name}</option>;
                            })}
                        </Select>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="totalAmount">
                    {({ field, form }) => (
                      <FormControl
                        mt={4}
                        isInvalid={
                          form.errors.totalAmount && form.touched.totalAmount
                        }
                      >
                        <FormLabel htmlFor="totalAmount">
                          Total Amount
                        </FormLabel>
                        <InputGroup>
                          <Input
                            {...field}
                            placeholder="Add Total Amount"
                            mb="20px"
                            value={totalAmount}
                            onChange={(e) => setTotalAmount(e.target.value)}
                            width="400px"
                            h="60px"
                            borderRadius="0px 11px 11px 11px"
                          />
                        </InputGroup>
                        <FormErrorMessage>
                          {form.errors.totalAmount}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Button
                    mt={4}
                    bg="yellow.500"
                    width="300px"
                    h="60px"
                    borderRadius="0px 11px 11px 11px"
                    type="submit"
                    color="white"
                    _hover={{ bg: "#1A202C" }}
                  >
                    {step === 3 ? "Add Order" : "Next Step"}
                  </Button>
                </Form>
              )}
            </Formik>
          </Box> */}
        </GridItem>
        <GridItem colStart={6} colEnd={9} h="10" bg="white">
          <Stack m="10px">
            <Text color="gray" fontSize="14px">
              Order History
            </Text>
          </Stack>
          <Tabs variant="unstyled">
            <Center>
              <Box
                h="100px"
                w="400px"
                borderRadius="0px 11px 0px 0px"
                border="0.5px solid #D9D9D9"
                display="flex"
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
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
              </Box>
            </Center>
            <Center>
              <TabPanels>
                <TabPanel>
                  {isFetching ? (
                    <Spinner />
                  ) : orders.length === 0 ? (
                    <h1>There are no orders</h1>
                  ) : (
                    <InfiniteScroll
                      dataLength={orders.length}
                      next={() => {
                        setPage(page + 1);
                      }}
                      hasMore={orderPageNumber < totalPages}
                      loader={<h4>Loading...</h4>}
                      endMessage={
                        <p
                          style={{
                            textAlign: "center",
                            paddingTop: "7px",
                            color: "#D6AA1B",
                            fontFamily: "Circular Std",
                          }}
                        >
                          <b>No more orders</b>
                        </p>
                      }
                    >
                      {orders.map((order) => (
                        <Box
                          key={order.id}
                          h="100px"
                          w="400px"
                          border="0.5px solid #D9D9D9"
                          display="flex"
                          alignItems="center"
                          justifyContent="space-evenly"
                        >
                          <Stack
                            color="yellow.500"
                            bg="yellow.100"
                            borderRadius="0px 8px 8px 8px"
                            border="0.2px solid yellow.100"
                            p="12px"
                            fontSize="22px"
                          >
                            <BiShoppingBag />
                          </Stack>
                          <Stack pr="10px">
                            <Text color="#273B4A" w="200px">
                              {order.title}
                            </Text>
                            <Text color="gray" fontSize="12px">
                              {order.order_status}
                            </Text>
                          </Stack>

                          <Stack>
                            <Text fontSize="12px" color="yellow.500">
                              ₦{order.amount}
                            </Text>
                            <Text fontSize="12px" color="gray">
                              {new Date(order.createdAt).toLocaleDateString(
                                "fr"
                              )}
                            </Text>
                          </Stack>
                        </Box>
                      ))}
                    </InfiniteScroll>
                  )}
                </TabPanel>
                <TabPanel>
                  <Box
                    h="100px"
                    w="400px"
                    border="0.5px solid #D9D9D9"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-evenly"
                  >
                    <Stack
                      color="green.500"
                      bg="green.100"
                      borderRadius="0px 8px 8px 8px"
                      border="0.2px solid green.100"
                      p="12px"
                      fontSize="22px"
                    >
                      <BiShoppingBag />
                    </Stack>
                    <Stack pr="10px">
                      <Text color="#273B4A" w="200px">
                        {" "}
                        Sneakers Adidas Core
                      </Text>
                      <Text color="gray" fontSize="12px">
                        Accepted
                      </Text>
                    </Stack>

                    <Stack>
                      <Text fontSize="12px" color="green.500">
                        ₦12,000
                      </Text>
                      <Text fontSize="12px" color="gray">
                        Jan 3, 2022
                      </Text>
                    </Stack>
                  </Box>
                  <Box
                    h="100px"
                    w="400px"
                    border="0.5px solid #D9D9D9"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-evenly"
                  >
                    <Stack
                      color="yellow.500"
                      bg="yellow.100"
                      borderRadius="0px 8px 8px 8px"
                      border="0.2px solid yellow.100"
                      p="12px"
                      fontSize="22px"
                    >
                      <BiShoppingBag />
                    </Stack>
                    <Stack pr="10px">
                      <Text color="#273B4A" w="200px">
                        Adidas Core Sneakers{" "}
                      </Text>
                      <Text color="gray" fontSize="12px">
                        Accepted
                      </Text>
                    </Stack>

                    <Stack>
                      <Text fontSize="12px" color="yellow.500">
                        ₦12,000
                      </Text>
                      <Text fontSize="12px" color="gray">
                        Jan 3, 2022
                      </Text>
                    </Stack>
                  </Box>
                  <Box
                    h="100px"
                    w="400px"
                    border="0.5px solid #D9D9D9"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-evenly"
                  >
                    <Stack
                      color="gray.500"
                      bg="gray.100"
                      borderRadius="0px 8px 8px 8px"
                      border="0.2px solid gray.100"
                      p="12px"
                      fontSize="24px"
                    >
                      <BiShoppingBag />
                    </Stack>
                    <Stack pr="10px">
                      <Text color="#273B4A" w="200px">
                        Adidas Core Sneakers{" "}
                      </Text>
                      <Text color="gray" fontSize="12px">
                        Accepted
                      </Text>
                    </Stack>

                    <Stack>
                      <Text fontSize="12px" color="gray.500">
                        ₦12,000
                      </Text>
                      <Text fontSize="12px" color="gray">
                        Jan 3, 2022
                      </Text>
                    </Stack>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box
                    h="100px"
                    w="400px"
                    border="0.5px solid #D9D9D9"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-evenly"
                  >
                    <Stack
                      color="yellow.500"
                      bg="yellow.100"
                      borderRadius="0px 8px 8px 8px"
                      border="0.2px solid green.100"
                      p="12px"
                      fontSize="22px"
                    >
                      <BiShoppingBag />
                    </Stack>
                    <Stack pr="10px">
                      <Text color="#273B4A" w="200px">
                        {" "}
                        Sneakers Adidas Core
                      </Text>
                      <Text color="gray" fontSize="12px">
                        Accepted
                      </Text>
                    </Stack>

                    <Stack>
                      <Text fontSize="12px" color="green.500">
                        ₦12,000
                      </Text>
                      <Text fontSize="12px" color="gray">
                        Jan 3, 2022
                      </Text>
                    </Stack>
                  </Box>
                  <Box
                    h="100px"
                    w="400px"
                    border="0.5px solid #D9D9D9"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-evenly"
                  >
                    <Stack
                      color="yellow.500"
                      bg="yellow.100"
                      borderRadius="0px 8px 8px 8px"
                      border="0.2px solid yellow.100"
                      p="12px"
                      fontSize="22px"
                    >
                      <BiShoppingBag />
                    </Stack>
                    <Stack pr="10px">
                      <Text color="#273B4A" w="200px">
                        Adidas Core Sneakers{" "}
                      </Text>
                      <Text color="gray" fontSize="12px">
                        Accepted
                      </Text>
                    </Stack>

                    <Stack>
                      <Text fontSize="12px" color="yellow.500">
                        ₦12,000
                      </Text>
                      <Text fontSize="12px" color="gray">
                        Jan 3, 2022
                      </Text>
                    </Stack>
                  </Box>
                  <Box
                    h="100px"
                    w="400px"
                    border="0.5px solid #D9D9D9"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-evenly"
                  >
                    <Stack
                      color="gray.500"
                      bg="gray.100"
                      borderRadius="0px 8px 8px 8px"
                      border="0.2px solid gray.100"
                      p="12px"
                      fontSize="24px"
                    >
                      <BiShoppingBag />
                    </Stack>
                    <Stack pr="10px">
                      <Text color="#273B4A" w="200px">
                        Adidas Core Sneakers{" "}
                      </Text>
                      <Text color="gray" fontSize="12px">
                        Accepted
                      </Text>
                    </Stack>

                    <Stack>
                      <Text fontSize="12px" color="gray.500">
                        ₦12,000
                      </Text>
                      <Text fontSize="12px" color="gray">
                        Jan 3, 2022
                      </Text>
                    </Stack>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Center>
          </Tabs>
        </GridItem>
      </Grid>
    </Container>
  );
}
