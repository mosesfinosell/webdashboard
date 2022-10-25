// import {
//   Box,
//   Text,
//   Stack,
//   Heading,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   Flex,
// } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";
// import { RiTeamLine } from "react-icons/ri";
// import AddMoneyBusinessModal from "../addMoneyModal";

// import { useEffect } from "react";
// import { getBusinessUserDetails } from "../../../../../ReduxContianer/BussinessRedux/BusinessAction";
// import { useSelector, useDispatch } from "react-redux";

// import CreateCustomer from "../../Customer/createCustomer";
// import StoreProfile from "../../StoreProfile/storeProfile";
// import StoreMetric from "../Metric/storeMetric";
// import RequestMoney from "../RequestMoneyModal";
// import Spinner from "../../../../../components/Spinner";

// import { Top, Container } from "./homeBusiness.styles";

// export default function HomeBusiness() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const businessInfo = useSelector(
//     (state) => state.businessReducer.businessUserInfo
//   );

//   useEffect(() => {
//     dispatch(getBusinessUserDetails(businessInfo?.user_id));
//   }, [businessInfo?.user_id, dispatch]);

//   return (
//     <Container>
//       <Top>
//         <div className="tabs">
//           <button className="tab active">Savings Balance</button>
//           <button className="tab">Payments Balance</button>
//         </div>

//         <h2 className="balance">
//           ₦<span>267,974</span>
//         </h2>
//       </Top>

//       <Flex
//         direction="row"
//         justify="flex-start"
//         gap="3rem"
//         alignItems=""
//         w="100%"
//       >
//         <Stack>
//           {/* <Stack pt='23'>
// 					<Text color='gray' fontSize='14px'>
// 						Virtual Account Details
// 					</Text>
// 				</Stack> */}

//           <Stack>
//             {/* <Box
// 							as='button'
// 							h='160px'
// 							w='300px'
// 							borderRadius='0px 11px 11px 11px'
// 							border='0.5px solid #D9D9D9'>
// 							<Flex
// 								display='flex'
// 								alignItems='center'
// 								justifyContent='space-evenly'
// 								pb='20px'>
// 								<Stack>
// 									<Text color='gray' fontSize='12px'>
// 										Account Number
// 									</Text>
// 									<Text fontSize='16px'>01234567890</Text>
// 								</Stack>
// 								<Stack color='yellow.500' fontSize='14px' direction='row'>
// 									<Text>Copy</Text>
// 									<MdOutlineContentCopy />
// 								</Stack>
// 							</Flex>

// 							<Flex display='flex' justifyContent='space-evenly'>
// 								<Stack>
// 									<Text color='gray' fontSize='12px'>
// 										Bank
// 									</Text>
// 									<Text fontSize='14px'>Polaris Bank</Text>
// 								</Stack>
// 								<Stack>
// 									<Text color='gray' fontSize='12px'>
// 										Account Name
// 									</Text>
// 									<Text fontSize='14px'>Oreofe Ventures</Text>
// 								</Stack>
// 							</Flex>
// 						</Box> */}

//             <Stack pt="18px">
//               <Text color="gray" fontSize="14px">
//                 Action
//               </Text>
//             </Stack>
//             <Box
//               as="button"
//               h="95px"
//               w="320px"
//               borderRadius="0px 11px 11px 11px"
//               border="0.5px solid #D9D9D9"
//               display="flex"
//               alignItems="center"
//             >
//               <AddMoneyBusinessModal />
//               <Stack>
//                 <Text textAlign="left" fontSize="16px" fontWeight="bold">
//                   Add Money
//                 </Text>
//                 <Text color="gray" fontSize="14px">
//                   Add money to your account
//                 </Text>
//               </Stack>
//             </Box>
//             <Box
//               as="button"
//               h="95px"
//               w="320px"
//               borderRadius="0px 11px 11px 11px"
//               border="0.5px solid #D9D9D9"
//               display="flex"
//               alignItems="center"
//             >
//               <Stack color="yellow.500" px="32px">
//                 <RequestMoney />
//               </Stack>
//               <Stack>
//                 <Text textAlign="left" fontSize="16px" fontWeight="bold">
//                   Request Money
//                 </Text>
//                 <Text color="gray" fontSize="14px">
//                   Request money for products
//                 </Text>
//               </Stack>
//             </Box>
//             <Box
//               onClick={() => navigate("/business-dashboard/team")}
//               as="button"
//               h="95px"
//               w="320px"
//               borderRadius="0px 11px 11px 11px"
//               border="0.5px solid #D9D9D9"
//               display="flex"
//               alignItems="center"
//             >
//               <Stack fontSize="34px" color="yellow.500" px="32px">
//                 <RiTeamLine />
//               </Stack>
//               <Stack>
//                 <Text textAlign="left" fontSize="16px" fontWeight="bold">
//                   Team Management
//                 </Text>
//                 <Text color="gray" fontSize="14px">
//                   Add and Manage Teams
//                 </Text>
//               </Stack>
//             </Box>
//             <Box
//               as="button"
//               h="95px"
//               w="320px"
//               borderRadius="0px 11px 11px 11px"
//               border="0.5px solid #D9D9D9"
//               display="flex"
//               alignItems="center"
//             >
//               <Stack fontSize="34px" color="yellow.500" px="32px">
//                 <CreateCustomer />
//               </Stack>
//               <Stack>
//                 <Text textAlign="left" fontSize="16px" fontWeight="bold">
//                   Add Customer
//                 </Text>
//                 <Text color="gray" fontSize="14px">
//                   Create Customers
//                 </Text>
//               </Stack>
//             </Box>
//           </Stack>
//         </Stack>
//         <Stack>
//           <Stack
//             spacing={8}
//             // direction='row'
//             w="100%"
//             h="300px"
//             // position='relative'
//             // // left='85px'
//             // top='25px'
//             mt="50px"
//             border="1px solid #D9D9D9"
//             borderRadius="0px 11px 11px 11px"
//           >
//             <StoreMetric />
//           </Stack>
//           <Stack>
//             <Box
//               as="button"
//               h="95px"
//               w="100%"
//               borderRadius="0px 11px 11px 11px"
//               border="0.5px solid #D9D9D9"
//               display="flex"
//               alignItems="center"
//             >
//               <Stack fontSize="34px" color="yellow.500" px="32px">
//                 <StoreProfile />
//               </Stack>
//               <Stack>
//                 <Text textAlign="left" fontSize="16px" fontWeight="bold">
//                   Store Profile
//                 </Text>
//                 <Text color="gray" fontSize="14px">
//                   Edit Store Profile
//                 </Text>
//               </Stack>
//             </Box>
//           </Stack>
//         </Stack>
//       </Flex>
//       {/* <Stack>
// 				<Qrcode />
// 			</Stack> */}
//     </Container>
//   );
// }
