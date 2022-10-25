import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoMark from "../SVG/LogoMark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@chakra-ui/react";

import {
  faBars,
  faAngleDown,
  faUniversity,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { marginMobile, PrimaryButton, margin } from "../../Styles";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Header = ({ LogoImg = LogoMark, link = "/" }) => {
  const yellowbtn = useColorModeValue("yellow.500");
  const navigate = useNavigate();

  // const handleClick = () => history('/account')
  const handleDropdown = (e, checkbox) => {
    if (e.target.tagName === "A") {
      checkbox.checked = false;
    }
  };

  useEffect(() => {
    const nav = document.getElementsByTagName("nav")[0];
    const checkbox = document.getElementById("menu-bar");

    nav.addEventListener("click", (e) => handleDropdown(e, checkbox));

    return nav.removeEventListener("click", (e) => handleDropdown(e, checkbox));
  }, []);

  return (
    <Head>
      <HeadContent>
        <Logo to={link}>
          <LogoImg />
        </Logo>
        <input id="menu-bar" type="checkbox" />

        <Mobile>
          <PrimaryButton>
            <Link to="/business-signup">Create Account</Link>
          </PrimaryButton>
          <label htmlFor="menu-bar" className="checkbtn">
            <FontAwesomeIcon icon={faBars} className="socials" />
          </label>
        </Mobile>

        <NavBar>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <Products>
              <a>
                Products
                <FontAwesomeIcon
                  icon={faAngleDown}
                  style={{ paddingLeft: "3px", paddingTop: "3px" }}
                />
              </a>
              <div className="navbar-dropdown">
                <Link to="/individual">
                  <DropDownItem>
                    <div className="icon">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <p>Individual</p>
                  </DropDownItem>
                </Link>
                <div className="vl"></div>
                <Link to="/business-home">
                  <DropDownItem>
                    <div className="icon">
                      <FontAwesomeIcon icon={faUniversity} />
                    </div>
                    <p>Business</p>
                  </DropDownItem>
                </Link>
              </div>
            </Products>
            {/* <li>
              <Link to="/pricing">Pricing</Link>
            </li> */}
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
          <Account>
            {/* <Link to="/business-login">Log in</Link> */}
            <PrimaryButton onClick={() => navigate("/business-signup")}>
              <span>Create Account</span>
            </PrimaryButton>
          </Account>
        </NavBar>
      </HeadContent>
    </Head>
  );
};

const Logo = styled(Link)`
  font-size: 2rem;
  color: #273b4a;
  text-decoration: none;
  flex-grow: 1;
`;
const NavBar = styled.nav`
  flex-grow: 1.5;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  text-align: center;
  transition: all 0.5s;
  background: #fff;
  border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
  transform-origin: top;
  transform: scaleY(0);
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  ul {
    justify-content: space-evenly;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
  }

  a {
    white-space: nowrap;
    font-weight: 500;
    color: var(--finosellBluePrimary);
  }

  @media only screen and (min-width: 800px) {
    position: static;
    transform: scaleY(1);
    flex-direction: row;
    opacity: 1;
    display: flex;
    justify-content: space-between;
    border: none;
    height: initial;
    ul {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: row;
    }
  }
`;
const HeadContent = styled.div`
  max-width: 150rem;
  width: 95%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  input:checked ~ ${NavBar} {
    transform: scaleY(1);
    opacity: 1;
  }
`;
const Head = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 1000;
  height: 6.5rem;
  font-size: 1.8rem;
  line-height: 1.6rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  ul {
    list-style: none;
  }
  #menu-bar {
    display: none;
  }
  @media screen only and (min-width: 800px) {
    height: 9.5rem;
    line-height: 2.6rem;
    font-size: 2.2rem;
  }
`;
const Mobile = styled.div`
  display: flex;
  align-items: center;
  ${PrimaryButton} {
    margin-right: 2.5rem;
  }
  @media only screen and (min-width: 800px) {
    display: none;
  }
`;
const Pages = styled.ul``;
const Account = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  ${PrimaryButton} {
    display: none;
    margin-left: 2.5rem;
  }

  @media only screen and (min-width: 800px) {
    ${PrimaryButton} {
      display: block;
    }
  }
`;
const Products = styled.li`
  position: relative;
  .vl {
    /* border-left: 0.2rem solid #555E66; */
    height: 4.4rem;
    background: #f5f5f5;
    width: 0.2rem;
    border-radius: 2rem;
    margin: 0 3rem;
  }
  .navbar-dropdown {
    display: none;
    align-items: center;
    justify-content: space-evenly;
    padding: 1rem 2.2rem;
    position: static;
    top: 100%;

    background: #ffffff;
    z-index: 1;
    border-radius: 2rem;
  }
  &:hover .navbar-dropdown,
  &:focus .navbar-dropdown {
    display: flex;
  }
  @media only screen and (min-width: 800px) {
    .navbar-dropdown {
      position: absolute;
      left: -160%;
    }
  }
`;
const DropDownItem = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1.8rem;
  &:hover {
    background: #f5f5f5;
    border-radius: 1rem;
  }
  .icon {
    background: #f5f5f5;
    border-radius: 100%;
    width: 5rem;
    height: 5rem;
    padding: 0.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #555e66;
    margin-right: 1rem;
  }
`;

export default Header;
