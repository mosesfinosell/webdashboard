import { Formik, Form, Field } from "formik";
import {
  Center,
  Input,
  InputLeftElement,
  InputRightElement,
  InputGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Text,
  Stack,
  Link,
  Image,
  Box,
  Container,
  Flex,
  createStandaloneToast,
} from "@chakra-ui/react";

import { Link as RLink } from "react-router-dom";
import { MdEmail, MdWifiCalling3 } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import logo from "../../../assets/Logomark.png";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import {
  FaLock,
  FaEyeSlash,
  FaEye,
  FaRegAddressBook,
  FaIndustry,
} from "react-icons/fa";
import { businessUserSignUp } from "../../../ReduxContianer/BussinessRedux/BusinessAction";
import axios from "axios";

export default function BusinessAccountSignUp() {
  const yellowbtn = useColorModeValue("yellow.500");

  //State
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [industry, setIndustry] = useState("");
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
//   const businessSignUp = useSelector((state) => state.businessSignUp);
//   const { error, loading, businessDetails } = businessSignUp;

  // Function
  const handleClick = () => setShow(!show);

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    axios
      .post("https://finosell.link/api/v2/auths/firststage", {
        name,
        phoneNumber,
        email,
        address,
        industry,
        business: "business",
      })
      .then((response) => {
        setIsLoading(false);
        const userDetails = response.data.message;
        toast({
          position: "top",
          title: `Welcome ${userDetails.name}`,
          description: "You have successfully registered",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        localStorage.setItem("password", response.data.message.password);
        return history.push("/business-signin");
      })
      .catch((error) => {
        setIsLoading(false);
        toast({
          position: "top",
          title: `Unsuccessful Attempt`,
          description: `${error.response.data.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return error;
      });
    // dispatch(
    //   businessUserSignUp(
    //     name,
    //     phoneNumber,
    //     email,
    //     address,
    //     industry,
    //     "business"
    //   )
    // );
    // localStorage.setItem("phoneNumber", phoneNumber);
    // setEmail('');
    // setPhoneNumber('');
    // setName('')
    // console.log(name, phoneNumber, email, address, industry);
  }

  //Validation
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    phoneNumber: Yup.number().required("Phone number is required"),
  });

  const history = useHistory();
  const toast = createStandaloneToast();

  //   useEffect(() => {
  //     if (businessDetails) {
  //       toast({
  //         position: "bottom",
  //         title: `Welcome ${businessDetails.message.name}`,
  //         description: "You have successfully register",
  //         status: "success",
  //         duration: 3000,
  //         isClosable: true,
  //       });
  //       return history.push("/business-dashboard");
  //     }
  //   }, [businessDetails, history]);

  return (
    <Container maxW="container.lg">
      <Box
        p="50"
        m="36"
        boxSizing="border-box"
        borderWidth="1px"
        borderRadius="0px 21px 21px 21px"
        overflow="hidden"
      >
        <Center>
          <Stack>
            <Image mb="15" src={logo} alt="logo" />
          </Stack>
        </Center>

        <Center>
          <Stack>
            <Text fontSize="36px" mt="20px" fontWeight="bold" lineHeight="5">
              Create Accounts
            </Text>
          </Stack>
        </Center>
        <Center>
          <Stack mt={2}>
            <Text color="gray">Use your personal information</Text>
          </Stack>
        </Center>
        <Formik
          initialValues={{
            name: "",
            phoneNumber: "",
            email: "",
          }}
          validationSchema={SignupSchema}
        >
          {() => (
            <Center>
              <Form onSubmit={handleSubmit}>
                <Field name="name">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                      mt={4}
                    >
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          m="15px 1px"
                          fontSize="20px"
                          color="yellow.500"
                          children={<AiOutlineShop />}
                        />
                        <Input
                          {...field}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Jumoke Adetola"
                          width="400px"
                          h="70px"
                          borderRadius="0px 11px 11px 11px"
                        />
                      </InputGroup>
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                      mt={4}
                    >
                      <FormLabel htmlFor="name">Email</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          m="15px 1px"
                          fontSize="20px"
                          color="yellow.500"
                          children={<MdEmail />}
                        />
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
                <Field name="phoneNumber">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        form.errors.phoneNumber && form.touched.phoneNumber
                      }
                      mt={4}
                    >
                      <FormLabel htmlFor="name">Phone number</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          m="15px 1px"
                          fontSize="20px"
                          color="yellow.500"
                          children={<MdWifiCalling3 />}
                        />
                        <Input
                          {...field}
                          value={phoneNumber}
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
                <Flex direction="row" justifyContent="space-between">
                  <Field name="address">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.phoneNumber && form.touched.phoneNumber
                        }
                        mt={4}
                      >
                        <FormLabel htmlFor="address">Address</FormLabel>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            m="15px 1px"
                            fontSize="20px"
                            color="yellow.500"
                            children={<FaRegAddressBook />}
                          />
                          <Input
                            {...field}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Ibadan"
                            width="180px"
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
                  <Field name="industry">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.phoneNumber && form.touched.phoneNumber
                        }
                        mt={4}
                      >
                        <FormLabel htmlFor="text">Industry</FormLabel>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            m="15px 1px"
                            fontSize="20px"
                            color="yellow.500"
                            children={<FaIndustry />}
                          />
                          <Input
                            {...field}
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                            placeholder="Food"
                            width="195px"
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
                </Flex>
                <Field name="password">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.password && form.touched.password}
                      mt={4}
                    >
                      <FormLabel htmlFor="name">Password</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          m="15px 1px"
                          fontSize="18px"
                          color="yellow.500"
                          children={<FaLock />}
                        />

                        <InputRightElement
                          pointerEvents="visible"
                          m="20px 15px"
                          color="yellow.500"
                        >
                          <Button
                            onClick={handleClick}
                            fontSize="25px"
                            size="sm"
                            b="transparent"
                            cursor="pointer"
                          >
                            {!show ? <FaEyeSlash /> : <FaEye />}
                          </Button>
                        </InputRightElement>
                        <Input
                          {...field}
                          type={!show ? "password" : "text"}
                          onClick={handleClick}
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          placeholder="*********"
                          width="400px"
                          h="70px"
                          borderRadius="0px 11px 11px 11px"
                        />
                      </InputGroup>
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  bg={yellowbtn}
                  width="400px"
                  h="70px"
                  borderRadius="0px 11px 11px 11px"
                  type="submit"
                  color="white"
                  _hover={{ bg: "#1A202C" }}
                  // onClick={handleButton}
                >
                  Continue
                </Button>
              </Form>
            </Center>
          )}
        </Formik>
        <Center>
          <Stack mt="5">
            <Text fontSize="18px" lineHeight="5">
              Already have an account?
              <Link as={RLink} pl="2" to="/business-signin" color="yellow.500">
                Login
              </Link>
            </Text>
          </Stack>
        </Center>
      </Box>
    </Container>
  );
}
