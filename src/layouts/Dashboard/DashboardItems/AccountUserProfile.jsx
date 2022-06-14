import {
  Grid,
  Box,
  GridItem,
  Container,
  Text,
  Stack,
  Center,
  Flex,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Input,
  InputLeftElement,
  InputRightElement,
  InputGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { MdEmail, MdWifiCalling3 } from "react-icons/md";
import { FaUser, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { BiPencil } from "react-icons/bi";
import accUser from "../../../assets/accuser.svg";
import { useSelector } from "react-redux";
import Layout from "../../../components/Layout/Layout";
import "../../Dashboard/Dash.css";

export default function AccountUserProfile() {
  const yellowbtn = useColorModeValue("yellow.500");

  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [oldpassword, setOldPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);

  // Function
  const handleClick = () => setShow(!show);

  // Redux

  const personalSignIn = useSelector((state) => state.personalReducer);
  const userInfo = useSelector((state) => state.personalReducer.userInfo);
  console.log(userInfo, "USEFUL INFO");
  //  const personalSignIn = useSelector((state) => state.personalSignIn);
  // const { user } = personalSignIn;
  //   const {userDetails} = user
  //   const {message} = userDetails

  return (
    <Layout>
      <div className="dash-cover">
        <Tabs variant="unstyled">
          <div className="tab-click">
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
                Profile
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
                Password
              </Tab>
            </TabList>
          </div>
          <TabPanels>
            <div style={{width: "100%", backgroundColor: "yellow"}}>
            <TabPanel>
              <div
                className="tab-inners"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "spaceBetween",
                  backgroundColor: "green"
                }}
              >
                <div className="tab-inner-left">
                  <div className="tab-profile">
                    <Heading fontSize="16px" as="h6">
                      Change Profile Picture
                    </Heading>
                    <Text fontSize="14px" color="gray">
                      Choose a new profile to be used across Finosell
                    </Text>
                  </div>
                  <div className="tab-profile">
                    <Heading fontSize="16px" as="h6">
                      Full name
                    </Heading>
                    <Text fontSize="14px" color="gray">
                      Choose a new profile to be used across Finosell
                    </Text>
                  </div>
                  <div className="tab-profile">
                    <Heading fontSize="16px" as="h6">
                      Full name
                    </Heading>
                    <Text fontSize="14px" color="gray">
                      Choose a new profile to be used across Finosell
                    </Text>
                  </div>
                  <div className="tab-profile">
                    <Heading fontSize="16px" as="h6">
                      Phone Number
                    </Heading>
                    <Text fontSize="14px" color="gray">
                      Choose a new profile to be used across Finosell
                    </Text>
                  </div>
                </div>
                <div className="tab-inner-right">
                  <Stack alignItems="start" pb="30px">
                    <Image src={accUser} alt="user" h="80px" />
                    <Box
                      color="white"
                      fontSize="18px"
                      w="30px"
                      border="0.5px solid yellow.500"
                      bg="yellow.500"
                      p="5px"
                      borderRadius="0px 8px 8px 8px"
                      position="relative"
                      bottom="30px"
                      left="50px"
                    >
                      <BiPencil />
                    </Box>
                  </Stack>
                  <div>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        m="12px 1px"
                        fontSize="18px"
                        color="yellow.500"
                        children={<FaUser />}
                      />
                      <InputRightElement
                        pointerEvents="none"
                        m="15px 15px"
                        color="gray.500"
                      >
                        <BiPencil />
                      </InputRightElement>
                      <Input
                        mb="20px"
                        value={name}
                        placeholder="Jumoke Odetola"
                        width="300px"
                        h="60px"
                        borderRadius="0px 11px 11px 11px"
                      />
                    </InputGroup>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        m="12px 1px"
                        fontSize="20px"
                        color="yellow.500"
                        children={<MdEmail />}
                      />
                      <InputRightElement
                        pointerEvents="none"
                        m="15px 15px"
                        color="gray.500"
                      >
                        <BiPencil />
                      </InputRightElement>
                      <Input
                        mb="20px"
                        value={name}
                        placeholder="hello@finosell.com"
                        width="300px"
                        h="60px"
                        borderRadius="0px 11px 11px 11px"
                      />
                    </InputGroup>
                    <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        m="12px 1px"
                        fontSize="20px"
                        color="yellow.500"
                        children={<MdWifiCalling3 />}
                      />
                      <InputRightElement
                        pointerEvents="none"
                        m="15px 15px"
                        color="gray.500"
                      >
                        <BiPencil />
                      </InputRightElement>
                      <Input
                        mb="20px"
                        value={name}
                        placeholder="23481234567"
                        width="300px"
                        h="60px"
                        borderRadius="0px 11px 11px 11px"
                      />
                    </InputGroup>
                  </div>
                </div>
              </div>
            </TabPanel>
            </div>
            <div>
            <TabPanel>
              <div
                style={{
                  // backgroundColor: "green",
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "left",
                  paddingLeft: "4rem",
                  paddingTop: "3rem",
                }}
              >
                <FormLabel htmlFor="password">Old Password</FormLabel>
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
                    h="73px"
                    borderRadius="0px 11px 11px 11px"
                    style={{ paddingLeft: "40px" }}
                    id="password"
                    name="password"
                  />
                </InputGroup>

                <FormLabel htmlFor="password">New Password</FormLabel>
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
                    h="73px"
                    borderRadius="0px 11px 11px 11px"
                    style={{ paddingLeft: "40px" }}
                    id="password"
                    name="password"
                  />
                </InputGroup>

                <FormLabel htmlFor="password">Confirm Password</FormLabel>
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
                    h="73px"
                    borderRadius="0px 11px 11px 11px"
                    style={{ paddingLeft: "40px" }}
                    id="password"
                    name="password"
                  />
                </InputGroup>
                <Button
                  mt={12}
                  bg={yellowbtn}
                  width="100%"
                  h="70px"
                  borderRadius="0px 11px 11px 11px"
                  type="submit"
                  color="white"
                  _hover={{ bg: "#1A202C" }}
                  loadingText="Sign In..."
                  spinnerPlacement="end"
                >
                  Save
                </Button>
              </div>
            </TabPanel>
            </div>
          </TabPanels>
        </Tabs>
      </div>
    </Layout>
  );
}
