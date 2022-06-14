import {useState} from 'react'
import {Link} from "react-router-dom"
import {Image} from "@chakra-ui/react"
import LogoMark from "../SVG/LogoMark"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faCaretDown,
    faBars,
    faCaretUp,
  } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [products, setProducts] = useState(false);
  return (
    <header>
        <Link to="/" className="logos">
          <LogoMark  />
        </Link>
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
    </header>
  )
}

export default Header