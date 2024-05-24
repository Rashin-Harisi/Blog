import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        component="p"
        variant="p"
        bgcolor="#f7f7f7"
        color="primary"
        padding="10px"
        textAlign="center"
        mt={10}
      >
        Blogs used GraphQl | Rashin A.Harisi
      </Typography>
    </Container>
  );
};

export default Footer;
