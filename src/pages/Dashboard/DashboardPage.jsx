import {
  Grid,
  GridItem,
  Box,
  Center,
  Text,
  Image,
  Flex,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import HomeDash from "./DashboardItems/HomeDashboard";
import DealDashboard from "./DashboardItems/DealDashboard";
import VirtualCard from "./DashboardItems/VirtualCard";
import AccountUserProfile from "./DashboardItems/AccountUserProfile";

import user1 from "../../assets/user1.png";
import { FaAngleDown } from "react-icons/fa";
import { RiHomeSmile2Line } from "react-icons/ri";
import { IoCardOutline, IoExitOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import delicon from "../../assets/DealIcon.svg";
// import {useState,useEffect} from 'react'
import { useSelector } from "react-redux";
import "../../components/sidebar.css";
import { PrivateSidebarData } from "../../components/PrivateSidebarData";
import { Link } from "react-router-dom";

const  DashboardPage =({children})=> {
const personalSignIn = useSelector((state) => state.personalReducer);
  const userInfo = useSelector((state) => state.personalReducer.userInfo);
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
    <div className="s-layout">

<div className="s-layout__sidebar">
  <a className="s-sidebar__trigger" href="#0">
     <i className="fa fa-bars"></i>
  </a>

  <nav className="s-sidebar__nav">
     <ul>
        <li>
           <a className="s-sidebar__nav-link" href="#0">
              <i className="fa fa-home"></i><em>Home</em>
           </a>
        </li>
        <li>
           <a className="s-sidebar__nav-link" href="#0">
             <i className="fa fa-user"></i><em>My Profile</em>
           </a>
        </li>
        <li>
           <a className="s-sidebar__nav-link" href="#0">
              <i className="fa fa-camera"></i><em>Camera</em>
           </a>
        </li>
     </ul>
  </nav>
</div>


<main className="s-layout__content">
  {children}
  {/* <h1>Full View, Please!</h1> */}
</main>
</div>
    {/* <div className="sidebar">
      <ul className="sidebar-list">
        {PrivateSidebarData.map((val, key) => {
          return (
            <li
              className="sidebar-row"
              id={window.location.pathname === val.link ? "active" : ""}
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
            
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
            
            </li>
          );
        })}
      </ul>
    </div>
    */}
   
    </>
    // <Grid
    //   pl="25"
    //   templateRows="repeat(6, 1fr)"
    //   templateColumns="repeat(12, 1fr)"
    //   display="flex"
    // >
    //   <Tabs orientation="vertical" variant="unstyled">
    //     <GridItem rowSpan={7} colSpan={2} bg="white">
    //       <Box bg="white" w="300px" h="150vh" borderRight="0.3px solid #D9D9D9">
    //         <Center p="45px">
    //           <Flex display="flex" direction="row" alignItems="center">
    //             <Image mr="15px" src={user1} alt="user" />
    //             <Stack>{userInfo && <Text>Hello {userInfo.name}</Text>}</Stack>
    //             <Stack>
    //               <FaAngleDown />
    //             </Stack>
    //           </Flex>
    //         </Center>
    //         <TabList>
    //           <Tab fontSize="16px" color="black">
    //             <Stack pr="10px" fontSize="20px">
    //               <RiHomeSmile2Line />
    //             </Stack>
    //             Home
    //           </Tab>
    //           <Tab fontSize="16px" color="black">
    //             <Stack pr="10px">
    //               <Image src={delicon} h="17px" />
    //             </Stack>
    //             Deal
    //           </Tab>
    //           <Tab fontSize="16px" color="black">
    //             <Stack pr="10px" fontSize="20px">
    //               <IoCardOutline />
    //             </Stack>
    //             Virtual Card
    //           </Tab>
    //           <Tab fontSize="16px" color="black">
    //             <Stack pr="10px" fontSize="20px">
    //               <BiUser />
    //             </Stack>
    //             Account
    //           </Tab>
    //           <Tab fontSize="16px" color="black" onClick={handleLogout}>
    //             <Stack pr="10px" fontSize="20px">
    //               <IoExitOutline />
    //             </Stack>
    //             LogOut
    //           </Tab>
    //         </TabList>
    //       </Box>
    //     </GridItem>
    //     <GridItem colSpan={9} rowSpan={9} bg="white">
    //       <TabPanels>
    //         <TabPanel>
    //           <HomeDash />
    //         </TabPanel>
    //         <TabPanel>
    //           <DealDashboard />
    //         </TabPanel>
    //         <TabPanel>
    //           <VirtualCard />
    //         </TabPanel>
    //         <TabPanel>
    //           <AccountUserProfile />
    //         </TabPanel>
    //         <TabPanel>
    //           <DealDashboard />
    //         </TabPanel>
    //       </TabPanels>
    //     </GridItem>
    //   </Tabs>
    // </Grid>
  );
}
export default DashboardPage;