import React from "react";
import { Text, Image, Avatar } from "@chakra-ui/react";
import "../../components/sidebar.css";
import { PrivateSidebarData } from "../../../src/components/PrivateSidebarData";
import { FaAngleDown } from "react-icons/fa";
import { RiHomeSmile2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logomark from "../../assets/Logomark.svg";
import { MdAddchart } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiBanknote } from "react-icons/gi";
import { IoExitOutline, IoBusinessOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import user1 from "../../assets/user1.png";
function BusinessLayout({ children }) {
  const [sidebarActive, setSideBarActive] = useState(false);
  const businessInfo = useSelector(
    (state) => state.businessReducer.businessUserInfo
  );
  const name = businessInfo.name;
  return (
    <>
      <div className="sidebar">
        {/* <div
            
            style={{
              display: "flex",
              alignItems: "center",
              // justifyContent: "spaceBetween",
            }}
          >
            <Avatar name="user" src={user1} />
            
            <div style={{display: "flex",alignItems: "center",}}>
            {<Text>Hello {name}</Text>}
              <FaAngleDown />
            </div>
          </div> */}
        <div className="sidebar-inner">
          <Link to="/business-dashboard" id="first-link">
            {" "}
            <div className="sidebar-icons">
              {" "}
              <RiHomeSmile2Line /> <p className="icon-name">Home</p>
            </div>
          </Link>
          <Link to="/business/storelink">
            <div className="sidebar-icons">
              {" "}
              <BiStore /> <Text className="icon-name">Store</Text>
            </div>
          </Link>
          <Link to="/business/orders">
            <div className="sidebar-icons">
              {" "}
              <MdAddchart /> <Text className="icon-name">Orders</Text>
            </div>
            {/* <i className="fa fa-user" aria-hidden="true"></i>
            <span className="icon-name">Orders</span> */}
          </Link>
          <Link to="/business/payment">
            <div className="sidebar-icons">
              {" "}
              <GiBanknote /> <Text className="icon-name">Payments</Text>
            </div>
            {/* <i className="fa fa-user" aria-hidden="true"></i>
            <span className="icon-name">Payment</span> */}
          </Link>
          <Link to="/business/account">
            <div className="sidebar-icons">
              {" "}
              <IoBusinessOutline /> <Text className="icon-name">Account</Text>
            </div>
          </Link>

          <Link to="">
            <div className="sidebar-icons">
              {" "}
              <IoExitOutline /> <Text className="icon-name">Logout</Text>
            </div>
            {/* <i className="fa fa-sign-out"></i>
            <span className="icon-name">Logout</span> */}
          </Link>
        </div>
        <div className="logomark">
          <Image src={Logomark} alt="logo" />
        </div>
      </div>

      <div className="content">{children}</div>
      {/* <div className="app">
        <div className="menu-toggle" onClick={toggleHamburger}>
          <div className="hamburger">
            <span></span>
          </div>
        </div>

        <aside className={`${sidebarActive ? "sidebar is-active" : "sidebar"}`}>
          <h3>Menu</h3>

          <nav className="menu">
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
                    <div id="title">
                      <Text>{val.title}</Text>
                    </div>
                  </li>
                );
              })}
            </ul>

            
          </nav>
        </aside>

        <main class="content">{children}</main>
      </div> */}
      {/* <div className="sidebar">
        <Link to="/home">
          {" "}
          <span>
            {" "}
            <RiHomeSmile2Line />
          </span>
          Home
        </Link>

        <Link className="link" to="/news">
          News
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
        <Link className="link" to="/about">
          Aboutiii
        </Link>
      </div>

      <div class="content">..</div> */}
      {/* <ul className="sidebar-list">
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
        </ul> */}

      {/* {PrivateSidebarData.map((val, key) => {
          return (
            <a
              key={key}
              href={val.link}
            //   id={window.location.pathname === val.link ? "active" : ""}
            >
              {val.title}
            </a>
          );
        })} */}
      {/* <a className="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a> */}

      {/* PAGE CONTENT */}
      {/* <div class="content">{children}</div> */}
    </>
  );
}

export default BusinessLayout;
