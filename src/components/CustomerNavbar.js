import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";

const CustomerNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ background: "white", borderBottom: "none" }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            color: "black", // Set text color to black
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
                flexGrow: 1,
                color: "black",
              }}
            >
              Gharaana
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Button sx={{ my: 2, color: "black" }} component={NavLink} to="/">
              Home
            </Button>
            <Button sx={{ my: 2, color: "black" }} component={NavLink} to="/offers">
              Offers
            </Button>
            <Button sx={{ my: 2, color: "black" }} component={NavLink} to="/book">
              Book Experts
            </Button>
            <Button sx={{ my: 2, color: "black" }} component={NavLink} to="/premium">
              Premium
            </Button>
          </Box>

          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="/static/images/avatar.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleCloseMenu} component={NavLink} to="/myorder">
                My Orders
              </MenuItem>
              <MenuItem onClick={handleCloseMenu} component={NavLink} to="/profile">
                Profile
              </MenuItem>
              <MenuItem onClick={handleCloseMenu} component={NavLink} to="/logout">
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: "64px" }}> {/* Adjust margin top to avoid overlap with navbar */}
        {/* Your component content here */}
      </div>
    </>
  );
};

export default CustomerNavbar;
