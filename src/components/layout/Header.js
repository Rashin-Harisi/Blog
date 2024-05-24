import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BookIcon from "@mui/icons-material/Book";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h5 " component="h1" fontWeight="bold" flex={1}>
            Blogs
          </Typography>
          <Link to="/" style={{color: "white"}}>
            <BookIcon />
          </Link>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
