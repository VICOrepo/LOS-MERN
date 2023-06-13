import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
// import cover from "/home/viraljain/Documents/Loan-App-Form MERN/loanappmern/src/image/cover.jpg";

import logo from "../image/logo-original.png";
import sidesymbol from "../image/sidesymbol.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
    <Grid item xs={12} sm={12} md={12} >
    <AppBar position="static" color="transparent">
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              margin: "10px",
              height: "5px",
            }}
          >
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              // noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "secondary",

                textDecoration: "none",
                
              }}
            >
              <img src={logo} alt="logo" />
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "secondary",
                textDecoration: "none",
                height: "200",
              }}
            >
              <Button
                component={Link}
                to={"/"}
                sx={{
                  mr: 2,
                  marginLeft: "50px",
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  placeContent: "center",
                }}
                variant="text"
                size="large"
                color="success"
                fullWidth
              >
                Home
              </Button>
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "secondary",
                textDecoration: "none",
                height: "200",
              }}
            >
              <Button
                component={Link}
                to={"form"}
                variant="text"
                size="large"
                sx={{
                  mr: 2,
                  marginLeft: "20px",
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  placeContent: "center",
                }}
                color="success"
                fullWidth
              >
                Loan Application Form
              </Button>
            </Typography>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "secondary",
                textDecoration: "none",
                height: "200",
              }}
            >
              <Button
                component={Link}
                to={"user"}
                variant="text"
                size="large"
                color="success"
                sx={{
                  marginLeft: "20px",
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  placeContent: "center",
                }}
                fullWidth
              >
                User Details
              </Button>
            </Typography>

            <Box sx={{ flexGrow: 4 }}>
              <Tooltip >
                <Avatar   sx={{marginLeft: "180px" }} sizes="large" alt="Sigma" src={sidesymbol} />
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Grid>
      

    
    </>
  );
};

export default Header;
