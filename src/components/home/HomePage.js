import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Authors from "../author/Authors";
import Blogs from "../blog/Blogs";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} padding={3}>
        <Grid item xs={12} md={3} mt={4}>
          <Link to="/authors" style={{ textDecoration: "none" }}>
            <Typography
              component="h3"
              variant="h5"
              mb={3}
              fontWeight={800}
              style={{  color: "black" }}
            >
              Authors
            </Typography>
          </Link>
          <Authors />
        </Grid>
        <Grid item xs={12} md={9} mt={4}>
          <Link to="/blogs" style={{ textDecoration: "none" }}>
            <Typography
              component="h3"
              variant="h5"
              mb={3}
              fontWeight={800}
              style={{ color: "black" }}
            >
              Blogs
            </Typography>
          </Link>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
