import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Link,
  Stack,
  Container,
  Flex,
  Image,
  Avatar,
  Text,
  Center,
  AvatarBadge,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { RiHomeSmile2Line } from "react-icons/ri";
import { MdAddchart, MdManageAccounts } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { BsJournalText } from "react-icons/bs";
import { GiBanknote } from "react-icons/gi";
import { FaStore, FaSignOutAlt } from "react-icons/fa";
import { SideBarComponent } from "../../SideBarComponent/SideBarComponent";
import { SideBarContainer, Navigation, Logout } from "./sidebBar.styles";
import "../../../components/sidebar.css";
import Logomark from "../../../assets/Logomark.svg";
import { getUser } from "../../../utils/helper";
import { getProfile } from "../../../network/profile";

export function SideBar() {
  const navigate = useNavigate();
  const { data } = useQuery("business-profile", () => getProfile());

  const businessInfo = getUser();
  const tabs = [
    {
      icon: <RiHomeSmile2Line />,
      label: "Home",
      link: "/business-dashboard/home",
    },
    {
      label: "Store",
      link: "/business-dashboard/store-link",
      icon: <BiStore />,
    },
    {
      label: "Inventory",
      link: "/business-dashboard/store-inventory",
      icon: <FaStore />,
    },
    {
      label: "Invoice",
      link: "/business-dashboard/invoice",
      icon: <BsJournalText />,
    },
    {
      label: "Orders",
      link: "/business-dashboard/order",
      icon: <MdAddchart />,
    },
    {
      label: "Payment",
      link: "/business-dashboard/payment",
      icon: <GiBanknote />,
    },
    {
      label: "Account",
      link: "/business-dashboard/account",
      icon: <MdManageAccounts />,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <SideBarContainer>
        <div>
          <Stack mb="100px">
            <Flex display="flex" direction="column" px="25px">
              <Stack px="20px">
                <Avatar src={businessInfo.business_image}>
                  <AvatarBadge boxSize="1em" bg="green.500" />
                </Avatar>
              </Stack>
              <Stack>
                <Text color="black" fontWeight="bold" fontSize="14px">
                  Hi, {data ? data.name : businessInfo.business_name}
                </Text>
              </Stack>
            </Flex>
          </Stack>
          <Navigation>
            {tabs &&
              tabs.map((tab, index) => {
                return (
                  <SideBarComponent
                    key={index}
                    label={tab.label}
                    icon={tab.icon}
                    link={tab.link}
                  />
                );
              })}

            <Logout onClick={() => handleLogout()}>
              <span className="icon">
                <FaSignOutAlt />
              </span>
              <p cursor="pointer">Logout</p>
            </Logout>
          </Navigation>
        </div>
        <div className="logo">
          <Image name="logo" onClick={() => navigate("/")} src={Logomark} />
        </div>
      </SideBarContainer>
    </>
  );
}
