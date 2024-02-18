import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Paper from "@mui/material/Paper";

const pages = [
  { label: "Home", path: "/" },
  { label: "About us", path: "/about" },
  { label: "Join@Expert", path: "/register" },
  { label: "SignUp", path: "/signup" },
  { label: "Login", path: "/login" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Paper elevation={3}>
        <AppBar position="static" sx={{ background: "white",borderRadius: "20px" }}>
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              sx={{
                justifyContent: "space-between",
                color: "black", // Set text color to black
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                }}
              >
                
                <div
                  sx={{
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    textDecoration: "none",
                  }}
                >
                  Gharaana
                </div>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                }}
              >
                {pages.map((page) => (
                  <NavLink
                    key={page.label}
                    to={page.path}
                    style={{
                      textDecoration: "none",
                      marginRight: "20px", // Add more space if needed
                    }}
                  >
                    <Button
                      sx={{ color: "black" }} // Set text color to black
                    >
                      {page.label}
                    </Button>
                  </NavLink>
                ))}
              </Box>

              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <NavLink
                      key={page.label}
                      to={page.path}
                      style={{
                        textDecoration: "none",
                        paddingRight: "20px", // Add more space if needed
                      }}
                    >
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.label}</Typography>
                      </MenuItem>
                    </NavLink>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Paper>
    </>
  );
};

export default Navbar;
