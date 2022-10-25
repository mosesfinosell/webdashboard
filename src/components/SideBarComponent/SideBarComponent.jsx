import React from "react";
import { NavLink } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { Nav } from "./SideBarComponents.styles";

export function SideBarComponent({ link, label, icon }) {
  return (
    <Nav
      to={link}
      className={({ isActive }) => (isActive ? "active" : undefined)}
    >
      <span className="icon">{icon}</span>
      <p cursor="pointer">{label}</p>
    </Nav>
  );
}
