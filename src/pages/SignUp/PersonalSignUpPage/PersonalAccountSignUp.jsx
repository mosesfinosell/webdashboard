import { useFormik } from "formik";
import { Formik, Form, Field } from "formik";
import axios from "axios";
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
  Image,
  Box,
  createStandaloneToast,
  Container,
} from "@chakra-ui/react";

import * as Yup from "yup";
import { MdEmail, MdWifiCalling3 } from "react-icons/md";
import { FaUser, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";
import { useColorModeValue } from "@chakra-ui/color-mode";
import logo from "../../../assets/Logomark.png";
import { Link as RLink } from "react-router-dom";
import { useState } from "react";
// import {useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { Spinner } from "@chakra-ui/react";
// import { personalUserSignUp } from "../../../ReduxContianer/PersonalRedux/PersonalAction";

import "../../../components/auth.css";
export default function PersonalAccountSignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter your name"),
    phone_number: Yup.number()
      .typeError("Phone number must be digits")
      .required("Phone number is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .min(5, "Too short")
      .max(9, "Okay")
      .required("Password is required"),
  });
  const initialValues = {
    name: "",
    phone_number: "",
    email: "",
    password: "",
    account_type: "personal",
  };

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
        return history("/personal-signin");
      })
      .catch((error) => {
        setIsLoading(false);
        toast({
          position: "top",
          title: `Unsuccessful Attempt`,
          description: `${error.response.data.error}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        tools.resetForm();
        return error;
      });
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const yellowbtn = useColorModeValue("yellow.500");

  const history = useNavigate();

  const [show, setShow] = useState(false);

  // Function
  const handleClick = () => setShow(!show);
  const toast = createStandaloneToast();

  return (
    <div className="cover">
      <form onSubmit={formik.handleSubmit}>
        <div className="imgcontainer">
          <Image mb="15" src={logo} alt="logo" />
        </div>
        <Text
          fontSize="36px"
          mt="2"
          fontWeight="bold"
          lineHeight="3"
          className="welcome"
        >
          Create Account
        </Text>
        <Text color="gray" className="details">
          Use your personal information
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
              children={<FaUser />}
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
              className="inp-ht"
            />
          </InputGroup>
          {formik.touched.name && formik.errors.name ? (
            <span className="error-message">{formik.errors.name}</span>
          ) : null}
          <FormLabel htmlFor="email" className="lab">
            Email
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
              placeholder="hello@example.com"
              width="100%"
              // h="73px"
              borderRadius="0px 11px 11px 11px"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="inp-ht"
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
              className="inp-ht"
            />
          </InputGroup>
          {formik.touched.phone_number && formik.errors.phone_number ? (
            <span className="error-message">{formik.errors.phone_number}</span>
          ) : null}

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
              className="inp-ht"
            />
          </InputGroup>
          {formik.touched.password && formik.errors.password ? (
            <span className="error-message">{formik.errors.password}</span>
          ) : null}
          <div className="btn-cent">
            <Button
              mt={3}
              mb={1}
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
          <Text as={RLink} pl="2" to="/personal-signin" color="yellow.500">
            Login
          </Text>
        </Text>
      </form>
    </div>
  );
}
