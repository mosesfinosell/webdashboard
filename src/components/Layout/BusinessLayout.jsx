import React from "react";
import {
  useNavigate,
  useLocation,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Text, Image, Avatar } from "@chakra-ui/react";
import "../../components/sidebar.css";
// import { FaAngleDown } from "react-icons/fa";
import { RiHomeSmile2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Logomark from "../../assets/Logomark.svg";
import { MdAddchart } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiBanknote } from "react-icons/gi";
import { IoExitOutline, IoBusinessOutline } from "react-icons/io5";
// import { sideBarItems } from './sideBarData'
import useOutsideClicks from "../../hooks/useOutsideClicks";
import { useSelector } from "react-redux";
// import BusinessDashboard from "../../pages/Dashboard/DashboardItems/BusinessDashboard"
// import HomeBusiness from "../../pages/Dashboard/BusinessDashboard/HomeBusiness/HomeBusiness"
// import StoreLink from '../../pages/Dashboard/BusinessDashboard/StoreLink/addUrlPage';
// import
// import user1 from "../../assets/user1.png";
// import SideBar from "./Bar";

function BusinessLayout({ children }) {
  const [sideBarItem, setSideBarItem] = useState(sideBarItems);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showMenu, setShowMenu] = useState();
  let mobileRef = useRef(null);
  let testRef = useState(null);
  const [isOutside, clickTarget] = useOutsideClicks([mobileRef, testRef]);
  let location = useLocation();
  let history = useNavigate();

  useEffect(() => {
    setSideBarItem((items) => {
      return items.map((item) => {
        if (location.pathname.includes(item.name)) {
          return { ...item, open: true };
        }
        return item;
      });
    });
  }, [location.pathname]);

  useEffect(() => {
    if (isOutside) {
      setShowMenu(false);
    }
  }, [clickTarget, isOutside]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <SideBar
        items={sideBarItem}
        setSideBarItem={setSideBarItem}
        // active={showMenu}
        // sidebarRef={mobileRef}
        // setShowMenu={setShowMenu}
        pathname={location.pathname}
      />
      <main>
        <div>{children}</div>
      </main>
    </>
  );
}

export default BusinessLayout;
