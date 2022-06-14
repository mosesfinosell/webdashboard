import {useState} from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
import LogoMark from "../SVG/LogoMark"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faCaretDown,
    faBars,
    faCaretUp,
  } from "@fortawesome/free-solid-svg-icons";
import {marginMobile} from "../../utils/styles"

const Header = () => {
    const [products, setProducts] = useState(false);
  return (
    <header>
        <HeadContent>
        <Logo to="/" >
          <LogoMark  />
        </Logo>
        <input id="menu-bar" type="checkbox" />

        <label htmlFor="menu-bar" className="checkbtn">
          <FontAwesomeIcon icon={faBars} className="socials" />
        </label>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/terms">About</Link>
            </li>
            <li onClick={() => setProducts(!products)}>
              <a href="#!">
                Products{" "}
                <FontAwesomeIcon
                  icon={products ? faCaretUp : faCaretDown}
                  style={{ paddingLeft: "3px", paddingTop: "3px" }}
                />
              </a>
              <ul className={products ? "navbar-dropdown" : "navbar-none"}>
                <li className="dropdown-list">
                  <Link to="/individual">Individual</Link>
                </li>
                <li className="dropdown-list">
                  <Link to="business-home">Business</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <a href="#!">Help</a>
            </li>
            <li>
              <a href="#!">Login</a>
            </li>
            <li>
              <Link to="/account" id="register">
                Create Account
              </Link>
            </li>
          </ul>
        </nav>
        </HeadContent>
    </header>
  )
}

const Logo = styled(Link)`
  font-size: 2rem;
  color: #273b4a;
  text-decoration: none;
`

const Head = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  padding: 1rem 4%;
  z-index: 1000;
`
const HeadContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 ${marginMobile};
`

export default Header