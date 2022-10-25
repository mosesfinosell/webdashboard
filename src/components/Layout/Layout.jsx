import React from "react";
import { Text, Image } from "@chakra-ui/react";
import "../../components/sidebar.css";
import { PrivateSidebarData } from "../PrivateSidebarData";
import { FaAngleDown } from "react-icons/fa";
import { RiHomeSmile2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logomark from "../../assets/Logomark.svg";
function Layout({ children }) {
  const [sidebarActive, setSideBarActive] = useState(false);
  const toggleHamburger = () => {
    setSideBarActive(!sidebarActive);
  };
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-inner">
          <Link className="active" to="/personal-dashboard" id="first-link">
            {" "}
            <i className="fa fa-home" aria-hidden="true"></i>
            <span className="icon-name">Home</span>
          </Link>
          <Link to="/personal-deals">
            <i className="fa fa-user" aria-hidden="true"></i>{" "}
            <span className="icon-name">Deals</span>
          </Link>
          <Link to="/personal-orders">
            <i className="fa fa-user" aria-hidden="true"></i>
            <span className="icon-name">Orders</span>
          </Link>
          <Link to="/personal-account">
            <i className="fa fa-user" aria-hidden="true"></i>
            <span className="icon-name">Account</span>
          </Link>

          <Link to="">
            <i className="fa fa-sign-out"></i>
            <span className="icon-name">Logout</span>
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

export default Layout;
