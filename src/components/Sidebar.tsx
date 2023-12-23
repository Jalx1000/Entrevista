import {
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  SettingsOutlined,
} from "@mui/icons-material"
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material"
import React, { ReactNode, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import FlexBetween from "./FlexBetween"
import profileImage from "../assets/profile.jpeg"

interface DashboardNavItem {
  text: string
  url?: string
  icon: ReactNode
}
interface DashboardProps {
  user?: string
  drawerWidth: string
  isSidebarOpen: any
  setIsSidebarOpen: any
  isNonMobile?: boolean
}

const navItems: DashboardNavItem[] = [
  { text: "Solicitud de tarjetas", url: "", icon: <HomeOutlined /> },
  { text: "Tarjetas solicitadas", url: "solicitadas", icon: <HomeOutlined /> },
  { text: "Tarjetas aprobadas", url: "aprobadas", icon: <HomeOutlined /> },
]

function Sidebar({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}: DashboardProps) {
  const { pathname } = useLocation()
  const [active, setActive] = useState("")
  const navigate = useNavigate()
  const theme = useTheme()

  useEffect(() => {
    setActive(pathname.substring(1))
  }, [pathname])

  return (
    <Box>
      <Drawer
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        variant="persistent"
        anchor="left"
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            color: theme.palette.secondary[200],
            backgroundColor: theme.palette.background.alt,
            boxSixing: "border-box",
            borderWidth: isNonMobile ? 0 : "2px",
            width: drawerWidth,
          },
        }}
      >
        <Box width="100%">
          <Box m="1.5rem 2rem 2rem 3rem">
            <FlexBetween color={theme.palette.secondary.main}>
              <Box display="flex" alignItems="center" gap="0.5rem">
                <Typography variant="h4" fontWeight="bold">
                  Banco Credit Suisse
                </Typography>
              </Box>
              {!isNonMobile && (
                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <ChevronLeft />
                </IconButton>
              )}
            </FlexBetween>
          </Box>

          <List>
            {navItems.map(({ text, url, icon }) => {
              if (!icon) {
                return (
                  <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                    {text}
                  </Typography>
                )
              }
              const lcText = url?.toLowerCase()

              return (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate(`/${lcText}`)
                      setActive(lcText)
                    }}
                    sx={{
                      backgroundColor:
                        active === lcText
                          ? theme.palette.secondary[300]
                          : "transparent",
                      color:
                        active === lcText
                          ? theme.palette.primary[600]
                          : theme.palette.secondary[100],
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        ml: "2rem",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[200],
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    {active === lcText && (
                      <ChevronRightOutlined sx={{ ml: "auto" }} />
                    )}
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        </Box>

        <Box position="absolute" bottom="1rem">
          <Divider />
          <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
            <Box
              component="img"
              alt="profile"
              src={profileImage}
              height="40px"
              width="40px"
              borderRadius="50%"
              sx={{ objectFit: "cover" }}
            />
            <Box textAlign="left">
              <Typography
                fontWeight="bold"
                fontSize="0.9rem"
                sx={{ color: theme.palette.secondary[100] }}
              >
                Javier
              </Typography>
              <Typography
                fontSize="0.8rem"
                sx={{ color: theme.palette.secondary[200] }}
              >
                Desarrollador
              </Typography>
            </Box>
            <SettingsOutlined
              sx={{
                color: theme.palette.secondary[300],
                fontSize: "25px ",
              }}
            />
          </FlexBetween>
        </Box>
      </Drawer>
    </Box>
  )
}

export default Sidebar
