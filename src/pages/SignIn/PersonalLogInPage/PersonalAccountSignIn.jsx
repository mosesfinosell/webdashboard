import { useFormik } from "formik";
import {
  Center,
  Input,
  InputRightElement,
  InputLeftElement,
  InputGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Box,
  Stack,
  Image,
  Text,
  Container,
  createStandaloneToast,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link as RLink } from "react-router-dom";
import logo from "../../../assets/Logomark.png";
import { MdWifiCalling3 } from "react-icons/md";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../../../ReduxContianer/PersonalRedux/PersonalAction";
import "../../../components/auth.css";
import axios from "axios";

export default function PersonalAccountSignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    phonenumber: Yup.number()
      .typeError("Phone number must be digits")
      .required("Phone number is required"),
    password: Yup.string().required("Password is needed"),
  });
  const initialValues = {
    phonenumber: "",
    password: "",
  };

  const onSubmit = (values, tools) => {
    setIsLoading(true);
    axios
      .post("https://finosell.link/api/v2/auths/login", values)
      .then((response) => {
        setIsLoading(false);
        const userDetails = response.data.message;

        dispatch(getUserInfo(userDetails));
        toast({
          position: "top",
          title: `Welcome ${userDetails.name}`,
          description: "You have successfully login",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        localStorage.setItem("password", response.data.message.password);
        tools.resetForm();
        return history("/personal-dashboard");
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
  const [show, setShow] = useState(false);

  // Redux
  const dispatch = useDispatch();

  const history = useNavigate();
  const toast = createStandaloneToast();

  // Function
  const handleClick = () => setShow(!show);

  return (
    <div className="cover">
      <form onSubmit={formik.handleSubmit}>
        <div className="imgcontainer">
          <Image mb="15" src={logo} alt="logo" />
        </div>
        <Text
          fontSize="36px"
          mt="10"
          fontWeight="bold"
          lineHeight="5"
          className="welcome"
        >
          Welcome back
        </Text>
        <Text color="gray" className="details">
          Enter your login details
        </Text>

        <div className="container">
          <FormLabel htmlFor="phonenumber">Phone Number</FormLabel>
          <InputGroup>
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
              name="phonenumber"
              id="phonenumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phonenumber}
              className="inp-ht"
            />
          </InputGroup>
          {formik.touched.phonenumber && formik.errors.phonenumber ? (
            <span className="error-message">{formik.errors.phonenumber}</span>
          ) : null}

          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup>
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              id="password"
              name="password"
              className="inp-ht"
            />
          </InputGroup>
          {formik.touched.phone_number && formik.errors.phone_number ? (
            <span className="error-message">{formik.errors.phone_number}</span>
          ) : null}

          <Button
            mt={4}
            bg={yellowbtn}
            width="100%"
            h="70px"
            borderRadius="0px 11px 11px 11px"
            type="submit"
            color="white"
            _hover={{ bg: "#1A202C" }}
            isLoading={isLoading}
            loadingText="Sign In..."
            spinnerPlacement="end"
          >
            Login
          </Button>
        </div>
        <Text
          as={RLink}
          pl="2"
          to="/forget-password"
          color="yellow.500"
          style={{
            justifyContent: "center",
            display: "flex",
            paddingBottom: "2rem",
          }}
        >
          Forgot Password
        </Text>
      </form>
    </div>
  );
}
