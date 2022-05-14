import React from "react";
import "./home.css";
import Logomark from "../assets/Logomark.svg";
import { Text, Image } from "@chakra-ui/react";
function Home() {
  return (
    <header>
      <a href="#" className="logos">
        <Image src={Logomark} alt="logo" />
      </a>
      <input id="menu-bar" type="checkbox" />

      <label for="menu-bar" class="checkbtn">
        <font-awesome-icon
          class="socials"
          // :icon="{ prefix: 'fas', iconName: 'bars' }"
        />
      </label>
      <nav className="navcheck">
        <a href="#features">About</a>
        <a href="#latest">Products</a>
        <a href="#review">Pricing</a>
        <a href="#contact">Help</a>
        <a href="#contact">Blog</a>
        <a id="login" href="#login">
          Log in
        </a>
        <a id="register" href="#register">
          Create Account
        </a>
      </nav>
    </header>
  );
}

export default Home;
