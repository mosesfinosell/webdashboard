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
    faAngleDown,
    faUniversity,
    faUser
  } from "@fortawesome/free-solid-svg-icons";
import {marginMobile, headerHeight, headerHeightMobile, PrimaryButton, margin } from "../../Styles"

const Header = () => {
    
  return (
    <Head>
        <HeadContent>
        <Logo to="/" >
          <LogoMark  />
        </Logo>
        <input id="menu-bar" type="checkbox" />

        <Mobile>
            <PrimaryButton>
                <Link to="/account">
                Create Account
              </Link>
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
            <Products >
              <a>
                Products{" "}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  style={{ paddingLeft: "3px", paddingTop: "3px" }}
                />
              </a>
              <div className="navbar-dropdown">
                <Link to="/individual">
                  <DropDownItem>
                      <div className="icon">
                        <FontAwesomeIcon
                          icon={faUser}
                        />
                      </div>
                      <p>Individual</p>
                  </DropDownItem>
                </Link>
                <div className="vl"></div>
                  <Link to="/business-home">
                    <DropDownItem >
                      <div className="icon">
                        <FontAwesomeIcon
                          icon={faUniversity}
                        />
                      </div>
                      <p>Business</p>
                    </DropDownItem>
                  </Link>
              </div>
            </Products>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
          <Account>
            <Link to="">Log in</Link>
            <PrimaryButton>
              <Link to="/account">
                Create Account
              </Link>
            </PrimaryButton>
          </Account>
        </NavBar>
        </HeadContent>
    </Head>
  )
}

const Logo = styled(Link)`
  font-size: 2rem;
  color: #273b4a;
  text-decoration: none;
  flex-grow: 1;
`
const NavBar = styled.nav`
  flex-grow: 2;
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
  height: 90vh;
  ul{
    justify-content: space-evenly;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
  }

  @media only screen and (min-width: 768px){
    position: static;
    transform: scaleY(1);
    flex-direction: row;
    opacity: 1;
    display: flex;
    justify-content: space-between;
    border: none;
    height: initial;
    ul{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: row;
    }
  }
`

const HeadContent = styled.div`
  max-width: ${1512*0.063}rem;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 ${marginMobile};
  input:checked ~ ${NavBar} {
    transform: scaleY(1);
    opacity: 1;
  }
  @media only screen and (min-width: 768px){
    
    margin: 0 ${margin};
  }
  @media only screen and (min-width: 1800px){
    margin: 0 auto;
  }
`

const Head = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 1000;
  height: ${65 * 0.063}rem;
  font-size: ${0.063*18}rem;
  line-height: ${0.063*15.62}rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  ul{
    list-style: none;
  }
  @media screen only and (min-width: 768px){
    height: ${95 * 0.063}rem;
    line-height: ${22*0.063}rem;
    font-size: ${0.063*22}rem;
  }
`

const Mobile = styled.div`
  display: flex;
  align-items: center;
  ${PrimaryButton} {
    margin-right: ${0.063*25}rem;
  }
  @media only screen and (min-width: 768px){
    display: none;
  }
`
const Pages = styled.ul`

`
const Account = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  ${PrimaryButton} {
    display: none;
    margin-left: ${0.063*25}rem;
  }

  @media only screen and (min-width: 768px){
    ${PrimaryButton} {
      display: block;

    }
  }
`

const Products = styled.li`
  position: relative;
  .vl{
    /* border-left: 0.2rem solid #555E66; */
    height: ${44*0.063}rem;
    background: #F5F5F5;
    width: ${0.063*2}rem;
    border-radius: 4rem;
    margin: 0 ${30*0.063}rem;
  }
  .navbar-dropdown{
    display: none;
    align-items: center;
    justify-content: space-evenly;
    padding: ${10*0.063}rem ${22*0.063}rem;
    position: static;
    top: 100%; 
    
    background: #ffffff;
    z-index: 1;
    border-radius:  ${0.063*20}rem;
  }
  &:hover .navbar-dropdown, &:focus .navbar-dropdown{
    display: flex;
  }
  @media only screen and (min-width: 768px){
    .navbar-dropdown{
      position: absolute;
      left: -160%;
    }
    
  }
`
const DropDownItem = styled.div`
  display: flex;
  align-items: center;
  padding-right: ${18*0.063}rem;
  &:hover{
    background: #F5F5F5;
    border-radius: ${10*0.063}rem;
  }
  .icon{
    background: #F5F5F5;
    border-radius: 100%;
    width: ${0.063*50}rem;
    height ${0.063*50}rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #555E66;
    margin-right: ${0.063*10}rem;
  }
`

export default Header