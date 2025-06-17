import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/SideBar";
import { Box } from "@mui/material";

const DashboardLayout = () => {
  return (
   <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
  {/* Fixed Height Header */}
  <Header />

  {/* Body Section: Sidebar + Main */}
  <Box sx={{ display: "flex", flex: 1 }}>
    <Sidebar />

    <Box
      component="main"
      sx={{
        flex: 1,
        padding: 2,
        paddingTop: 4, // ✅ adds spacing below header
        backgroundColor: "#f5f6f7",
        overflowY: "auto",
      }}
    >
      <Outlet />
    </Box>
  </Box>
</Box>

  );
};

export default DashboardLayout;
