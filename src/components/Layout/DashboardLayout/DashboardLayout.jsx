import React from "react";
import { Outlet } from "react-router-dom";
import { DashBoardContainer, ContentContainer } from "./dashboardLayout.styles";
import { SideBar } from "../SideBar/sideBar";

export const DashboardLayout = () => {
  return (
    <DashBoardContainer>
      <SideBar />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </DashBoardContainer>
  );
};
