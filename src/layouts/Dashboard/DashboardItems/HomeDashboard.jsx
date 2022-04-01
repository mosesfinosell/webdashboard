import {
  Grid,
  Box,
  GridItem,
  Container,
  Text,
  Stack,
  Center,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { BsPlusSquare, BsArrowDownLeftSquare, BsPhone } from "react-icons/bs";
import { VscRocket } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import AddMoneyModal from "../../HomeItemsModal/AddMoney/addMoneyModal";
// import SendMoneyModal from '../../HomeItemsModal/SendMoney/sendMoneyModal'
import BuyAirtimeModal from "../../HomeItemsModal/BuyAirtime/BuyAirtimeModal";
import { getUserDetails } from "../../../ReduxContianer/PersonalRedux/PersonalAction";
// import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";

export default function HomeDash() {

  const dispatch = useDispatch();
  const personalSignIn = useSelector((state) => state.personalReducer);
  const userInfo = useSelector((state) => state.personalReducer.userInfo);
  console.log(useSelector((state) => state.personalReducer),'PERSONNN')

  // const personalSignIn = useSelector((state) => state.personalSignIn);
  // const { userDetails } = personalSignIn
  //   const {message} = userDetails
  // 		const getUser = useSelector((state) => state.getUser);
  // 		const { users } = getUser;
  // 		// const { message } = users;
  // 	console.log(users)

  useEffect(() => {
    dispatch(getUserDetails(userInfo.user_id));
  }, [userInfo.user_id, dispatch]);

  return (
    <Container m="40px" maxW="container.lg">
      <Grid h="600px" templateColumns="repeat(5, 1fr)">
        <GridItem colSpan={4} rowSpan={6} bg="white">
          <Tabs variant="unstyled">
            <Center>
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
                  Wallet Balance
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
                  Escrow Balance
                </Tab>
              </TabList>
            </Center>
            <TabPanels>
              <TabPanel>
                <Stack>
                  <Heading as="h6">₦45000</Heading>
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack>
                  <Heading as="h6">₦34000</Heading>
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Tabs />

          <Stack pl="30">
            <Stack pt="23">
              <Text color="gray">Action</Text>
            </Stack>

            <Box
              as="button"
              h="100px"
              w="301px"
              borderRadius="0px 11px 11px 11px"
              border="0.5px solid #D9D9D9"
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              {/* <AddMoneyModal /> */}
              <Stack>
                <Text>Add Money</Text>
                <Text>Space for subtitle text</Text>
              </Stack>
            </Box>
            <Box
              as="button"
              h="100px"
              w="301px"
              borderRadius="0px 11px 11px 11px"
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
                fontSize="24px"
              >
                <BsArrowDownLeftSquare />
              </Stack>
              <Stack>
                <Text>Request Money</Text>
                <Text>Space for subtitle text</Text>
              </Stack>
            </Box>
            <Box
              as="button"
              h="100px"
              w="301px"
              borderRadius="0px 11px 11px 11px"
              border="0.5px solid #D9D9D9"
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <BuyAirtimeModal />
              <Stack>
                <Text>Buy Airtime</Text>
                <Text>Space for subtitle text</Text>
              </Stack>
            </Box>
          </Stack>
        </GridItem>
        <GridItem colStart={6} colEnd={9} h="10" bg="white">
          <Stack m="10px">
            <Text color="gray">Transactions History</Text>
          </Stack>

          <Tabs variant="unstyled">
            <Center>
              <Box
                h="100px"
                w="400px"
                borderRadius="0px 11px 0px 0px"
                border="0.5px solid #D9D9D9"
                display="flex"
                alignItems="center"
                justifyContent="space-evenly"
              >
                <TabList>
                  <Tab fontSize="16px" fontWeight="bold" color="black">
                    Payment
                  </Tab>
                  <Tab fontSize="16px" fontWeight="bold" color="black">
                    Withdrawal
                  </Tab>
                </TabList>
              </Box>
            </Center>
            <Center>
              <TabPanels>
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
                      <BsPlusSquare />
                    </Stack>
                    <Stack pr="150px">
                      <Text>Transfer Funds</Text>
                      <Text color="gray" fontSize="12px">
                        Success
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
                      color="gray.500"
                      bg="gray.100"
                      borderRadius="0px 8px 8px 8px"
                      border="0.2px solid gray.100"
                      p="12px"
                      fontSize="22px"
                    >
                      <VscRocket />
                    </Stack>
                    <Stack pr="150px">
                      <Text>Send Airtime</Text>
                      <Text color="gray" fontSize="12px">
                        Pending
                      </Text>
                    </Stack>

                    <Stack>
                      <Text fontSize="12px" color="gray">
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
                      color="red.500"
                      bg="red.100"
                      borderRadius="0px 8px 8px 8px"
                      border="0.2px solid red.100"
                      p="12px"
                      fontSize="22px"
                    >
                      <BsPhone />
                    </Stack>
                    <Stack mr="150px">
                      <Text>Buy Airtime</Text>
                      <Text color="gray" fontSize="12px">
                        Success
                      </Text>
                    </Stack>

                    <Stack>
                      <Text fontSize="12px" color="red.500">
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
                    <Stack color="yellow.500" fontSize="24px">
                      <BsPlusSquare />
                    </Stack>
                    <Stack pr="150px">
                      <Text>Airtime</Text>
                      <Text color="gray" fontSize="12px">
                        Success
                      </Text>
                    </Stack>

                    <Stack>
                      <Text fontSize="12px" color="gray">
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
                    <Stack color="yellow.500" fontSize="24px">
                      <BsPlusSquare />
                    </Stack>
                    <Stack pr="150px">
                      <Text>Airtime Buy</Text>
                      <Text color="gray" fontSize="12px">
                        Success
                      </Text>
                    </Stack>

                    <Stack>
                      <Text fontSize="12px" color="gray">
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
                    <Stack color="yellow.500" fontSize="24px">
                      <BsPlusSquare />
                    </Stack>
                    <Stack pr="150px">
                      <Text>Buy Airtime</Text>
                      <Text color="gray" fontSize="12px">
                        Success
                      </Text>
                    </Stack>

                    <Stack>
                      <Text fontSize="12px" color="gray">
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
