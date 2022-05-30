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
import "../../../component/auth.css";
import { useFormik } from "formik";
export default function BusinessAccountSignUp() {
  const yellowbtn = useColorModeValue("yellow.500");

  //State
  const [name, setName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
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
  const handleClick = (values, tools) => setShow(!show);

  const onSubmit = (values, tools) => {
    setIsLoading(true);

    axios
      .post("https://finosell.link/api/v2/auths/firststage", values)
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
        tools.resetForm();
        localStorage.setItem("password", response.data.message.password);
        return history.push("/business-signin");
      })
      .catch((error) => {
        console.log(error, "ERROR");
        setIsLoading(false);
        toast({
          position: "top",
          title: `Unsuccessful Attempt`,
          description: `${error.response.data.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        tools.resetForm();
        return error;
      });
  };

  //Validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    phone_number: Yup.number()
      .typeError("Phone number must be digits")
      .required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    industry: Yup.string().required("Industry is required"),
    password: Yup.string()
      .min(5, "Too short")
      .max(9, "Okay")
      .required("Password is required"),
  });
  const initialValues = {
    name: "",
    email: "",
    phone_number: "",
    address: "",
    industry: "",
    password: "",
    account_type: "business",
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const history = useHistory();
  const toast = createStandaloneToast();

  return (
    <div className="cover">
      <form onSubmit={formik.handleSubmit}>
        <div className="imgcontainer">
          <Image mb="15" src={logo} alt="logo" />
        </div>
        <Text
          fontSize="36px"
          mt="1"
          fontWeight="bold"
          lineHeight="3"
          className="welcome"
        >
          Create Account
        </Text>
        <Text color="gray" className="details">
          Use information about your business
        </Text>
        <div className="cont">
          <FormLabel htmlFor="name" className="lab">
            Name
          </FormLabel>
          <InputGroup className="int-grp">
            <InputLeftElement
              pointerEvents="none"
              m="15px 1px"
              fontSize="20px"
              color="yellow.500"
              children={<AiOutlineShop />}
            />
            <Input
              type="name"
              placeholder="John Doe"
              width="100%"
              // h="73px"
              borderRadius="0px 11px 11px 11px"
              name="name"
              id="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="input-ht"
            />
          </InputGroup>
          {formik.touched.name && formik.errors.name ? (
            <span className="error-message">{formik.errors.name}</span>
          ) : null}
          <FormLabel htmlFor="email" className="lab">
            Business Email
          </FormLabel>
          <InputGroup className="int-grp">
            <InputLeftElement
              pointerEvents="none"
              m="15px 1px"
              fontSize="20px"
              color="yellow.500"
              children={<MdEmail />}
            />
            <Input
              type="name"
              placeholder="hello@business.com"
              width="100%"
              // h="73px"
              borderRadius="0px 11px 11px 11px"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="input-ht"
            />
          </InputGroup>
          {formik.touched.email && formik.errors.email ? (
            <span className="error-message">{formik.errors.email}</span>
          ) : null}

          <FormLabel htmlFor="phone_number" className="lab">
            Phone Number
          </FormLabel>
          <InputGroup className="int-grp">
            <InputLeftElement
              pointerEvents="none"
              m="15px 1px"
              fontSize="20px"
              color="yellow.500"
              children={<MdWifiCalling3 />}
            />
            <Input
              type="name"
              placeholder="08012345678"
              width="100%"
              // h="73px"
              borderRadius="0px 11px 11px 11px"
              name="phone_number"
              id="phone_number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone_number}
              className="input-ht"
            />
          </InputGroup>
          {formik.touched.phone_number && formik.errors.phone_number ? (
            <span className="error-message">{formik.errors.phone_number}</span>
          ) : null}

          <div
            style={{
              display: "flex",
              justifyContent: "spaceBetween",
              width: "97%",
              margin: "0 auto",
            }}
          >
            <div style={{ width: "49%" }}>
              <FormLabel htmlFor="address" className="lab">
                Address
              </FormLabel>
              <InputGroup className="int-grp">
                <InputLeftElement
                  pointerEvents="none"
                  m="15px 1px"
                  fontSize="20px"
                  color="yellow.500"
                  children={<FaRegAddressBook />}
                />
                <Input
                  type="name"
                  placeholder="Ibadan"
                  width="100%"
                  // h="73px"
                  borderRadius="0px 11px 11px 11px"
                  name="address"
                  id="address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                  className="input-ht"
                />
              </InputGroup>
              {formik.touched.address && formik.errors.address ? (
                <span className="error-message">{formik.errors.address}</span>
              ) : null}
            </div>

            <div style={{ width: "49%" }}>
              <FormLabel htmlFor="industry" className="">
                Industry
              </FormLabel>
              <InputGroup className="int-grp">
                <InputLeftElement
                  pointerEvents="none"
                  m="15px 1px"
                  fontSize="20px"
                  color="yellow.500"
                  children={<FaIndustry />}
                />
                <Input
                  type="name"
                  placeholder="08012345678"
                  width="100%"
                  // h="73px"
                  borderRadius="0px 11px 11px 11px"
                  name="industry"
                  id="industry"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.industry}
                  className="input-ht"
                />
              </InputGroup>
              {formik.touched.industry && formik.errors.industry ? (
                <span className="error-message">{formik.errors.industry}</span>
              ) : null}
            </div>
          </div>

          <FormLabel htmlFor="password" className="lab">
            Password
          </FormLabel>
          <InputGroup className="int-grp">
            <div>
              <InputLeftElement
                pointerEvents="none"
                m="15px 1px"
                fontSize="20px"
                color="yellow.500"
                children={<FaLock />}
              />
              <InputRightElement
                pointerEvents="visible"
                m="15px 15px"
                color="yellow.500"
              >
                <Button
                  onClick={handleClick}
                  fontSize="25px"
                  size="sm"
                  b="transparent"
                  cursor="pointer"
                >
                  {show ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputRightElement>
            </div>
            <Input
              type={show ? "name" : "password"}
              placeholder="*******"
              width="100%"
              // h="73px"
              borderRadius="0px 11px 11px 11px"
              style={{ paddingLeft: "40px" }}
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="input-ht"
            />
          </InputGroup>
          {formik.touched.password && formik.errors.password ? (
            <span className="error-message">{formik.errors.password}</span>
          ) : null}
          <div className="btn-cent" style={{ paddingBottom:'3rem'}}>
            <Button
              mt={3}
              bg={yellowbtn}
              width="95%"
              h="55px"
              borderRadius="0px 11px 11px 11px"
              type="submit"
              color="white"
              _hover={{ bg: "#1A202C" }}
              isLoading={isLoading}
              loadingText="Sign Up..."
              spinnerPlacement="end"
            >
              Continue
            </Button>
          </div>
        </div>
        <Text
          fontSize="16px"
          // lineHeight="5"
          style={{
            justifyContent: "center",
            display: "flex",
            paddingTop: "0.2rem",
            paddingBottom: "0.4rem",
          }}
        >
          Already have an account?
          <Text as={RLink} pl="2" to="/business-signin" color="yellow.500">
            Login
          </Text>
        </Text>
      </form>
    </div>
  );
}
