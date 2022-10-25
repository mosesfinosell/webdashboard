import React from "react";
import { RiHomeSmile2Line } from "react-icons/ri";
import { IoExitOutline, IoBusinessOutline } from "react-icons/io5";
import { BiStore } from "react-icons/bi";
import { MdAddchart } from "react-icons/md";
import { GiBanknote } from "react-icons/gi";

export const BusinessSidebarData = [
  { title: "Home", icon: <RiHomeSmile2Line />, link: "/business-dashboard" },
  {
    title: "Storelink",
    icon: <BiStore />,
    link: "/business/store",
  },
  { title: "Order", icon: <MdAddchart />, link: "/business-order" },
  { title: "Payment", icon: <GiBanknote />, link: "/business-payment" },
  { title: "Account", icon: <IoBusinessOutline />, link: "/help" },

  { title: "Logout", icon: <IoExitOutline />, link: "" },
];
