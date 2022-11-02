import React from "react";
import { Dashboard, Logout } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Stack, Typography } from "@mui/material";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";

import colors from "../../assets/styles/colors";

const Sidebar = () => {
  return (
    <Box
      position="fixed"
      sx={{
        display: {
          xs: "none",
          sm: "block",
          background: colors.primary,
          color: colors.white,
          height: "100vh",
          width: "20vw",
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Stack
            direction="row"
            justifyContent="center"
            textAlign="center"
            sx={{ mt: 5, mb: 4 }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: colors.white }}
            >
              Ticketing System
            </Typography>
          </Stack>
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/dashboard">
                <ListItemIcon sx={{ display: { color: colors.white } }}>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/buses">
                <ListItemIcon sx={{ display: { color: colors.white } }}>
                  <DirectionsBusFilledIcon />
                </ListItemIcon>
                <ListItemText primary="Bus" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon sx={{ display: { color: colors.white } }}>
                  {/* <Medication /> */}
                </ListItemIcon>
                <ListItemText primary="Item" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon sx={{ display: { color: colors.white } }}>
                  {/* <ShoppingBag /> */}
                </ListItemIcon>
                <ListItemText primary="Item" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon sx={{ display: { color: colors.white } }}>
                  {/* <Vaccines /> */}
                </ListItemIcon>
                <ListItemText primary="Item" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon sx={{ display: { color: colors.white } }}>
                  {/* <Payment /> */}
                </ListItemIcon>
                <ListItemText primary="Item" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Box sx={{ bottom: 0 }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon sx={{ display: { color: colors.white } }}>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
