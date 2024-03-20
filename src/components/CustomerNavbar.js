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
      <AppBar position="static" sx={{ background: "white", borderRadius: "20px" }}>
        <Toolbar>
          <AdbIcon sx={{ display: "none", md: "flex", mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
           
          </Box>
          <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    textDecoration: "none",
                    flexGrow: 1,
                    color:"black"
                  }}
                >
                  Gharaana
                </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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

          <Box sx={{ flexGrow: 0 }}>
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
    </>
  );
};

export default CustomerNavbar;
