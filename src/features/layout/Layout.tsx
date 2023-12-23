import { Box } from "@mui/material"
import React from "react"
import NavBar from "./../../components/NavBar"
import Sidebar from "../../components/Sidebar"

const Layout = () => {
  return (
    <Box>
      <Box>
        <Sidebar />
      </Box>
      <Box>
        <NavBar />
      </Box>
    </Box>
  )
}

export default Layout
