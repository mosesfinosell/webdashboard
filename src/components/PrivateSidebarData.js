import React from "react";
import { RiHomeSmile2Line } from "react-icons/ri";
import { IoCardOutline, IoExitOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import delicon from "../assets/DealIcon.svg";

export const PrivateSidebarData = [
  { title: "Home", icon: <RiHomeSmile2Line />, link: "/personal-dashboard" },
  {
    title: "Deals",
    icon: <image src={delicon} h="17px" />,
    link: "/personal-deals",
  },
  { title: "Virtual Card", icon: <IoCardOutline />, link: "/virtual-card" },
  { title: "Account", icon: <BiUser />, link: "/account" },
  //   { title: "Help", icon: <IoExitOutline />, link: "/help" },
  //   { title: "Refer & Reward", icon: <IoExitOutline />, link: "/refer-reward" },
  { title: "Logout", icon: <IoExitOutline />, link: "" },
];
